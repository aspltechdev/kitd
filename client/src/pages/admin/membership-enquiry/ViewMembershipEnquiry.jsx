// // // // src/pages/admin/membership-enquiry/ViewMembershipEnquiry.jsx

// // // import { useEffect, useState } from "react";
// // // import { useNavigate, useParams } from "react-router-dom";
// // // import toast from "react-hot-toast";
// // // import {
// // //   ArrowLeft,
// // //   CheckCircle,
// // //   Trash2,
// // // } from "lucide-react";

// // // import {
// // //   getMembershipEnquiryById,
// // //   updateMembershipEnquiryStatus,
// // //   approveMembershipEnquiry,
// // //   deleteMembershipEnquiry,
// // // } from "../../../api/membershipEnquiry.api";

// // // const ViewMembershipEnquiry = () => {
// // //   const { id } = useParams();
// // //   const navigate = useNavigate();

// // //   const [loading, setLoading] = useState(true);
// // //   const [enquiry, setEnquiry] = useState(null);

// // //   const fetchEnquiry = async () => {
// // //     try {
// // //       setLoading(true);

// // //       const res = await getMembershipEnquiryById(id);

// // //       const data =
// // //         res.data?.data?.membershipEnquiry ||
// // //         res.data?.data ||
// // //         res.data?.membershipEnquiry;

// // //       setEnquiry(data);
// // //     } catch (error) {
// // //       toast.error(
// // //         error.response?.data?.message ||
// // //           "Failed to fetch enquiry."
// // //       );
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchEnquiry();
// // //   }, [id]);

// // //   const handleStatus = async (status) => {
// // //     try {
// // //       await updateMembershipEnquiryStatus(id, {
// // //         status,
// // //       });

// // //       toast.success("Status updated.");

// // //       fetchEnquiry();
// // //     } catch (error) {
// // //       toast.error(
// // //         error.response?.data?.message ||
// // //           "Unable to update status."
// // //       );
// // //     }
// // //   };

// // //   const handleApprove = async () => {
// // //     if (
// // //       !window.confirm(
// // //         "Approve this membership application?"
// // //       )
// // //     )
// // //       return;

// // //     try {
// // //       await approveMembershipEnquiry(id);

// // //       toast.success(
// // //         "Member approved successfully."
// // //       );

// // //       fetchEnquiry();
// // //     } catch (error) {
// // //       toast.error(
// // //         error.response?.data?.message ||
// // //           "Approval failed."
// // //       );
// // //     }
// // //   };

// // //   const handleDelete = async () => {
// // //     if (
// // //       !window.confirm(
// // //         "Delete this enquiry?"
// // //       )
// // //     )
// // //       return;

// // //     try {
// // //       await deleteMembershipEnquiry(id);

// // //       toast.success("Deleted successfully.");

// // //       navigate("/admin/membership-enquiries");
// // //     } catch (error) {
// // //       toast.error(
// // //         error.response?.data?.message ||
// // //           "Delete failed."
// // //       );
// // //     }
// // //   };

// // //   if (loading) {
// // //     return (
// // //       <div className="p-6">
// // //         Loading...
// // //       </div>
// // //     );
// // //   }

// // //   if (!enquiry) {
// // //     return (
// // //       <div className="p-6">
// // //         No Membership Enquiry Found.
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="p-6">

// // //       {/* Header */}

// // //       <div className="flex justify-between items-center mb-6">

// // //         <button
// // //           onClick={() =>
// // //             navigate(-1)
// // //           }
// // //           className="flex items-center gap-2 text-blue-600"
// // //         >
// // //           <ArrowLeft size={18} />
// // //           Back
// // //         </button>

// // //         <div className="flex gap-3">

// // //           {enquiry.status !==
// // //             "APPROVED" && (
// // //             <button
// // //               onClick={handleApprove}
// // //               className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
// // //             >
// // //               <CheckCircle size={18} />
// // //               Approve
// // //             </button>
// // //           )}

// // //           <button
// // //             onClick={handleDelete}
// // //             className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
// // //           >
// // //             <Trash2 size={18} />
// // //             Delete
// // //           </button>

// // //         </div>
// // //       </div>

// // //       {/* Card */}

// // //       <div className="bg-white rounded-xl shadow p-6">

// // //         <div className="flex items-center gap-6 mb-8">

// // //           <img
// // //             src={
// // //               enquiry.photo
// // //                 ? `${import.meta.env.VITE_API_BASE_URL.replace(
// // //                     "/api",
// // //                     ""
// // //                   )}/uploads/membership/${enquiry.photo}`
// // //                 : "https://placehold.co/140x140"
// // //             }
// // //             alt={enquiry.fullName}
// // //             className="w-36 h-36 rounded-full object-cover border"
// // //           />

// // //           <div>

// // //             <h2 className="text-2xl font-bold">
// // //               {enquiry.fullName}
// // //             </h2>

// // //             <p className="text-gray-500">
// // //               {enquiry.email}
// // //             </p>

// // //             <p className="text-gray-500">
// // //               {enquiry.mobile}
// // //             </p>

// // //           </div>

// // //         </div>

// // //         {/* Status */}

// // //         <div className="mb-8">

// // //           <label className="font-semibold block mb-2">
// // //             Status
// // //           </label>

// // //           <select
// // //             value={enquiry.status}
// // //             onChange={(e) =>
// // //               handleStatus(e.target.value)
// // //             }
// // //             className="border rounded-lg px-4 py-2"
// // //           >
// // //             <option value="NEW">
// // //               NEW
// // //             </option>

// // //             <option value="UNDER_REVIEW">
// // //               UNDER REVIEW
// // //             </option>

// // //             <option value="APPROVED">
// // //               APPROVED
// // //             </option>

// // //             <option value="REJECTED">
// // //               REJECTED
// // //             </option>
// // //           </select>

// // //         </div>

// // //         {/* Details */}

// // //         <div className="grid md:grid-cols-2 gap-6">

// // //           <Info
// // //             label="Gender"
// // //             value={enquiry.gender}
// // //           />

// // //           <Info
// // //             label="Date of Birth"
// // //             value={
// // //               enquiry.dateOfBirth
// // //                 ? new Date(
// // //                     enquiry.dateOfBirth
// // //                   ).toLocaleDateString()
// // //                 : "-"
// // //             }
// // //           />

// // //           <Info
// // //             label="Occupation"
// // //             value={enquiry.occupation}
// // //           />

// // //           <Info
// // //             label="Membership Type"
// // //             value={
// // //               enquiry.membershipType
// // //             }
// // //           />

// // //           <Info
// // //             label="Dance Style"
// // //             value={enquiry.danceStyle}
// // //           />

// // //           <Info
// // //             label="Experience"
// // //             value={enquiry.experience}
// // //           />

// // //           <Info
// // //             label="Address"
// // //             value={enquiry.address}
// // //           />

// // //           <Info
// // //             label="City"
// // //             value={enquiry.city}
// // //           />

// // //           <Info
// // //             label="State"
// // //             value={enquiry.state}
// // //           />

// // //           <Info
// // //             label="Country"
// // //             value={enquiry.country}
// // //           />

// // //         </div>

// // //         {/* Message */}

// // //         <div className="mt-8">

// // //           <h3 className="font-semibold mb-2">
// // //             Message
// // //           </h3>

// // //           <div className="border rounded-lg p-4 bg-gray-50">
// // //             {enquiry.message ||
// // //               "No message provided."}
// // //           </div>

// // //         </div>

// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // const Info = ({
// // //   label,
// // //   value,
// // // }) => (
// // //   <div>
// // //     <p className="text-sm text-gray-500">
// // //       {label}
// // //     </p>

// // //     <p className="font-medium">
// // //       {value || "-"}
// // //     </p>
// // //   </div>
// // // );

// // // export default ViewMembershipEnquiry;

// // // src/pages/admin/membership-enquiry/ViewMembershipEnquiry.jsx

// // import { useEffect, useState } from "react";
// // import { useNavigate, useParams } from "react-router-dom";
// // import toast from "react-hot-toast";
// // import {
// //   ArrowLeft,
// //   CheckCircle,
// //   Trash2,
// //   Eye,
// //   Send,
// //   AlertCircle,
// //   UserCheck,
// //   FileText,
// //   Clock,
// //   Ban,
// // } from "lucide-react";

// // import {
// //   getMembershipEnquiryById,
// //   updateMembershipEnquiryStatus,
// //   approveMembershipEnquiry,
// //   deleteMembershipEnquiry,
// //   startReviewEnquiry,
// //   requestChangesEnquiry,
// //   sendRegistrationFormEnquiry,
// //   approveMemberEnquiry,
// // } from "../../../api/membershipEnquiry.api";

// // const ViewMembershipEnquiry = () => {
// //   const { id } = useParams();
// //   const navigate = useNavigate();

// //   const [loading, setLoading] = useState(true);
// //   const [enquiry, setEnquiry] = useState(null);
// //   const [remarks, setRemarks] = useState("");
// //   const [showRemarksInput, setShowRemarksInput] = useState(false);
// //   const [processing, setProcessing] = useState(false);

// //   const fetchEnquiry = async () => {
// //     try {
// //       setLoading(true);

// //       const res = await getMembershipEnquiryById(id);

// //       const data =
// //         res.data?.data?.membershipEnquiry ||
// //         res.data?.data ||
// //         res.data?.membershipEnquiry;

// //       setEnquiry(data);
// //     } catch (error) {
// //       toast.error(
// //         error.response?.data?.message || "Failed to fetch enquiry."
// //       );
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchEnquiry();
// //   }, [id]);

// //   // ✅ Start Review - Sends "Under Review" email
// //   const handleStartReview = async () => {
// //     if (!window.confirm("Move this application to 'Under Review'? An email will be sent to the applicant."))
// //       return;

// //     try {
// //       setProcessing(true);
// //       await startReviewEnquiry(id);
// //       toast.success("Application moved to Under Review. Email sent to applicant.");
// //       fetchEnquiry();
// //     } catch (error) {
// //       toast.error(error.response?.data?.message || "Failed to start review.");
// //     } finally {
// //       setProcessing(false);
// //     }
// //   };

// //   // ✅ Request Changes - Sends "Changes Required" email
// //   const handleRequestChanges = async () => {
// //     if (!remarks.trim()) {
// //       toast.error("Please enter remarks for the changes required.");
// //       return;
// //     }

// //     if (!window.confirm("Send change request to applicant?"))
// //       return;

// //     try {
// //       setProcessing(true);
// //       await requestChangesEnquiry(id, { remarks });
// //       toast.success("Change request sent to applicant.");
// //       setRemarks("");
// //       setShowRemarksInput(false);
// //       fetchEnquiry();
// //     } catch (error) {
// //       toast.error(error.response?.data?.message || "Failed to request changes.");
// //     } finally {
// //       setProcessing(false);
// //     }
// //   };

// //   // ✅ Send Registration Form - Sends registration invitation email
// //   const handleSendRegistration = async () => {
// //     if (!window.confirm("Send registration form invitation to applicant?"))
// //       return;

// //     try {
// //       setProcessing(true);
// //       await sendRegistrationFormEnquiry(id);
// //       toast.success("Registration invitation sent to applicant.");
// //       fetchEnquiry();
// //     } catch (error) {
// //       toast.error(error.response?.data?.message || "Failed to send registration form.");
// //     } finally {
// //       setProcessing(false);
// //     }
// //   };

// //   // ✅ Approve Member - Sends approval email
// //   const handleApprove = async () => {
// //     if (!window.confirm("Approve this member? A congratulatory email will be sent."))
// //       return;

// //     try {
// //       setProcessing(true);
// //       await approveMemberEnquiry(id);
// //       toast.success("Member approved successfully. Approval email sent.");
// //       fetchEnquiry();
// //     } catch (error) {
// //       toast.error(error.response?.data?.message || "Approval failed.");
// //     } finally {
// //       setProcessing(false);
// //     }
// //   };

// //   // Simple status update (no email) - For manual status changes
// //   const handleStatusUpdate = async (newStatus) => {
// //     if (!window.confirm(`Change status to "${newStatus}"? Note: No email will be sent for manual status changes.`))
// //       return;

// //     try {
// //       setProcessing(true);
// //       await updateMembershipEnquiryStatus(id, { status: newStatus });
// //       toast.success(`Status updated to ${newStatus}.`);
// //       fetchEnquiry();
// //     } catch (error) {
// //       toast.error(error.response?.data?.message || "Unable to update status.");
// //     } finally {
// //       setProcessing(false);
// //     }
// //   };

// //   const handleDelete = async () => {
// //     if (!window.confirm("Delete this enquiry? This action cannot be undone."))
// //       return;

// //     try {
// //       await deleteMembershipEnquiry(id);
// //       toast.success("Deleted successfully.");
// //       navigate("/admin/membership-enquiries");
// //     } catch (error) {
// //       toast.error(error.response?.data?.message || "Delete failed.");
// //     }
// //   };

// //   if (loading) {
// //     return (
// //       <div className="p-6 flex justify-center items-center min-h-screen">
// //         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
// //       </div>
// //     );
// //   }

// //   if (!enquiry) {
// //     return (
// //       <div className="p-6">
// //         <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
// //           <p className="text-yellow-800">No Membership Enquiry Found.</p>
// //         </div>
// //       </div>
// //     );
// //   }

// //   const statusColors = {
// //     NEW: "bg-blue-100 text-blue-800",
// //     UNDER_REVIEW: "bg-yellow-100 text-yellow-800",
// //     REGISTRATION_SENT: "bg-purple-100 text-purple-800",
// //     REGISTRATION_SUBMITTED: "bg-indigo-100 text-indigo-800",
// //     CHANGES_REQUESTED: "bg-orange-100 text-orange-800",
// //     APPROVED: "bg-green-100 text-green-800",
// //     REJECTED: "bg-red-100 text-red-800",
// //   };

