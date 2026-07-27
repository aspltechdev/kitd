// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";

// const MemberForm = ({
//   initialValues = {},
//   onSubmit,
//   loading = false,
// }) => {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const photo = watch("photo");
//   const [preview, setPreview] = useState(null);

//   useEffect(() => {
//     if (initialValues) {
//       reset({
//         memberId: initialValues.memberId || "",
//         fullName: initialValues.fullName || "",
//         email: initialValues.email || "",
//         mobile: initialValues.mobile || "",
//         gender: initialValues.gender || "",
//         membershipType: initialValues.membershipType || "",
//         city: initialValues.city || "",
//         state: initialValues.state || "",
//         country: initialValues.country || "",
//         joinedDate: initialValues.joinedDate
//           ? initialValues.joinedDate.substring(0, 10)
//           : "",
//         expiryDate: initialValues.expiryDate
//           ? initialValues.expiryDate.substring(0, 10)
//           : "",
//         isActive:
//           initialValues.isActive === undefined
//             ? true
//             : initialValues.isActive,
//       });

//       if (initialValues.photo) {
//         setPreview(
//           `${import.meta.env.VITE_API_BASE_URL.replace(
//             "/api",
//             ""
//           )}/uploads/members/${initialValues.photo}`
//         );
//       }
//     }
//   }, [initialValues, reset]);

//   useEffect(() => {
//     if (photo && photo.length > 0) {
//       const file = photo[0];
//       setPreview(URL.createObjectURL(file));
//     }
//   }, [photo]);

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="bg-white rounded-xl shadow p-6 space-y-6"
//     >
//       {/* Photo */}

//       <div>
//         <label className="block font-medium mb-2">
//           Member Photo
//         </label>

//         <input
//           type="file"
//           accept="image/*"
//           {...register("photo")}
//         />

//         {preview && (
//           <img
//             src={preview}
//             alt="Preview"
//             className="mt-4 w-32 h-32 rounded-full object-cover border"
//           />
//         )}
//       </div>

//       {/* Member ID */}

//       <div>
//         <label className="block font-medium">
//           Member ID *
//         </label>

//         <input
//           {...register("memberId", {
//             required: "Member ID is required",
//           })}
//           className="w-full border rounded-lg p-3 mt-2"
//         />

//         <p className="text-red-500 text-sm">
//           {errors.memberId?.message}
//         </p>
//       </div>

//       {/* Full Name */}

//       <div>
//         <label className="block font-medium">
//           Full Name *
//         </label>

//         <input
//           {...register("fullName", {
//             required: "Full Name is required",
//           })}
//           className="w-full border rounded-lg p-3 mt-2"
//         />

//         <p className="text-red-500 text-sm">
//           {errors.fullName?.message}
//         </p>
//       </div>

//       {/* Email */}

//       <div>
//         <label className="block font-medium">
//           Email *
//         </label>

//         <input
//           type="email"
//           {...register("email", {
//             required: "Email is required",
//           })}
//           className="w-full border rounded-lg p-3 mt-2"
//         />

//         <p className="text-red-500 text-sm">
//           {errors.email?.message}
//         </p>
//       </div>

//       {/* Mobile */}

//       <div>
//         <label className="block font-medium">
//           Mobile *
//         </label>

//         <input
//           {...register("mobile", {
//             required: "Mobile Number is required",
//           })}
//           className="w-full border rounded-lg p-3 mt-2"
//         />

//         <p className="text-red-500 text-sm">
//           {errors.mobile?.message}
//         </p>
//       </div>

//       {/* Gender */}

//       <div>
//         <label className="block font-medium">
//           Gender
//         </label>

//         <select
//           {...register("gender")}
//           className="w-full border rounded-lg p-3 mt-2"
//         >
//           <option value="">Select Gender</option>
//           <option value="MALE">Male</option>
//           <option value="FEMALE">Female</option>
//           <option value="OTHER">Other</option>
//         </select>
//       </div>

//       {/* Membership Type */}

