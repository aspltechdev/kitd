import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const GalleryForm = ({
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

  const image = watch("image");
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (initialValues) {
      reset({
        title: initialValues.title || "",
        description: initialValues.description || "",
        category: initialValues.category || "",
        displayOrder: initialValues.displayOrder || 1,
        isActive:
          initialValues.isActive === undefined
            ? true
            : initialValues.isActive,
      });

      if (initialValues.image) {
        setPreview(
          `${import.meta.env.VITE_API_BASE_URL.replace(
            "/api",
            ""
          )}/uploads/gallery/${initialValues.image}`
        );
      }
    }
  }, [initialValues, reset]);

  useEffect(() => {
    if (image && image.length > 0) {
      const file = image[0];
      setPreview(URL.createObjectURL(file));
    }
  }, [image]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-xl shadow p-6 space-y-6"
    >
      {/* Image */}

      <div>
        <label className="block font-medium mb-2">
          Gallery Image *
        </label>

        <input
          type="file"
          accept="image/*"
          {...register("image")}
        />

        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="mt-4 w-64 h-44 object-cover rounded-lg border"
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
        />

        <p className="text-red-500 text-sm">
          {errors.title?.message}
        </p>
      </div>

      {/* Description */}

      <div>
        <label className="block font-medium">
          Description
        </label>

        <textarea
          rows={5}
          {...register("description")}
          className="w-full border rounded-lg p-3 mt-2"
        />
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
          <option value="">Select Category</option>
          <option value="EVENT">Event</option>
          <option value="WORKSHOP">Workshop</option>
          <option value="PERFORMANCE">Performance</option>
          <option value="CULTURAL_PROGRAM">
            Cultural Program
          </option>
          <option value="TRAINING">Training</option>
          <option value="MEETING">Meeting</option>
          <option value="OTHER">Other</option>
        </select>
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

      {/* Status */}

      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          {...register("isActive")}
        />

        <label>Active</label>
      </div>

      {/* Submit */}

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg disabled:opacity-50"
      >
        {loading ? "Saving..." : "Save Gallery"}
      </button>
    </form>
  );
};

export default GalleryForm;