// //   return (
// //     <div className="p-6 max-w-7xl mx-auto">
// //       {/* Header */}
// //       <div className="flex justify-between items-center mb-6">
// //         <button
// //           onClick={() => navigate("/admin/membership-enquiries")}
// //           className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
// //         >
// //           <ArrowLeft size={18} />
// //           Back to Enquiries
// //         </button>

// //         <div className="flex gap-3">
// //           <button
// //             onClick={handleDelete}
// //             className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-red-700 transition"
// //             disabled={processing}
// //           >
// //             <Trash2 size={18} />
// //             Delete
// //           </button>
// //         </div>
// //       </div>

// //       {/* Action Buttons - Each triggers specific email */}
// //       <div className="bg-white rounded-xl shadow p-6 mb-6">
// //         <h3 className="text-lg font-semibold mb-4">Actions (Each sends corresponding email)</h3>
        
// //         <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
// //           {/* Start Review - Sends "Under Review" email */}
// //           <button
// //             onClick={handleStartReview}
// //             disabled={processing || enquiry.status === "UNDER_REVIEW"}
// //             className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition ${
// //               enquiry.status === "UNDER_REVIEW"
// //                 ? "bg-gray-300 cursor-not-allowed"
// //                 : "bg-yellow-500 text-white hover:bg-yellow-600"
// //             }`}
// //           >
// //             <Eye size={18} />
// //             Start Review
// //           </button>

// //           {/* Request Changes - Sends "Changes Required" email */}
// //           <button
// //             onClick={() => setShowRemarksInput(!showRemarksInput)}
// //             disabled={processing}
// //             className="flex items-center justify-center gap-2 px-4 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
// //           >
// //             <AlertCircle size={18} />
// //             Request Changes
// //           </button>

// //           {/* Send Registration - Sends registration link email */}
// //           <button
// //             onClick={handleSendRegistration}
// //             disabled={processing || enquiry.status === "REGISTRATION_SENT"}
// //             className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition ${
// //               enquiry.status === "REGISTRATION_SENT"
// //                 ? "bg-gray-300 cursor-not-allowed"
// //                 : "bg-purple-500 text-white hover:bg-purple-600"
// //             }`}
// //           >
// //             <Send size={18} />
// //             Send Registration
// //           </button>

// //           {/* Approve Member - Sends approval email */}
// //           <button
// //             onClick={handleApprove}
// //             disabled={processing || enquiry.status === "APPROVED"}
// //             className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition ${
// //               enquiry.status === "APPROVED"
// //                 ? "bg-gray-300 cursor-not-allowed"
// //                 : "bg-green-500 text-white hover:bg-green-600"
// //             }`}
// //           >
// //             <UserCheck size={18} />
// //             Approve Member
// //           </button>
// //         </div>

// //         {/* Remarks Input for Change Request */}
// //         {showRemarksInput && (
// //           <div className="mt-4 p-4 bg-orange-50 border border-orange-200 rounded-lg">
// //             <label className="block text-sm font-semibold mb-2">
// //               Remarks for Changes Required:
// //             </label>
// //             <textarea
// //               value={remarks}
// //               onChange={(e) => setRemarks(e.target.value)}
// //               placeholder="Describe what changes are needed..."
// //               rows="3"
// //               className="w-full border rounded-lg p-3 mb-3"
// //             />
// //             <div className="flex gap-2">
// //               <button
// //                 onClick={handleRequestChanges}
// //                 disabled={processing || !remarks.trim()}
// //                 className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 disabled:bg-gray-300"
// //               >
// //                 Send Change Request
// //               </button>
// //               <button
// //                 onClick={() => {
// //                   setShowRemarksInput(false);
// //                   setRemarks("");
// //                 }}
// //                 className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
// //               >
// //                 Cancel
// //               </button>
// //             </div>
// //           </div>
// //         )}
// //       </div>

// //       {/* Main Card */}
// //       <div className="bg-white rounded-xl shadow p-6">
// //         {/* Profile Section */}
// //         <div className="flex items-center gap-6 mb-8 pb-6 border-b">
// //           <img
// //             src={
// //               enquiry.photo
// //                 ? `${import.meta.env.VITE_API_BASE_URL?.replace("/api", "")}/uploads/membership-photos/${enquiry.photo}`
// //                 : "https://placehold.co/140x140"
// //             }
// //             alt={enquiry.fullName}
// //             className="w-36 h-36 rounded-full object-cover border-4 border-gray-200"
// //           />

// //           <div className="flex-grow">
// //             <div className="flex items-center gap-3 mb-2">
// //               <h2 className="text-2xl font-bold">{enquiry.fullName}</h2>
// //               <span className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColors[enquiry.status] || "bg-gray-100"}`}>
// //                 {enquiry.status?.replace("_", " ") || "NEW"}
// //               </span>
// //             </div>

// //             {enquiry.stageName && (
// //               <p className="text-purple-600 font-medium mb-2">
// //                 Stage Name: {enquiry.stageName}
// //               </p>
// //             )}

// //             <p className="text-gray-500">{enquiry.email}</p>
// //             <p className="text-gray-500">{enquiry.mobile}</p>
            
// //             {enquiry.registrationToken && (
// //               <div className="mt-2 p-2 bg-blue-50 rounded-lg">
// //                 <p className="text-sm text-blue-800">
// //                   <strong>Registration Token:</strong> {enquiry.registrationToken}
// //                 </p>
// //                 <p className="text-sm text-blue-600">
// //                   <strong>Expires:</strong> {enquiry.tokenExpiry ? new Date(enquiry.tokenExpiry).toLocaleDateString() : "N/A"}
// //                 </p>
// //               </div>
// //             )}
// //           </div>
// //         </div>

// //         {/* Status Dropdown (Manual - No Email) */}
// //         <div className="mb-8 p-4 bg-gray-50 rounded-lg">
// //           <label className="font-semibold block mb-2 text-gray-700">
// //             Manual Status Update (No email sent)
// //           </label>
// //           <select
// //             value={enquiry.status}
// //             onChange={(e) => handleStatusUpdate(e.target.value)}
// //             className="border rounded-lg px-4 py-2 w-64"
// //             disabled={processing}
// //           >
// //             <option value="NEW">NEW</option>
// //             <option value="UNDER_REVIEW">UNDER REVIEW</option>
// //             <option value="REGISTRATION_SENT">REGISTRATION SENT</option>
// //             <option value="REGISTRATION_SUBMITTED">REGISTRATION SUBMITTED</option>
// //             <option value="CHANGES_REQUESTED">CHANGES REQUESTED</option>
// //             <option value="APPROVED">APPROVED</option>
// //             <option value="REJECTED">REJECTED</option>
// //           </select>
// //           <p className="text-sm text-gray-500 mt-2">
// //             ⚠️ Use action buttons above to send emails. Manual status changes don't trigger emails.
// //           </p>
// //         </div>

// //         {/* Details Grid */}
// //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
// //           <Info label="Gender" value={enquiry.gender} />
// //           <Info label="Date of Birth" value={enquiry.dateOfBirth ? new Date(enquiry.dateOfBirth).toLocaleDateString() : "-"} />
// //           <Info label="Occupation" value={enquiry.occupation} />
// //           <Info label="Membership Type" value={enquiry.membershipType} />
// //           <Info label="Dance Style" value={enquiry.danceStyle} />
// //           <Info label="Experience" value={enquiry.experience} />
// //           <Info label="Address" value={enquiry.address} />
// //           <Info label="City" value={enquiry.city} />
// //           <Info label="State" value={enquiry.state} />
// //           <Info label="Country" value={enquiry.country} />
// //           <Info label="Postal Code" value={enquiry.postalCode} />
// //         </div>

// //         {/* Social Links */}
// //         {enquiry.socialLinks && (
// //           <div className="mb-8">
// //             <h3 className="font-semibold mb-3 text-lg">Social Links</h3>
// //             <div className="grid md:grid-cols-2 gap-4">
// //               {enquiry.socialLinks.instagram && (
// //                 <div className="flex items-center gap-2 p-3 bg-pink-50 rounded-lg">
// //                   <span className="font-medium">Instagram:</span>
// //                   <span className="text-gray-600">{enquiry.socialLinks.instagram}</span>
// //                 </div>
// //               )}
// //               {enquiry.socialLinks.youtube && (
// //                 <div className="flex items-center gap-2 p-3 bg-red-50 rounded-lg">
// //                   <span className="font-medium">YouTube:</span>
// //                   <span className="text-gray-600">{enquiry.socialLinks.youtube}</span>
// //                 </div>
// //               )}
// //               {enquiry.socialLinks.facebook && (
// //                 <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
// //                   <span className="font-medium">Facebook:</span>
// //                   <span className="text-gray-600">{enquiry.socialLinks.facebook}</span>
// //                 </div>
// //               )}
// //               {enquiry.socialLinks.twitter && (
// //                 <div className="flex items-center gap-2 p-3 bg-sky-50 rounded-lg">
// //                   <span className="font-medium">Twitter/X:</span>
// //                   <span className="text-gray-600">{enquiry.socialLinks.twitter}</span>
// //                 </div>
// //               )}
// //               {enquiry.socialLinks.website && (
// //                 <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
// //                   <span className="font-medium">Website:</span>
// //                   <a href={enquiry.socialLinks.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
// //                     {enquiry.socialLinks.website}
// //                   </a>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         )}

// //         {/* Biography */}
// //         {enquiry.biography && (
// //           <div className="mb-8">
// //             <h3 className="font-semibold mb-2 text-lg">Biography</h3>
// //             <div className="border rounded-lg p-4 bg-gray-50 whitespace-pre-wrap">
// //               {enquiry.biography}
// //             </div>
// //           </div>
// //         )}

// //         {/* Remarks */}
// //         {enquiry.remarks && (
// //           <div className="mb-8">
// //             <h3 className="font-semibold mb-2 text-lg text-orange-600">Remarks</h3>
// //             <div className="border border-orange-200 rounded-lg p-4 bg-orange-50">
// //               {enquiry.remarks}
// //             </div>
// //           </div>
// //         )}

// //         {/* Message */}
// //         <div className="mt-8">
// //           <h3 className="font-semibold mb-2 text-lg">Message</h3>
// //           <div className="border rounded-lg p-4 bg-gray-50 whitespace-pre-wrap">
// //             {enquiry.message || "No message provided."}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const Info = ({ label, value }) => (
// //   <div>
// //     <p className="text-sm text-gray-500 font-medium">{label}</p>
// //     <p className="font-medium text-gray-800">{value || "-"}</p>
// //   </div>
// // );

// // export default ViewMembershipEnquiry;

// // src/pages/admin/membership-enquiry/ViewMembershipEnquiry.jsx

// // import { useEffect, useState } from "react";
// // import { useNavigate, useParams } from "react-router-dom";
// // import toast from "react-hot-toast";
// // import {
// //   ArrowLeft,
// //   CheckCircle,
// //   Trash2,
// //   Eye,
// //   Send,
// //   AlertCircle,
// //   UserCheck,
// //   FileText,
// //   Clock,
// //   Ban,
// //   Loader,
// // } from "lucide-react";

// // import {
// //   getMembershipEnquiryById,
// //   updateMembershipEnquiryStatus,
// //   approveMembershipEnquiry,
// //   deleteMembershipEnquiry,
// //   startMembershipReview,
// //   requestMembershipChanges,
// //   sendMembershipRegistration,
// //   approveMembershipMember,
// // } from "../../../api/membershipEnquiry.api";

// // const ViewMembershipEnquiry = () => {
// //   const { id } = useParams();
// //   const navigate = useNavigate();

// //   const [loading, setLoading] = useState(true);
// //   const [enquiry, setEnquiry] = useState(null);
// //   const [remarks, setRemarks] = useState("");
// //   const [showRemarksInput, setShowRemarksInput] = useState(false);
// //   const [processing, setProcessing] = useState(false);

// //   const fetchEnquiry = async () => {
// //     try {
// //       setLoading(true);

// //       const res = await getMembershipEnquiryById(id);

// //       const data =
// //         res.data?.data?.membershipEnquiry ||
// //         res.data?.data ||
// //         res.data?.membershipEnquiry;

// //       setEnquiry(data);
// //     } catch (error) {
// //       toast.error(
// //         error.response?.data?.message || "Failed to fetch enquiry."
// //       );
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchEnquiry();
// //   }, [id]);

// //   // ✅ Start Review - Sends "Under Review" email
// //   const handleStartReview = async () => {
// //     if (
// //       !window.confirm(
// //         "Move this application to 'Under Review'? An email will be sent to the applicant."
// //       )
// //     )
// //       return;

// //     try {
// //       setProcessing(true);
// //       await startMembershipReview(id);
// //       toast.success("Application moved to Under Review. Email sent to applicant.");
// //       fetchEnquiry();
// //     } catch (error) {
// //       toast.error(
// //         error.response?.data?.message || "Failed to start review."
// //       );
// //     } finally {
// //       setProcessing(false);
// //     }
// //   };

// //   // ✅ Request Changes - Sends "Changes Required" email
// //   const handleRequestChanges = async () => {
// //     if (!remarks.trim()) {
// //       toast.error("Please enter remarks for the changes required.");
// //       return;
// //     }

// //     if (!window.confirm("Send change request to applicant?")) return;

// //     try {
// //       setProcessing(true);
// //       await requestMembershipChanges(id, { remarks });
// //       toast.success("Change request sent to applicant.");
// //       setRemarks("");
// //       setShowRemarksInput(false);
// //       fetchEnquiry();
// //     } catch (error) {
// //       toast.error(
// //         error.response?.data?.message || "Failed to request changes."
// //       );
// //     } finally {
// //       setProcessing(false);
// //     }
// //   };

