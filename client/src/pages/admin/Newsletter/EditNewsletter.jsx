import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import NewsletterForm from "./NewsletterForm";
import {
  getSubscriberById,
  updateSubscriber,
} from "../../../api/newsletter.api";

const EditNewsletter = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [initialValues, setInitialValues] = useState(null);

  useEffect(() => {
    fetchSubscriber();
  }, []);

  const fetchSubscriber = async () => {
    try {
      const res = await getSubscriberById(id);

      const subscriber =
        res.data?.data?.subscriber ||
        res.data?.data ||
        res.data;

      setInitialValues(subscriber);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to fetch subscriber."
      );

      navigate("/admin/newsletter");
    }
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      await updateSubscriber(id, {
        name: data.name,
        email: data.email,
        phone: data.phone || "",
        source: data.source || "",
        notes: data.notes || "",
        isActive: data.isActive,
      });

      toast.success("Subscriber updated successfully.");

      navigate("/admin/newsletter");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to update subscriber."
      );
    } finally {
      setLoading(false);
    }
  };

  if (!initialValues) {
    return (
      <div className="p-6 text-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">
          Edit Subscriber
        </h1>

        <p className="text-gray-500 mt-1">
          Update newsletter subscriber details.
        </p>
      </div>

      <NewsletterForm
        initialValues={initialValues}
        onSubmit={onSubmit}
        loading={loading}
      />
    </div>
  );
};

export default EditNewsletter;