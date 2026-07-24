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
  getAllPartners,
  deletePartner,
  togglePartnerStatus,
} from "../../../api/partner.api";

const Partners = () => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchPartners = async () => {
    try {
      setLoading(true);

      const res = await getAllPartners({
        search,
      });

      const data =
        res.data?.data?.partners ||
        res.data?.data ||
        res.data?.partners ||
        [];

      setPartners(Array.isArray(data) ? data : []);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to fetch partners."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPartners();
  }, [search]);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this partner?"))
      return;

    try {
      await deletePartner(id);

      toast.success(
        "Partner deleted successfully."
      );

      fetchPartners();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Delete failed."
      );
    }
  };

  const handleStatus = async (id) => {
    try {
      await togglePartnerStatus(id);

      toast.success("Status updated.");

      fetchPartners();
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
            Partners
          </h1>

          <p className="text-gray-500">
            Manage organization partners.
          </p>
        </div>

        <Link
          to="/admin/partners/create"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus size={18} />
          Add Partner
        </Link>

      </div>

      <div className="relative mb-6">

        <Search
          size={18}
          className="absolute left-3 top-3 text-gray-400"
        />

        <input
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="border rounded-lg pl-10 py-2 w-full"
          placeholder="Search partner..."
        />

      </div>

      <div className="bg-white rounded-xl shadow overflow-x-auto">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>
              <th className="p-4 text-left">
                Logo
              </th>
              <th>Name</th>
              <th>Type</th>
              <th>Website</th>
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
            ) : partners.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="text-center p-8"
                >
                  No Partners Found
                </td>
              </tr>
            ) : (
              partners.map((item) => (
                <tr
                  key={item.id}
                  className="border-t"
                >
                  <td className="p-4">
                    <img
                      src={`${import.meta.env.VITE_API_BASE_URL.replace(
                        "/api",
                        ""
                      )}/uploads/partners/${item.logo}`}
                      alt={item.name}
                      className="w-16 h-16 object-contain rounded border bg-white"
                    />
                  </td>

                  <td>{item.name}</td>

                  <td>{item.partnerType}</td>

                  <td>
                    {item.website ? (
                      <a
                        href={item.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Visit
                      </a>
                    ) : (
                      "-"
                    )}
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
                        to={`/admin/partners/edit/${item.id}`}
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

export default Partners;