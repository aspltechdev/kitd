// src/pages/admin/volunteer-registration/VolunteerRegistrations.jsx

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import {
  Search,
  Eye,
  Trash2,
} from "lucide-react";

import {
  getAllVolunteers,
  updateVolunteerStatus,
  deleteVolunteer,
} from "../../../api/volunteer.api";

const VolunteerRegistrations = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchVolunteers = async () => {
    try {
      setLoading(true);

      const res = await getAllVolunteers({
        search,
      });

      const data =
        res.data?.data?.volunteers ||
        res.data?.data ||
        res.data?.volunteers ||
        [];

      setVolunteers(Array.isArray(data) ? data : []);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to fetch volunteer registrations."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVolunteers();
  }, [search]);

  const handleStatus = async (id, status) => {
    try {
      await updateVolunteerStatus(id, {
        status,
      });

      toast.success("Status updated successfully.");

      fetchVolunteers();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Unable to update status."
      );
    }
  };

  const handleDelete = async (id) => {
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

      fetchVolunteers();
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
          Volunteer Registrations
        </h1>

        <p className="text-gray-500 mt-1">
          View and manage volunteer applications.
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
          placeholder="Search volunteers..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full border rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

      {/* Table */}

      <div className="bg-white rounded-xl shadow overflow-x-auto">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="p-4 text-left">
                Name
              </th>

              <th>Email</th>

              <th>Mobile</th>

              <th>Interest</th>

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
                  colSpan={6}
                  className="text-center p-8"
                >
                  Loading...
                </td>
              </tr>
            ) : volunteers.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="text-center p-8"
                >
                  No Volunteer Registrations Found
                </td>
              </tr>
            ) : (
              volunteers.map((item) => (
                <tr
                  key={item.id}
                  className="border-t hover:bg-gray-50"
                >
                  {/* Name */}

                  <td className="p-4 font-medium">
                    {item.fullName}
                  </td>

                  {/* Email */}

                  <td>{item.email}</td>

                  {/* Mobile */}

                  <td>{item.mobile || "-"}</td>

                  {/* Interest */}

                  <td>{item.interests || "-"}</td>

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
                  </td>

                  {/* Actions */}

                  <td>
                    <div className="flex items-center justify-center gap-3">

                      {/* View */}

                      <Link
                        to={`/admin/volunteer-registrations/view/${item.id}`}
                        title="View"
                      >
                        <Eye
                          size={18}
                          className="text-blue-600 hover:text-blue-800"
                        />
                      </Link>

                      {/* Delete */}

                      <button
                        onClick={() =>
                          handleDelete(item.id)
                        }
                        title="Delete"
                      >
                        <Trash2
                          size={18}
                          className="text-red-600 hover:text-red-800"
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

export default VolunteerRegistrations;