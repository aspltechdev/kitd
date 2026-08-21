// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";

// const TestimonialForm = ({
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
//         name: initialValues.name || "",
//         designation: initialValues.designation || "",
//         company: initialValues.company || "",
//         message: initialValues.message || "",
//         rating: initialValues.rating || 5,
//         displayOrder:
//           initialValues.displayOrder || 1,
//         featured:
//           initialValues.featured || false,
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
//           )}/uploads/testimonials/${initialValues.photo}`
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
//           Photo
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
//             className="mt-4 w-28 h-28 rounded-full object-cover border"
//           />
//         )}
//       </div>

//       {/* Name */}

//       <div>
//         <label className="block font-medium">
//           Name *
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

//       {/* Company */}

//       <div>
//         <label className="block font-medium">
//           Organization / Company
//         </label>

//         <input
//           {...register("company")}
//           className="w-full border rounded-lg p-3 mt-2"
//         />
//       </div>

//       {/* Message */}

//       <div>
//         <label className="block font-medium">
//           Testimonial Message *
//         </label>

//         <textarea
//           rows={6}
//           {...register("message", {
//             required: "Message is required",
//           })}
//           className="w-full border rounded-lg p-3 mt-2"
//         />

//         <p className="text-red-500 text-sm">
//           {errors.message?.message}
//         </p>
//       </div>

//       {/* Rating */}

//       <div>
//         <label className="block font-medium">
//           Rating
//         </label>

//         <select
//           {...register("rating")}
//           className="w-full border rounded-lg p-3 mt-2"
//         >
//           <option value={5}>⭐⭐⭐⭐⭐ (5)</option>
//           <option value={4}>⭐⭐⭐⭐ (4)</option>
//           <option value={3}>⭐⭐⭐ (3)</option>
//           <option value={2}>⭐⭐ (2)</option>
//           <option value={1}>⭐ (1)</option>
//         </select>
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
//           Featured Testimonial
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
//         {loading
//           ? "Saving..."
//           : "Save Testimonial"}
//       </button>
//     </form>
//   );
// };

// export default TestimonialForm;
import { useEffect, useRef, useState } from "react";
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
  const hasInitialized = useRef(false);

  useEffect(() => {
    // Only run the reset once — guards against parent re-renders
    // passing a new `initialValues` object reference on every render,
    // which would otherwise wipe out whatever the user is typing.
    if (hasInitialized.current) return;

    if (initialValues && Object.keys(initialValues).length > 0) {
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

      hasInitialized.current = true;
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
      style={{
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      {/* Photo */}

      <div>
        <label
          className="block font-medium mb-2"
          style={{ display: "block", fontWeight: 500, marginBottom: "8px" }}
        >
          Photo
        </label>

        <input
          type="file"
          accept="image/*"
          {...register("photo")}
          style={{ display: "block" }}
        />

        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="mt-4 w-28 h-28 rounded-full object-cover border"
            style={{
              marginTop: "16px",
              width: "112px",
              height: "112px",
              borderRadius: "9999px",
              objectFit: "cover",
              border: "1px solid #e5e7eb",
            }}
          />
        )}
      </div>

      {/* Name */}

      <div>
        <label
          className="block font-medium"
          style={{ display: "block", fontWeight: 500 }}
        >
          Name *
        </label>

        <input
          {...register("name", {
            required: "Name is required",
          })}
          className="w-full border rounded-lg p-3 mt-2"
          style={{
            width: "100%",
            border: "1px solid #d1d5db",
            borderRadius: "8px",
            padding: "12px",
            marginTop: "8px",
            boxSizing: "border-box",
          }}
        />

        <p
          className="text-red-500 text-sm"
          style={{ color: "#ef4444", fontSize: "14px", marginTop: "4px" }}
        >
          {errors.name?.message}
        </p>
      </div>

      {/* Designation */}

      <div>
        <label
          className="block font-medium"
          style={{ display: "block", fontWeight: 500 }}
        >
          Designation *
        </label>

        <input
          {...register("designation", {
            required: "Designation is required",
          })}
          className="w-full border rounded-lg p-3 mt-2"
          style={{
            width: "100%",
            border: "1px solid #d1d5db",
            borderRadius: "8px",
            padding: "12px",
            marginTop: "8px",
            boxSizing: "border-box",
          }}
        />

        <p
          className="text-red-500 text-sm"
          style={{ color: "#ef4444", fontSize: "14px", marginTop: "4px" }}
        >
          {errors.designation?.message}
        </p>
      </div>

      {/* Company */}

      <div>
        <label
          className="block font-medium"
          style={{ display: "block", fontWeight: 500 }}
        >
          Organization / Company
        </label>

        <input
          {...register("company")}
          className="w-full border rounded-lg p-3 mt-2"
          style={{
            width: "100%",
            border: "1px solid #d1d5db",
            borderRadius: "8px",
            padding: "12px",
            marginTop: "8px",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Message */}

      <div>
        <label
          className="block font-medium"
          style={{ display: "block", fontWeight: 500 }}
        >
          Testimonial Message *
        </label>

        <textarea
          rows={6}
          {...register("message", {
            required: "Message is required",
          })}
          className="w-full border rounded-lg p-3 mt-2"
          style={{
            width: "100%",
            border: "1px solid #d1d5db",
            borderRadius: "8px",
            padding: "12px",
            marginTop: "8px",
            boxSizing: "border-box",
            resize: "vertical",
          }}
        />

        <p
          className="text-red-500 text-sm"
          style={{ color: "#ef4444", fontSize: "14px", marginTop: "4px" }}
        >
          {errors.message?.message}
        </p>
      </div>

      {/* Rating */}

      <div>
        <label
          className="block font-medium"
          style={{ display: "block", fontWeight: 500 }}
        >
          Rating
        </label>

        <select
          {...register("rating")}
          className="w-full border rounded-lg p-3 mt-2"
          style={{
            width: "100%",
            border: "1px solid #d1d5db",
            borderRadius: "8px",
            padding: "12px",
            marginTop: "8px",
            boxSizing: "border-box",
            background: "#fff",
          }}
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
        <label
          className="block font-medium"
          style={{ display: "block", fontWeight: 500 }}
        >
          Display Order
        </label>

        <input
          type="number"
          min="1"
          {...register("displayOrder")}
          className="w-full border rounded-lg p-3 mt-2"
          style={{
            width: "100%",
            border: "1px solid #d1d5db",
            borderRadius: "8px",
            padding: "12px",
            marginTop: "8px",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Options */}

      <div
        className="flex flex-wrap gap-8"
        style={{ display: "flex", flexWrap: "wrap", gap: "32px" }}
      >
        <label
          className="flex items-center gap-2"
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <input
            type="checkbox"
            {...register("featured")}
          />
          Featured Testimonial
        </label>

        <label
          className="flex items-center gap-2"
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
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
        style={{
          background: "#2563eb",
          color: "#fff",
          padding: "12px 24px",
          borderRadius: "8px",
          border: "none",
          fontWeight: 500,
          cursor: loading ? "not-allowed" : "pointer",
          opacity: loading ? 0.5 : 1,
        }}
      >
        {loading
          ? "Saving..."
          : "Save Testimonial"}
      </button>
    </form>
  );
};

export default TestimonialForm;