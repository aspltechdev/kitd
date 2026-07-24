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
  getAllTestimonials,
  deleteTestimonial,
  toggleTestimonialStatus,
} from "../../../api/testimonial.api";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchTestimonials = async () => {
    try {
      setLoading(true);

      const res = await getAllTestimonials({ search });

      const data =
        res.data?.data?.testimonials ||
        res.data?.data ||
        res.data?.testimonials ||
        [];

      setTestimonials(Array.isArray(data) ? data : []);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to fetch testimonials."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, [search]);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this testimonial?")) return;

    try {
      await deleteTestimonial(id);
      toast.success("Deleted successfully.");
      fetchTestimonials();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Delete failed."
      );
    }
  };

  const handleStatus = async (id) => {
    try {
      await toggleTestimonialStatus(id);
      toast.success("Status updated.");
      fetchTestimonials();
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
            Testimonials
          </h1>

          <p className="text-gray-500">
            Manage client testimonials.
          </p>
        </div>

        <Link
          to="/admin/testimonials/create"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex gap-2"
        >
          <Plus size={18} />
          Add Testimonial
        </Link>
      </div>

      <div className="relative mb-6">
        <Search
          className="absolute left-3 top-3 text-gray-400"
          size={18}
        />

        <input
          className="border rounded-lg pl-10 py-2 w-full"
          placeholder="Search..."
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
              <th className="p-4 text-left">Photo</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Rating</th>
              <th>Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>

            {loading ? (
              <tr>
                <td colSpan={6} className="text-center p-8">
                  Loading...
                </td>
              </tr>
            ) : testimonials.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center p-8">
                  No Testimonials Found
                </td>
              </tr>
            ) : (
              testimonials.map((item) => (
                <tr key={item.id} className="border-t">

                  <td className="p-4">
                    <img
                      src={`${import.meta.env.VITE_API_BASE_URL.replace("/api","")}/uploads/testimonials/${item.photo}`}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                  </td>

                  <td>{item.name}</td>

                  <td>{item.designation}</td>

                  <td>{item.rating} ⭐</td>

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
                        to={`/admin/testimonials/edit/${item.id}`}
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

export default Testimonials;