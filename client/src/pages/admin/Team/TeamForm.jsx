// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";

// const TeamForm = ({
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

//   const image = watch("image");

//   const [preview, setPreview] = useState(null);

//   useEffect(() => {
//     if (initialValues) {
//       reset({
//         name: initialValues.name || "",
//         designation: initialValues.designation || "",
//         bio: initialValues.bio || "",
//         category: initialValues.category || "FOUNDER",
//         email: initialValues.email || "",
//         phone: initialValues.phone || "",
//         linkedin: initialValues.linkedin || "",
//         facebook: initialValues.facebook || "",
//         instagram: initialValues.instagram || "",
//         website: initialValues.website || "",
//         displayOrder: initialValues.displayOrder || 1,
//         isActive:
//           initialValues.isActive === undefined
//             ? true
//             : initialValues.isActive,
//       });

//       if (initialValues.image) {
//         setPreview(
//           `${import.meta.env.VITE_API_BASE_URL.replace(
//             "/api",
//             ""
//           )}/uploads/team/${initialValues.image}`
//         );
//       }
//     }
//   }, [initialValues, reset]);

//   useEffect(() => {
//     if (image && image.length > 0) {
//       setPreview(URL.createObjectURL(image[0]));
//     }
//   }, [image]);

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="bg-white rounded-xl shadow p-6 space-y-6"
//     >
//       {/* Image */}

//       <div>
//         <label className="block font-medium mb-2">
//           Profile Image
//         </label>

//         <input
//           type="file"
//           accept="image/*"
//           {...register("image")}
//         />

//         {preview && (
//           <img
//             src={preview}
//             alt="Preview"
//             className="mt-4 w-36 h-36 rounded-xl object-cover border"
//           />
//         )}
//       </div>

//       {/* Name */}

//       <div>
//         <label className="block font-medium">
//           Full Name *
//         </label>

//         <input
//           {...register("name", {
//             required: "Name is required",
//           })}
//           className="w-full border rounded-lg p-3 mt-2"
//         />

//         <p className="text-red-500 text-sm">
//           {errors.name?.message}
//         </p>
//       </div>

//       {/* Designation */}

//       <div>
//         <label className="block font-medium">
//           Designation *
//         </label>

//         <input
//           {...register("designation", {
//             required: "Designation is required",
//           })}
//           className="w-full border rounded-lg p-3 mt-2"
//         />

//         <p className="text-red-500 text-sm">
//           {errors.designation?.message}
//         </p>
//       </div>

//       {/* Category */}

//       <div>
//         <label className="block font-medium">
//           Category
//         </label>

//         <select
//           {...register("category")}
//           className="w-full border rounded-lg p-3 mt-2"
//         >
//           <option value="FOUNDER">Founder</option>
//           <option value="CO_FOUNDER">
//             Co-Founder
//           </option>
//           <option value="PRESIDENT">
//             President
//           </option>
//           <option value="VICE_PRESIDENT">
//             Vice President
//           </option>
//           <option value="SECRETARY">
//             Secretary
//           </option>
//           <option value="TREASURER">
//             Treasurer
//           </option>
//           <option value="EXECUTIVE_MEMBER">
//             Executive Member
//           </option>
//           <option value="TEACHER">
//             Teacher
//           </option>
//         </select>
//       </div>

//       {/* Bio */}

//       <div>
//         <label className="block font-medium">
//           Biography
//         </label>

//         <textarea
//           rows={5}
//           {...register("bio")}
//           className="w-full border rounded-lg p-3 mt-2"
//         />
//       </div>

//       {/* Contact */}

//       <div className="grid md:grid-cols-2 gap-5">
//         <div>
//           <label>Email</label>

//           <input
//             type="email"
//             {...register("email")}
//             className="w-full border rounded-lg p-3 mt-2"
//           />
//         </div>

//         <div>
//           <label>Phone</label>

//           <input
//             {...register("phone")}
//             className="w-full border rounded-lg p-3 mt-2"
//           />
//         </div>
//       </div>

//       {/* Social Links */}

//       <div className="grid md:grid-cols-2 gap-5">
//         <div>
//           <label>LinkedIn</label>

//           <input
//             {...register("linkedin")}
//             className="w-full border rounded-lg p-3 mt-2"
//           />
//         </div>

//         <div>
//           <label>Facebook</label>

//           <input
//             {...register("facebook")}
//             className="w-full border rounded-lg p-3 mt-2"
//           />
//         </div>