// //   // ✅ Send Registration Form - Sends registration invitation email
// //   const handleSendRegistration = async () => {
// //     if (
// //       !window.confirm("Send registration form invitation to applicant?")
// //     )
// //       return;

// //     try {
// //       setProcessing(true);
// //       await sendMembershipRegistration(id);
// //       toast.success("Registration invitation sent to applicant.");
// //       fetchEnquiry();
// //     } catch (error) {
// //       toast.error(
// //         error.response?.data?.message || "Failed to send registration form."
// //       );
// //     } finally {
// //       setProcessing(false);
// //     }
// //   };

// //   // ✅ Approve Member - Sends approval email
// //   const handleApprove = async () => {
// //     if (
// //       !window.confirm(
// //         "Approve this member? A congratulatory email will be sent."
// //       )
// //     )
// //       return;

// //     try {
// //       setProcessing(true);
// //       await approveMembershipMember(id);
// //       toast.success("Member approved successfully. Approval email sent.");
// //       fetchEnquiry();
// //     } catch (error) {
// //       toast.error(
// //         error.response?.data?.message || "Approval failed."
// //       );
// //     } finally {
// //       setProcessing(false);
// //     }
// //   };

// //   // Simple status update (no email) - For manual status changes
// //   const handleStatusUpdate = async (newStatus) => {
// //     if (
// //       !window.confirm(
// //         `Change status to "${newStatus}"? Note: No email will be sent for manual status changes.`
// //       )
// //     )
// //       return;

// //     try {
// //       setProcessing(true);
// //       await updateMembershipEnquiryStatus(id, { status: newStatus });
// //       toast.success(`Status updated to ${newStatus}.`);
// //       fetchEnquiry();
// //     } catch (error) {
// //       toast.error(
// //         error.response?.data?.message || "Unable to update status."
// //       );
// //     } finally {
// //       setProcessing(false);
// //     }
// //   };

// //   const handleDelete = async () => {
// //     if (
// //       !window.confirm(
// //         "Delete this enquiry? This action cannot be undone."
// //       )
// //     )
// //       return;

// //     try {
// //       await deleteMembershipEnquiry(id);
// //       toast.success("Deleted successfully.");
// //       navigate("/admin/membership-enquiries");
// //     } catch (error) {
// //       toast.error(
// //         error.response?.data?.message || "Delete failed."
// //       );
// //     }
// //   };

// //   if (loading) {
// //     return (
// //       <div className="p-6 flex justify-center items-center min-h-screen">
// //         <div className="text-center">
// //           <Loader size={40} className="animate-spin mx-auto mb-4 text-blue-600" />
// //           <p className="text-gray-600">Loading enquiry details...</p>
// //         </div>
// //       </div>
// //     );
// //   }

// //   if (!enquiry) {
// //     return (
// //       <div className="p-6">
// //         <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
// //           <AlertCircle size={48} className="mx-auto mb-4 text-yellow-600" />
// //           <h3 className="text-lg font-semibold text-yellow-800 mb-2">No Enquiry Found</h3>
// //           <p className="text-yellow-600 mb-4">The membership enquiry you're looking for doesn't exist.</p>
// //           <button
// //             onClick={() => navigate("/admin/membership-enquiries")}
// //             className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700"
// //           >
// //             Back to Enquiries
// //           </button>
// //         </div>
// //       </div>
// //     );
// //   }

// //   const statusColors = {
// //     NEW: "bg-blue-100 text-blue-800 border-blue-300",
// //     UNDER_REVIEW: "bg-yellow-100 text-yellow-800 border-yellow-300",
// //     REGISTRATION_SENT: "bg-purple-100 text-purple-800 border-purple-300",
// //     REGISTRATION_SUBMITTED: "bg-indigo-100 text-indigo-800 border-indigo-300",
// //     CHANGES_REQUESTED: "bg-orange-100 text-orange-800 border-orange-300",
// //     APPROVED: "bg-green-100 text-green-800 border-green-300",
// //     REJECTED: "bg-red-100 text-red-800 border-red-300",
// //   };

// //   return (
// //     <div className="p-6 max-w-7xl mx-auto">
// //       {/* Header */}
// //       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
// //         <button
// //           onClick={() => navigate("/admin/membership-enquiries")}
// //           className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
// //         >
// //           <ArrowLeft size={18} />
// //           Back to Enquiries
// //         </button>

// //         <button
// //           onClick={handleDelete}
// //           className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-red-700 transition"
// //           disabled={processing}
// //         >
// //           <Trash2 size={18} />
// //           Delete Enquiry
// //         </button>
// //       </div>

// //       {/* Action Buttons - Each triggers specific email */}
// //       <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-200">
// //         <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
// //           <Send size={20} className="text-blue-600" />
// //           Workflow Actions (Each sends corresponding email)
// //         </h3>

// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
// //           {/* Start Review - Sends "Under Review" email */}
// //           <button
// //             onClick={handleStartReview}
// //             disabled={
// //               processing ||
// //               enquiry.status === "UNDER_REVIEW" ||
// //               enquiry.status === "REGISTRATION_SENT" ||
// //               enquiry.status === "REGISTRATION_SUBMITTED" ||
// //               enquiry.status === "APPROVED"
// //             }
// //             className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition font-medium ${
// //               enquiry.status === "UNDER_REVIEW" ||
// //               enquiry.status === "REGISTRATION_SENT" ||
// //               enquiry.status === "REGISTRATION_SUBMITTED" ||
// //               enquiry.status === "APPROVED"
// //                 ? "bg-gray-200 text-gray-500 cursor-not-allowed"
// //                 : "bg-yellow-500 text-white hover:bg-yellow-600 shadow-sm"
// //             }`}
// //           >
// //             <Eye size={18} />
// //             Start Review
// //           </button>

// //           {/* Request Changes - Sends "Changes Required" email */}
// //           <button
// //             onClick={() => setShowRemarksInput(!showRemarksInput)}
// //             disabled={processing || enquiry.status === "APPROVED"}
// //             className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition font-medium ${
// //               enquiry.status === "APPROVED"
// //                 ? "bg-gray-200 text-gray-500 cursor-not-allowed"
// //                 : "bg-orange-500 text-white hover:bg-orange-600 shadow-sm"
// //             }`}
// //           >
// //             <AlertCircle size={18} />
// //             Request Changes
// //           </button>

// //           {/* Send Registration - Sends registration link email */}
// //           <button
// //             onClick={handleSendRegistration}
// //             disabled={
// //               processing ||
// //               enquiry.status === "NEW" ||
// //               enquiry.status === "REGISTRATION_SENT" ||
// //               enquiry.status === "REGISTRATION_SUBMITTED" ||
// //               enquiry.status === "APPROVED"
// //             }
// //             className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition font-medium ${
// //               enquiry.status === "NEW" ||
// //               enquiry.status === "REGISTRATION_SENT" ||
// //               enquiry.status === "REGISTRATION_SUBMITTED" ||
// //               enquiry.status === "APPROVED"
// //                 ? "bg-gray-200 text-gray-500 cursor-not-allowed"
// //                 : "bg-purple-500 text-white hover:bg-purple-600 shadow-sm"
// //             }`}
// //           >
// //             <Send size={18} />
// //             Send Registration
// //           </button>

// //           {/* Approve Member - Sends approval email */}
// //           <button
// //             onClick={handleApprove}
// //             disabled={
// //               processing ||
// //               enquiry.status === "APPROVED" ||
// //               enquiry.status === "NEW" ||
// //               enquiry.status === "UNDER_REVIEW"
// //             }
// //             className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition font-medium ${
// //               enquiry.status === "APPROVED" ||
// //               enquiry.status === "NEW" ||
// //               enquiry.status === "UNDER_REVIEW"
// //                 ? "bg-gray-200 text-gray-500 cursor-not-allowed"
// //                 : "bg-green-500 text-white hover:bg-green-600 shadow-sm"
// //             }`}
// //           >
// //             <UserCheck size={18} />
// //             Approve Member
// //           </button>
// //         </div>

// //         {/* Remarks Input for Change Request */}
// //         {showRemarksInput && (
// //           <div className="mt-4 p-4 bg-orange-50 border border-orange-200 rounded-lg">
// //             <label className="block text-sm font-semibold mb-2 text-orange-800">
// //               Remarks for Changes Required:
// //             </label>
// //             <textarea
// //               value={remarks}
// //               onChange={(e) => setRemarks(e.target.value)}
// //               placeholder="Describe what changes are needed for the applicant..."
// //               rows="3"
// //               className="w-full border border-orange-300 rounded-lg p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
// //             />
// //             <div className="flex gap-2">
// //               <button
// //                 onClick={handleRequestChanges}
// //                 disabled={processing || !remarks.trim()}
// //                 className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition"
// //               >
// //                 {processing ? (
// //                   <span className="flex items-center gap-2">
// //                     <Loader size={16} className="animate-spin" />
// //                     Sending...
// //                   </span>
// //                 ) : (
// //                   "Send Change Request"
// //                 )}
// //               </button>
// //               <button
// //                 onClick={() => {
// //                   setShowRemarksInput(false);
// //                   setRemarks("");
// //                 }}
// //                 className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
// //               >
// //                 Cancel
// //               </button>
// //             </div>
// //           </div>
// //         )}
// //       </div>

// //       {/* Main Card */}
// //       <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
// //         {/* Profile Section */}
// //         <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8 pb-6 border-b">
// //           <img
// //             src={
// //               enquiry.photo
// //                 ? `${import.meta.env.VITE_API_BASE_URL?.replace("/api", "")}/uploads/membership-photos/${enquiry.photo}`
// //                 : "https://placehold.co/200x200"
// //             }
// //             alt={enquiry.fullName}
// //             className="w-36 h-36 rounded-full object-cover border-4 border-gray-200 shadow-md"
// //             onError={(e) => {
// //               e.target.src = "https://placehold.co/200x200";
// //             }}
// //           />

// //           <div className="flex-grow text-center md:text-left">
// //             <div className="flex flex-col md:flex-row items-center gap-3 mb-2">
// //               <h2 className="text-2xl font-bold text-gray-900">{enquiry.fullName}</h2>
// //               <span
// //                 className={`px-3 py-1 rounded-full text-sm font-semibold border ${
// //                   statusColors[enquiry.status] || "bg-gray-100 text-gray-800 border-gray-300"
// //                 }`}
// //               >
// //                 {enquiry.status?.replace(/_/g, " ") || "NEW"}
// //               </span>
// //             </div>

// //             {enquiry.stageName && (
// //               <p className="text-purple-600 font-medium mb-2 flex items-center justify-center md:justify-start gap-2">
// //                 <FileText size={16} />
// //                 Stage Name: {enquiry.stageName}
// //               </p>
// //             )}

// //             <p className="text-gray-500 flex items-center justify-center md:justify-start gap-2">
// //               ✉️ {enquiry.email}
// //             </p>
// //             <p className="text-gray-500 flex items-center justify-center md:justify-start gap-2">
// //               📱 {enquiry.mobile}
// //             </p>
// //             <p className="text-gray-500 flex items-center justify-center md:justify-start gap-2">
// //               📍 {enquiry.city}, {enquiry.country}
// //             </p>

// //             {enquiry.registrationToken && (
// //               <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg inline-block">
// //                 <p className="text-sm text-blue-800">
// //                   <strong>Registration Token:</strong>{" "}
// //                   <code className="bg-blue-100 px-2 py-1 rounded">{enquiry.registrationToken}</code>
// //                 </p>
// //                 <p className="text-sm text-blue-600 mt-1">
// //                   <strong>Expires:</strong>{" "}
// //                   {enquiry.tokenExpiry
// //                     ? new Date(enquiry.tokenExpiry).toLocaleDateString("en-US", {
// //                         year: "numeric",
// //                         month: "long",
// //                         day: "numeric",
// //                       })
// //                     : "N/A"}
// //                 </p>
// //               </div>
// //             )}
// //           </div>
// //         </div>

// //         {/* Manual Status Update */}
// //         <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
// //           <label className="font-semibold block mb-2 text-gray-700 flex items-center gap-2">
// //             <Clock size={18} />
// //             Manual Status Update (No email sent)
// //           </label>
// //           <select
// //             value={enquiry.status}
// //             onChange={(e) => handleStatusUpdate(e.target.value)}
// //             className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             disabled={processing}
// //           >
// //             <option value="NEW">NEW</option>
// //             <option value="UNDER_REVIEW">UNDER REVIEW</option>
// //             <option value="REGISTRATION_SENT">REGISTRATION SENT</option>
// //             <option value="REGISTRATION_SUBMITTED">REGISTRATION SUBMITTED</option>
// //             <option value="CHANGES_REQUESTED">CHANGES REQUESTED</option>
// //             <option value="APPROVED">APPROVED</option>
// //             <option value="REJECTED">REJECTED</option>
// //           </select>
// //           <p className="text-sm text-gray-500 mt-2 flex items-center gap-2">
// //             <AlertCircle size={14} />
// //             Use action buttons above to send emails. Manual status changes don't trigger emails.
// //           </p>
// //         </div>

// //         {/* Details Grid */}
// //         <div className="mb-8">
// //           <h3 className="font-semibold text-lg mb-4 text-gray-900">Personal Information</h3>
// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
// //             <Info label="Gender" value={enquiry.gender} />
// //             <Info
// //               label="Date of Birth"
// //               value={
// //                 enquiry.dateOfBirth
// //                   ? new Date(enquiry.dateOfBirth).toLocaleDateString("en-US", {
// //                       year: "numeric",
// //                       month: "long",
// //                       day: "numeric",
// //                     })
// //                   : "-"
// //               }
// //             />
// //             <Info label="Occupation" value={enquiry.occupation} />
// //             <Info label="Membership Type" value={enquiry.membershipType} />
// //             <Info label="Dance Style" value={enquiry.danceStyle} />
// //             <Info label="Experience" value={enquiry.experience} />
// //             <Info label="Address" value={enquiry.address} />
// //             <Info label="City" value={enquiry.city} />
// //             <Info label="State" value={enquiry.state} />
// //             <Info label="Country" value={enquiry.country} />
// //             <Info label="Postal Code" value={enquiry.postalCode} />
// //           </div>
// //         </div>

