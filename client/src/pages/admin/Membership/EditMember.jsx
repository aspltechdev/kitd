import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import MemberForm from "./MemberForm";
import {
  getMemberById,
  updateMember,
} from "../../../api/members.api";

const EditMember = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [initialValues, setInitialValues] = useState(null);

  useEffect(() => {
    fetchMember();
  }, []);

  const fetchMember = async () => {
    try {
      const res = await getMemberById(id);

      const member =
        res.data?.data?.member ||
        res.data?.data ||
        res.data;

      setInitialValues(member);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to fetch member."
      );

      navigate("/admin/members");
    }
  };

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

      // Upload new photo only if selected
      if (data.photo && data.photo.length > 0) {
        formData.append("photo", data.photo[0]);
      }

      await updateMember(id, formData);

      toast.success("Member updated successfully.");

      navigate("/admin/members");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to update member."
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
          Edit Member
        </h1>

        <p className="text-gray-500 mt-1">
          Update member details.
        </p>
      </div>

      <MemberForm
        initialValues={initialValues}
        onSubmit={onSubmit}
        loading={loading}
      />
    </div>
  );
};

export default EditMember;