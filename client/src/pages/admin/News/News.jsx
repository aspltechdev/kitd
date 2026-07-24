// src/pages/admin/news/News.jsx

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import {
  Plus,
  Search,
  Pencil,
  Trash2,
  Star,
} from "lucide-react";

import {
  getAllNews,
  deleteNews,
  toggleNewsStatus,
  toggleNewsFeatured,
} from "../../../api/news.api";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchNews = async () => {
    try {
      setLoading(true);

      const res = await getAllNews({
        search,
      });

      const data =
        res.data?.data?.news ||
        res.data?.data ||
        res.data?.news ||
        [];

      setNews(Array.isArray(data) ? data : []);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to fetch news."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [search]);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this news article?"))
      return;

    try {
      await deleteNews(id);

      toast.success(
        "News deleted successfully."
      );

      fetchNews();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Delete failed."
      );
    }
  };

  const handleStatus = async (id) => {
    try {
      await toggleNewsStatus(id);

      toast.success(
        "Status updated successfully."
      );

      fetchNews();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Status update failed."
      );
    }
  };

  const handleFeatured = async (id) => {
    try {
      await toggleNewsFeatured(id);

      toast.success(
        "Featured status updated."
      );

      fetchNews();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Update failed."
      );
    }
  };

  return (
    <div className="p-6">
      {/* Header */}

      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">
            News
          </h1>

          <p className="text-gray-500">
            Manage latest news articles.
          </p>
        </div>

        <Link
          to="/admin/news/create"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus size={18} />
          Add News
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
          placeholder="Search news..."
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
                Thumbnail
              </th>
              <th>Title</th>
              <th>Category</th>
              <th>Published</th>
              <th>Featured</th>
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
            ) : news.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="text-center p-8"
                >
                  No News Found
                </td>
              </tr>
            ) : (
              news.map((item) => (
                <tr
                  key={item.id}
                  className="border-t"
                >
                  <td className="p-4">
                    <img
                      src={`${import.meta.env.VITE_API_BASE_URL.replace(
                        "/api",
                        ""
                      )}/uploads/news/${
                        item.thumbnail
                      }`}
                      alt={item.title}
                      className="w-20 h-14 rounded object-cover border"
                    />
                  </td>

                  <td className="font-medium">
                    {item.title}
                  </td>

                  <td>
                    {item.category || "-"}
                  </td>

                  <td>
                    {item.publishedDate
                      ? new Date(
                          item.publishedDate
                        ).toLocaleDateString()
                      : "-"}
                  </td>

                  <td>
                    <button
                      onClick={() =>
                        handleFeatured(item.id)
                      }
                    >
                      <Star
                        size={18}
                        className={
                          item.featured
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-400"
                        }
                      />
                    </button>
                  </td>

                  <td>
                    <button
                      onClick={() =>
                        handleStatus(item.id)
                      }
                      className={`px-3 py-1 rounded-full text-sm ${
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
                        to={`/admin/news/edit/${item.id}`}
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

export default News;