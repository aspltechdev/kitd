import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import GalleryForm from "./GalleryForm";
import { createGallery } from "../../../api/gallery.api";

const AddGallery = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("title", data.title);
      formData.append(
        "description",
        data.description || ""
      );
      formData.append(
        "category",
        data.category || ""
      );
      formData.append(
        "displayOrder",
        data.displayOrder || 1
      );
      formData.append(
        "isActive",
        data.isActive
      );

      if (data.image && data.image.length > 0) {
        formData.append("image", data.image[0]);
      }

      await createGallery(formData);

      toast.success("Gallery item created successfully.");

      navigate("/admin/gallery");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to create gallery item."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">

      <div className="mb-6">
        <h1 className="text-2xl font-bold">
          Add Gallery
        </h1>

        <p className="text-gray-500 mt-1">
          Add a new gallery image to the website.
        </p>
      </div>

      <GalleryForm
        onSubmit={onSubmit}
        loading={loading}
      />

    </div>
  );
};

export default AddGallery;