//         <div>
//           <label>Instagram</label>

//           <input
//             {...register("instagram")}
//             className="w-full border rounded-lg p-3 mt-2"
//           />
//         </div>

//         <div>
//           <label>Website</label>

//           <input
//             {...register("website")}
//             className="w-full border rounded-lg p-3 mt-2"
//           />
//         </div>
//       </div>

//       {/* Order */}

//       <div>
//         <label>Display Order</label>

//         <input
//           type="number"
//           {...register("displayOrder")}
//           className="w-full border rounded-lg p-3 mt-2"
//         />
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
//         className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
//       >
//         {loading ? "Saving..." : "Save Team Member"}
//       </button>
//     </form>
//   );
// };

// export default TeamForm;



// src/pages/admin/Team/TeamForm.jsx

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  User,
  Briefcase,
  Mail,
  Phone,
  Hash,
  ToggleRight,
  ToggleLeft,
  Upload,
  X,
  Image as ImageIcon,
  AlertCircle,
  Check,
  Globe,
} from "lucide-react";

// Import React Icons for social media
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

import "./TeamForm.css";

const TeamForm = ({
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
      name: "",
      designation: "",
      bio: "",
      category: "FOUNDER",
      email: "",
      phone: "",
      linkedin: "",
      facebook: "",
      instagram: "",
      website: "",
      displayOrder: 1,
      isActive: true,
    },
  });

  const image = watch("image");
  const isActive = watch("isActive", true);

  const [preview, setPreview] = useState(null);
  const [fileName, setFileName] = useState("");
  const [dragOver, setDragOver] = useState(false);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050/api';
  const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

  useEffect(() => {
    if (initialValues && Object.keys(initialValues).length > 0) {
      reset({
        name: initialValues.name || "",
        designation: initialValues.designation || "",
        bio: initialValues.bio || "",
        category: initialValues.category || "FOUNDER",
        email: initialValues.email || "",
        phone: initialValues.phone || "",
        linkedin: initialValues.linkedin || "",
        facebook: initialValues.facebook || "",
        instagram: initialValues.instagram || "",
        website: initialValues.website || "",
        displayOrder: initialValues.displayOrder || 1,
        isActive: initialValues.isActive !== undefined ? initialValues.isActive : true,
      });

      if (initialValues.image) {
        setPreview(`${IMAGE_BASE_URL}/uploads/team/${initialValues.image}`);
        setFileName(initialValues.image);
      }
    }
  }, [initialValues, reset]);

  useEffect(() => {
    if (image && image.length > 0) {
      const file = image[0];
      setPreview(URL.createObjectURL(file));
      setFileName(file.name);
    }
  }, [image]);

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
      setValue("image", files);
    }
  };

  const clearFile = () => {
    setPreview(null);
    setFileName("");
    setValue("image", []);
  };

  const categoryOptions = [
    { value: "FOUNDER", label: "Founder" },
    { value: "CO_FOUNDER", label: "Co-Founder" },
    { value: "PRESIDENT", label: "President" },
    { value: "VICE_PRESIDENT", label: "Vice President" },
    { value: "SECRETARY", label: "Secretary" },
    { value: "TREASURER", label: "Treasurer" },
    { value: "EXECUTIVE_MEMBER", label: "Executive Member" },
    { value: "TEACHER", label: "Teacher" },
    { value: "ADVISOR", label: "Advisor" },
  ];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="team-form"
    >
      <div className="team-form__grid">
        {/* Left Column - Main Fields */}
        <div className="team-form__main">
          {/* Name */}
          <div className="form-group">
            <label className="form-group__label">
              Full Name <span className="required">*</span>
            </label>
            <div className="form-group__input-wrapper">
              <User size={18} className="input-icon" />
              <input
                {...register("name", {
                  required: "Full name is required",
                  maxLength: {
                    value: 100,
                    message: "Name must be less than 100 characters",
                  },
                })}
                className={`form-group__input ${errors.name ? "error" : ""}`}
                placeholder="Enter full name"
                disabled={loading}
              />
            </div>
            {errors.name && (
              <p className="form-group__error">{errors.name.message}</p>
            )}
          </div>

          {/* Designation */}
          <div className="form-group">
            <label className="form-group__label">
              Designation <span className="required">*</span>
            </label>
            <div className="form-group__input-wrapper">
              <Briefcase size={18} className="input-icon" />
              <input
                {...register("designation", {
                  required: "Designation is required",
                })}
                className={`form-group__input ${errors.designation ? "error" : ""}`}
                placeholder="e.g., President, Teacher, Advisor"
                disabled={loading}
              />
            </div>
            {errors.designation && (
              <p className="form-group__error">{errors.designation.message}</p>
            )}
          </div>

          {/* Category */}
          <div className="form-group">
            <label className="form-group__label">Category</label>
            <div className="form-group__input-wrapper">
              <Hash size={18} className="input-icon" />
              <select
                {...register("category")}
                className="form-group__input form-group__select"
                disabled={loading}
              >
                {categoryOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Bio */}
          <div className="form-group">
            <label className="form-group__label">Biography</label>
            <textarea
              rows={4}
              {...register("bio")}
              className="form-group__textarea"
              placeholder="Write a brief biography about the team member..."
              disabled={loading}
            />
          </div>

          {/* Contact Information */}
          <div className="form-group form-group--section">
            <label className="form-group__section-label">Contact Information</label>
            <div className="form-group--inline">
              <div className="form-group__half">
                <div className="form-group__input-wrapper">
                  <Mail size={18} className="input-icon" />
                  <input
                    type="email"
                    {...register("email")}
                    className="form-group__input"
                    placeholder="Email address"
                    disabled={loading}
                  />
                </div>
              </div>
              <div className="form-group__half">
                <div className="form-group__input-wrapper">
                  <Phone size={18} className="input-icon" />
                  <input
                    {...register("phone")}
                    className="form-group__input"
                    placeholder="Phone number"
                    disabled={loading}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="form-group form-group--section">
            <label className="form-group__section-label">Social Links</label>
            <div className="form-group--inline">
              <div className="form-group__half">
                <div className="form-group__input-wrapper">
                  <FaLinkedinIn size={18} className="input-icon social-icon" />
                  <input
                    {...register("linkedin")}
                    className="form-group__input"
                    placeholder="LinkedIn URL"
                    disabled={loading}
                  />
                </div>
              </div>
              <div className="form-group__half">
                <div className="form-group__input-wrapper">
                  <FaFacebookF size={18} className="input-icon social-icon" />
                  <input
                    {...register("facebook")}
                    className="form-group__input"
                    placeholder="Facebook URL"
                    disabled={loading}
                  />
                </div>
              </div>
              <div className="form-group__half">
                <div className="form-group__input-wrapper">
                  <FaInstagram size={18} className="input-icon social-icon" />
                  <input
                    {...register("instagram")}
                    className="form-group__input"
                    placeholder="Instagram URL"
                    disabled={loading}
                  />
                </div>
              </div>
              <div className="form-group__half">
                <div className="form-group__input-wrapper">
                  <Globe size={18} className="input-icon" />
                  <input
                    {...register("website")}
                    className="form-group__input"
                    placeholder="Website URL"
                    disabled={loading}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Display Order & Status */}
          <div className="form-group form-group--inline">
            <div className="form-group__half">
              <label className="form-group__label">Display Order</label>
              <div className="form-group__input-wrapper">
                <Hash size={18} className="input-icon" />
                <input
                  type="number"
                  {...register("displayOrder", {
                    min: {
                      value: 0,
                      message: "Order must be 0 or greater",
                    },
                  })}
                  className={`form-group__input ${errors.displayOrder ? "error" : ""}`}
                  placeholder="1"
                  disabled={loading}
                />
              </div>
              {errors.displayOrder && (
                <p className="form-group__error">{errors.displayOrder.message}</p>
              )}
            </div>
            <div className="form-group__half">
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
        </div>

        {/* Right Column - Image Upload */}
        <div className="team-form__media">
          <div className="media-section">
            <div className="media-section__header">
              <div className="media-section__header-left">
                <ImageIcon size={20} />
                <h3>Profile Image</h3>
              </div>
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
                  <p className="dropzone-text">Drag & drop an image here</p>
                  <span className="dropzone-hint">or click to browse</span>
                  <input
                    type="file"
                    accept="image/*"
                    {...register("image")}
                    className="media-dropzone__input"
                    disabled={loading}
                    id="image-upload"
                  />
                  <label htmlFor="image-upload" className="dropzone-btn">
                    Choose Image
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
      <div className="team-form__actions">
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
              {isEdit ? "Update Member" : "Add Member"}
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default TeamForm;