// //         {/* Social Links */}
// //         {enquiry.socialLinks && 
// //          (enquiry.socialLinks.instagram || 
// //           enquiry.socialLinks.youtube || 
// //           enquiry.socialLinks.facebook || 
// //           enquiry.socialLinks.twitter || 
// //           enquiry.socialLinks.website) && (
// //           <div className="mb-8">
// //             <h3 className="font-semibold text-lg mb-4 text-gray-900">Social Links & Online Presence</h3>
// //             <div className="grid md:grid-cols-2 gap-3">
// //               {enquiry.socialLinks.instagram && (
// //                 <div className="flex items-center gap-3 p-3 bg-pink-50 border border-pink-200 rounded-lg">
// //                   <span className="font-medium text-pink-700">Instagram:</span>
// //                   <span className="text-gray-600">{enquiry.socialLinks.instagram}</span>
// //                 </div>
// //               )}
// //               {enquiry.socialLinks.youtube && (
// //                 <div className="flex items-center gap-3 p-3 bg-red-50 border border-red-200 rounded-lg">
// //                   <span className="font-medium text-red-700">YouTube:</span>
// //                   <span className="text-gray-600">{enquiry.socialLinks.youtube}</span>
// //                 </div>
// //               )}
// //               {enquiry.socialLinks.facebook && (
// //                 <div className="flex items-center gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
// //                   <span className="font-medium text-blue-700">Facebook:</span>
// //                   <span className="text-gray-600">{enquiry.socialLinks.facebook}</span>
// //                 </div>
// //               )}
// //               {enquiry.socialLinks.twitter && (
// //                 <div className="flex items-center gap-3 p-3 bg-sky-50 border border-sky-200 rounded-lg">
// //                   <span className="font-medium text-sky-700">Twitter/X:</span>
// //                   <span className="text-gray-600">{enquiry.socialLinks.twitter}</span>
// //                 </div>
// //               )}
// //               {enquiry.socialLinks.website && (
// //                 <div className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-200 rounded-lg">
// //                   <span className="font-medium text-gray-700">Website:</span>
// //                   <a
// //                     href={enquiry.socialLinks.website}
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="text-blue-600 hover:underline truncate"
// //                   >
// //                     {enquiry.socialLinks.website}
// //                   </a>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         )}

// //         {/* Biography */}
// //         {enquiry.biography && (
// //           <div className="mb-8">
// //             <h3 className="font-semibold text-lg mb-2 text-gray-900">Biography</h3>
// //             <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 whitespace-pre-wrap text-gray-700 leading-relaxed">
// //               {enquiry.biography}
// //             </div>
// //           </div>
// //         )}

// //         {/* Remarks */}
// //         {enquiry.remarks && (
// //           <div className="mb-8">
// //             <h3 className="font-semibold text-lg mb-2 text-orange-600 flex items-center gap-2">
// //               <AlertCircle size={20} />
// //               Remarks
// //             </h3>
// //             <div className="border border-orange-200 rounded-lg p-4 bg-orange-50 text-gray-700">
// //               {enquiry.remarks}
// //             </div>
// //           </div>
// //         )}

// //         {/* Message */}
// //         <div>
// //           <h3 className="font-semibold text-lg mb-2 text-gray-900">Message from Applicant</h3>
// //           <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 whitespace-pre-wrap text-gray-700 leading-relaxed">
// //             {enquiry.message || "No message provided."}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const Info = ({ label, value }) => (
// //   <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
// //     <p className="text-sm text-gray-500 font-medium mb-1">{label}</p>
// //     <p className="font-medium text-gray-800">{value || "-"}</p>
// //   </div>
// // );

// // export default ViewMembershipEnquiry;





















// // import { useEffect, useState } from "react";
// // import { useNavigate, useParams } from "react-router-dom";
// // import toast from "react-hot-toast";
// // import {
// //   ArrowLeft,
// //   Trash2,
// //   Eye,
// //   AlertCircle,
// //   UserCheck,
// //   CreditCard,
// //   CheckCircle2,
// //   Loader,
// //   FileText,
// //   Clock,
// // } from "lucide-react";

// // import {
// //   getMembershipEnquiryById,
// //   updateMembershipEnquiryStatus,
// //   deleteMembershipEnquiry,
// //   startMembershipReview,
// //   requestMembershipChanges,
// //   sendSepaConsentForm,
// //   approveMembershipMember,
// // } from "../../../api/membershipEnquiry.api";

// // const ViewMembershipEnquiry = () => {
// //   const { id } = useParams();
// //   const navigate = useNavigate();

// //   const [loading, setLoading] = useState(true);
// //   const [enquiry, setEnquiry] = useState(null);
// //   const [remarks, setRemarks] = useState("");
// //   const [showRemarksInput, setShowRemarksInput] = useState(false);
// //   const [processing, setProcessing] = useState(false);

// //   const fetchEnquiry = async () => {
// //     try {
// //       setLoading(true);
// //       const res = await getMembershipEnquiryById(id);
// //       const data =
// //         res.data?.data?.membershipEnquiry ||
// //         res.data?.data ||
// //         res.data?.membershipEnquiry;
// //       setEnquiry(data);
// //     } catch (error) {
// //       toast.error(error.response?.data?.message || "Failed to fetch enquiry.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchEnquiry();
// //   }, [id]);

// //   // ✅ Step 1: Start Review → UNDER_REVIEW
// //   const handleStartReview = async () => {
// //     if (!window.confirm("Move application to 'Under Review'? An email will be sent to the applicant.")) return;
// //     try {
// //       setProcessing(true);
// //       await startMembershipReview(id);
// //       toast.success("Application moved to Under Review. Email sent!");
// //       fetchEnquiry();
// //     } catch (error) {
// //       toast.error(error.response?.data?.message || "Failed to start review.");
// //     } finally {
// //       setProcessing(false);
// //     }
// //   };

// //   // ✅ Step 2: Send SEPA Consent → SEPA_CONSENT_SENT
// //   const handleSendSepaConsent = async () => {
// //     if (!window.confirm("Send SEPA Direct Debit Mandate to this member? They will receive an email with a link to submit their bank details.")) return;
// //     try {
// //       setProcessing(true);
// //       await sendSepaConsentForm(id);
// //       toast.success("SEPA consent form sent to member!");
// //       fetchEnquiry();
// //     } catch (error) {
// //       toast.error(error.response?.data?.message || "Failed to send SEPA consent.");
// //     } finally {
// //       setProcessing(false);
// //     }
// //   };

// //   // ✅ Step 4: Final Approve → APPROVED
// //   const handleApprove = async () => {
// //     if (!window.confirm("Give final approval to this member? A congratulations email with Member ID will be sent.")) return;
// //     try {
// //       setProcessing(true);
// //       await approveMembershipMember(id);
// //       toast.success("🎉 Member approved! Congratulations email sent.");
// //       fetchEnquiry();
// //     } catch (error) {
// //       toast.error(error.response?.data?.message || "Approval failed.");
// //     } finally {
// //       setProcessing(false);
// //     }
// //   };

// //   // ✅ Request Changes → CHANGES_REQUESTED
// //   const handleRequestChanges = async () => {
// //     if (!remarks.trim()) {
// //       toast.error("Please enter remarks for the changes required.");
// //       return;
// //     }
// //     if (!window.confirm("Send change request to applicant?")) return;
// //     try {
// //       setProcessing(true);
// //       await requestMembershipChanges(id, { remarks });
// //       toast.success("Change request sent to applicant.");
// //       setRemarks("");
// //       setShowRemarksInput(false);
// //       fetchEnquiry();
// //     } catch (error) {
// //       toast.error(error.response?.data?.message || "Failed to request changes.");
// //     } finally {
// //       setProcessing(false);
// //     }
// //   };

// //   // Manual status update (no email)
// //   const handleStatusUpdate = async (newStatus) => {
// //     if (!window.confirm(`Change status to "${newStatus}"? Note: No email will be sent.`)) return;
// //     try {
// //       setProcessing(true);
// //       await updateMembershipEnquiryStatus(id, { status: newStatus });
// //       toast.success(`Status updated to ${newStatus}.`);
// //       fetchEnquiry();
// //     } catch (error) {
// //       toast.error(error.response?.data?.message || "Unable to update status.");
// //     } finally {
// //       setProcessing(false);
// //     }
// //   };

// //   const handleDelete = async () => {
// //     if (!window.confirm("Delete this enquiry? This action cannot be undone.")) return;
// //     try {
// //       await deleteMembershipEnquiry(id);
// //       toast.success("Deleted successfully.");
// //       navigate("/admin/membership-enquiries");
// //     } catch (error) {
// //       toast.error(error.response?.data?.message || "Delete failed.");
// //     }
// //   };

// //   if (loading) {
// //     return (
// //       <div className="p-6 flex justify-center items-center min-h-screen">
// //         <div className="text-center">
// //           <Loader size={40} className="animate-spin mx-auto mb-4 text-blue-600" />
// //           <p className="text-gray-600">Loading enquiry details...</p>
// //         </div>
// //       </div>
// //     );
// //   }

// //   if (!enquiry) {
// //     return (
// //       <div className="p-6">
// //         <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
// //           <AlertCircle size={48} className="mx-auto mb-4 text-yellow-600" />
// //           <h3 className="text-lg font-semibold text-yellow-800 mb-2">No Enquiry Found</h3>
// //           <button
// //             onClick={() => navigate("/admin/membership-enquiries")}
// //             className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700"
// //           >
// //             Back to Enquiries
// //           </button>
// //         </div>
// //       </div>
// //     );
// //   }

// //   const statusColors = {
// //     NEW: "bg-blue-100 text-blue-800 border-blue-300",
// //     UNDER_REVIEW: "bg-yellow-100 text-yellow-800 border-yellow-300",
// //     SEPA_CONSENT_SENT: "bg-teal-100 text-teal-800 border-teal-300",
// //     SEPA_CONSENT_RECEIVED: "bg-cyan-100 text-cyan-800 border-cyan-300",
// //     CHANGES_REQUESTED: "bg-orange-100 text-orange-800 border-orange-300",
// //     APPROVED: "bg-green-100 text-green-800 border-green-300",
// //     REJECTED: "bg-red-100 text-red-800 border-red-300",
// //   };

// //   // Workflow step calculation
// //   const currentStep = 
// //     enquiry.status === "NEW" ? 0 :
// //     enquiry.status === "UNDER_REVIEW" ? 1 :
// //     enquiry.status === "SEPA_CONSENT_SENT" ? 2 :
// //     enquiry.status === "SEPA_CONSENT_RECEIVED" ? 3 :
// //     enquiry.status === "APPROVED" ? 4 : 0;

// //   const workflowSteps = [
// //     { label: "New", icon: FileText },
// //     { label: "Under Review", icon: Eye },
// //     { label: "SEPA Sent", icon: CreditCard },
// //     { label: "SEPA Received", icon: CheckCircle2 },
// //     { label: "Approved", icon: UserCheck },
// //   ];

// //   return (
// //     <div className="p-6 max-w-7xl mx-auto">
// //       {/* Header */}
// //       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
// //         <button
// //           onClick={() => navigate("/admin/membership-enquiries")}
// //           className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
// //         >
// //           <ArrowLeft size={18} />
// //           Back to Enquiries
// //         </button>

// //         <button
// //           onClick={handleDelete}
// //           className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-red-700 transition"
// //           disabled={processing}
// //         >
// //           <Trash2 size={18} />
// //           Delete Enquiry
// //         </button>
// //       </div>

// //       {/* Workflow Progress */}
// //       <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-200">
// //         <h3 className="text-lg font-semibold mb-4">Membership Workflow</h3>
// //         <div className="flex items-center gap-2 flex-wrap">
// //           {workflowSteps.map((step, index) => (
// //             <div key={index} className="flex items-center gap-2">
// //               <div
// //                 className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium ${
// //                   index <= currentStep
// //                     ? "bg-green-100 text-green-800 border border-green-300"
// //                     : index === currentStep + 1
// //                     ? "bg-blue-50 text-blue-800 border border-blue-200"
// //                     : "bg-gray-50 text-gray-400 border border-gray-200"
// //                 }`}
// //               >
// //                 <step.icon size={16} />
// //                 {step.label}
// //               </div>
// //               {index < 4 && (
// //                 <div className={`w-8 h-0.5 ${index < currentStep ? "bg-green-400" : "bg-gray-300"}`} />
// //               )}
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Action Buttons */}
// //       <div className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-200">
// //         <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
// //           <CreditCard size={20} className="text-blue-600" />
// //           Workflow Actions (Each sends email)
// //         </h3>

// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
// //           {/* Step 1: Start Review */}
// //           <button
// //             onClick={handleStartReview}
// //             disabled={processing || enquiry.status !== "NEW"}
// //             className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition font-medium ${
// //               enquiry.status !== "NEW"
// //                 ? "bg-gray-200 text-gray-500 cursor-not-allowed"
// //                 : "bg-yellow-500 text-white hover:bg-yellow-600 shadow-sm"
// //             }`}
// //           >
// //             <Eye size={18} />
// //             Step 1: Start Review
// //           </button>

