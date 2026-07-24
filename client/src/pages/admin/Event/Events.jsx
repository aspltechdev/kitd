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
  getAllEvents,
  deleteEvent,
  toggleEventStatus,
} from "../../../api/events.api";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchEvents = async () => {
    try {
      setLoading(true);

      const res = await getAllEvents({ search });

      const data =
        res.data?.data?.events ||
        res.data?.data ||
        res.data?.events ||
        [];

      setEvents(Array.isArray(data) ? data : []);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to fetch events."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [search]);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this event?")) return;

    try {
      await deleteEvent(id);
      toast.success("Event deleted.");
      fetchEvents();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Delete failed."
      );
    }
  };

  const handleStatus = async (id) => {
    try {
      await toggleEventStatus(id);
      toast.success("Status updated.");
      fetchEvents();
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
            Events Management
          </h1>

          <p className="text-gray-500">
            Manage website events.
          </p>
        </div>

        <Link
          to="/admin/events/create"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex gap-2"
        >
          <Plus size={18} />
          Add Event
        </Link>

      </div>

      <div className="relative mb-6">
        <Search
          className="absolute left-3 top-3 text-gray-400"
          size={18}
        />

        <input
          className="border rounded-lg pl-10 py-2 w-full"
          placeholder="Search Events..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
      </div>

      <div className="bg-white rounded-xl shadow overflow-x-auto">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="p-4 text-left">
                Banner
              </th>

              <th className="text-left">
                Event
              </th>

              <th className="text-left">
                Type
              </th>

              <th className="text-left">
                Date
              </th>

              <th className="text-left">
                Venue
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
                <td
                  colSpan={7}
                  className="text-center p-8"
                >
                  Loading...
                </td>
              </tr>
            ) : events.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="text-center p-8"
                >
                  No Events Found
                </td>
              </tr>
            ) : (
              events.map((event) => (
                <tr
                  key={event.id}
                  className="border-t"
                >
                  <td className="p-4">
                    <img
                      src={`${import.meta.env.VITE_API_BASE_URL.replace("/api","")}/uploads/events/${event.banner}`}
                      alt={event.title}
                      className="w-24 h-14 rounded object-cover"
                    />
                  </td>

                  <td>{event.title}</td>

                  <td>{event.eventType}</td>

                  <td>
                    {event.startDate}
                  </td>

                  <td>{event.venue}</td>

                  <td>

                    <button
                      onClick={() =>
                        handleStatus(event.id)
                      }
                      className={`px-3 py-1 rounded-full flex gap-2 items-center ${
                        event.isActive
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {event.isActive ? (
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
                        to={`/admin/events/edit/${event.id}`}
                      >
                        <Pencil
                          size={18}
                          className="text-blue-600"
                        />
                      </Link>

                      <button
                        onClick={() =>
                          handleDelete(event.id)
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

export default Events;