//       <div>
//         <label className="block font-medium">
//           Membership Type
//         </label>

//         <select
//           {...register("membershipType")}
//           className="w-full border rounded-lg p-3 mt-2"
//         >
//           <option value="">Select Membership</option>
//           <option value="STUDENT">Student</option>
//           <option value="INDIVIDUAL">Individual</option>
//           <option value="LIFETIME">Lifetime</option>
//           <option value="INSTITUTIONAL">Institutional</option>
//         </select>
//       </div>

//       {/* Address */}

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div>
//           <label className="block font-medium">
//             City
//           </label>

//           <input
//             {...register("city")}
//             className="w-full border rounded-lg p-3 mt-2"
//           />
//         </div>

//         <div>
//           <label className="block font-medium">
//             State
//           </label>

//           <input
//             {...register("state")}
//             className="w-full border rounded-lg p-3 mt-2"
//           />
//         </div>

//         <div>
//           <label className="block font-medium">
//             Country
//           </label>

//           <input
//             {...register("country")}
//             className="w-full border rounded-lg p-3 mt-2"
//           />
//         </div>
//       </div>

//       {/* Dates */}

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           <label className="block font-medium">
//             Joined Date
//           </label>

//           <input
//             type="date"
//             {...register("joinedDate")}
//             className="w-full border rounded-lg p-3 mt-2"
//           />
//         </div>

//         <div>
//           <label className="block font-medium">
//             Expiry Date
//           </label>

//           <input
//             type="date"
//             {...register("expiryDate")}
//             className="w-full border rounded-lg p-3 mt-2"
//           />
//         </div>
//       </div>

//       {/* Status */}

//       <div className="flex items-center gap-3">
//         <input
//           type="checkbox"
//           {...register("isActive")}
//         />

//         <label>Active Member</label>
//       </div>

//       {/* Submit */}

//       <button
//         type="submit"
//         disabled={loading}
//         className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg disabled:opacity-50"
//       >
//         {loading ? "Saving..." : "Save Member"}
//       </button>
//     </form>
//   );
// };

// export default MemberForm;


// src/pages/admin/Members/MemberForm.jsx

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Hash,
  Award,
  Upload,
  X,
  Image as ImageIcon,
  ToggleRight,
  ToggleLeft,
  Check,
  Users,
  Globe,
} from "lucide-react";

import "./MemberForm.css";

