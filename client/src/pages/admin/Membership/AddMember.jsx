import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import MemberForm from "./MemberForm";
import { createMember } from "../../../api/members.api";

const AddMember = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("memberId", data.memberId);
      formData.append("fullName", data.fullName);
      formData.append("email", data.email);
      formData.append("mobile", data.mobile);
      formData.append("gender", data.gender || "");
      formData.append(
        "membershipType",
        data.membershipType || ""
      );
      formData.append("city", data.city || "");
      formData.append("state", data.state || "");
      formData.append("country", data.country || "");
      formData.append(
        "joinedDate",
        data.joinedDate || ""
      );
      formData.append(
        "expiryDate",
        data.expiryDate || ""
      );
      formData.append("isActive", data.isActive);

      if (data.photo && data.photo.length > 0) {
        formData.append("photo", data.photo[0]);
      }

      await createMember(formData);

      toast.success("Member created successfully.");

      navigate("/admin/members");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to create member."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">
          Add Member
        </h1>

        <p className="text-gray-500 mt-1">
          Register a new association member.
        </p>
      </div>

      <MemberForm
        onSubmit={onSubmit}
        loading={loading}
      />
    </div>
  );
};

export default AddMember;