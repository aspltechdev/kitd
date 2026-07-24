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
  getAllArtists,
  deleteArtist,
  toggleArtistStatus,
} from "../../../api/artist.api";

const Artists = () => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchArtists = async () => {
    try {
      setLoading(true);

      const res = await getAllArtists({
        search,
      });

      const artistData =
        res.data?.data?.artists ||
        res.data?.data ||
        res.data?.artists ||
        [];

      setArtists(Array.isArray(artistData) ? artistData : []);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to fetch artists."
      );

      setArtists([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArtists();
  }, [search]);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this artist?")) return;

    try {
      await deleteArtist(id);

      toast.success("Artist deleted successfully.");

      fetchArtists();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to delete artist."
      );
    }
  };

  const handleStatus = async (id) => {
    try {
      await toggleArtistStatus(id);

      toast.success("Status updated.");

      fetchArtists();
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
            Artists Management
          </h1>

          <p className="text-gray-500">
            Manage artists displayed on the website.
          </p>
        </div>

        <Link
          to="/admin/artists/create"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus size={18} />
          Add Artist
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
          placeholder="Search artists..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg pl-10 pr-4 py-2 w-full"
        />
      </div>

      {/* Table */}

      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">Photo</th>
              <th className="text-left">Name</th>
              <th className="text-left">Dance Style</th>
              <th className="text-left">Experience</th>
              <th className="text-left">Mobile</th>
              <th className="text-left">Status</th>
              <th className="text-center">Actions</th>
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
            ) : artists.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="text-center p-8 text-gray-500"
                >
                  No artists found.
                </td>
              </tr>
            ) : (
              artists.map((artist) => (
                <tr
                  key={artist.id}
                  className="border-t"
                >
                  <td className="p-4">
                    <img
                      src={`${import.meta.env.VITE_API_BASE_URL.replace(
                        "/api",
                        ""
                      )}/uploads/artists/${artist.photo}`}
                      alt={artist.fullName}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                  </td>

                  <td>
                    <div className="font-medium">
                      {artist.fullName}
                    </div>

                    <div className="text-sm text-gray-500">
                      {artist.email}
                    </div>
                  </td>

                  <td>
                    {artist.danceStyle}
                  </td>

                  <td>
                    {artist.experience} Years
                  </td>

                  <td>
                    {artist.mobile}
                  </td>

                  <td>
                    <button
                      onClick={() =>
                        handleStatus(artist.id)
                      }
                      className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
                        artist.isActive
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {artist.isActive ? (
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
                        to={`/admin/artists/edit/${artist.id}`}
                      >
                        <Pencil
                          size={18}
                          className="text-blue-600"
                        />
                      </Link>

                      <button
                        onClick={() =>
                          handleDelete(artist.id)
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

export default Artists;