// src/pages/admin/membership-enquiry/MembershipEnquiries.jsx

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import {
  Search,
  Eye,
  Trash2,
  CheckCircle,
} from "lucide-react";

import {
  getAllMembershipEnquiries,
  deleteMembershipEnquiry,
  updateMembershipEnquiryStatus,
  approveMembershipEnquiry,
} from "../../../api/membershipEnquiry.api";

const MembershipEnquiries = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchEnquiries = async () => {
    try {
      setLoading(true);

      const res = await getAllMembershipEnquiries({
        search,
      });

      const data =
        res.data?.data?.membershipEnquiries ||
        res.data?.data ||
        res.data?.membershipEnquiries ||
        [];

      setEnquiries(Array.isArray(data) ? data : []);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to fetch membership enquiries."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, [search]);

  const handleStatus = async (id, status) => {
    try {
      await updateMembershipEnquiryStatus(id, {
        status,
      });

      toast.success("Status updated.");

      fetchEnquiries();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to update status."
      );
    }
  };

  const handleApprove = async (id) => {
    if (
      !window.confirm(
        "Approve this membership application?"
      )
    )
      return;

    try {
      await approveMembershipEnquiry(id);

      toast.success(
        "Membership approved successfully."
      );

      fetchEnquiries();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Approval failed."
      );
    }
  };

  const handleDelete = async (id) => {
    if (
      !window.confirm(
        "Delete this membership enquiry?"
      )
    )
      return;

    try {
      await deleteMembershipEnquiry(id);

      toast.success(
        "Membership enquiry deleted."
      );

      fetchEnquiries();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Delete failed."
      );
    }
  };

  return (
    <div className="p-6">

      {/* Header */}

      <div className="mb-6">
        <h1 className="text-2xl font-bold">
          Membership Enquiries
        </h1>

        <p className="text-gray-500">
          Review and approve membership
          applications.
        </p>
      </div>

      {/* Search */}

      <div className="relative mb-6">

        <Search
          size={18}
          className="absolute left-3 top-3 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search membership enquiries..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full border rounded-lg pl-10 py-2"
        />

      </div>

      {/* Table */}

      <div className="bg-white rounded-xl shadow overflow-x-auto">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>
              <th className="p-4 text-left">
                Photo
              </th>

              <th>Name</th>

              <th>Membership</th>

              <th>Email</th>

              <th>Mobile</th>

              <th>Status</th>

              <th className="text-center">
                Actions
              </th>
            </tr>

          </thead>

          <tbody>


                        {loading ? (
              <tr>
                <td
                  colSpan={7}
                  className="text-center p-8"
                >
                  Loading...
                </td>
              </tr>
            ) : enquiries.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="text-center p-8"
                >
                  No Membership Enquiries Found
                </td>
              </tr>
            ) : (
              enquiries.map((item) => (
                <tr
                  key={item.id}
                  className="border-t"
                >
                  {/* Photo */}

                  <td className="p-4">
                    {item.photo ? (
                      <img
                        src={`${import.meta.env.VITE_API_BASE_URL.replace(
                          "/api",
                          ""
                        )}/uploads/membership/${item.photo}`}
                        alt={item.fullName}
                        className="w-14 h-14 rounded-full object-cover border"
                      />
                    ) : (
                      <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-xs">
                        N/A
                      </div>
                    )}
                  </td>

                  {/* Name */}

                  <td className="font-medium">
                    {item.fullName}
                  </td>

                  {/* Membership */}

                  <td>
                    {item.membershipType || "-"}
                  </td>

                  {/* Email */}

                  <td>{item.email}</td>

                  {/* Mobile */}

                  <td>{item.mobile}</td>

                  {/* Status */}

                  <td>
                    <select
                      value={item.status}
                      onChange={(e) =>
                        handleStatus(
                          item.id,
                          e.target.value
                        )
                      }
                      className="border rounded px-2 py-1"
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
                  </td>

                  {/* Actions */}

                  <td>
                    <div className="flex items-center justify-center gap-3">

                      {/* View */}

                      <Link
                        to={`/admin/membership-enquiries/view/${item.id}`}
                        title="View"
                      >
                        <Eye
                          size={18}
                          className="text-blue-600"
                        />
                      </Link>

                      {/* Approve */}

                      {item.status !==
                        "APPROVED" && (
                        <button
                          onClick={() =>
                            handleApprove(
                              item.id
                            )
                          }
                          title="Approve"
                        >
                          <CheckCircle
                            size={18}
                            className="text-green-600"
                          />
                        </button>
                      )}

                      {/* Delete */}

                      <button
                        onClick={() =>
                          handleDelete(item.id)
                        }
                        title="Delete"
                      >
                        <Trash2
                          size={18}
                          className="text-red-600"
                        />
                      </button>

                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MembershipEnquiries;