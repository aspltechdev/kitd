// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";

// const BannerForm = ({
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

//   const mediaType = watch("mediaType", "IMAGE");
//   const media = watch("media");

//   const [preview, setPreview] = useState(null);

//   useEffect(() => {
//     if (initialValues) {
//       reset({
//         title: initialValues.title || "",
//         subtitle: initialValues.subtitle || "",
//         description: initialValues.description || "",
//         mediaType: initialValues.mediaType || "IMAGE",
//         buttonText: initialValues.buttonText || "",
//         buttonLink: initialValues.buttonLink || "",
//         displayOrder: initialValues.displayOrder || 1,
//         isActive:
//           initialValues.isActive === undefined
//             ? true
//             : initialValues.isActive,
//       });

//       if (initialValues.mediaUrl) {
//         setPreview(
//           `${import.meta.env.VITE_API_URL}/uploads/banners/${initialValues.mediaUrl}`
//         );
//       }
//     }
//   }, [initialValues, reset]);

//   useEffect(() => {
//     if (media && media.length > 0) {
//       const file = media[0];
//       setPreview(URL.createObjectURL(file));
//     }
//   }, [media]);

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="bg-white rounded-xl shadow p-6 space-y-6"
//     >
//       {/* Title */}

//       <div>
//         <label className="font-medium">
//           Banner Title *
//         </label>

//         <input
//           {...register("title", {
//             required: "Title is required",
//           })}
//           className="w-full border rounded-lg p-3 mt-2"
//         />

//         <p className="text-red-500 text-sm">
//           {errors.title?.message}
//         </p>
//       </div>

//       {/* Subtitle */}

//       <div>
//         <label className="font-medium">
//           Subtitle
//         </label>

//         <input
//           {...register("subtitle")}
//           className="w-full border rounded-lg p-3 mt-2"
//         />
//       </div>

//       {/* Description */}

//       <div>
//         <label className="font-medium">
//           Description
//         </label>

//         <textarea
//           rows={4}
//           {...register("description")}
//           className="w-full border rounded-lg p-3 mt-2"
//         />
//       </div>

//       {/* Media Type */}

//       <div>
//         <label className="font-medium">
//           Media Type
//         </label>

//         <select
//           {...register("mediaType")}
//           className="w-full border rounded-lg p-3 mt-2"
//         >
//           <option value="IMAGE">
//             Image
//           </option>

//           <option value="VIDEO">
//             Video
//           </option>
//         </select>
//       </div>

//       {/* Upload */}

//       <div>
//         <label className="font-medium">
//           Upload {mediaType}
//         </label>

//         <input
//           type="file"
//           accept={
//             mediaType === "IMAGE"
//               ? "image/*"
//               : "video/*"
//           }
//           {...register("media")}
//           className="mt-2"
//         />
//       </div>

//       {/* Preview */}

//       {preview && (
//         <div>

//           <label className="font-medium">
//             Preview
//           </label>

//           {mediaType === "IMAGE" ? (
//             <img
//               src={preview}
//               alt="Preview"
//               className="mt-3 rounded-lg w-80 h-48 object-cover border"
//             />
//           ) : (
//             <video
//               controls
//               className="mt-3 rounded-lg w-80 h-48 object-cover border"
//             >
//               <source src={preview} />
//             </video>
//           )}

//         </div>
//       )}

//       {/* CTA */}

//       <div className="grid md:grid-cols-2 gap-6">

//         <div>
//           <label className="font-medium">
//             Button Text
//           </label>

//           <input
//             {...register("buttonText")}
//             className="w-full border rounded-lg p-3 mt-2"
//           />
//         </div>

//         <div>
//           <label className="font-medium">
//             Button Link
//           </label>

//           <input
//             {...register("buttonLink")}
//             className="w-full border rounded-lg p-3 mt-2"
//           />
//         </div>

//       </div>

//       {/* Order */}

//       <div>
//         <label className="font-medium">
//           Display Order
//         </label>

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

//         <label>
//           Active Banner
//         </label>

//       </div>

//       {/* Submit */}

//       <button
//         disabled={loading}
//         className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
//       >
//         {loading ? "Saving..." : "Save Banner"}
//       </button>

//     </form>
//   );
// };

// export default BannerForm;



// src/pages/admin/Banner/BannerForm.jsx

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Image,
  Video,
  Upload,
  X,
  Check,
  AlertCircle,
  Eye,
  Type,
  Link as LinkIcon,
  Hash,
  ToggleLeft,
  ToggleRight,
} from "lucide-react";

import "./BannerForm.css";

