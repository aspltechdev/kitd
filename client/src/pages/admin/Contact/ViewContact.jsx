import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import {
  getContactById,
  updateContactStatus,
} from "../../../api/contact.api";

const ViewContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [statusLoading, setStatusLoading] = useState(false);

  useEffect(() => {
    fetchContact();
  }, []);

  const fetchContact = async () => {
    try {
      setLoading(true);

      const res = await getContactById(id);

      const data =
        res.data?.data?.contact ||
        res.data?.data ||
        res.data;

      setContact(data);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to fetch enquiry."
      );

      navigate("/admin/contact");
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (e) => {
    try {
      setStatusLoading(true);

      const status = e.target.value;

      await updateContactStatus(id, {
        status,
      });

      setContact((prev) => ({
        ...prev,
        status,
      }));

      toast.success("Status updated successfully.");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to update status."
      );
    } finally {
      setStatusLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="p-6 text-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="p-6">

      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">
            Contact Enquiry
          </h1>

          <p className="text-gray-500">
            View enquiry details.
          </p>
        </div>

        <button
          onClick={() => navigate("/admin/contact")}
          className="px-4 py-2 bg-gray-700 text-white rounded-lg"
        >
          Back
        </button>
      </div>

      <div className="bg-white rounded-xl shadow p-6 space-y-6">

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="text-sm text-gray-500">
              Full Name
            </label>

            <p className="font-semibold mt-1">
              {contact.name}
            </p>
          </div>

          <div>
            <label className="text-sm text-gray-500">
              Email
            </label>

            <p className="font-semibold mt-1">
              {contact.email}
            </p>
          </div>

          <div>
            <label className="text-sm text-gray-500">
              Phone
            </label>

            <p className="font-semibold mt-1">
              {contact.phone || "-"}
            </p>
          </div>

          <div>
            <label className="text-sm text-gray-500">
              Inquiry Type
            </label>

            <p className="font-semibold mt-1">
              {contact.inquiryType || "-"}
            </p>
          </div>

          <div>
            <label className="text-sm text-gray-500">
              Subject
            </label>

            <p className="font-semibold mt-1">
              {contact.subject}
            </p>
          </div>

          <div>
            <label className="text-sm text-gray-500">
              Submitted On
            </label>

            <p className="font-semibold mt-1">
              {new Date(
                contact.createdAt
              ).toLocaleString()}
            </p>
          </div>

        </div>

        <div>
          <label className="text-sm text-gray-500">
            Message
          </label>

          <div className="mt-2 p-4 border rounded-lg bg-gray-50 whitespace-pre-wrap">
            {contact.message}
          </div>
        </div>

        <div className="max-w-sm">
          <label className="text-sm text-gray-500">
            Enquiry Status
          </label>

          <select
            value={contact.status || "NEW"}
            onChange={handleStatusChange}
            disabled={statusLoading}
            className="w-full mt-2 border rounded-lg p-3"
          >
            <option value="NEW">
              New
            </option>

            <option value="IN_PROGRESS">
              In Progress
            </option>

            <option value="RESOLVED">
              Resolved
            </option>
          </select>
        </div>

      </div>
    </div>
  );
};

export default ViewContact;