import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import {
  Pencil,
  Trash2,
  Plus,
  Search,
  CheckCircle,
  XCircle,
} from "lucide-react";

import {
  getAllBanners,
  deleteBanner,
  toggleBannerStatus,
} from "../../../api/banner.api";

const Banner = () => {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchBanners = async () => {
    try {
      setLoading(true);

      const res = await getAllBanners({
        search,
      });

      setBanners(res.data.data.banners);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to fetch banners");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, [search]);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this banner?")) return;

    try {
      await deleteBanner(id);

      toast.success("Banner deleted");

      fetchBanners();
    } catch (err) {
      toast.error(err.response?.data?.message || "Delete failed");
    }
  };

  const handleStatus = async (id) => {
    try {
      await toggleBannerStatus(id);

      toast.success("Status Updated");

      fetchBanners();
    } catch (err) {
      toast.error(err.response?.data?.message || "Update failed");
    }
  };

  return (
    <div className="p-6">

      {/* Header */}

      <div className="flex justify-between items-center mb-6">

        <div>
          <h1 className="text-2xl font-bold">
            Hero Slider
          </h1>

          <p className="text-gray-500">
            Manage homepage hero banners
          </p>
        </div>

        <Link
          to="/admin/banner/create"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700"
        >
          <Plus size={18} />
          Add Banner
        </Link>

      </div>

      {/* Search */}

      <div className="relative mb-6">

        <Search
          className="absolute left-3 top-3 text-gray-400"
          size={18}
        />

        <input
          type="text"
          placeholder="Search banner..."
          className="border rounded-lg pl-10 pr-4 py-2 w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* Table */}

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="text-left p-4">
                Preview
              </th>

              <th className="text-left">
                Title
              </th>

              <th className="text-left">
                Type
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

            ) : banners.length === 0 ? (

              <tr>

                <td
                  colSpan={6}
                  className="text-center p-8 text-gray-500"
                >
                  No banners found.
                </td>

              </tr>

            ) : (

              banners.map((banner) => (

                <tr
                  key={banner.id}
                  className="border-t"
                >

                  {/* Preview */}

                  <td className="p-4">

                    {banner.mediaType === "IMAGE" ? (

                      <img
                        src={`${import.meta.env.VITE_API_URL}/uploads/banners/${banner.mediaUrl}`}
                        alt={banner.title}
                        className="w-28 h-16 rounded object-cover"
                      />

                    ) : (

                      <video
                        className="w-28 h-16 rounded object-cover"
                        muted
                      >
                        <source
                          src={`${import.meta.env.VITE_API_URL}/uploads/banners/${banner.mediaUrl}`}
                        />
                      </video>

                    )}

                  </td>

                  <td>{banner.title}</td>

                  <td>{banner.mediaType}</td>

                  <td>{banner.displayOrder}</td>

                  <td>

                    <button
                      onClick={() =>
                        handleStatus(banner.id)
                      }
                      className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm

                      ${
                        banner.isActive
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {banner.isActive ? (
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

                    <div className="flex justify-center gap-3">

                      <Link
                        to={`/admin/banner/edit/${banner.id}`}
                      >
                        <Pencil
                          className="text-blue-600"
                          size={18}
                        />
                      </Link>

                      <button
                        onClick={() =>
                          handleDelete(banner.id)
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

export default Banner;