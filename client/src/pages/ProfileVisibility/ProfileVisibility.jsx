// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import { Eye, EyeOff, Upload, Camera, CheckCircle, Loader } from "lucide-react";
// import './ProfileVisibility.css'; 
// const ProfileVisibility = () => {
//   const { token } = useParams();
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);
//   const [submitting, setSubmitting] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const [enquiry, setEnquiry] = useState(null);
//   const [isPublic, setIsPublic] = useState(false);
//   const [biography, setBiography] = useState("");
//   const [stageName, setStageName] = useState("");
//   const [photo, setPhoto] = useState(null);
//   const [photoPreview, setPhotoPreview] = useState(null);

//   useEffect(() => {
//     // Validate token
//     fetch(`${import.meta.env.VITE_API_BASE_URL}/membership-enquiries/profile-token/${token}`)
//       .then(res => res.json())
//       .then(data => {
//         if (data.success) {
//           setEnquiry(data.data);
//           setIsPublic(data.data.isPublic || false);
//           setBiography(data.data.biography || "");
//           setStageName(data.data.stageName || "");
//         }
//       })
//       .catch(() => toast.error("Invalid or expired link"))
//       .finally(() => setLoading(false));
//   }, [token]);

//   const handlePhotoChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setPhoto(file);
//       setPhotoPreview(URL.createObjectURL(file));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitting(true);
    
//     const formData = new FormData();
//     formData.append("isPublic", isPublic);
//     formData.append("biography", biography);
//     formData.append("stageName", stageName);
//     if (photo) formData.append("photo", photo);

//     try {
//       await fetch(`${import.meta.env.VITE_API_BASE_URL}/membership-enquiries/profile-visibility/${token}`, {
//         method: "POST",
//         body: formData,
//       });
//       setSubmitted(true);
//       toast.success("Profile updated!");
//     } catch (err) {
//       toast.error("Failed to update");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   if (loading) return <div className="flex justify-center p-10"><Loader className="animate-spin" size={40} /></div>;

//   if (submitted) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
//         <div className="max-w-md text-center bg-white rounded-xl shadow-lg p-8">
//           <CheckCircle size={56} className="mx-auto text-green-500 mb-4" />
//           <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
//           <p className="text-gray-600">Your profile has been updated successfully.</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4">
//       <div className="max-w-xl mx-auto">
//         <div className="text-center mb-8">
//           <Camera size={48} className="mx-auto text-[#8B1E3F] mb-4" />
//           <h1 className="text-3xl font-bold text-gray-900">Complete Your Profile</h1>
//           <p className="text-gray-600 mt-2">Welcome, {enquiry?.fullName}</p>
//         </div>

//         <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
//           {/* Public/Private Toggle */}
//           <div className="mb-6">
//             <label className="block font-semibold mb-3">Profile Visibility</label>
//             <div className="flex gap-3">
//               <button
//                 type="button"
//                 onClick={() => setIsPublic(true)}
//                 className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-lg border-2 transition ${
//                   isPublic ? "border-[#8B1E3F] bg-[#fdf2f4] text-[#8B1E3F]" : "border-gray-200 text-gray-500"
//                 }`}
//               >
//                 <Eye size={20} /> Public
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setIsPublic(false)}
//                 className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-lg border-2 transition ${
//                   !isPublic ? "border-[#8B1E3F] bg-[#fdf2f4] text-[#8B1E3F]" : "border-gray-200 text-gray-500"
//                 }`}
//               >
//                 <EyeOff size={20} /> Private
//               </button>
//             </div>
//           </div>

//           {/* Photo Upload */}
//           <div className="mb-6">
//             <label className="block font-semibold mb-3">Profile Photo</label>
//             {photoPreview ? (
//               <div className="relative w-32 h-32 mx-auto">
//                 <img src={photoPreview} alt="Preview" className="w-full h-full object-cover rounded-full" />
//                 <button type="button" onClick={() => { setPhoto(null); setPhotoPreview(null); }} className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-6 h-6 text-xs">✕</button>
//               </div>
//             ) : (
//               <label className="flex flex-col items-center gap-2 p-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#8B1E3F]">
//                 <Upload size={24} />
//                 <span>Upload Photo</span>
//                 <input type="file" accept="image/*" onChange={handlePhotoChange} className="hidden" />
//               </label>
//             )}
//           </div>

//           {/* Stage Name */}
//           <div className="mb-4">
//             <label className="block font-semibold mb-2">Stage Name</label>
//             <input type="text" value={stageName} onChange={(e) => setStageName(e.target.value)} className="w-full p-3 border rounded-lg" placeholder="Your stage name" />
//           </div>

//           {/* Biography */}
//           <div className="mb-6">
//             <label className="block font-semibold mb-2">Biography</label>
//             <textarea value={biography} onChange={(e) => setBiography(e.target.value)} rows={4} className="w-full p-3 border rounded-lg" placeholder="Tell us about yourself..." />
//           </div>

