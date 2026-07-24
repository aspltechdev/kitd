import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import TestimonialForm from "./TestimonialForm";
import {
  getTestimonialById,
  updateTestimonial,
} from "../../../api/testimonial.api";

const EditTestimonial = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [initialValues, setInitialValues] = useState(null);

  useEffect(() => {
    fetchTestimonial();
  }, []);

  const fetchTestimonial = async () => {
    try {
      const res = await getTestimonialById(id);

      const testimonial =
        res.data?.data?.testimonial ||
        res.data?.data ||
        res.data;

      setInitialValues(testimonial);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to fetch testimonial."
      );

      navigate("/admin/testimonials");
    }
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("name", data.name);
      formData.append(
        "designation",
        data.designation || ""
      );
      formData.append(
        "company",
        data.company || ""
      );
      formData.append(
        "message",
        data.message || ""
      );
      formData.append(
        "rating",
        data.rating || 5
      );
      formData.append(
        "displayOrder",
        data.displayOrder || 1
      );
      formData.append(
        "featured",
        data.featured
      );
      formData.append(
        "isActive",
        data.isActive
      );

      // Upload new photo only if selected
      if (data.photo && data.photo.length > 0) {
        formData.append("photo", data.photo[0]);
      }

      await updateTestimonial(id, formData);

      toast.success(
        "Testimonial updated successfully."
      );

      navigate("/admin/testimonials");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to update testimonial."
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
          Edit Testimonial
        </h1>

        <p className="text-gray-500 mt-1">
          Update testimonial details.
        </p>
      </div>

      <TestimonialForm
        initialValues={initialValues}
        onSubmit={onSubmit}
        loading={loading}
      />
    </div>
  );
};

export default EditTestimonial;