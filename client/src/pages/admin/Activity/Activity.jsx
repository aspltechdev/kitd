import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import {
  Plus,
  Search,
  Pencil,
  Trash2,
  CheckCircle,
  XCircle,
} from "lucide-react";

import {
  getAllActivities,
  deleteActivity,
  toggleActivityStatus,
} from "../../../api/activity.api";

const Activity = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchActivities = async () => {
    try {
      setLoading(true);

      const res = await getAllActivities({
        search,
      });

      const activityData =
        res.data?.data?.activities ||
        res.data?.data ||
        res.data?.activities ||
        [];

      setActivities(Array.isArray(activityData) ? activityData : []);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to fetch activities."
      );

      setActivities([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, [search]);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this activity?")) return;

    try {
      await deleteActivity(id);

      toast.success("Activity deleted successfully.");

      fetchActivities();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to delete activity."
      );
    }
  };

  const handleStatus = async (id) => {
    try {
      await toggleActivityStatus(id);

      toast.success("Status updated.");

      fetchActivities();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to update status."
      );
    }
  };

  return (
    <div className="p-6">

      {/* Header */}

      <div className="flex justify-between items-center mb-6">

        <div>
          <h1 className="text-2xl font-bold">
            Activity Management
          </h1>

          <p className="text-gray-500">
            Manage website activities and events.
          </p>
        </div>

        <Link
          to="/admin/activity/create"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus size={18} />
          Add Activity
        </Link>

      </div>

      {/* Search */}

      <div className="relative mb-6">

        <Search
          size={18}
          className="absolute left-3 top-3 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search activity..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg pl-10 pr-4 py-2 w-full"
        />

      </div>

      {/* Table */}

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="p-4 text-left">
                Image
              </th>

              <th className="text-left">
                Title
              </th>

              <th className="text-left">
                Date
              </th>

              <th className="text-left">
                Location
              </th>

              <th className="text-left">
                Order
              </th>

              <th className="text-left">
                Status
              </th>

              <th className="text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {loading ? (

              <tr>
                <td colSpan={7} className="text-center p-8">
                  Loading...
                </td>
              </tr>

            ) : activities.length === 0 ? (

              <tr>
                <td
                  colSpan={7}
                  className="text-center p-8 text-gray-500"
                >
                  No activities found.
                </td>
              </tr>

            ) : (

              activities.map((activity) => (

                <tr
                  key={activity.id}
                  className="border-t"
                >

                  <td className="p-4">

                    <img
                      src={`${import.meta.env.VITE_API_BASE_URL.replace(
                        "/api",
                        ""
                      )}/uploads/activities/${activity.image}`}
                      alt={activity.title}
                      className="w-20 h-14 object-cover rounded-lg"
                    />

                  </td>

                  <td>{activity.title}</td>

                  <td>
                    {activity.date
                      ? new Date(activity.date).toLocaleDateString()
                      : "-"}
                  </td>

                  <td>{activity.location || "-"}</td>

                  <td>{activity.displayOrder}</td>

                  <td>

                    <button
                      onClick={() =>
                        handleStatus(activity.id)
                      }
                      className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
                        activity.isActive
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {activity.isActive ? (
                        <>
                          <CheckCircle size={15} />
                          Active
                        </>
                      ) : (
                        <>
                          <XCircle size={15} />
                          Inactive
                        </>
                      )}
                    </button>

                  </td>

                  <td>

                    <div className="flex justify-center gap-4">

                      <Link
                        to={`/admin/activity/edit/${activity.id}`}
                      >
                        <Pencil
                          size={18}
                          className="text-blue-600"
                        />
                      </Link>

                      <button
                        onClick={() =>
                          handleDelete(activity.id)
                        }
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

export default Activity;