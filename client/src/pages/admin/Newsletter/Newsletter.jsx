import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import {
  Plus,
  Search,
  Pencil,
  Trash2,
} from "lucide-react";

import {
  getAllSubscribers,
  deleteSubscriber,
  toggleSubscriberStatus,
} from "../../../api/newsletter.api";

const Newsletter = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchSubscribers = async () => {
    try {
      setLoading(true);

      const res = await getAllSubscribers({
        search,
      });

      const data =
        res.data?.data?.subscribers ||
        res.data?.data ||
        res.data?.subscribers ||
        [];

      setSubscribers(Array.isArray(data) ? data : []);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to fetch subscribers."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscribers();
  }, [search]);

  const handleDelete = async (id) => {
    if (
      !window.confirm(
        "Delete this subscriber?"
      )
    )
      return;

    try {
      await deleteSubscriber(id);

      toast.success(
        "Subscriber deleted."
      );

      fetchSubscribers();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Delete failed."
      );
    }
  };

  const handleStatus = async (id) => {
    try {
      await toggleSubscriberStatus(id);

      toast.success("Status updated.");

      fetchSubscribers();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Status update failed."
      );
    }
  };

  return (
    <div className="p-6">

      <div className="flex justify-between items-center mb-6">

        <div>
          <h1 className="text-2xl font-bold">
            Newsletter
          </h1>

          <p className="text-gray-500">
            Manage newsletter subscribers.
          </p>
        </div>

        <Link
          to="/admin/newsletter/create"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex gap-2"
        >
          <Plus size={18} />
          Add Subscriber
        </Link>

      </div>

      <div className="relative mb-6">

        <Search
          className="absolute left-3 top-3 text-gray-400"
          size={18}
        />

        <input
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="border rounded-lg pl-10 py-2 w-full"
          placeholder="Search subscriber..."
        />

      </div>

      <div className="bg-white rounded-xl shadow overflow-x-auto">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>
              <th className="p-4 text-left">
                Name
              </th>
              <th>Email</th>
              <th>Subscribed On</th>
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
                  colSpan={5}
                  className="text-center p-8"
                >
                  Loading...
                </td>
              </tr>
            ) : subscribers.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="text-center p-8"
                >
                  No Subscribers Found
                </td>
              </tr>
            ) : (
              subscribers.map((item) => (
                <tr
                  key={item.id}
                  className="border-t"
                >
                  <td className="p-4">
                    {item.name}
                  </td>

                  <td>{item.email}</td>

                  <td>
                    {new Date(
                      item.createdAt
                    ).toLocaleDateString()}
                  </td>

                  <td>

                    <button
                      onClick={() =>
                        handleStatus(item.id)
                      }
                      className={`px-3 py-1 rounded-full ${
                        item.isActive
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.isActive
                        ? "Active"
                        : "Inactive"}
                    </button>

                  </td>

                  <td>

                    <div className="flex justify-center gap-4">

                      <Link
                        to={`/admin/newsletter/edit/${item.id}`}
                      >
                        <Pencil
                          className="text-blue-600"
                          size={18}
                        />
                      </Link>

                      <button
                        onClick={() =>
                          handleDelete(item.id)
                        }
                      >
                        <Trash2
                          className="text-red-600"
                          size={18}
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

export default Newsletter;