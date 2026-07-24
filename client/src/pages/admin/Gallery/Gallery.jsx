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
  getAllGallery,
  deleteGallery,
  toggleGalleryStatus,
} from "../../../api/gallery.api";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchGallery = async () => {
    try {
      setLoading(true);

      const res = await getAllGallery({
        search,
      });

      const galleryData =
        res.data?.data?.gallery ||
        res.data?.data ||
        res.data?.gallery ||
        [];

      setGallery(Array.isArray(galleryData) ? galleryData : []);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to fetch gallery."
      );

      setGallery([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, [search]);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this gallery item?")) return;

    try {
      await deleteGallery(id);

      toast.success("Gallery item deleted successfully.");

      fetchGallery();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to delete gallery item."
      );
    }
  };

  const handleStatus = async (id) => {
    try {
      await toggleGalleryStatus(id);

      toast.success("Status updated.");

      fetchGallery();
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

      <div className="flex items-center justify-between mb-6">

        <div>
          <h1 className="text-2xl font-bold">
            Gallery Management
          </h1>

          <p className="text-gray-500">
            Manage gallery images displayed on the website.
          </p>
        </div>

        <Link
          to="/admin/gallery/create"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus size={18} />
          Add Gallery
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
          placeholder="Search gallery..."
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
                Category
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
                <td
                  colSpan={6}
                  className="text-center p-8"
                >
                  Loading...
                </td>
              </tr>

            ) : gallery.length === 0 ? (

              <tr>
                <td
                  colSpan={6}
                  className="text-center p-8 text-gray-500"
                >
                  No gallery items found.
                </td>
              </tr>

            ) : (

              gallery.map((item) => (

                <tr
                  key={item.id}
                  className="border-t"
                >

                  <td className="p-4">

                    <img
                      src={`${import.meta.env.VITE_API_BASE_URL.replace(
                        "/api",
                        ""
                      )}/uploads/gallery/${item.image}`}
                      alt={item.title}
                      className="w-24 h-16 object-cover rounded-lg"
                    />

                  </td>

                  <td>{item.title}</td>

                  <td>
                    {item.category || "-"}
                  </td>

                  <td>
                    {item.displayOrder}
                  </td>

                  <td>

                    <button
                      onClick={() =>
                        handleStatus(item.id)
                      }
                      className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
                        item.isActive
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.isActive ? (
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
                        to={`/admin/gallery/edit/${item.id}`}
                      >
                        <Pencil
                          size={18}
                          className="text-blue-600"
                        />
                      </Link>

                      <button
                        onClick={() =>
                          handleDelete(item.id)
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

export default Gallery;