// //           {/* Step 2: Send SEPA Consent */}
// //           <button
// //             onClick={handleSendSepaConsent}
// //             disabled={processing || enquiry.status !== "UNDER_REVIEW"}
// //             className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition font-medium ${
// //               enquiry.status !== "UNDER_REVIEW"
// //                 ? "bg-gray-200 text-gray-500 cursor-not-allowed"
// //                 : "bg-teal-500 text-white hover:bg-teal-600 shadow-sm"
// //             }`}
// //           >
// //             <CreditCard size={18} />
// //             Step 2: Send SEPA Consent
// //           </button>

// //           {/* Step 4: Final Approval */}
// //           <button
// //             onClick={handleApprove}
// //             disabled={processing || enquiry.status !== "SEPA_CONSENT_RECEIVED"}
// //             className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition font-medium ${
// //               enquiry.status !== "SEPA_CONSENT_RECEIVED"
// //                 ? "bg-gray-200 text-gray-500 cursor-not-allowed"
// //                 : "bg-green-500 text-white hover:bg-green-600 shadow-sm"
// //             }`}
// //           >
// //             <UserCheck size={18} />
// //             Step 4: Final Approval
// //           </button>

// //           {/* Request Changes */}
// //           <button
// //             onClick={() => setShowRemarksInput(!showRemarksInput)}
// //             disabled={processing || enquiry.status === "APPROVED"}
// //             className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition font-medium ${
// //               enquiry.status === "APPROVED"
// //                 ? "bg-gray-200 text-gray-500 cursor-not-allowed"
// //                 : "bg-orange-500 text-white hover:bg-orange-600 shadow-sm"
// //             }`}
// //           >
// //             <AlertCircle size={18} />
// //             Request Changes
// //           </button>
// //         </div>

// //         {/* Remarks Input */}
// //         {showRemarksInput && (
// //           <div className="mt-4 p-4 bg-orange-50 border border-orange-200 rounded-lg">
// //             <label className="block text-sm font-semibold mb-2 text-orange-800">
// //               Remarks for Changes Required:
// //             </label>
// //             <textarea
// //               value={remarks}
// //               onChange={(e) => setRemarks(e.target.value)}
// //               placeholder="Describe what changes are needed..."
// //               rows="3"
// //               className="w-full border border-orange-300 rounded-lg p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
// //             />
// //             <div className="flex gap-2">
// //               <button
// //                 onClick={handleRequestChanges}
// //                 disabled={processing || !remarks.trim()}
// //                 className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition"
// //               >
// //                 {processing ? (
// //                   <span className="flex items-center gap-2">
// //                     <Loader size={16} className="animate-spin" />
// //                     Sending...
// //                   </span>
// //                 ) : (
// //                   "Send Change Request"
// //                 )}
// //               </button>
// //               <button
// //                 onClick={() => {
// //                   setShowRemarksInput(false);
// //                   setRemarks("");
// //                 }}
// //                 className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
// //               >
// //                 Cancel
// //               </button>
// //             </div>
// //           </div>
// //         )}
// //       </div>

// //       {/* Main Card */}
// //       <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
// //         {/* Profile Section */}
// //         <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8 pb-6 border-b">
// //           <img
// //             src={
// //               enquiry.photo
// //                 ? `${import.meta.env.VITE_API_BASE_URL?.replace("/api", "")}/uploads/memberships/${enquiry.photo}`
// //                 : "https://placehold.co/200x200"
// //             }
// //             alt={enquiry.fullName}
// //             className="w-36 h-36 rounded-full object-cover border-4 border-gray-200 shadow-md"
// //             onError={(e) => {
// //               e.target.src = "https://placehold.co/200x200";
// //             }}
// //           />

// //           <div className="flex-grow text-center md:text-left">
// //             <div className="flex flex-col md:flex-row items-center gap-3 mb-2">
// //               <h2 className="text-2xl font-bold text-gray-900">{enquiry.fullName}</h2>
// //               <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${statusColors[enquiry.status] || "bg-gray-100 text-gray-800 border-gray-300"}`}>
// //                 {enquiry.status?.replace(/_/g, " ") || "NEW"}
// //               </span>
// //             </div>

// //             {enquiry.stageName && (
// //               <p className="text-purple-600 font-medium mb-2 flex items-center justify-center md:justify-start gap-2">
// //                 <FileText size={16} />
// //                 Stage Name: {enquiry.stageName}
// //               </p>
// //             )}

// //             <p className="text-gray-500">✉️ {enquiry.email}</p>
// //             <p className="text-gray-500">📱 {enquiry.mobile}</p>
// //             <p className="text-gray-500">📍 {enquiry.city}, {enquiry.country}</p>

// //             {/* Member ID (after approval) */}
// //             {enquiry.memberId && (
// //               <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg inline-block">
// //                 <p className="text-sm text-green-800">
// //                   <strong>Member ID:</strong>{" "}
// //                   <code className="bg-green-100 px-2 py-1 rounded font-bold">{enquiry.memberId}</code>
// //                 </p>
// //               </div>
// //             )}

// //             {/* SEPA Token Info */}
// //             {enquiry.sepaToken && (
// //               <div className="mt-3 p-3 bg-teal-50 border border-teal-200 rounded-lg inline-block">
// //                 <p className="text-sm text-teal-800">
// //                   <strong>SEPA Token:</strong>{" "}
// //                   <code className="bg-teal-100 px-2 py-1 rounded">{enquiry.sepaToken}</code>
// //                 </p>
// //                 <p className="text-sm text-teal-600 mt-1">
// //                   <strong>Expires:</strong>{" "}
// //                   {enquiry.sepaTokenExpiry
// //                     ? new Date(enquiry.sepaTokenExpiry).toLocaleDateString("en-US", {
// //                         year: "numeric",
// //                         month: "long",
// //                         day: "numeric",
// //                       })
// //                     : "N/A"}
// //                 </p>
// //               </div>
// //             )}
// //           </div>
// //         </div>

// //         {/* SEPA Information */}
// //         {(enquiry.sepaConsentSent || enquiry.sepaConsentReceived) && (
// //           <div className="mb-8 p-4 bg-teal-50 border border-teal-200 rounded-lg">
// //             <h3 className="font-semibold text-lg mb-3 text-teal-800 flex items-center gap-2">
// //               <CreditCard size={20} />
// //               SEPA Direct Debit Information
// //             </h3>
// //             {enquiry.sepaConsentSent && (
// //               <p className="text-teal-600 text-sm">
// //                 ✅ SEPA Consent Sent: {new Date(enquiry.sepaConsentSentAt).toLocaleDateString("en-US", {
// //                   year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit"
// //                 })}
// //               </p>
// //             )}
// //             {enquiry.sepaConsentReceived && (
// //               <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
// //                 <p className="text-green-600 text-sm font-medium">
// //                   ✅ SEPA Consent Received: {new Date(enquiry.sepaConsentReceivedAt).toLocaleDateString("en-US", {
// //                     year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit"
// //                   })}
// //                 </p>
// //                 <div className="mt-2 grid md:grid-cols-2 gap-2">
// //                   <p className="text-sm"><strong>IBAN:</strong> {enquiry.iban}</p>
// //                   <p className="text-sm"><strong>Account Holder:</strong> {enquiry.accountHolder}</p>
// //                   {enquiry.bankName && <p className="text-sm"><strong>Bank:</strong> {enquiry.bankName}</p>}
// //                   {enquiry.sepaConsentFile && (
// //                     <p className="text-sm">
// //                       <strong>Mandate File:</strong>{" "}
// //                       <a href={`/uploads/sepa-consent/${enquiry.sepaConsentFile}`} target="_blank" className="text-blue-600 hover:underline">
// //                         View File
// //                       </a>
// //                     </p>
// //                   )}
// //                 </div>
// //               </div>
// //             )}
// //           </div>
// //         )}

// //         {/* Manual Status Update */}
// //         <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
// //           <label className="font-semibold block mb-2 text-gray-700 flex items-center gap-2">
// //             <Clock size={18} />
// //             Manual Status Update (No email sent)
// //           </label>
// //           <select
// //             value={enquiry.status}
// //             onChange={(e) => handleStatusUpdate(e.target.value)}
// //             className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             disabled={processing}
// //           >
// //             <option value="NEW">NEW</option>
// //             <option value="UNDER_REVIEW">UNDER REVIEW</option>
// //             <option value="SEPA_CONSENT_SENT">SEPA CONSENT SENT</option>
// //             <option value="SEPA_CONSENT_RECEIVED">SEPA CONSENT RECEIVED</option>
// //             <option value="CHANGES_REQUESTED">CHANGES REQUESTED</option>
// //             <option value="APPROVED">APPROVED</option>
// //             <option value="REJECTED">REJECTED</option>
// //           </select>
// //           <p className="text-sm text-gray-500 mt-2 flex items-center gap-2">
// //             <AlertCircle size={14} />
// //             Use action buttons above to send emails. Manual changes don't trigger emails.
// //           </p>
// //         </div>

// //         {/* Details Grid */}
// //         <div className="mb-8">
// //           <h3 className="font-semibold text-lg mb-4 text-gray-900">Personal Information</h3>
// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
// //             <Info label="Gender" value={enquiry.gender} />
// //             <Info label="Date of Birth" value={enquiry.dateOfBirth ? new Date(enquiry.dateOfBirth).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : "-"} />
// //             <Info label="Occupation" value={enquiry.occupation} />
// //             <Info label="Membership Type" value={enquiry.membershipType} />
// //             <Info label="Dance Style" value={enquiry.danceStyle} />
// //             <Info label="Experience" value={enquiry.experience} />
// //             <Info label="Address" value={enquiry.address} />
// //             <Info label="City" value={enquiry.city} />
// //             <Info label="State" value={enquiry.state} />
// //             <Info label="Country" value={enquiry.country} />
// //             <Info label="Postal Code" value={enquiry.postalCode} />
// //           </div>
// //         </div>

// //         {/* Social Links */}
// //         {enquiry.socialLinks && (enquiry.socialLinks.instagram || enquiry.socialLinks.youtube || enquiry.socialLinks.facebook || enquiry.socialLinks.twitter || enquiry.socialLinks.website) && (
// //           <div className="mb-8">
// //             <h3 className="font-semibold text-lg mb-4 text-gray-900">Social Links & Online Presence</h3>
// //             <div className="grid md:grid-cols-2 gap-3">
// //               {enquiry.socialLinks.instagram && <SocialInfo label="Instagram" value={enquiry.socialLinks.instagram} />}
// //               {enquiry.socialLinks.youtube && <SocialInfo label="YouTube" value={enquiry.socialLinks.youtube} />}
// //               {enquiry.socialLinks.facebook && <SocialInfo label="Facebook" value={enquiry.socialLinks.facebook} />}
// //               {enquiry.socialLinks.twitter && <SocialInfo label="Twitter/X" value={enquiry.socialLinks.twitter} />}
// //               {enquiry.socialLinks.website && <SocialInfo label="Website" value={enquiry.socialLinks.website} isLink />}
// //             </div>
// //           </div>
// //         )}

// //         {/* Biography */}
// //         {enquiry.biography && (
// //           <div className="mb-8">
// //             <h3 className="font-semibold text-lg mb-2 text-gray-900">Biography</h3>
// //             <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 whitespace-pre-wrap text-gray-700 leading-relaxed">{enquiry.biography}</div>
// //           </div>
// //         )}

// //         {/* Remarks */}
// //         {enquiry.remarks && (
// //           <div className="mb-8">
// //             <h3 className="font-semibold text-lg mb-2 text-orange-600 flex items-center gap-2"><AlertCircle size={20} />Remarks</h3>
// //             <div className="border border-orange-200 rounded-lg p-4 bg-orange-50 text-gray-700">{enquiry.remarks}</div>
// //           </div>
// //         )}

// //         {/* Message */}
// //         <div>
// //           <h3 className="font-semibold text-lg mb-2 text-gray-900">Message from Applicant</h3>
// //           <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 whitespace-pre-wrap text-gray-700 leading-relaxed">{enquiry.message || "No message provided."}</div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const Info = ({ label, value }) => (
// //   <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
// //     <p className="text-sm text-gray-500 font-medium mb-1">{label}</p>
// //     <p className="font-medium text-gray-800">{value || "-"}</p>
// //   </div>
// // );

// // const SocialInfo = ({ label, value, isLink }) => (
// //   <div className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-200 rounded-lg">
// //     <span className="font-medium text-gray-700">{label}:</span>
// //     {isLink ? (
// //       <a href={value} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline truncate">{value}</a>
// //     ) : (
// //       <span className="text-gray-600 truncate">{value}</span>
// //     )}
// //   </div>
// // );

// // export default ViewMembershipEnquiry;

// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import toast from "react-hot-toast";
// import {
//   ArrowLeft,
//   Trash2,
//   Eye,
//   AlertCircle,
//   UserCheck,
//   CreditCard,
//   CheckCircle2,
//   Loader,
//   FileText,
//   Clock,
//   Download,
//   ExternalLink,
//   Mail,
//   Phone,
//   MapPin,
//   Calendar,
//   User,
//   Briefcase,
//   Music,
//   BookOpen,
// } from "lucide-react";
// import "./ViewMembershipEnquiry.css";
// import {
//   getMembershipEnquiryById,
//   updateMembershipEnquiryStatus,
//   deleteMembershipEnquiry,
//   startMembershipReview,
//   requestMembershipChanges,
//   sendSepaConsentForm,
//   approveMembershipMember,
// } from "../../../api/membershipEnquiry.api";

// const ViewMembershipEnquiry = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [loading, setLoading] = useState(true);
//   const [enquiry, setEnquiry] = useState(null);
//   const [remarks, setRemarks] = useState("");
//   const [showRemarksInput, setShowRemarksInput] = useState(false);
//   const [processing, setProcessing] = useState(false);

//   const fetchEnquiry = async () => {
//     try {
//       setLoading(true);
//       const res = await getMembershipEnquiryById(id);
      
