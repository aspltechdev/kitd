import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const TestimonialForm = ({
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

  const photo = watch("photo");
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (initialValues) {
      reset({
        name: initialValues.name || "",
        designation: initialValues.designation || "",
        company: initialValues.company || "",
        message: initialValues.message || "",
        rating: initialValues.rating || 5,
        displayOrder:
          initialValues.displayOrder || 1,
        featured:
          initialValues.featured || false,
        isActive:
          initialValues.isActive === undefined
            ? true
            : initialValues.isActive,
      });

      if (initialValues.photo) {
        setPreview(
          `${import.meta.env.VITE_API_BASE_URL.replace(
            "/api",
            ""
          )}/uploads/testimonials/${initialValues.photo}`
        );
      }
    }
  }, [initialValues, reset]);

  useEffect(() => {
    if (photo && photo.length > 0) {
      const file = photo[0];
      setPreview(URL.createObjectURL(file));
    }
  }, [photo]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-xl shadow p-6 space-y-6"
    >
      {/* Photo */}

      <div>
        <label className="block font-medium mb-2">
          Photo
        </label>

        <input
          type="file"
          accept="image/*"
          {...register("photo")}
        />

        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="mt-4 w-28 h-28 rounded-full object-cover border"
          />
        )}
      </div>

      {/* Name */}

      <div>
        <label className="block font-medium">
          Name *
        </label>

        <input
          {...register("name", {
            required: "Name is required",
          })}
          className="w-full border rounded-lg p-3 mt-2"
        />

        <p className="text-red-500 text-sm">
          {errors.name?.message}
        </p>
      </div>

      {/* Designation */}

      <div>
        <label className="block font-medium">
          Designation *
        </label>

        <input
          {...register("designation", {
            required: "Designation is required",
          })}
          className="w-full border rounded-lg p-3 mt-2"
        />

        <p className="text-red-500 text-sm">
          {errors.designation?.message}
        </p>
      </div>

      {/* Company */}

      <div>
        <label className="block font-medium">
          Organization / Company
        </label>

        <input
          {...register("company")}
          className="w-full border rounded-lg p-3 mt-2"
        />
      </div>

      {/* Message */}

      <div>
        <label className="block font-medium">
          Testimonial Message *
        </label>

        <textarea
          rows={6}
          {...register("message", {
            required: "Message is required",
          })}
          className="w-full border rounded-lg p-3 mt-2"
        />

        <p className="text-red-500 text-sm">
          {errors.message?.message}
        </p>
      </div>

      {/* Rating */}

      <div>
        <label className="block font-medium">
          Rating
        </label>

        <select
          {...register("rating")}
          className="w-full border rounded-lg p-3 mt-2"
        >
          <option value={5}>⭐⭐⭐⭐⭐ (5)</option>
          <option value={4}>⭐⭐⭐⭐ (4)</option>
          <option value={3}>⭐⭐⭐ (3)</option>
          <option value={2}>⭐⭐ (2)</option>
          <option value={1}>⭐ (1)</option>
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

      {/* Options */}

      <div className="flex flex-wrap gap-8">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            {...register("featured")}
          />
          Featured Testimonial
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
        {loading
          ? "Saving..."
          : "Save Testimonial"}
      </button>
    </form>
  );
};

export default TestimonialForm;