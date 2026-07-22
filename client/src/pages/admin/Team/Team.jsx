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
  getAllTeams,
  deleteTeam,
  toggleTeamStatus,
} from "../../../api/team.api";

const Team = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchTeams = async () => {
    try {
      setLoading(true);

      const res = await getAllTeams({
        search,
      });

      setTeams(res.data.data.teams);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to fetch team members."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeams();
  }, [search]);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this team member?")) return;

    try {
      await deleteTeam(id);

      toast.success("Team member deleted.");

      fetchTeams();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Delete failed."
      );
    }
  };

  const handleStatus = async (id) => {
    try {
      await toggleTeamStatus(id);

      toast.success("Status updated.");

      fetchTeams();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Status update failed."
      );
    }
  };

  return (
    <div className="p-6">

      {/* Header */}

      <div className="flex justify-between items-center mb-6">

        <div>
          <h1 className="text-2xl font-bold">
            Team Management
          </h1>

          <p className="text-gray-500">
            Manage founders and committee members.
          </p>
        </div>

        <Link
          to="/admin/team/create"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700"
        >
          <Plus size={18} />
          Add Member
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
          placeholder="Search member..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="border rounded-lg pl-10 pr-4 py-2 w-full"
        />

      </div>

      {/* Table */}

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="p-4 text-left">
                Photo
              </th>

              <th className="text-left">
                Name
              </th>

              <th className="text-left">
                Designation
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
                  colSpan={7}
                  className="text-center p-8"
                >
                  Loading...
                </td>
              </tr>

            ) : teams.length === 0 ? (

              <tr>
                <td
                  colSpan={7}
                  className="text-center p-8 text-gray-500"
                >
                  No team members found.
                </td>
              </tr>

            ) : (

              teams.map((member) => (

                <tr
                  key={member.id}
                  className="border-t"
                >

                  <td className="p-4">

                    <img
                      src={`${import.meta.env.VITE_API_BASE_URL.replace("/api", "")}/uploads/team/${member.image}`}
                      alt={member.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />

                  </td>

                  <td>{member.name}</td>

                  <td>{member.designation}</td>

                  <td>

                    <span className="px-2 py-1 rounded bg-gray-100 text-sm">
                      {member.category}
                    </span>

                  </td>

                  <td>{member.displayOrder}</td>

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
                        to={`/admin/team/edit/${member.id}`}
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

export default Team;