import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import ActivityForm from "./ActivityForm";
import {
  getActivityById,
  updateActivity,
} from "../../../api/activity.api";

const EditActivity = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [initialValues, setInitialValues] = useState(null);

  useEffect(() => {
    fetchActivity();
  }, []);

  const fetchActivity = async () => {
    try {
      const res = await getActivityById(id);

      const activity =
        res.data?.data?.activity ||
        res.data?.data ||
        res.data;

      setInitialValues(activity);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to fetch activity."
      );

      navigate("/admin/activity");
    }
  };

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

      // Upload new image only if selected
      if (data.image && data.image.length > 0) {
        formData.append("image", data.image[0]);
      }

      await updateActivity(id, formData);

      toast.success("Activity updated successfully.");

      navigate("/admin/activity");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to update activity."
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
          Edit Activity
        </h1>

        <p className="text-gray-500 mt-1">
          Update activity details.
        </p>
      </div>

      <ActivityForm
        initialValues={initialValues}
        onSubmit={onSubmit}
        loading={loading}
      />

    </div>
  );
};

export default EditActivity;