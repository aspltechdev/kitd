// // src/pages/admin/news/NewsForm.jsx

// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";

// const NewsForm = ({
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

//   const thumbnail = watch("thumbnail");
//   const [preview, setPreview] = useState(null);

//   useEffect(() => {
//     if (initialValues) {
//       reset({
//         title: initialValues.title || "",
//         slug: initialValues.slug || "",
//         shortDescription:
//           initialValues.shortDescription || "",
//         content: initialValues.content || "",
//         category: initialValues.category || "",
//         author: initialValues.author || "",
//         publishedDate: initialValues.publishedDate
//           ? initialValues.publishedDate.substring(0, 10)
//           : "",
//         displayOrder:
//           initialValues.displayOrder || 1,
//         featured:
//           initialValues.featured || false,
//         isActive:
//           initialValues.isActive === undefined
//             ? true
//             : initialValues.isActive,
//       });

//       if (initialValues.thumbnail) {
//         setPreview(
//           `${import.meta.env.VITE_API_BASE_URL.replace(
//             "/api",
//             ""
//           )}/uploads/news/${initialValues.thumbnail}`
//         );
//       }
//     }
//   }, [initialValues, reset]);

//   useEffect(() => {
//     if (thumbnail && thumbnail.length > 0) {
//       setPreview(
//         URL.createObjectURL(thumbnail[0])
//       );
//     }
//   }, [thumbnail]);

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="bg-white rounded-xl shadow p-6 space-y-6"
//     >
//       {/* Thumbnail */}

//       <div>
//         <label className="block font-medium mb-2">
//           Thumbnail
//         </label>

//         <input
//           type="file"
//           accept="image/*"
//           {...register("thumbnail")}
//         />

//         {preview && (
//           <img
//             src={preview}
//             alt="Preview"
//             className="mt-4 w-52 h-32 object-cover rounded-lg border"
//           />
//         )}
//       </div>

//       {/* Title */}

//       <div>
//         <label className="block font-medium">
//           Title *
//         </label>

//         <input
//           {...register("title", {
//             required: "Title is required",
//           })}
//           className="w-full border rounded-lg p-3 mt-2"
//           placeholder="Enter news title"
//         />

//         <p className="text-red-500 text-sm">
//           {errors.title?.message}
//         </p>
//       </div>

//       {/* Slug */}

//       <div>
//         <label className="block font-medium">
//           Slug *
//         </label>

//         <input
//           {...register("slug", {
//             required: "Slug is required",
//           })}
//           className="w-full border rounded-lg p-3 mt-2"
//           placeholder="news-title"
//         />

//         <p className="text-red-500 text-sm">
//           {errors.slug?.message}
//         </p>
//       </div>

//       {/* Short Description */}

//       <div>
//         <label className="block font-medium">
//           Short Description *
//         </label>

//         <textarea
//           rows={3}
//           {...register("shortDescription", {
//             required:
//               "Short description is required",
//           })}
//           className="w-full border rounded-lg p-3 mt-2"
//           placeholder="Enter short description..."
//         />

//         <p className="text-red-500 text-sm">
//           {errors.shortDescription?.message}
//         </p>
//       </div>

//       {/* Content */}

//       <div>
//         <label className="block font-medium">
//           Content *
//         </label>

//         <textarea
//           rows={8}
//           {...register("content", {
//             required: "Content is required",
//           })}
//           className="w-full border rounded-lg p-3 mt-2"
//           placeholder="Write the news content..."
//         />

//         <p className="text-red-500 text-sm">
//           {errors.content?.message}
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
//           <option value="">
//             Select Category
//           </option>
//           <option value="General">
//             General
//           </option>
//           <option value="Workshop">
//             Workshop
//           </option>
//           <option value="Event">
//             Event
//           </option>
//           <option value="Announcement">
//             Announcement
//           </option>
//           <option value="Festival">
//             Festival
//           </option>
//           <option value="Achievement">
//             Achievement
//           </option>
//         </select>
//       </div>

//       {/* Author */}

//       <div>
//         <label className="block font-medium">
//           Author
//         </label>

//         <input
//           {...register("author")}
//           className="w-full border rounded-lg p-3 mt-2"
//           placeholder="Author Name"
//         />
//       </div>

//       {/* Published Date */}

//       <div>
//         <label className="block font-medium">
//           Published Date
//         </label>

//         <input
//           type="date"
//           {...register("publishedDate")}
//           className="w-full border rounded-lg p-3 mt-2"
//         />
//       </div>

//       {/* Display Order */}

//       <div>
//         <label className="block font-medium">
//           Display Order
//         </label>

