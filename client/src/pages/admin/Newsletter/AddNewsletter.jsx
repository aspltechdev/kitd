import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import NewsletterForm from "./NewsletterForm";
import { createSubscriber } from "../../../api/newsletter.api";

const AddNewsletter = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      await createSubscriber({
        name: data.name,
        email: data.email,
        phone: data.phone || "",
        source: data.source || "",
        notes: data.notes || "",
        isActive: data.isActive,
      });

      toast.success("Subscriber added successfully.");

      navigate("/admin/newsletter");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to add subscriber."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">
          Add Subscriber
        </h1>

        <p className="text-gray-500 mt-1">
          Add a new newsletter subscriber.
        </p>
      </div>

      <NewsletterForm
        onSubmit={onSubmit}
        loading={loading}
      />
    </div>
  );
};

export default AddNewsletter;