//       // Extract data from response
//       const data =
//         res.data?.data?.membershipEnquiry ||
//         res.data?.data ||
//         res.data?.membershipEnquiry ||
//         res.data;
      
//       console.log("Enquiry loaded:", data?.fullName, "| Status:", data?.status);
//       setEnquiry(data);
//     } catch (error) {
//       console.error("Fetch error:", error);
//       toast.error(error.response?.data?.message || "Failed to fetch enquiry.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchEnquiry();
//   }, [id]);

//   // Step 1: Start Review → UNDER_REVIEW
//   const handleStartReview = async () => {
//     if (!window.confirm("Move application to 'Under Review'? An email will be sent to the applicant.")) return;
//     try {
//       setProcessing(true);
//       await startMembershipReview(id);
//       toast.success("Application moved to Under Review. Email sent!");
//       fetchEnquiry();
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Failed to start review.");
//     } finally {
//       setProcessing(false);
//     }
//   };

//   // Step 2: Send SEPA Consent → SEPA_CONSENT_SENT
//   const handleSendSepaConsent = async () => {
//     if (!window.confirm("Send SEPA Direct Debit Mandate to this member?")) return;
//     try {
//       setProcessing(true);
//       await sendSepaConsentForm(id);
//       toast.success("SEPA consent form sent to member!");
//       fetchEnquiry();
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Failed to send SEPA consent.");
//     } finally {
//       setProcessing(false);
//     }
//   };

//   // Step 3: Final Approve → APPROVED
//   const handleApprove = async () => {
//     if (!window.confirm("Give final approval? A congratulations email with Member ID will be sent.")) return;
//     try {
//       setProcessing(true);
//       await approveMembershipMember(id);
//       toast.success("🎉 Member approved successfully!");
//       fetchEnquiry();
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Approval failed.");
//     } finally {
//       setProcessing(false);
//     }
//   };

//   // Request Changes
//   const handleRequestChanges = async () => {
//     if (!remarks.trim()) {
//       toast.error("Please enter remarks.");
//       return;
//     }
//     if (!window.confirm("Send change request to applicant?")) return;
//     try {
//       setProcessing(true);
//       await requestMembershipChanges(id, { remarks });
//       toast.success("Change request sent.");
//       setRemarks("");
//       setShowRemarksInput(false);
//       fetchEnquiry();
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Failed to request changes.");
//     } finally {
//       setProcessing(false);
//     }
//   };

//   // Manual status update (no email)
//   const handleStatusUpdate = async (newStatus) => {
//     if (!window.confirm(`Change status to "${newStatus}"? No email will be sent.`)) return;
//     try {
//       setProcessing(true);
//       await updateMembershipEnquiryStatus(id, { status: newStatus });
//       toast.success(`Status updated.`);
//       fetchEnquiry();
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Unable to update status.");
//     } finally {
//       setProcessing(false);
//     }
//   };

//   const handleDelete = async () => {
//     if (!window.confirm("Delete this enquiry? This cannot be undone.")) return;
//     try {
//       await deleteMembershipEnquiry(id);
//       toast.success("Deleted successfully.");
//       navigate("/admin/membership-enquiries");
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Delete failed.");
//     }
//   };

//   // ============ LOADING STATE ============
//   if (loading) {
//     return (
//       <div className="p-6 flex justify-center items-center min-h-[60vh]">
//         <div className="text-center">
//           <Loader size={48} className="animate-spin mx-auto mb-4 text-blue-600" />
//           <p className="text-gray-500">Loading enquiry details...</p>
//         </div>
//       </div>
//     );
//   }

//   // ============ NOT FOUND STATE ============
//   if (!enquiry) {
//     return (
//       <div className="p-6">
//         <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8 text-center max-w-md mx-auto">
//           <AlertCircle size={56} className="mx-auto mb-4 text-yellow-500" />
//           <h3 className="text-xl font-semibold text-yellow-800 mb-2">Enquiry Not Found</h3>
//           <p className="text-yellow-600 mb-6">The membership enquiry you're looking for doesn't exist or has been deleted.</p>
//           <button
//             onClick={() => navigate("/admin/membership-enquiries")}
//             className="bg-yellow-600 text-white px-6 py-2.5 rounded-lg hover:bg-yellow-700 transition font-medium"
//           >
//             Back to Enquiries
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // ============ STATUS CONFIG ============
//   const statusColors = {
//     NEW: "bg-blue-100 text-blue-800 border-blue-300",
//     UNDER_REVIEW: "bg-yellow-100 text-yellow-800 border-yellow-300",
//     SEPA_CONSENT_SENT: "bg-teal-100 text-teal-800 border-teal-300",
//     SEPA_CONSENT_RECEIVED: "bg-cyan-100 text-cyan-800 border-cyan-300",
//     CHANGES_REQUESTED: "bg-orange-100 text-orange-800 border-orange-300",
//     APPROVED: "bg-green-100 text-green-800 border-green-300",
//     REJECTED: "bg-red-100 text-red-800 border-red-300",
//   };

//   // Workflow step calculation
//   const currentStep = 
//     enquiry.status === "NEW" ? 0 :
//     enquiry.status === "UNDER_REVIEW" ? 1 :
//     enquiry.status === "SEPA_CONSENT_SENT" ? 2 :
//     enquiry.status === "SEPA_CONSENT_RECEIVED" ? 3 :
//     enquiry.status === "APPROVED" ? 4 : 0;

//   const workflowSteps = [
//     { label: "New", icon: FileText },
//     { label: "Under Review", icon: Eye },
//     { label: "SEPA Sent", icon: CreditCard },
//     { label: "SEPA Received", icon: CheckCircle2 },
//     { label: "Approved", icon: UserCheck },
//   ];

//   // ============ RENDER ============
//   return (
//     <div className="p-4 md:p-6 max-w-7xl mx-auto space-y-6">
      
//       {/* ============ HEADER ============ */}
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//         <button
//           onClick={() => navigate("/admin/membership-enquiries")}
//           className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition font-medium"
//         >
//           <ArrowLeft size={20} />
//           Back to Enquiries
//         </button>

//         <button
//           onClick={handleDelete}
//           className="bg-red-600 text-white px-4 py-2.5 rounded-lg flex items-center gap-2 hover:bg-red-700 transition font-medium disabled:opacity-50"
//           disabled={processing}
//         >
//           <Trash2 size={18} />
//           Delete Enquiry
//         </button>
//       </div>

//       {/* ============ WORKFLOW PROGRESS ============ */}
//       <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
//         <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Membership Workflow</h3>
//         <div className="flex items-center gap-1.5 flex-wrap">
//           {workflowSteps.map((step, index) => (
//             <div key={index} className="flex items-center gap-1.5">
//               <div
//                 className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold transition ${
//                   index <= currentStep
//                     ? "bg-green-100 text-green-700 border border-green-300"
//                     : index === currentStep + 1
//                     ? "bg-blue-50 text-blue-700 border border-blue-200"
//                     : "bg-gray-50 text-gray-400 border border-gray-200"
//                 }`}
//               >
//                 <step.icon size={14} />
//                 {step.label}
//               </div>
//               {index < 4 && (
//                 <div className={`w-6 h-0.5 rounded ${index < currentStep ? "bg-green-400" : "bg-gray-300"}`} />
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ============ ACTION BUTTONS ============ */}
//       <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
//         <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Workflow Actions (Each sends email)</h3>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
//           {/* Step 1 */}
//           <ActionButton
//             icon={<Eye size={18} />}
//             label="Step 1: Start Review"
//             onClick={handleStartReview}
//             disabled={processing || enquiry.status !== "NEW"}
//             active={enquiry.status === "NEW"}
//             color="yellow"
//           />

//           {/* Step 2 */}
//           <ActionButton
//             icon={<CreditCard size={18} />}
//             label="Step 2: Send SEPA Consent"
//             onClick={handleSendSepaConsent}
//             disabled={processing || enquiry.status !== "UNDER_REVIEW"}
//             active={enquiry.status === "UNDER_REVIEW"}
//             color="teal"
//           />

//           {/* Step 3: Final Approval */}
//           <ActionButton
//             icon={<UserCheck size={18} />}
//             label="Step 3: Final Approval"
//             onClick={handleApprove}
//             disabled={processing || enquiry.status !== "SEPA_CONSENT_RECEIVED"}
//             active={enquiry.status === "SEPA_CONSENT_RECEIVED"}
//             color="green"
//           />

//           {/* Request Changes */}
//           <ActionButton
//             icon={<AlertCircle size={18} />}
//             label="Request Changes"
//             onClick={() => setShowRemarksInput(!showRemarksInput)}
//             disabled={processing || enquiry.status === "APPROVED"}
//             active={enquiry.status !== "APPROVED"}
//             color="orange"
//           />
//         </div>

//         {/* Remarks Input */}
//         {showRemarksInput && (
//           <div className="mt-4 p-4 bg-orange-50 border border-orange-200 rounded-xl">
//             <label className="block text-sm font-semibold mb-2 text-orange-800">Remarks for applicant:</label>
//             <textarea
//               value={remarks}
//               onChange={(e) => setRemarks(e.target.value)}
//               placeholder="Describe what changes are needed..."
//               rows={3}
//               className="w-full border border-orange-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
//             />
//             <div className="flex gap-2 mt-3">
//               <button
//                 onClick={handleRequestChanges}
//                 disabled={processing || !remarks.trim()}
//                 className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition"
//               >
//                 {processing ? <Loader size={16} className="animate-spin inline mr-1" /> : null}
//                 Send Change Request
//               </button>
//               <button
//                 onClick={() => { setShowRemarksInput(false); setRemarks(""); }}
//                 className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* ============ MAIN DETAILS CARD ============ */}
//       <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 md:p-6">
        
//         {/* Profile Header */}
//         <div className="flex flex-col md:flex-row items-center md:items-start gap-5 mb-6 pb-6 border-b">
//           <img
//             src={
//               enquiry.photo
//                 ? `${import.meta.env.VITE_API_BASE_URL?.replace("/api", "")}/uploads/memberships/${enquiry.photo}`
//                 : "https://ui-avatars.com/api/?name=" + encodeURIComponent(enquiry.fullName) + "&size=144&background=8B1E3F&color=fff&bold=true"
//             }
//             alt={enquiry.fullName}
//             className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-gray-100 shadow-sm"
//             onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(enquiry.fullName) + "&size=144"; }}
//           />

//           <div className="flex-grow text-center md:text-left">
//             <div className="flex flex-col md:flex-row items-center gap-3 mb-2">
//               <h2 className="text-xl md:text-2xl font-bold text-gray-900">{enquiry.fullName}</h2>
//               <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusColors[enquiry.status] || "bg-gray-100 text-gray-800 border-gray-300"}`}>
//                 {enquiry.status?.replace(/_/g, " ") || "NEW"}
//               </span>
//             </div>

//             {enquiry.stageName && (
//               <p className="text-purple-600 font-medium text-sm flex items-center justify-center md:justify-start gap-1.5 mb-1">
//                 <Music size={14} /> {enquiry.stageName}
//               </p>
//             )}

//             <div className="space-y-1 text-sm text-gray-500 mt-2">
//               <p className="flex items-center justify-center md:justify-start gap-2"><Mail size={14} /> {enquiry.email}</p>
//               <p className="flex items-center justify-center md:justify-start gap-2"><Phone size={14} /> {enquiry.mobile}</p>
//               <p className="flex items-center justify-center md:justify-start gap-2"><MapPin size={14} /> {enquiry.city}, {enquiry.country}</p>
//             </div>

//             {/* Member ID Badge */}
//             {enquiry.memberId && (
//               <div className="mt-3 inline-block px-4 py-2 bg-green-50 border border-green-200 rounded-lg">
//                 <p className="text-sm text-green-800">
//                   <strong>Member ID:</strong>{" "}
//                   <code className="bg-green-100 px-2 py-0.5 rounded font-bold text-base">{enquiry.memberId}</code>
//                 </p>
//               </div>
//             )}

//             {/* SEPA Token Badge */}
//             {enquiry.sepaToken && !enquiry.sepaConsentReceived && (
//               <div className="mt-3 inline-block px-4 py-2 bg-teal-50 border border-teal-200 rounded-lg">
//                 <p className="text-xs text-teal-700">
//                   <strong>SEPA Token:</strong> <code className="bg-teal-100 px-1.5 py-0.5 rounded text-xs">{enquiry.sepaToken.substring(0, 8)}...</code>
//                 </p>
//                 <p className="text-xs text-teal-600 mt-0.5">
//                   Expires: {enquiry.sepaTokenExpiry ? new Date(enquiry.sepaTokenExpiry).toLocaleDateString() : "N/A"}
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* SEPA Information */}
//         {(enquiry.sepaConsentSent || enquiry.sepaConsentReceived) && (
//           <div className="mb-6 p-4 md:p-5 bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-xl">
//             <h3 className="font-semibold text-teal-800 mb-3 flex items-center gap-2">
//               <CreditCard size={18} />
//               SEPA Direct Debit Mandate
//             </h3>
            
//             {enquiry.sepaConsentSent && (
//               <div className="flex items-center gap-2 text-teal-700 text-sm mb-2">
//                 <CheckCircle2 size={16} className="text-teal-500" />
//                 <span>SEPA Consent Sent: <strong>{new Date(enquiry.sepaConsentSentAt).toLocaleString()}</strong></span>
//               </div>
//             )}
            
