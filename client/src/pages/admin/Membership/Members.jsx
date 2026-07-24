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
  getAllMembers,
  deleteMember,
  toggleMemberStatus,
} from "../../../api/members.api";

const Members = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchMembers = async () => {
    try {
      setLoading(true);

      const res = await getAllMembers({
        search,
      });

      const memberData =
        res.data?.data?.members ||
        res.data?.data ||
        res.data?.members ||
        [];

      setMembers(Array.isArray(memberData) ? memberData : []);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to fetch members."
      );

      setMembers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, [search]);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this member?")) return;

    try {
      await deleteMember(id);

      toast.success("Member deleted successfully.");

      fetchMembers();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to delete member."
      );
    }
  };

  const handleStatus = async (id) => {
    try {
      await toggleMemberStatus(id);

      toast.success("Status updated.");

      fetchMembers();
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
            Members Management
          </h1>

          <p className="text-gray-500">
            Manage registered association members.
          </p>
        </div>

        <Link
          to="/admin/members/create"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus size={18} />
          Add Member
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
          placeholder="Search members..."
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
              <th className="text-left">Member ID</th>
              <th className="text-left">Name</th>
              <th className="text-left">Membership</th>
              <th className="text-left">Mobile</th>
              <th className="text-left">Joined</th>
              <th className="text-left">Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan={8}
                  className="text-center p-8"
                >
                  Loading...
                </td>
              </tr>
            ) : members.length === 0 ? (
              <tr>
                <td
                  colSpan={8}
                  className="text-center p-8 text-gray-500"
                >
                  No members found.
                </td>
              </tr>
            ) : (
              members.map((member) => (
                <tr
                  key={member.id}
                  className="border-t"
                >
                  <td className="p-4">
                    <img
                      src={`${import.meta.env.VITE_API_BASE_URL.replace(
                        "/api",
                        ""
                      )}/uploads/members/${member.photo}`}
                      alt={member.fullName}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                  </td>

                  <td>{member.memberId}</td>

                  <td>
                    <div className="font-medium">
                      {member.fullName}
                    </div>

                    <div className="text-sm text-gray-500">
                      {member.email}
                    </div>
                  </td>

                  <td>{member.membershipType}</td>

                  <td>{member.mobile}</td>

                  <td>{member.joinedDate}</td>

                  <td>
                    <button
                      onClick={() =>
                        handleStatus(member.id)
                      }
                      className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
                        member.isActive
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {member.isActive ? (
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
                        to={`/admin/members/edit/${member.id}`}
                      >
                        <Pencil
                          size={18}
                          className="text-blue-600"
                        />
                      </Link>

                      <button
                        onClick={() =>
                          handleDelete(member.id)
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

export default Members;