//           <button type="submit" disabled={submitting} className="w-full py-3 bg-[#8B1E3F] text-white rounded-lg font-semibold hover:bg-[#6d1832] disabled:opacity-50">
//             {submitting ? "Saving..." : "Save Profile"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ProfileVisibility;

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { Eye, EyeOff, Loader, CheckCircle, Users, Star, Heart, Sparkles, Shield } from "lucide-react";
import "./ProfileVisibility.css";

const ProfileVisibility = () => {
  const { token } = useParams();
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [enquiry, setEnquiry] = useState(null);
  const [isPublic, setIsPublic] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const validateToken = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/membership-enquiries/profile-token/${token}`);
        const data = await res.json();
        if (data.success) {
          setEnquiry(data.data);
          setIsPublic(data.data.isPublic || false);
        } else {
          setError(data.message || "Invalid or expired link.");
        }
      } catch (err) {
        setError("Invalid or expired link. Please contact KITD for assistance.");
      } finally {
        setLoading(false);
      }
    };
    if (token) validateToken();
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("isPublic", isPublic);

      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/membership-enquiries/profile-visibility/${token}`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      
      if (data.success) {
        setSubmitted(true);
        toast.success("Profile visibility updated! 🎉");
      } else {
        toast.error(data.message || "Failed to update.");
      }
    } catch (err) {
      toast.error("Failed to submit. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // Loading
  if (loading) {
    return (
      <div className="pv-page">
        <div className="pv-loading">
          <Loader size={48} className="pv-loading__spinner" />
          <p>Loading your profile...</p>
        </div>
      </div>
    );
  }

  // Error
  if (error) {
    return (
      <div className="pv-page">
        <div className="pv-card pv-card--error">
          <Shield size={48} />
          <h2>Link Expired or Invalid</h2>
          <p>{error}</p>
          <p className="pv-help">Please contact <a href="mailto:membership@kitd.de">membership@kitd.de</a> for assistance.</p>
        </div>
      </div>
    );
  }

  // Submitted
  if (submitted) {
    return (
      <div className="pv-page">
        <div className="pv-card pv-card--success">
          <CheckCircle size={64} />
          <h2>Thank You, {enquiry?.fullName?.split(" ")[0]}! 🎉</h2>
          <p className="pv-success-text">
            Your profile is now <strong>{isPublic ? "Public" : "Private"}</strong>.
          </p>
          {isPublic ? (
            <p className="pv-success-desc">
              Your profile will be visible on the KITD website, inspiring fellow artists and community members.
            </p>
          ) : (
            <p className="pv-success-desc">
              Your privacy is respected. You can change this anytime by contacting KITD.
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="pv-page">
      <div className="pv-card">
        
        {/* Header */}
        <div className="pv-header">
          <div className="pv-header__icon">
            <Sparkles size={28} />
          </div>
          <h1>Welcome, {enquiry?.fullName?.split(" ")[0]}!</h1>
        </div>

        {/* Inspiring Content */}
        <div className="pv-inspire">
          <div className="pv-inspire__icon">
            <Users size={20} />
          </div>
          <div>
            <h3>Share Your Presence</h3>
            <p>
              Would you like your profile to be visible on the KITD website? 
              By making your profile <strong>Public</strong>, you can inspire fellow artists, 
              connect with the community, and showcase your dedication to Indian Classical Dance 
              across Germany.
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div className="pv-benefits">
          <div className="pv-benefit">
            <Users size={18} />
            <div>
              <strong>Connect with Artists</strong>
              <span>Be discovered by fellow dancers and teachers</span>
            </div>
          </div>
          <div className="pv-benefit">
            <Star size={18} />
            <div>
              <strong>Inspire Others</strong>
              <span>Your journey can motivate new learners</span>
            </div>
          </div>
          <div className="pv-benefit">
            <Heart size={18} />
            <div>
              <strong>Community Recognition</strong>
              <span>Be part of KITD's growing artist directory</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="pv-form-section">
            <h3 className="pv-form-title">
              <Eye size={18} /> Your Profile Visibility
            </h3>
            <p className="pv-form-desc">
              Choose whether your artist profile appears on the public KITD website. 
              You can change this setting later.
            </p>

            <div className="pv-toggle-group">
              <button
                type="button"
                onClick={() => setIsPublic(true)}
                className={`pv-toggle-btn ${isPublic ? 'pv-toggle-btn--active' : ''}`}
              >
                <Eye size={24} />
                <div>
                  <strong>Public Profile</strong>
                  <span>Visible on KITD website</span>
                </div>
              </button>
              <button
                type="button"
                onClick={() => setIsPublic(false)}
                className={`pv-toggle-btn ${!isPublic ? 'pv-toggle-btn--active' : ''}`}
              >
                <EyeOff size={24} />
                <div>
                  <strong>Private Profile</strong>
                  <span>Hidden from public view</span>
                </div>
              </button>
            </div>
          </div>

          <button type="submit" className="pv-submit" disabled={submitting}>
            {submitting ? (
              <><Loader size={18} className="pv-submit__spinner" /> Saving...</>
            ) : (
              "Save My Preference"
            )}
          </button>

          <p className="pv-note">
            <Shield size={14} /> You can change this setting anytime by contacting KITD at{" "}
            <a href="mailto:membership@kitd.de">membership@kitd.de</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ProfileVisibility;