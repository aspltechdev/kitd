import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import TestimonialForm from "./TestimonialForm";
import { createTestimonial } from "../../../api/testimonial.api";

const AddTestimonial = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

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

      if (data.photo && data.photo.length > 0) {
        formData.append("photo", data.photo[0]);
      }

      await createTestimonial(formData);

      toast.success(
        "Testimonial created successfully."
      );

      navigate("/admin/testimonials");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to create testimonial."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">
          Add Testimonial
        </h1>

        <p className="text-gray-500 mt-1">
          Create a new testimonial.
        </p>
      </div>

      <TestimonialForm
        onSubmit={onSubmit}
        loading={loading}
      />
    </div>
  );
};

export default AddTestimonial;