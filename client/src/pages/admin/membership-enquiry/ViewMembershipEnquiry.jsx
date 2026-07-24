// src/pages/admin/membership-enquiry/ViewMembershipEnquiry.jsx

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import {
  ArrowLeft,
  CheckCircle,
  Trash2,
} from "lucide-react";

import {
  getMembershipEnquiryById,
  updateMembershipEnquiryStatus,
  approveMembershipEnquiry,
  deleteMembershipEnquiry,
} from "../../../api/membershipEnquiry.api";

const ViewMembershipEnquiry = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [enquiry, setEnquiry] = useState(null);

  const fetchEnquiry = async () => {
    try {
      setLoading(true);

      const res = await getMembershipEnquiryById(id);

      const data =
        res.data?.data?.membershipEnquiry ||
        res.data?.data ||
        res.data?.membershipEnquiry;

      setEnquiry(data);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to fetch enquiry."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiry();
  }, [id]);

  const handleStatus = async (status) => {
    try {
      await updateMembershipEnquiryStatus(id, {
        status,
      });

      toast.success("Status updated.");

      fetchEnquiry();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Unable to update status."
      );
    }
  };

  const handleApprove = async () => {
    if (
      !window.confirm(
        "Approve this membership application?"
      )
    )
      return;

    try {
      await approveMembershipEnquiry(id);

      toast.success(
        "Member approved successfully."
      );

      fetchEnquiry();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Approval failed."
      );
    }
  };

  const handleDelete = async () => {
    if (
      !window.confirm(
        "Delete this enquiry?"
      )
    )
      return;

    try {
      await deleteMembershipEnquiry(id);

      toast.success("Deleted successfully.");

      navigate("/admin/membership-enquiries");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Delete failed."
      );
    }
  };

  if (loading) {
    return (
      <div className="p-6">
        Loading...
      </div>
    );
  }

  if (!enquiry) {
    return (
      <div className="p-6">
        No Membership Enquiry Found.
      </div>
    );
  }

  return (
    <div className="p-6">

      {/* Header */}

      <div className="flex justify-between items-center mb-6">

        <button
          onClick={() =>
            navigate(-1)
          }
          className="flex items-center gap-2 text-blue-600"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <div className="flex gap-3">

          {enquiry.status !==
            "APPROVED" && (
            <button
              onClick={handleApprove}
              className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <CheckCircle size={18} />
              Approve
            </button>
          )}

          <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <Trash2 size={18} />
            Delete
          </button>

        </div>
      </div>

      {/* Card */}

      <div className="bg-white rounded-xl shadow p-6">

        <div className="flex items-center gap-6 mb-8">

          <img
            src={
              enquiry.photo
                ? `${import.meta.env.VITE_API_BASE_URL.replace(
                    "/api",
                    ""
                  )}/uploads/membership/${enquiry.photo}`
                : "https://placehold.co/140x140"
            }
            alt={enquiry.fullName}
            className="w-36 h-36 rounded-full object-cover border"
          />

          <div>

            <h2 className="text-2xl font-bold">
              {enquiry.fullName}
            </h2>

            <p className="text-gray-500">
              {enquiry.email}
            </p>

            <p className="text-gray-500">
              {enquiry.mobile}
            </p>

          </div>

        </div>

        {/* Status */}

        <div className="mb-8">

          <label className="font-semibold block mb-2">
            Status
          </label>

          <select
            value={enquiry.status}
            onChange={(e) =>
              handleStatus(e.target.value)
            }
            className="border rounded-lg px-4 py-2"
          >
            <option value="NEW">
              NEW
            </option>

            <option value="UNDER_REVIEW">
              UNDER REVIEW
            </option>

            <option value="APPROVED">
              APPROVED
            </option>

            <option value="REJECTED">
              REJECTED
            </option>
          </select>

        </div>

        {/* Details */}

        <div className="grid md:grid-cols-2 gap-6">

          <Info
            label="Gender"
            value={enquiry.gender}
          />

          <Info
            label="Date of Birth"
            value={
              enquiry.dateOfBirth
                ? new Date(
                    enquiry.dateOfBirth
                  ).toLocaleDateString()
                : "-"
            }
          />

          <Info
            label="Occupation"
            value={enquiry.occupation}
          />

          <Info
            label="Membership Type"
            value={
              enquiry.membershipType
            }
          />

          <Info
            label="Dance Style"
            value={enquiry.danceStyle}
          />

          <Info
            label="Experience"
            value={enquiry.experience}
          />

          <Info
            label="Address"
            value={enquiry.address}
          />

          <Info
            label="City"
            value={enquiry.city}
          />

          <Info
            label="State"
            value={enquiry.state}
          />

          <Info
            label="Country"
            value={enquiry.country}
          />

        </div>

        {/* Message */}

        <div className="mt-8">

          <h3 className="font-semibold mb-2">
            Message
          </h3>

          <div className="border rounded-lg p-4 bg-gray-50">
            {enquiry.message ||
              "No message provided."}
          </div>

        </div>

      </div>
    </div>
  );
};

const Info = ({
  label,
  value,
}) => (
  <div>
    <p className="text-sm text-gray-500">
      {label}
    </p>

    <p className="font-medium">
      {value || "-"}
    </p>
  </div>
);

export default ViewMembershipEnquiry;