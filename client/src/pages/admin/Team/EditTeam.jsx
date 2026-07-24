import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import TeamForm from "./TeamForm";
import {
  getTeamById,
  updateTeam,
} from "../../../api/team.api";

const EditTeam = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [initialValues, setInitialValues] = useState(null);

  useEffect(() => {
    fetchTeam();
  }, []);

  const fetchTeam = async () => {
    try {
      const res = await getTeamById(id);

      setInitialValues(res.data.data.team);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to fetch team member."
      );

      navigate("/admin/team");
    }
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("designation", data.designation);
      formData.append("bio", data.bio);

      formData.append("category", data.category);

      formData.append("email", data.email);
      formData.append("phone", data.phone);

      formData.append("linkedin", data.linkedin);
      formData.append("facebook", data.facebook);
      formData.append("instagram", data.instagram);
      formData.append("website", data.website);

      formData.append("displayOrder", data.displayOrder);
      formData.append("isActive", data.isActive);

      // Upload new image only if selected
      if (data.image && data.image.length > 0) {
        formData.append("image", data.image[0]);
      }

      await updateTeam(id, formData);

      toast.success("Team member updated successfully.");

      navigate("/admin/team");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to update team member."
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
          Edit Team Member
        </h1>

        <p className="text-gray-500 mt-1">
          Update team member information.
        </p>
      </div>

      <TeamForm
        initialValues={initialValues}
        onSubmit={onSubmit}
        loading={loading}
      />

    </div>
  );
};

export default EditTeam;