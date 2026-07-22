import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import BannerForm from "./BannerForm";
import { createBanner } from "../../../api/banner.api";

const AddBanner = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("title", data.title);
      formData.append("subtitle", data.subtitle);
      formData.append("description", data.description);

      formData.append("mediaType", data.mediaType);

      if (data.media && data.media.length > 0) {
        formData.append("media", data.media[0]);
      }

      formData.append("buttonText", data.buttonText);
      formData.append("buttonLink", data.buttonLink);

      formData.append("displayOrder", data.displayOrder);

      formData.append("isActive", data.isActive);

      await createBanner(formData);

      toast.success("Hero banner created successfully.");

      navigate("/admin/banner");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to create banner."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">

      <div className="mb-6">
        <h1 className="text-2xl font-bold">
          Add Hero Banner
        </h1>

        <p className="text-gray-500 mt-1">
          Create a new homepage hero banner.
        </p>
      </div>

      <BannerForm
        loading={loading}
        onSubmit={onSubmit}
      />

    </div>
  );
};

export default AddBanner;