//             {enquiry.sepaConsentReceived && (
//               <div className="mt-3 p-4 bg-white border border-green-200 rounded-lg">
//                 <div className="flex items-center gap-2 text-green-700 text-sm font-medium mb-3">
//                   <CheckCircle2 size={16} className="text-green-500" />
//                   <span>SEPA Consent Received: <strong>{new Date(enquiry.sepaConsentReceivedAt).toLocaleString()}</strong></span>
//                 </div>
//                 <div className="grid sm:grid-cols-2 gap-3 text-sm">
//                   <InfoRow label="IBAN" value={enquiry.iban} mono />
//                   <InfoRow label="Account Holder" value={enquiry.accountHolder} />
//                   {enquiry.bankName && <InfoRow label="Bank Name" value={enquiry.bankName} />}
//                   {enquiry.sepaConsentFile && (
//                     <div className="sm:col-span-2">
//                       <span className="text-gray-500 text-xs">Mandate File:</span>
//                       <a
//                         href={`${import.meta.env.VITE_API_BASE_URL?.replace("/api", "")}/uploads/sepa-consent/${enquiry.sepaConsentFile}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="ml-2 text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center gap-1 text-sm"
//                       >
//                         <ExternalLink size={14} /> View Signed Mandate
//                       </a>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             )}
//           </div>
//         )}

//         {/* Manual Status Update */}
//         <div className="mb-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
//           <label className="font-semibold text-sm text-gray-700 flex items-center gap-2 mb-2">
//             <Clock size={16} />
//             Manual Status Update (No email sent)
//           </label>
//           <select
//             value={enquiry.status}
//             onChange={(e) => handleStatusUpdate(e.target.value)}
//             className="border border-gray-300 rounded-lg px-4 py-2 text-sm w-full sm:w-56 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
//             disabled={processing}
//           >
//             <option value="NEW">NEW</option>
//             <option value="UNDER_REVIEW">UNDER REVIEW</option>
//             <option value="SEPA_CONSENT_SENT">SEPA CONSENT SENT</option>
//             <option value="SEPA_CONSENT_RECEIVED">SEPA CONSENT RECEIVED</option>
//             <option value="CHANGES_REQUESTED">CHANGES REQUESTED</option>
//             <option value="APPROVED">APPROVED</option>
//             <option value="REJECTED">REJECTED</option>
//           </select>
//           <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
//             <AlertCircle size={12} /> Use action buttons above to send automated emails.
//           </p>
//         </div>

//         {/* Personal Information Grid */}
//         <Section title="Personal Information">
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
//             <InfoCard label="Gender" value={enquiry.gender} icon={<User size={14} />} />
//             <InfoCard label="Date of Birth" value={enquiry.dateOfBirth ? new Date(enquiry.dateOfBirth).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : "-"} icon={<Calendar size={14} />} />
//             <InfoCard label="Occupation" value={enquiry.occupation} icon={<Briefcase size={14} />} />
//             <InfoCard label="Membership Type" value={enquiry.membershipType} highlight />
//             <InfoCard label="Dance Style" value={enquiry.danceStyle} highlight />
//             <InfoCard label="Experience" value={enquiry.experience} />
//             <InfoCard label="Address" value={enquiry.address} />
//             <InfoCard label="City" value={enquiry.city} />
//             <InfoCard label="State" value={enquiry.state} />
//             <InfoCard label="Country" value={enquiry.country} />
//             <InfoCard label="Postal Code" value={enquiry.postalCode} />
//           </div>
//         </Section>

//         {/* Social Links */}
//         {enquiry.socialLinks && (enquiry.socialLinks.instagram || enquiry.socialLinks.youtube || enquiry.socialLinks.facebook || enquiry.socialLinks.twitter || enquiry.socialLinks.website) && (
//           <Section title="Social Links & Online Presence">
//             <div className="grid sm:grid-cols-2 gap-2">
//               {enquiry.socialLinks.instagram && <SocialBadge label="Instagram" value={enquiry.socialLinks.instagram} color="pink" />}
//               {enquiry.socialLinks.youtube && <SocialBadge label="YouTube" value={enquiry.socialLinks.youtube} color="red" />}
//               {enquiry.socialLinks.facebook && <SocialBadge label="Facebook" value={enquiry.socialLinks.facebook} color="blue" />}
//               {enquiry.socialLinks.twitter && <SocialBadge label="Twitter/X" value={enquiry.socialLinks.twitter} color="sky" />}
//               {enquiry.socialLinks.website && <SocialBadge label="Website" value={enquiry.socialLinks.website} color="gray" isLink />}
//             </div>
//           </Section>
//         )}

//         {/* Biography */}
//         {enquiry.biography && (
//           <Section title="Biography" icon={<BookOpen size={16} />}>
//             <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
//               {enquiry.biography}
//             </div>
//           </Section>
//         )}

//         {/* Remarks */}
//         {enquiry.remarks && (
//           <Section title="Remarks" className="border-orange-200">
//             <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-sm text-orange-800">
//               <AlertCircle size={16} className="inline mr-2 text-orange-500" />
//               {enquiry.remarks}
//             </div>
//           </Section>
//         )}

//         {/* Message */}
//         <Section title="Message from Applicant">
//           <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-700 leading-relaxed whitespace-pre-wrap min-h-[60px]">
//             {enquiry.message || <span className="text-gray-400 italic">No message provided.</span>}
//           </div>
//         </Section>
//       </div>
//     </div>
//   );
// };

// // ============ SUB-COMPONENTS ============

// const ActionButton = ({ icon, label, onClick, disabled, active, color }) => {
//   const colorMap = {
//     yellow: "bg-yellow-500 hover:bg-yellow-600 text-white",
//     teal: "bg-teal-500 hover:bg-teal-600 text-white",
//     green: "bg-green-500 hover:bg-green-600 text-white",
//     orange: "bg-orange-500 hover:bg-orange-600 text-white",
//   };

//   return (
//     <button
//       onClick={onClick}
//       disabled={disabled}
//       className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition shadow-sm ${
//         disabled
//           ? "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200"
//           : active
//           ? colorMap[color] + " shadow-md"
//           : "bg-gray-100 text-gray-500 cursor-not-allowed border border-gray-200"
//       }`}
//     >
//       {icon}
//       {label}
//     </button>
//   );
// };

// const Section = ({ title, icon, children, className }) => (
//   <div className={`mb-6 ${className || ""}`}>
//     <h3 className="font-semibold text-sm text-gray-700 uppercase tracking-wider mb-3 flex items-center gap-2">
//       {icon}
//       {title}
//     </h3>
//     {children}
//   </div>
// );

// const InfoCard = ({ label, value, icon, highlight }) => (
//   <div className={`p-3 rounded-lg border text-sm ${highlight ? "bg-purple-50 border-purple-200" : "bg-gray-50 border-gray-200"}`}>
//     <p className="text-xs text-gray-500 mb-0.5 flex items-center gap-1.5">
//       {icon}
//       {label}
//     </p>
//     <p className={`font-medium ${highlight ? "text-purple-800" : "text-gray-800"}`}>
//       {value || "-"}
//     </p>
//   </div>
// );

// const InfoRow = ({ label, value, mono }) => (
//   <div>
//     <span className="text-gray-500 text-xs">{label}:</span>
//     <p className={`text-sm font-medium mt-0.5 ${mono ? "font-mono" : ""}`}>{value || "-"}</p>
//   </div>
// );

// const SocialBadge = ({ label, value, color, isLink }) => {
//   const colorMap = {
//     pink: "bg-pink-50 border-pink-200 text-pink-800",
//     red: "bg-red-50 border-red-200 text-red-800",
//     blue: "bg-blue-50 border-blue-200 text-blue-800",
//     sky: "bg-sky-50 border-sky-200 text-sky-800",
//     gray: "bg-gray-50 border-gray-200 text-gray-800",
//   };

//   return (
//     <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-sm ${colorMap[color]}`}>
//       <span className="font-semibold text-xs">{label}:</span>
//       {isLink ? (
//         <a href={value} target="_blank" rel="noopener noreferrer" className="hover:underline truncate flex items-center gap-1">
//           {value} <ExternalLink size={12} />
//         </a>
//       ) : (
//         <span className="truncate">{value}</span>
//       )}
//     </div>
//   );
// };

// export default ViewMembershipEnquiry;




import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import {
  ArrowLeft,
  Trash2,
  Eye,
  AlertCircle,
  UserCheck,
  CreditCard,
  CheckCircle2,
  Loader,
  FileText,
  Clock,
  Download,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Calendar,
  User,
  Briefcase,
  Music,
  BookOpen,
} from "lucide-react";
import "./ViewMembershipEnquiry.css";
import {
  getMembershipEnquiryById,
  updateMembershipEnquiryStatus,
  deleteMembershipEnquiry,
  startMembershipReview,
  requestMembershipChanges,
  sendSepaConsentForm,
  approveMembershipMember,
} from "../../../api/membershipEnquiry.api";

