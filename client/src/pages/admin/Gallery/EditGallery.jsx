import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import GalleryForm from "./GalleryForm";
import {
  getGalleryById,
  updateGallery,
} from "../../../api/gallery.api";

const EditGallery = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [initialValues, setInitialValues] = useState(null);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const res = await getGalleryById(id);

      const gallery =
        res.data?.data?.gallery ||
        res.data?.data ||
        res.data;

      setInitialValues(gallery);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to fetch gallery item."
      );

      navigate("/admin/gallery");
    }
  };

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

      // Upload new image only if selected
      if (data.image && data.image.length > 0) {
        formData.append("image", data.image[0]);
      }

      await updateGallery(id, formData);

      toast.success("Gallery updated successfully.");

      navigate("/admin/gallery");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to update gallery."
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
          Edit Gallery
        </h1>

        <p className="text-gray-500 mt-1">
          Update gallery image details.
        </p>
      </div>

      <GalleryForm
        initialValues={initialValues}
        onSubmit={onSubmit}
        loading={loading}
      />

    </div>
  );
};

export default EditGallery;