const BannerForm = ({
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
      title: "",
      subtitle: "",
      description: "",
      mediaType: "IMAGE",
      buttonText: "",
      buttonLink: "",
      displayOrder: 1,
      isActive: true,
    },
  });

  const mediaType = watch("mediaType", "IMAGE");
  const media = watch("media");
  const isActive = watch("isActive", true);

  const [preview, setPreview] = useState(null);
  const [fileName, setFileName] = useState("");
  const [dragOver, setDragOver] = useState(false);

  useEffect(() => {
    if (initialValues && Object.keys(initialValues).length > 0) {
      reset({
        title: initialValues.title || "",
        subtitle: initialValues.subtitle || "",
        description: initialValues.description || "",
        mediaType: initialValues.mediaType || "IMAGE",
        buttonText: initialValues.buttonText || "",
        buttonLink: initialValues.buttonLink || "",
        displayOrder: initialValues.displayOrder || 1,
        isActive: initialValues.isActive !== undefined ? initialValues.isActive : true,
      });

      if (initialValues.mediaUrl) {
        setPreview(
          `${import.meta.env.VITE_API_URL}/uploads/banners/${initialValues.mediaUrl}`
        );
        setFileName(initialValues.mediaUrl);
      }
    }
  }, [initialValues, reset]);

  useEffect(() => {
    if (media && media.length > 0) {
      const file = media[0];
      setPreview(URL.createObjectURL(file));
      setFileName(file.name);
    }
  }, [media]);

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
      setValue("media", files);
    }
  };

  const clearFile = () => {
    setPreview(null);
    setFileName("");
    setValue("media", []);
  };

  const getMediaIcon = () => {
    return mediaType === "IMAGE" ? <Image size={20} /> : <Video size={20} />;
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="banner-form"
    >
      <div className="banner-form__grid">
        {/* Left Column - Main Fields */}
        <div className="banner-form__main">
          {/* Title */}
          <div className="form-group">
            <label className="form-group__label">
              Banner Title <span className="required">*</span>
            </label>
            <div className="form-group__input-wrapper">
              <Type size={18} className="input-icon" />
              <input
                {...register("title", {
                  required: "Title is required",
                  maxLength: {
                    value: 100,
                    message: "Title must be less than 100 characters",
                  },
                })}
                className={`form-group__input ${errors.title ? "error" : ""}`}
                placeholder="Enter banner title"
                disabled={loading}
              />
            </div>
            {errors.title && (
              <p className="form-group__error">{errors.title.message}</p>
            )}
          </div>

          {/* Subtitle */}
          <div className="form-group">
            <label className="form-group__label">Subtitle</label>
            <div className="form-group__input-wrapper">
              <Type size={18} className="input-icon" />
              <input
                {...register("subtitle")}
                className="form-group__input"
                placeholder="Enter banner subtitle (optional)"
                disabled={loading}
              />
            </div>
          </div>

          {/* Description */}
          <div className="form-group">
            <label className="form-group__label">Description</label>
            <textarea
              rows={4}
              {...register("description")}
              className="form-group__textarea"
              placeholder="Enter banner description (optional)"
              disabled={loading}
            />
          </div>

          {/* CTA Fields */}
          <div className="form-group form-group--inline">
            <div className="form-group__half">
              <label className="form-group__label">Button Text</label>
              <div className="form-group__input-wrapper">
                <Type size={18} className="input-icon" />
                <input
                  {...register("buttonText")}
                  className="form-group__input"
                  placeholder="e.g., Learn More"
                  disabled={loading}
                />
              </div>
            </div>
            <div className="form-group__half">
              <label className="form-group__label">Button Link</label>
              <div className="form-group__input-wrapper">
                <LinkIcon size={18} className="input-icon" />
                <input
                  {...register("buttonLink")}
                  className="form-group__input"
                  placeholder="e.g., /events"
                  disabled={loading}
                />
              </div>
            </div>
          </div>

          {/* Order & Status */}
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
                  className="form-group__input"
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

        {/* Right Column - Media Upload */}
        <div className="banner-form__media">
          <div className="media-section">
            <div className="media-section__header">
              <div className="media-section__header-left">
                {getMediaIcon()}
                <h3>Media Upload</h3>
              </div>
              <select
                {...register("mediaType")}
                className="media-type-select"
                disabled={loading}
              >
                <option value="IMAGE">📷 Image</option>
                <option value="VIDEO">🎬 Video</option>
              </select>
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
                  <p className="dropzone-text">Drag & drop your {mediaType.toLowerCase()} here</p>
                  <span className="dropzone-hint">or click to browse</span>
                  <input
                    type="file"
                    accept={mediaType === "IMAGE" ? "image/*" : "video/*"}
                    {...register("media")}
                    className="media-dropzone__input"
                    disabled={loading}
                    id="media-upload"
                  />
                  <label htmlFor="media-upload" className="dropzone-btn">
                    Choose File
                  </label>
                </div>
              ) : (
                <div className="media-preview">
                  <div className="media-preview__container">
                    {mediaType === "IMAGE" ? (
                      <img
                        src={preview}
                        alt="Banner preview"
                        className="media-preview__image"
                      />
                    ) : (
                      <video
                        src={preview}
                        className="media-preview__video"
                        controls
                        muted
                      />
                    )}
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
              {mediaType === "IMAGE"
                ? "Recommended: 1920x1080px (16:9 ratio), max 5MB"
                : "Recommended: MP4 format, max 20MB"}
            </p>
          </div>
        </div>
      </div>

      {/* Form Actions */}
      <div className="banner-form__actions">
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
              {isEdit ? "Update Banner" : "Create Banner"}
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default BannerForm;