const ViewMembershipEnquiry = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [enquiry, setEnquiry] = useState(null);
  const [remarks, setRemarks] = useState("");
  const [showRemarksInput, setShowRemarksInput] = useState(false);
  const [processing, setProcessing] = useState(false);

  const fetchEnquiry = async () => {
    try {
      setLoading(true);
      const res = await getMembershipEnquiryById(id);
      
      // Extract data from response
      const data =
        res.data?.data?.membershipEnquiry ||
        res.data?.data ||
        res.data?.membershipEnquiry ||
        res.data;
      
      console.log("Enquiry loaded:", data?.fullName, "| Status:", data?.status);
      setEnquiry(data);
    } catch (error) {
      console.error("Fetch error:", error);
      toast.error(error.response?.data?.message || "Failed to fetch enquiry.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiry();
  }, [id]);

  // Step 1: Start Review → UNDER_REVIEW
  const handleStartReview = async () => {
    if (!window.confirm("Move application to 'Under Review'? An email will be sent to the applicant.")) return;
    try {
      setProcessing(true);
      await startMembershipReview(id);
      toast.success("Application moved to Under Review. Email sent!");
      fetchEnquiry();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to start review.");
    } finally {
      setProcessing(false);
    }
  };

  // Step 2: Send SEPA Consent → SEPA_CONSENT_SENT
  const handleSendSepaConsent = async () => {
    if (!window.confirm("Send SEPA Direct Debit Mandate to this member?")) return;
    try {
      setProcessing(true);
      await sendSepaConsentForm(id);
      toast.success("SEPA consent form sent to member!");
      fetchEnquiry();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to send SEPA consent.");
    } finally {
      setProcessing(false);
    }
  };

  // Step 3: Final Approve → APPROVED
  const handleApprove = async () => {
    if (!window.confirm("Give final approval? A congratulations email with Member ID will be sent.")) return;
    try {
      setProcessing(true);
      await approveMembershipMember(id);
      toast.success("🎉 Member approved successfully!");
      fetchEnquiry();
    } catch (error) {
      toast.error(error.response?.data?.message || "Approval failed.");
    } finally {
      setProcessing(false);
    }
  };

  // Request Changes
  const handleRequestChanges = async () => {
    if (!remarks.trim()) {
      toast.error("Please enter remarks.");
      return;
    }
    if (!window.confirm("Send change request to applicant?")) return;
    try {
      setProcessing(true);
      await requestMembershipChanges(id, { remarks });
      toast.success("Change request sent.");
      setRemarks("");
      setShowRemarksInput(false);
      fetchEnquiry();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to request changes.");
    } finally {
      setProcessing(false);
    }
  };

  // Manual status update (no email)
  const handleStatusUpdate = async (newStatus) => {
    if (!window.confirm(`Change status to "${newStatus}"? No email will be sent.`)) return;
    try {
      setProcessing(true);
      await updateMembershipEnquiryStatus(id, { status: newStatus });
      toast.success(`Status updated.`);
      fetchEnquiry();
    } catch (error) {
      toast.error(error.response?.data?.message || "Unable to update status.");
    } finally {
      setProcessing(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Delete this enquiry? This cannot be undone.")) return;
    try {
      await deleteMembershipEnquiry(id);
      toast.success("Deleted successfully.");
      navigate("/admin/membership-enquiries");
    } catch (error) {
      toast.error(error.response?.data?.message || "Delete failed.");
    }
  };

  // ============ LOADING STATE ============
  if (loading) {
    return (
      <div className="vme-loading">
        <div className="vme-loading__content">
          <Loader size={48} className="vme-loading__spinner" />
          <p className="vme-loading__text">Loading enquiry details...</p>
        </div>
      </div>
    );
  }

  // ============ NOT FOUND STATE ============
  if (!enquiry) {
    return (
      <div className="vme-notfound">
        <div className="vme-notfound__card">
          <AlertCircle size={56} className="vme-notfound__icon" />
          <h3 className="vme-notfound__title">Enquiry Not Found</h3>
          <p className="vme-notfound__desc">The membership enquiry you're looking for doesn't exist or has been deleted.</p>
          <button
            onClick={() => navigate("/admin/membership-enquiries")}
            className="vme-notfound__btn"
          >
            Back to Enquiries
          </button>
        </div>
      </div>
    );
  }

  // ============ STATUS CONFIG ============
  const statusColors = {
    NEW: "vme-status--new",
    UNDER_REVIEW: "vme-status--review",
    SEPA_CONSENT_SENT: "vme-status--sepa-sent",
    SEPA_CONSENT_RECEIVED: "vme-status--sepa-received",
    CHANGES_REQUESTED: "vme-status--changes",
    APPROVED: "vme-status--approved",
    REJECTED: "vme-status--rejected",
  };

  // Workflow step calculation
  const currentStep = 
    enquiry.status === "NEW" ? 0 :
    enquiry.status === "UNDER_REVIEW" ? 1 :
    enquiry.status === "SEPA_CONSENT_SENT" ? 2 :
    enquiry.status === "SEPA_CONSENT_RECEIVED" ? 3 :
    enquiry.status === "APPROVED" ? 4 : 0;

  const workflowSteps = [
    { label: "New", icon: FileText },
    { label: "Under Review", icon: Eye },
    { label: "SEPA Sent", icon: CreditCard },
    { label: "SEPA Received", icon: CheckCircle2 },
    { label: "Approved", icon: UserCheck },
  ];

  // ============ RENDER ============
  return (
    <div className="vme-container">
      
      {/* ============ HEADER ============ */}
      <div className="vme-header">
        <button
          onClick={() => navigate("/admin/membership-enquiries")}
          className="vme-header__back"
        >
          <ArrowLeft size={20} />
          Back to Enquiries
        </button>

        <button
          onClick={handleDelete}
          className="vme-header__delete"
          disabled={processing}
        >
          <Trash2 size={18} />
          Delete Enquiry
        </button>
      </div>

      {/* ============ WORKFLOW PROGRESS ============ */}
      <div className="vme-workflow">
        <h3 className="vme-workflow__title">Membership Workflow</h3>
        <div className="vme-workflow__steps">
          {workflowSteps.map((step, index) => (
            <div key={index} className="vme-workflow__step-group">
              <div
                className={`vme-workflow__step ${
                  index <= currentStep
                    ? "vme-workflow__step--active"
                    : index === currentStep + 1
                    ? "vme-workflow__step--pending"
                    : "vme-workflow__step--inactive"
                }`}
              >
                <step.icon size={14} />
                {step.label}
              </div>
              {index < 4 && (
                <div className={`vme-workflow__connector ${
                  index < currentStep ? "vme-workflow__connector--active" : "vme-workflow__connector--inactive"
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ============ ACTION BUTTONS ============ */}
      <div className="vme-actions">
        <h3 className="vme-actions__title">Workflow Actions (Each sends email)</h3>
        
        <div className="vme-actions__grid">
          {/* Step 1 */}
          <button
            onClick={handleStartReview}
            disabled={processing || enquiry.status !== "NEW"}
            className={`vme-actions__btn vme-actions__btn--yellow ${
              enquiry.status === "NEW" ? "vme-actions__btn--active" : "vme-actions__btn--disabled"
            }`}
          >
            <Eye size={18} />
            Step 1: Start Review
          </button>

          {/* Step 2 */}
          <button
            onClick={handleSendSepaConsent}
            disabled={processing || enquiry.status !== "UNDER_REVIEW"}
            className={`vme-actions__btn vme-actions__btn--teal ${
              enquiry.status === "UNDER_REVIEW" ? "vme-actions__btn--active" : "vme-actions__btn--disabled"
            }`}
          >
            <CreditCard size={18} />
            Step 2: Send SEPA Consent
          </button>

          {/* Step 3: Final Approval */}
          <button
            onClick={handleApprove}
            disabled={processing || enquiry.status !== "SEPA_CONSENT_RECEIVED"}
            className={`vme-actions__btn vme-actions__btn--green ${
              enquiry.status === "SEPA_CONSENT_RECEIVED" ? "vme-actions__btn--active" : "vme-actions__btn--disabled"
            }`}
          >
            <UserCheck size={18} />
            Step 3: Final Approval
          </button>

          {/* Request Changes */}
          <button
            onClick={() => setShowRemarksInput(!showRemarksInput)}
            disabled={processing || enquiry.status === "APPROVED"}
            className={`vme-actions__btn vme-actions__btn--orange ${
              enquiry.status !== "APPROVED" ? "vme-actions__btn--active" : "vme-actions__btn--disabled"
            }`}
          >
            <AlertCircle size={18} />
            Request Changes
          </button>
        </div>

        {/* Email Status Indicator */}
        <div className="vme-actions__email-status">
          <Mail size={14} />
          <span>All action buttons above send automated emails to the applicant.</span>
        </div>

        {/* Remarks Input */}
        {showRemarksInput && (
          <div className="vme-remarks">
            <label className="vme-remarks__label">Remarks for applicant:</label>
            <textarea
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              placeholder="Describe what changes are needed..."
              rows={3}
              className="vme-remarks__input"
            />
            <div className="vme-remarks__actions">
              <button
                onClick={handleRequestChanges}
                disabled={processing || !remarks.trim()}
                className="vme-remarks__send"
              >
                {processing ? <Loader size={16} className="vme-remarks__spinner" /> : null}
                Send Change Request
              </button>
              <button
                onClick={() => { setShowRemarksInput(false); setRemarks(""); }}
                className="vme-remarks__cancel"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ============ MAIN DETAILS CARD ============ */}
      <div className="vme-details">
        
        {/* Profile Header */}
        <div className="vme-profile">
          <img
            src={
              enquiry.photo
                ? `${import.meta.env.VITE_API_BASE_URL?.replace("/api", "")}/uploads/memberships/${enquiry.photo}`
                : "https://ui-avatars.com/api/?name=" + encodeURIComponent(enquiry.fullName) + "&size=144&background=8B1E3F&color=fff&bold=true"
            }
            alt={enquiry.fullName}
            className="vme-profile__avatar"
            onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(enquiry.fullName) + "&size=144"; }}
          />

          <div className="vme-profile__info">
            <div className="vme-profile__header">
              <h2 className="vme-profile__name">{enquiry.fullName}</h2>
              <span className={`vme-profile__status ${statusColors[enquiry.status] || "vme-status--default"}`}>
                {enquiry.status?.replace(/_/g, " ") || "NEW"}
              </span>
            </div>

            {enquiry.stageName && (
              <p className="vme-profile__stage">
                <Music size={14} /> {enquiry.stageName}
              </p>
            )}

            <div className="vme-profile__contact">
              <p className="vme-profile__contact-item"><Mail size={14} /> {enquiry.email}</p>
              <p className="vme-profile__contact-item"><Phone size={14} /> {enquiry.mobile}</p>
              <p className="vme-profile__contact-item"><MapPin size={14} /> {enquiry.city}, {enquiry.country}</p>
            </div>

            {/* Member ID Badge */}
            {enquiry.memberId && (
              <div className="vme-profile__badge vme-profile__badge--green">
                <p className="vme-profile__badge-text">
                  <strong>Member ID:</strong>{" "}
                  <code className="vme-profile__badge-code">{enquiry.memberId}</code>
                </p>
              </div>
            )}

            {/* SEPA Token Badge */}
            {enquiry.sepaToken && !enquiry.sepaConsentReceived && (
              <div className="vme-profile__badge vme-profile__badge--teal">
                <p className="vme-profile__badge-text">
                  <strong>SEPA Token:</strong> <code className="vme-profile__badge-code">{enquiry.sepaToken.substring(0, 8)}...</code>
                </p>
                <p className="vme-profile__badge-sub">
                  Expires: {enquiry.sepaTokenExpiry ? new Date(enquiry.sepaTokenExpiry).toLocaleDateString() : "N/A"}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* SEPA Information */}
        {(enquiry.sepaConsentSent || enquiry.sepaConsentReceived) && (
          <div className="vme-sepa">
            <h3 className="vme-sepa__title">
              <CreditCard size={18} />
              SEPA Direct Debit Mandate
            </h3>
            
            {enquiry.sepaConsentSent && (
              <div className="vme-sepa__sent">
                <CheckCircle2 size={16} className="vme-sepa__sent-icon" />
                <span>SEPA Consent Sent: <strong>{new Date(enquiry.sepaConsentSentAt).toLocaleString()}</strong></span>
              </div>
            )}
            
            {enquiry.sepaConsentReceived && (
              <div className="vme-sepa__received">
                <div className="vme-sepa__received-header">
                  <CheckCircle2 size={16} className="vme-sepa__received-icon" />
                  <span>SEPA Consent Received: <strong>{new Date(enquiry.sepaConsentReceivedAt).toLocaleString()}</strong></span>
                </div>
                <div className="vme-sepa__grid">
                  <div className="vme-sepa__row">
                    <span className="vme-sepa__label">IBAN:</span>
                    <p className="vme-sepa__value vme-sepa__value--mono">{enquiry.iban}</p>
                  </div>
                  <div className="vme-sepa__row">
                    <span className="vme-sepa__label">Account Holder:</span>
                    <p className="vme-sepa__value">{enquiry.accountHolder}</p>
                  </div>
                  {enquiry.bankName && (
                    <div className="vme-sepa__row">
                      <span className="vme-sepa__label">Bank Name:</span>
                      <p className="vme-sepa__value">{enquiry.bankName}</p>
                    </div>
                  )}
                  {enquiry.sepaConsentFile && (
                    <div className="vme-sepa__row vme-sepa__row--full">
                      <span className="vme-sepa__label">Mandate File:</span>
                      <a
                        href={`${import.meta.env.VITE_API_BASE_URL?.replace("/api", "")}/uploads/sepa-consent/${enquiry.sepaConsentFile}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="vme-sepa__link"
                      >
                        <ExternalLink size={14} /> View Signed Mandate
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Manual Status Update */}
        <div className="vme-manual">
          <label className="vme-manual__label">
            <Clock size={16} />
            Manual Status Update (No email sent)
          </label>
          <select
            value={enquiry.status}
            onChange={(e) => handleStatusUpdate(e.target.value)}
            className="vme-manual__select"
            disabled={processing}
          >
            <option value="NEW">NEW</option>
            <option value="UNDER_REVIEW">UNDER REVIEW</option>
            <option value="SEPA_CONSENT_SENT">SEPA CONSENT SENT</option>
            <option value="SEPA_CONSENT_RECEIVED">SEPA CONSENT RECEIVED</option>
            <option value="CHANGES_REQUESTED">CHANGES REQUESTED</option>
            <option value="APPROVED">APPROVED</option>
            <option value="REJECTED">REJECTED</option>
          </select>
          <p className="vme-manual__note">
            <AlertCircle size={12} /> Use action buttons above to send automated emails.
          </p>
        </div>

        {/* Personal Information Grid */}
        <div className="vme-section">
          <h3 className="vme-section__title">
            <User size={16} />
            Personal Information
          </h3>
          <div className="vme-section__grid">
            <InfoCard label="Gender" value={enquiry.gender} icon={<User size={14} />} />
            <InfoCard label="Date of Birth" value={enquiry.dateOfBirth ? new Date(enquiry.dateOfBirth).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : "-"} icon={<Calendar size={14} />} />
            <InfoCard label="Occupation" value={enquiry.occupation} icon={<Briefcase size={14} />} />
            <InfoCard label="Membership Type" value={enquiry.membershipType} highlight />
            <InfoCard label="Dance Style" value={enquiry.danceStyle} highlight />
            <InfoCard label="Experience" value={enquiry.experience} />
            <InfoCard label="Address" value={enquiry.address} />
            <InfoCard label="City" value={enquiry.city} />
            <InfoCard label="State" value={enquiry.state} />
            <InfoCard label="Country" value={enquiry.country} />
            <InfoCard label="Postal Code" value={enquiry.postalCode} />
          </div>
        </div>

        {/* Social Links */}
        {enquiry.socialLinks && (enquiry.socialLinks.instagram || enquiry.socialLinks.youtube || enquiry.socialLinks.facebook || enquiry.socialLinks.twitter || enquiry.socialLinks.website) && (
          <div className="vme-section">
            <h3 className="vme-section__title">Social Links & Online Presence</h3>
            <div className="vme-section__social">
              {enquiry.socialLinks.instagram && (
                <SocialBadge label="Instagram" value={enquiry.socialLinks.instagram} color="pink" />
              )}
              {enquiry.socialLinks.youtube && (
                <SocialBadge label="YouTube" value={enquiry.socialLinks.youtube} color="red" />
              )}
              {enquiry.socialLinks.facebook && (
                <SocialBadge label="Facebook" value={enquiry.socialLinks.facebook} color="blue" />
              )}
              {enquiry.socialLinks.twitter && (
                <SocialBadge label="Twitter/X" value={enquiry.socialLinks.twitter} color="sky" />
              )}
              {enquiry.socialLinks.website && (
                <SocialBadge label="Website" value={enquiry.socialLinks.website} color="gray" isLink />
              )}
            </div>
          </div>
        )}

        {/* Biography */}
        {enquiry.biography && (
          <div className="vme-section">
            <h3 className="vme-section__title"><BookOpen size={16} /> Biography</h3>
            <div className="vme-section__bio">
              {enquiry.biography}
            </div>
          </div>
        )}

        {/* Remarks */}
        {enquiry.remarks && (
          <div className="vme-section vme-section--remarks">
            <h3 className="vme-section__title vme-section__title--orange">
              <AlertCircle size={16} /> Remarks
            </h3>
            <div className="vme-section__remarks">
              {enquiry.remarks}
            </div>
          </div>
        )}

        {/* Message */}
        <div className="vme-section">
          <h3 className="vme-section__title">Message from Applicant</h3>
          <div className="vme-section__message">
            {enquiry.message || <span className="vme-section__message-empty">No message provided.</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

// ============ SUB-COMPONENTS ============

const InfoCard = ({ label, value, icon, highlight }) => (
  <div className={`vme-info ${highlight ? "vme-info--highlight" : ""}`}>
    <p className="vme-info__label">
      {icon}
      {label}
    </p>
    <p className="vme-info__value">
      {value || "-"}
    </p>
  </div>
);

const SocialBadge = ({ label, value, color, isLink }) => {
  const colorMap = {
    pink: "vme-social--pink",
    red: "vme-social--red",
    blue: "vme-social--blue",
    sky: "vme-social--sky",
    gray: "vme-social--gray",
  };

  return (
    <div className={`vme-social ${colorMap[color] || "vme-social--gray"}`}>
      <span className="vme-social__label">{label}:</span>
      {isLink ? (
        <a href={value} target="_blank" rel="noopener noreferrer" className="vme-social__link">
          {value} <ExternalLink size={12} />
        </a>
      ) : (
        <span className="vme-social__value">{value}</span>
      )}
    </div>
  );
};

export default ViewMembershipEnquiry;