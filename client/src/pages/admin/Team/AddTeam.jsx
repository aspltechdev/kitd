import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import TeamForm from "./TeamForm";
import { createTeam } from "../../../api/team.api";

const AddTeam = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

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

      if (data.image && data.image.length > 0) {
        formData.append("image", data.image[0]);
      }

      await createTeam(formData);

      toast.success("Team member created successfully.");

      navigate("/admin/team");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to create team member."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">

      <div className="mb-6">
        <h1 className="text-2xl font-bold">
          Add Team Member
        </h1>

        <p className="text-gray-500 mt-1">
          Add a new founder, committee member, or teacher.
        </p>
      </div>

      <TeamForm
        onSubmit={onSubmit}
        loading={loading}
      />

    </div>
  );
};

export default AddTeam;