//         <input
//           type="number"
//           min="1"
//           {...register("displayOrder")}
//           className="w-full border rounded-lg p-3 mt-2"
//         />
//       </div>

//       {/* Options */}

//       <div className="flex flex-wrap gap-8">
//         <label className="flex items-center gap-2">
//           <input
//             type="checkbox"
//             {...register("featured")}
//           />
//           Featured News
//         </label>

//         <label className="flex items-center gap-2">
//           <input
//             type="checkbox"
//             {...register("isActive")}
//           />
//           Active
//         </label>
//       </div>

//       {/* Submit */}

//       <button
//         type="submit"
//         disabled={loading}
//         className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg disabled:opacity-50"
//       >
//         {loading ? "Saving..." : "Save News"}
//       </button>
//     </form>
//   );
// };

// export default NewsForm;


// src/pages/admin/News/NewsForm.jsx

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Image as ImageIcon,
  Upload,
  X,
  Check,
  Type,
  Hash,
  ToggleRight,
  ToggleLeft,
  AlignLeft,
  FileText,
  User,
  Calendar,
  Tag,
  Star,
  Eye,
  EyeOff,
  Link as LinkIcon,
} from "lucide-react";

import "./NewsForm.css";

const NewsForm = ({
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
      slug: "",
      shortDescription: "",
      content: "",
      category: "",
      author: "",
      publishedDate: "",
      displayOrder: 1,
      featured: false,
      isActive: true,
    },
  });

  const thumbnail = watch("thumbnail");
  const isActive = watch("isActive", true);
  const featured = watch("featured", false);

  const [preview, setPreview] = useState(null);
  const [fileName, setFileName] = useState("");
  const [dragOver, setDragOver] = useState(false);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050/api';
  const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

  useEffect(() => {
    if (initialValues && Object.keys(initialValues).length > 0) {
      reset({
        title: initialValues.title || "",
        slug: initialValues.slug || "",
        shortDescription: initialValues.shortDescription || "",
        content: initialValues.content || "",
        category: initialValues.category || "",
        author: initialValues.author || "",
        publishedDate: initialValues.publishedDate ? initialValues.publishedDate.substring(0, 10) : "",
        displayOrder: initialValues.displayOrder || 1,
        featured: initialValues.featured || false,
        isActive: initialValues.isActive !== undefined ? initialValues.isActive : true,
      });

      if (initialValues.thumbnail) {
        setPreview(`${IMAGE_BASE_URL}/uploads/news/${initialValues.thumbnail}`);
        setFileName(initialValues.thumbnail);
      }
    }
  }, [initialValues, reset]);

  useEffect(() => {
    if (thumbnail && thumbnail.length > 0) {
      const file = thumbnail[0];
      setPreview(URL.createObjectURL(file));
      setFileName(file.name);
    }
  }, [thumbnail]);

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
      setValue("thumbnail", files);
    }
  };

  const clearFile = () => {
    setPreview(null);
    setFileName("");
    setValue("thumbnail", []);
  };

  const categories = [
    { value: "General", label: "General" },
    { value: "Workshop", label: "Workshop" },
    { value: "Event", label: "Event" },
    { value: "Announcement", label: "Announcement" },
    { value: "Festival", label: "Festival" },
    { value: "Achievement", label: "Achievement" },
    { value: "Community", label: "Community" },
    { value: "Partnership", label: "Partnership" },
  ];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="news-form"
      id="news-form"
    >
      <div className="news-form__grid">
        {/* Left Column - Main Fields */}
        <div className="news-form__main">
          {/* Title */}
          <div className="form-group">
            <label className="form-group__label">
              Title <span className="required">*</span>
            </label>
            <div className="form-group__input-wrapper">
              <Type size={18} className="input-icon" />
              <input
                {...register("title", {
                  required: "Title is required",
                  maxLength: {
                    value: 150,
                    message: "Title must be less than 150 characters",
                  },
                })}
                className={`form-group__input ${errors.title ? "error" : ""}`}
                placeholder="Enter news title"
                disabled={loading}
              />
            </div>
            {errors.title && (
              <p className="form-group__error">{errors.title.message}</p>
            )}
          </div>

          {/* Slug */}
          <div className="form-group">
            <label className="form-group__label">
              Slug <span className="required">*</span>
            </label>
            <div className="form-group__input-wrapper">
              <LinkIcon size={18} className="input-icon" />
              <input
                {...register("slug", {
                  required: "Slug is required",
                  pattern: {
                    value: /^[a-z0-9-]+$/,
                    message: "Slug must contain only lowercase letters, numbers, and hyphens",
                  },
                })}
                className={`form-group__input ${errors.slug ? "error" : ""}`}
                placeholder="news-title-slug"
                disabled={loading}
              />
            </div>
            {errors.slug && (
              <p className="form-group__error">{errors.slug.message}</p>
            )}
            <span className="form-group__hint">Use lowercase letters, numbers, and hyphens only</span>
          </div>

          {/* Short Description */}
          <div className="form-group">
            <label className="form-group__label">
              Short Description <span className="required">*</span>
            </label>
            <div className="form-group__input-wrapper">
              <AlignLeft size={18} className="input-icon" />
              <textarea
                rows={3}
                {...register("shortDescription", {
                  required: "Short description is required",
                  maxLength: {
                    value: 300,
                    message: "Short description must be less than 300 characters",
                  },
                })}
                className={`form-group__textarea ${errors.shortDescription ? "error" : ""}`}
                placeholder="Brief summary of the news article"
                disabled={loading}
              />
            </div>
            {errors.shortDescription && (
              <p className="form-group__error">{errors.shortDescription.message}</p>
            )}
            <span className="form-group__hint">Maximum 300 characters</span>
          </div>

          {/* Content */}
          <div className="form-group">
            <label className="form-group__label">
              Content <span className="required">*</span>
            </label>
            <div className="form-group__input-wrapper">
              <FileText size={18} className="input-icon" />
              <textarea
                rows={8}
                {...register("content", {
                  required: "Content is required",
                })}
                className={`form-group__textarea ${errors.content ? "error" : ""}`}
                placeholder="Write the full news article content..."
                disabled={loading}
              />
            </div>
            {errors.content && (
              <p className="form-group__error">{errors.content.message}</p>
            )}
          </div>

          {/* Category & Author */}
          <div className="form-group form-group--inline">
            <div className="form-group__half">
              <label className="form-group__label">Category</label>
              <div className="form-group__input-wrapper">
                <Tag size={18} className="input-icon" />
                <select
                  {...register("category")}
                  className="form-group__input form-group__select"
                  disabled={loading}
                >
                  <option value="">Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-group__half">
              <label className="form-group__label">Author</label>
              <div className="form-group__input-wrapper">
                <User size={18} className="input-icon" />
                <input
                  {...register("author")}
                  className="form-group__input"
                  placeholder="Author name"
                  disabled={loading}
                />
              </div>
            </div>
          </div>

          {/* Published Date & Display Order */}
          <div className="form-group form-group--inline">
            <div className="form-group__half">
              <label className="form-group__label">Published Date</label>
              <div className="form-group__input-wrapper">
                <Calendar size={18} className="input-icon" />
                <input
                  type="date"
                  {...register("publishedDate")}
                  className="form-group__input"
                  disabled={loading}
                />
              </div>
            </div>
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
          </div>

          {/* Featured & Status */}
          <div className="form-group form-group--inline">
            <div className="form-group__half">
              <label className="form-group__label">Featured</label>
              <button
                type="button"
                onClick={() => setValue("featured", !featured)}
                className={`featured-toggle-btn ${featured ? "active" : ""}`}
                disabled={loading}
              >
                <Star size={20} />
                <span>{featured ? "Featured" : "Mark as Featured"}</span>
              </button>
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
                    <Eye size={20} />
                    <span>Published</span>
                  </>
                ) : (
                  <>
                    <EyeOff size={20} />
                    <span>Draft</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Thumbnail Upload */}
        <div className="news-form__media">
          <div className="media-section">
            <div className="media-section__header">
              <div className="media-section__header-left">
                <ImageIcon size={20} />
                <h3>Thumbnail Image</h3>
              </div>
              <span className="media-section__badge">Recommended</span>
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
                  <p className="dropzone-text">Drag & drop a thumbnail image</p>
                  <span className="dropzone-hint">or click to browse</span>
                  <input
                    type="file"
                    accept="image/*"
                    {...register("thumbnail")}
                    className="media-dropzone__input"
                    disabled={loading}
                    id="thumbnail-upload"
                  />
                  <label htmlFor="thumbnail-upload" className="dropzone-btn">
                    Choose Image
                  </label>
                </div>
              ) : (
                <div className="media-preview">
                  <div className="media-preview__container">
                    <img
                      src={preview}
                      alt="Thumbnail preview"
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
              Recommended: 1200x630px (16:9 ratio), max 5MB
            </p>
          </div>
        </div>
      </div>

      {/* Form Actions */}
      <div className="news-form__actions">
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
              {isEdit ? "Update Article" : "Create Article"}
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default NewsForm;