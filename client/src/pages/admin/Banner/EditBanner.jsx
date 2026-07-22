import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import BannerForm from "./BannerForm";
import {
  getBannerById,
  updateBanner,
} from "../../../api/banner.api";

const EditBanner = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [banner, setBanner] = useState(null);

  useEffect(() => {
    fetchBanner();
  }, []);

  const fetchBanner = async () => {
    try {
      const res = await getBannerById(id);

      setBanner(res.data.data);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to load banner."
      );

      navigate("/admin/banner");
    }
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("title", data.title);
      formData.append("subtitle", data.subtitle);
      formData.append("description", data.description);

      formData.append("mediaType", data.mediaType);

      // Upload new file only if selected
      if (data.media && data.media.length > 0) {
        formData.append("media", data.media[0]);
      }

      formData.append("buttonText", data.buttonText);
      formData.append("buttonLink", data.buttonLink);
      formData.append("displayOrder", data.displayOrder);
      formData.append("isActive", data.isActive);

      await updateBanner(id, formData);

      toast.success("Hero banner updated successfully.");

      navigate("/admin/banner");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to update banner."
      );
    } finally {
      setLoading(false);
    }
  };

  if (!banner) {
    return (
      <div className="p-6 text-center">
        Loading banner...
      </div>
    );
  }

  return (
    <div className="p-6">

      <div className="mb-6">
        <h1 className="text-2xl font-bold">
          Edit Hero Banner
        </h1>

        <p className="text-gray-500 mt-1">
          Update homepage hero banner details.
        </p>
      </div>

      <BannerForm
        initialValues={banner}
        onSubmit={onSubmit}
        loading={loading}
      />

    </div>
  );
};

export default EditBanner;