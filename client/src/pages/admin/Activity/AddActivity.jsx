import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import ActivityForm from "./ActivityForm";
import { createActivity } from "../../../api/activity.api";

const AddActivity = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("title", data.title);
      formData.append(
        "shortDescription",
        data.shortDescription || ""
      );
      formData.append(
        "description",
        data.description || ""
      );
      formData.append("date", data.date || "");
      formData.append(
        "location",
        data.location || ""
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

      await createActivity(formData);

      toast.success("Activity created successfully.");

      navigate("/admin/activity");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to create activity."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">

      <div className="mb-6">
        <h1 className="text-2xl font-bold">
          Add Activity
        </h1>

        <p className="text-gray-500 mt-1">
          Create a new activity or event for the website.
        </p>
      </div>

      <ActivityForm
        onSubmit={onSubmit}
        loading={loading}
      />

    </div>
  );
};

export default AddActivity;