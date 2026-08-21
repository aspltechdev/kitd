import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const StarIcon = ({ filled }) => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill={filled ? "#f59e0b" : "none"}
    stroke={filled ? "#f59e0b" : "#d1d5db"}
    strokeWidth="1.5"
  >
    <path d="M12 2.5l2.9 6.2 6.6.7-5 4.7 1.4 6.6L12 17.6l-5.9 3.1 1.4-6.6-5-4.7 6.6-.7L12 2.5z" />
  </svg>
);

const TestimonialForm = ({
  initialValues = {},
  onSubmit,
  loading = false,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const photo = watch("photo");
  const rating = watch("rating") || 5;
  const featured = watch("featured");
  const isActive = watch("isActive");
  const [preview, setPreview] = useState(null);
  const [dragOver, setDragOver] = useState(false);

  useEffect(() => {
    if (initialValues) {
      reset({
        name: initialValues.name || "",
        designation: initialValues.designation || "",
        company: initialValues.company || "",
        message: initialValues.message || "",
        rating: initialValues.rating || 5,
        displayOrder: initialValues.displayOrder || 1,
        featured: initialValues.featured || false,
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
      setPreview(URL.createObjectURL(photo[0]));
    }
  }, [photo]);

  const messageLen = (watch("message") || "").length;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-gray-100 p-8 md:p-10 space-y-8 max-w-2xl mx-auto"
    >
      {/* Header */}
      <div className="pb-2 border-b border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
          Testimonial Details
        </h2>
        <p className="text-sm text-gray-400 mt-1">
          Craft a testimonial entry that shines on the site.
        </p>
      </div>

      {/* Photo */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Photo
        </label>
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragOver(false);
            if (e.dataTransfer.files?.[0]) {
              setValue("photo", e.dataTransfer.files);
              setPreview(URL.createObjectURL(e.dataTransfer.files[0]));
            }
          }}
          className={`flex items-center gap-5 rounded-2xl border-2 border-dashed p-5 transition-all ${
            dragOver
              ? "border-blue-400 bg-blue-50/50"
              : "border-gray-200 bg-gray-50/60"
          }`}
        >
          <div className="relative shrink-0">
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="w-20 h-20 rounded-full object-cover ring-4 ring-white shadow-md"
              />
            ) : (
              <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-xs font-medium ring-4 ring-white shadow-md">
                No photo
              </div>
            )}
          </div>
          <div className="flex-1">
            <label className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 text-white text-sm font-medium cursor-pointer hover:bg-gray-800 transition-colors">
              Choose file
              <input
                type="file"
                accept="image/*"
                className="hidden"
                {...register("photo")}
              />
            </label>
            <p className="text-xs text-gray-400 mt-2">
              PNG or JPG, or drag & drop here
            </p>
          </div>
        </div>
      </div>

      {/* Name + Designation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
            Name
            <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            className="w-full rounded-xl border border-gray-200 bg-gray-50/60 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-all focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            placeholder="Jane Doe"
          />
          <p className="text-red-500 text-xs mt-1.5 min-h-[16px]">
            {errors.name?.message}
          </p>
        </div>

        <div>
          <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
            Designation
            <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            {...register("designation", {
              required: "Designation is required",
            })}
            className="w-full rounded-xl border border-gray-200 bg-gray-50/60 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-all focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            placeholder="Founder & CEO"
          />
          <p className="text-red-500 text-xs mt-1.5 min-h-[16px]">
            {errors.designation?.message}
          </p>
        </div>
      </div>

      {/* Company */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Organization / Company
        </label>
        <input
          {...register("company")}
          className="w-full rounded-xl border border-gray-200 bg-gray-50/60 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-all focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
          placeholder="Acme Inc."
        />
      </div>

      {/* Message */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="flex items-center text-sm font-semibold text-gray-700">
            Testimonial Message
            <span className="text-red-500 ml-1">*</span>
          </label>
          <span className="text-xs text-gray-400">{messageLen} chars</span>
        </div>
        <textarea
          rows={5}
          {...register("message", { required: "Message is required" })}
          className="w-full rounded-xl border border-gray-200 bg-gray-50/60 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 resize-y transition-all focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
          placeholder="What did they love about the experience?"
        />
        <p className="text-red-500 text-xs mt-1.5 min-h-[16px]">
          {errors.message?.message}
        </p>
      </div>

      {/* Rating + Display Order */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Rating
          </label>
          <div className="flex items-center gap-1 rounded-xl border border-gray-200 bg-gray-50/60 px-4 py-3">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() =>
                  setValue("rating", n, { shouldValidate: true })
                }
                className="p-0.5 transition-transform hover:scale-110"
                aria-label={`${n} star`}
              >
                <StarIcon filled={n <= rating} />
              </button>
            ))}
            <span className="ml-2 text-sm font-semibold text-amber-500">
              {rating}/5
            </span>
            <input type="hidden" {...register("rating")} />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Display Order
          </label>
          <input
            type="number"
            min="1"
            {...register("displayOrder")}
            className="w-full rounded-xl border border-gray-200 bg-gray-50/60 px-4 py-3 text-sm text-gray-900 transition-all focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
          />
        </div>
      </div>

      {/* Toggles */}
      <div className="flex flex-wrap gap-8 rounded-2xl bg-gray-50/60 border border-gray-100 px-5 py-4">
        <label className="flex items-center gap-3 cursor-pointer select-none">
          <span className="text-sm font-medium text-gray-700">Featured</span>
          <span className="relative inline-block w-10 h-6">
            <input
              type="checkbox"
              {...register("featured")}
              className="peer sr-only"
            />
            <span className="absolute inset-0 rounded-full bg-gray-300 peer-checked:bg-gray-900 transition-colors" />
            <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform peer-checked:translate-x-4" />
          </span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer select-none">
          <span className="text-sm font-medium text-gray-700">Active</span>
          <span className="relative inline-block w-10 h-6">
            <input
              type="checkbox"
              {...register("isActive")}
              className="peer sr-only"
            />
            <span className="absolute inset-0 rounded-full bg-gray-300 peer-checked:bg-emerald-500 transition-colors" />
            <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform peer-checked:translate-x-4" />
          </span>
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gray-900 to-gray-700 text-white text-sm font-semibold py-3.5 shadow-lg shadow-gray-900/20 transition-all hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0"
      >
        {loading && (
          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        )}
        {loading ? "Saving..." : "Save Testimonial"}
      </button>
    </form>
  );
};

export default TestimonialForm;