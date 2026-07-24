import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import {
  Search,
  Eye,
  Trash2,
} from "lucide-react";

import {
  getAllContacts,
  deleteContact,
  updateContactStatus,
} from "../../../api/contact.api";

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchContacts = async () => {
    try {
      setLoading(true);

      const res = await getAllContacts({ search });

      const data =
        res.data?.data?.contacts ||
        res.data?.data ||
        res.data?.contacts ||
        [];

      setContacts(Array.isArray(data) ? data : []);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to fetch contact enquiries."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, [search]);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this enquiry?")) return;

    try {
      await deleteContact(id);

      toast.success("Enquiry deleted successfully.");

      fetchContacts();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Delete failed."
      );
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await updateContactStatus(id, {
        status,
      });

      toast.success("Status updated.");

      fetchContacts();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Status update failed."
      );
    }
  };

  return (
    <div className="p-6">

      <div className="mb-6">
        <h1 className="text-2xl font-bold">
          Contact Enquiries
        </h1>

        <p className="text-gray-500">
          All enquiries submitted through the website.
        </p>
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
          placeholder="Search by name, email or phone"
        />
      </div>

      <div className="bg-white rounded-xl shadow overflow-x-auto">

        <table className="w-full">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Subject</th>
              <th>Submitted</th>
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
            ) : contacts.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="text-center p-8"
                >
                  No Contact Enquiries Found
                </td>
              </tr>
            ) : (
              contacts.map((item) => (
                <tr
                  key={item.id}
                  className="border-t"
                >
                  <td className="p-4">
                    {item.name}
                  </td>

                  <td>{item.email}</td>

                  <td>{item.phone}</td>

                  <td>{item.subject}</td>

                  <td>
                    {new Date(
                      item.createdAt
                    ).toLocaleDateString()}
                  </td>

                  <td>
                    <select
                      value={item.status || "NEW"}
                      onChange={(e) =>
                        handleStatusChange(
                          item.id,
                          e.target.value
                        )
                      }
                      className="border rounded-lg px-3 py-2 text-sm"
                    >
                      <option value="NEW">
                        New
                      </option>

                      <option value="IN_PROGRESS">
                        In Progress
                      </option>

                      <option value="RESOLVED">
                        Resolved
                      </option>
                    </select>
                  </td>

                  <td>
                    <div className="flex justify-center gap-4">

                      <Link
                        to={`/admin/contact/view/${item.id}`}
                      >
                        <Eye
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

export default Contact;