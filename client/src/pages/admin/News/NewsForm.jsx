// src/pages/admin/news/NewsForm.jsx

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const NewsForm = ({
  initialValues = {},
  onSubmit,
  loading = false,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const thumbnail = watch("thumbnail");
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (initialValues) {
      reset({
        title: initialValues.title || "",
        slug: initialValues.slug || "",
        shortDescription:
          initialValues.shortDescription || "",
        content: initialValues.content || "",
        category: initialValues.category || "",
        author: initialValues.author || "",
        publishedDate: initialValues.publishedDate
          ? initialValues.publishedDate.substring(0, 10)
          : "",
        displayOrder:
          initialValues.displayOrder || 1,
        featured:
          initialValues.featured || false,
        isActive:
          initialValues.isActive === undefined
            ? true
            : initialValues.isActive,
      });

      if (initialValues.thumbnail) {
        setPreview(
          `${import.meta.env.VITE_API_BASE_URL.replace(
            "/api",
            ""
          )}/uploads/news/${initialValues.thumbnail}`
        );
      }
    }
  }, [initialValues, reset]);

  useEffect(() => {
    if (thumbnail && thumbnail.length > 0) {
      setPreview(
        URL.createObjectURL(thumbnail[0])
      );
    }
  }, [thumbnail]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-xl shadow p-6 space-y-6"
    >
      {/* Thumbnail */}

      <div>
        <label className="block font-medium mb-2">
          Thumbnail
        </label>

        <input
          type="file"
          accept="image/*"
          {...register("thumbnail")}
        />

        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="mt-4 w-52 h-32 object-cover rounded-lg border"
          />
        )}
      </div>

      {/* Title */}

      <div>
        <label className="block font-medium">
          Title *
        </label>

        <input
          {...register("title", {
            required: "Title is required",
          })}
          className="w-full border rounded-lg p-3 mt-2"
          placeholder="Enter news title"
        />

        <p className="text-red-500 text-sm">
          {errors.title?.message}
        </p>
      </div>

      {/* Slug */}

      <div>
        <label className="block font-medium">
          Slug *
        </label>

        <input
          {...register("slug", {
            required: "Slug is required",
          })}
          className="w-full border rounded-lg p-3 mt-2"
          placeholder="news-title"
        />

        <p className="text-red-500 text-sm">
          {errors.slug?.message}
        </p>
      </div>

      {/* Short Description */}

      <div>
        <label className="block font-medium">
          Short Description *
        </label>

        <textarea
          rows={3}
          {...register("shortDescription", {
            required:
              "Short description is required",
          })}
          className="w-full border rounded-lg p-3 mt-2"
          placeholder="Enter short description..."
        />

        <p className="text-red-500 text-sm">
          {errors.shortDescription?.message}
        </p>
      </div>

      {/* Content */}

      <div>
        <label className="block font-medium">
          Content *
        </label>

        <textarea
          rows={8}
          {...register("content", {
            required: "Content is required",
          })}
          className="w-full border rounded-lg p-3 mt-2"
          placeholder="Write the news content..."
        />

        <p className="text-red-500 text-sm">
          {errors.content?.message}
        </p>
      </div>

      {/* Category */}

      <div>
        <label className="block font-medium">
          Category
        </label>

        <select
          {...register("category")}
          className="w-full border rounded-lg p-3 mt-2"
        >
          <option value="">
            Select Category
          </option>
          <option value="General">
            General
          </option>
          <option value="Workshop">
            Workshop
          </option>
          <option value="Event">
            Event
          </option>
          <option value="Announcement">
            Announcement
          </option>
          <option value="Festival">
            Festival
          </option>
          <option value="Achievement">
            Achievement
          </option>
        </select>
      </div>

      {/* Author */}

      <div>
        <label className="block font-medium">
          Author
        </label>

        <input
          {...register("author")}
          className="w-full border rounded-lg p-3 mt-2"
          placeholder="Author Name"
        />
      </div>

      {/* Published Date */}

      <div>
        <label className="block font-medium">
          Published Date
        </label>

        <input
          type="date"
          {...register("publishedDate")}
          className="w-full border rounded-lg p-3 mt-2"
        />
      </div>

      {/* Display Order */}

      <div>
        <label className="block font-medium">
          Display Order
        </label>

        <input
          type="number"
          min="1"
          {...register("displayOrder")}
          className="w-full border rounded-lg p-3 mt-2"
        />
      </div>

      {/* Options */}

      <div className="flex flex-wrap gap-8">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            {...register("featured")}
          />
          Featured News
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            {...register("isActive")}
          />
          Active
        </label>
      </div>

      {/* Submit */}

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg disabled:opacity-50"
      >
        {loading ? "Saving..." : "Save News"}
      </button>
    </form>
  );
};

export default NewsForm;