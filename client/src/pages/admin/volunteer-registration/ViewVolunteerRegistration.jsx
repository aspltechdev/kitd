// src/pages/admin/volunteer-registration/ViewVolunteerRegistration.jsx

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { ArrowLeft, Trash2 } from "lucide-react";

import {
  getVolunteerById,
  updateVolunteerStatus,
  deleteVolunteer,
} from "../../../api/volunteer.api";

const ViewVolunteerRegistration = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [volunteer, setVolunteer] = useState(null);

  const fetchVolunteer = async () => {
    try {
      setLoading(true);

      const res = await getVolunteerById(id);

      const data =
        res.data?.data?.volunteer ||
        res.data?.data ||
        res.data?.volunteer;

      setVolunteer(data);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to fetch volunteer details."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVolunteer();
  }, [id]);

  const handleStatus = async (status) => {
    try {
      await updateVolunteerStatus(id, {
        status,
      });

      toast.success("Status updated successfully.");

      fetchVolunteer();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Unable to update status."
      );
    }
  };

  const handleDelete = async () => {
    if (
      !window.confirm(
        "Are you sure you want to delete this volunteer registration?"
      )
    )
      return;

    try {
      await deleteVolunteer(id);

      toast.success(
        "Volunteer registration deleted successfully."
      );

      navigate("/admin/volunteer-registrations");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Delete failed."
      );
    }
  };

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  if (!volunteer) {
    return (
      <div className="p-6">
        Volunteer registration not found.
      </div>
    );
  }

  return (
    <div className="p-6">

      {/* Header */}

      <div className="flex justify-between items-center mb-6">

        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-blue-600"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <button
          onClick={handleDelete}
          className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Trash2 size={18} />
          Delete
        </button>

      </div>

      {/* Card */}

      <div className="bg-white rounded-xl shadow p-6">

        <h2 className="text-2xl font-bold mb-6">
          Volunteer Registration Details
        </h2>

        {/* Status */}

        <div className="mb-8">

          <label className="font-semibold block mb-2">
            Status
          </label>

          <select
            value={volunteer.status}
            onChange={(e) =>
              handleStatus(e.target.value)
            }
            className="border rounded-lg px-4 py-2"
          >
            <option value="NEW">NEW</option>
            <option value="UNDER_REVIEW">
              UNDER REVIEW
            </option>
            <option value="CONTACTED">
              CONTACTED
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
            label="Full Name"
            value={volunteer.fullName}
          />

          <Info
            label="Email"
            value={volunteer.email}
          />

          <Info
            label="Mobile"
            value={volunteer.mobile}
          />

          <Info
            label="Occupation"
            value={volunteer.occupation}
          />

          <Info
            label="Organization"
            value={volunteer.organization}
          />

          <Info
            label="City"
            value={volunteer.city}
          />

          <Info
            label="State"
            value={volunteer.state}
          />

          <Info
            label="Country"
            value={volunteer.country}
          />

          <Info
            label="Area of Interest"
            value={volunteer.interests}
          />

          <Info
            label="Experience"
            value={volunteer.experience}
          />

          <Info
            label="Availability"
            value={volunteer.availability}
          />

        </div>

        {/* Message */}

        <div className="mt-8">

          <h3 className="font-semibold mb-2">
            Message
          </h3>

          <div className="border rounded-lg bg-gray-50 p-4">
            {volunteer.message ||
              "No message provided."}
          </div>

        </div>

        {/* Created At */}

        <div className="mt-8">

          <Info
            label="Submitted On"
            value={new Date(
              volunteer.createdAt
            ).toLocaleString()}
          />

        </div>

      </div>

    </div>
  );
};

const Info = ({ label, value }) => (
  <div>
    <p className="text-sm text-gray-500">
      {label}
    </p>

    <p className="font-medium">
      {value || "-"}
    </p>
  </div>
);

export default ViewVolunteerRegistration;