const MemberForm = ({
  initialValues = {},
  onSubmit,
  loading = false,
  isEdit = false,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      memberId: "",
      fullName: "",
      email: "",
      mobile: "",
      gender: "",
      membershipType: "",
      city: "",
      state: "",
      country: "",
      joinedDate: "",
      expiryDate: "",
      isActive: true,
    },
  });

  const photo = watch("photo");
  const isActive = watch("isActive", true);

  const [preview, setPreview] = useState(null);
  const [fileName, setFileName] = useState("");
  const [dragOver, setDragOver] = useState(false);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';
  const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

  useEffect(() => {
    if (initialValues && Object.keys(initialValues).length > 0) {
      reset({
        memberId: initialValues.memberId || "",
        fullName: initialValues.fullName || "",
        email: initialValues.email || "",
        mobile: initialValues.mobile || "",
        gender: initialValues.gender || "",
        membershipType: initialValues.membershipType || "",
        city: initialValues.city || "",
        state: initialValues.state || "",
        country: initialValues.country || "",
        joinedDate: initialValues.joinedDate ? initialValues.joinedDate.substring(0, 10) : "",
        expiryDate: initialValues.expiryDate ? initialValues.expiryDate.substring(0, 10) : "",
        isActive: initialValues.isActive !== undefined ? initialValues.isActive : true,
      });

      if (initialValues.photo) {
        setPreview(`${IMAGE_BASE_URL}/uploads/members/${initialValues.photo}`);
        setFileName(initialValues.photo);
      }
    }
  }, [initialValues, reset]);

  useEffect(() => {
    if (photo && photo.length > 0) {
      const file = photo[0];
      setPreview(URL.createObjectURL(file));
      setFileName(file.name);
    }
  }, [photo]);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      setValue("photo", files);
    }
  };

  const clearFile = () => {
    setPreview(null);
    setFileName("");
    setValue("photo", []);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="member-form"
    >
      <div className="member-form__grid">
        {/* Left Column - Main Fields */}
        <div className="member-form__main">
          {/* Member ID */}
          <div className="form-group">
            <label className="form-group__label">
              Member ID <span className="required">*</span>
            </label>
            <div className="form-group__input-wrapper">
              <Hash size={18} className="input-icon" />
              <input
                {...register("memberId", {
                  required: "Member ID is required",
                })}
                className={`form-group__input ${errors.memberId ? "error" : ""}`}
                placeholder="e.g., KITD-2026-001"
                disabled={loading}
              />
            </div>
            {errors.memberId && (
              <p className="form-group__error">{errors.memberId.message}</p>
            )}
          </div>

          {/* Full Name */}
          <div className="form-group">
            <label className="form-group__label">
              Full Name <span className="required">*</span>
            </label>
            <div className="form-group__input-wrapper">
              <User size={18} className="input-icon" />
              <input
                {...register("fullName", {
                  required: "Full Name is required",
                })}
                className={`form-group__input ${errors.fullName ? "error" : ""}`}
                placeholder="Enter full name"
                disabled={loading}
              />
            </div>
            {errors.fullName && (
              <p className="form-group__error">{errors.fullName.message}</p>
            )}
          </div>

          {/* Email & Mobile */}
          <div className="form-group form-group--inline">
            <div className="form-group__half">
              <label className="form-group__label">
                Email <span className="required">*</span>
              </label>
              <div className="form-group__input-wrapper">
                <Mail size={18} className="input-icon" />
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email format",
                    },
                  })}
                  className={`form-group__input ${errors.email ? "error" : ""}`}
                  placeholder="Enter email address"
                  disabled={loading}
                />
              </div>
              {errors.email && (
                <p className="form-group__error">{errors.email.message}</p>
              )}
            </div>
            <div className="form-group__half">
              <label className="form-group__label">
                Mobile <span className="required">*</span>
              </label>
              <div className="form-group__input-wrapper">
                <Phone size={18} className="input-icon" />
                <input
                  {...register("mobile", {
                    required: "Mobile Number is required",
                  })}
                  className={`form-group__input ${errors.mobile ? "error" : ""}`}
                  placeholder="Enter mobile number"
                  disabled={loading}
                />
              </div>
              {errors.mobile && (
                <p className="form-group__error">{errors.mobile.message}</p>
              )}
            </div>
          </div>

          {/* Gender & Membership Type */}
          <div className="form-group form-group--inline">
            <div className="form-group__half">
              <label className="form-group__label">Gender</label>
              <div className="form-group__input-wrapper">
                <User size={18} className="input-icon" />
                <select
                  {...register("gender")}
                  className="form-group__input form-group__select"
                  disabled={loading}
                >
                  <option value="">Select Gender</option>
                  <option value="MALE">Male</option>
                  <option value="FEMALE">Female</option>
                  <option value="OTHER">Other</option>
                </select>
              </div>
            </div>
            <div className="form-group__half">
              <label className="form-group__label">Membership Type</label>
              <div className="form-group__input-wrapper">
                <Award size={18} className="input-icon" />
                <select
                  {...register("membershipType")}
                  className="form-group__input form-group__select"
                  disabled={loading}
                >
                  <option value="">Select Membership</option>
                  <option value="STUDENT">Student</option>
                  <option value="INDIVIDUAL">Individual</option>
                  <option value="LIFETIME">Lifetime</option>
                  <option value="INSTITUTIONAL">Institutional</option>
                </select>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="form-group form-group--section">
            <label className="form-group__section-label">Address Information</label>
            <div className="form-group--inline">
              <div className="form-group__half">
                <div className="form-group__input-wrapper">
                  <MapPin size={18} className="input-icon" />
                  <input
                    {...register("city")}
                    className="form-group__input"
                    placeholder="City"
                    disabled={loading}
                  />
                </div>
              </div>
              <div className="form-group__half">
                <div className="form-group__input-wrapper">
                  <MapPin size={18} className="input-icon" />
                  <input
                    {...register("state")}
                    className="form-group__input"
                    placeholder="State"
                    disabled={loading}
                  />
                </div>
              </div>
              <div className="form-group__half">
                <div className="form-group__input-wrapper">
                  <Globe size={18} className="input-icon" />
                  <input
                    {...register("country")}
                    className="form-group__input"
                    placeholder="Country"
                    disabled={loading}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Dates */}
          <div className="form-group form-group--inline">
            <div className="form-group__half">
              <label className="form-group__label">Joined Date</label>
              <div className="form-group__input-wrapper">
                <Calendar size={18} className="input-icon" />
                <input
                  type="date"
                  {...register("joinedDate")}
                  className="form-group__input"
                  disabled={loading}
                />
              </div>
            </div>
            <div className="form-group__half">
              <label className="form-group__label">Expiry Date</label>
              <div className="form-group__input-wrapper">
                <Calendar size={18} className="input-icon" />
                <input
                  type="date"
                  {...register("expiryDate")}
                  className="form-group__input"
                  disabled={loading}
                />
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="form-group">
            <label className="form-group__label">Status</label>
            <button
              type="button"
              onClick={() => setValue("isActive", !isActive)}
              className={`status-toggle-btn ${isActive ? "active" : "inactive"}`}
              disabled={loading}
            >
              {isActive ? (
                <>
                  <ToggleRight size={24} />
                  <span>Active</span>
                </>
              ) : (
                <>
                  <ToggleLeft size={24} />
                  <span>Inactive</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Column - Photo Upload */}
        <div className="member-form__media">
          <div className="media-section">
            <div className="media-section__header">
              <div className="media-section__header-left">
                <ImageIcon size={20} />
                <h3>Profile Photo</h3>
              </div>
              <span className="media-section__badge">Optional</span>
            </div>

            {/* Drop Zone */}
            <div
              className={`media-dropzone ${dragOver ? "drag-over" : ""} ${
                preview ? "has-preview" : ""
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {!preview ? (
                <div className="media-dropzone__content">
                  <Upload size={40} className="dropzone-icon" />
                  <p className="dropzone-text">Drag & drop a photo here</p>
                  <span className="dropzone-hint">or click to browse</span>
                  <input
                    type="file"
                    accept="image/*"
                    {...register("photo")}
                    className="media-dropzone__input"
                    disabled={loading}
                    id="photo-upload"
                  />
                  <label htmlFor="photo-upload" className="dropzone-btn">
                    Choose Photo
                  </label>
                </div>
              ) : (
                <div className="media-preview">
                  <div className="media-preview__container">
                    <img
                      src={preview}
                      alt="Profile preview"
                      className="media-preview__image"
                    />
                    <div className="media-preview__overlay">
                      <button
                        type="button"
                        onClick={clearFile}
                        className="media-preview__remove"
                        disabled={loading}
                      >
                        <X size={18} />
                        Remove
                      </button>
                    </div>
                  </div>
                  {fileName && (
                    <p className="media-preview__filename">{fileName}</p>
                  )}
                </div>
              )}
            </div>

            <p className="media-hint">
              Recommended: 400x400px square image, max 2MB
            </p>
          </div>
        </div>
      </div>

      {/* Form Actions */}
      <div className="member-form__actions">
        <button
          type="submit"
          disabled={loading}
          className="btn btn--primary btn--submit"
        >
          {loading ? (
            <>
              <span className="spinner-btn"></span>
              {isEdit ? "Updating..." : "Creating..."}
            </>
          ) : (
            <>
              <Check size={18} />
              {isEdit ? "Update Member" : "Create Member"}
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default MemberForm;