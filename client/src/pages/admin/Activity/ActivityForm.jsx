import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const ActivityForm = ({
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
        shortDescription: initialValues.shortDescription || "",
        description: initialValues.description || "",
        date: initialValues.date
          ? initialValues.date.substring(0, 10)
          : "",
        location: initialValues.location || "",
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
          )}/uploads/activities/${initialValues.image}`
        );
      }
    }
  }, [initialValues, reset]);

  useEffect(() => {
    if (image && image.length > 0) {
      setPreview(URL.createObjectURL(image[0]));
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
          Activity Image *
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
            className="mt-4 w-60 rounded-lg border"
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

      {/* Short Description */}

      <div>
        <label className="block font-medium">
          Short Description
        </label>

        <textarea
          rows={3}
          {...register("shortDescription")}
          className="w-full border rounded-lg p-3 mt-2"
        />
      </div>

      {/* Full Description */}

      <div>
        <label className="block font-medium">
          Description
        </label>

        <textarea
          rows={6}
          {...register("description")}
          className="w-full border rounded-lg p-3 mt-2"
        />
      </div>

      {/* Date & Location */}

      <div className="grid md:grid-cols-2 gap-5">

        <div>
          <label className="block font-medium">
            Activity Date
          </label>

          <input
            type="date"
            {...register("date")}
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>

        <div>
          <label className="block font-medium">
            Location
          </label>

          <input
            {...register("location")}
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>

      </div>

      {/* Display Order */}

      <div>
        <label className="block font-medium">
          Display Order
        </label>

        <input
          type="number"
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
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
      >
        {loading ? "Saving..." : "Save Activity"}
      </button>
    </form>
  );
};

export default ActivityForm;