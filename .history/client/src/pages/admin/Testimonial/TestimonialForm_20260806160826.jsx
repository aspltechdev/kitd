import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const styles = {
  form: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  label: {
    display: "block",
    fontWeight: 500,
    marginBottom: "8px",
    color: "#111827",
  },
  labelNoMargin: {
    display: "block",
    fontWeight: 500,
    color: "#111827",
  },
  preview: {
    marginTop: "16px",
    width: "112px",
    height: "112px",
    borderRadius: "9999px",
    objectFit: "cover",
    border: "1px solid #e5e7eb",
  },
  input: {
    width: "100%",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    padding: "12px",
    marginTop: "8px",
    boxSizing: "border-box",
    color: "#111827",
    backgroundColor: "#ffffff",
  },
  textarea: {
    width: "100%",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    padding: "12px",
    marginTop: "8px",
    boxSizing: "border-box",
    resize: "vertical",
    color: "#111827",
    backgroundColor: "#ffffff",
  },
  select: {
    width: "100%",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    padding: "12px",
    marginTop: "8px",
    boxSizing: "border-box",
    color: "#111827",
    backgroundColor: "#ffffff",
  },
  errorText: {
    color: "#ef4444",
    fontSize: "14px",
  },
  optionsRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "32px",
  },
  checkboxLabel: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    color: "#111827",
  },
  submitButton: (loading) => ({
    backgroundColor: "#2563eb",
    color: "#ffffff",
    padding: "12px 24px",
    borderRadius: "8px",
    border: "none",
    cursor: loading ? "not-allowed" : "pointer",
    opacity: loading ? 0.5 : 1,
    fontWeight: 500,
  }),
};

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
    <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
      {/* Photo */}

      <div>
        <label style={styles.label}>Photo</label>

        <input
          type="file"
          accept="image/*"
          {...register("photo")}
        />

        {preview && (
          <img
            src={preview}
            alt="Preview"
            style={styles.preview}
          />
        )}
      </div>

      {/* Name */}

      <div>
        <label style={styles.labelNoMargin}>Name *</label>

        <input
          {...register("name", {
            required: "Name is required",
          })}
          style={styles.input}
        />

        <p style={styles.errorText}>
          {errors.name?.message}
        </p>
      </div>

      {/* Designation */}

      <div>
        <label style={styles.labelNoMargin}>Designation *</label>

        <input
          {...register("designation", {
            required: "Designation is required",
          })}
          style={styles.input}
        />

        <p style={styles.errorText}>
          {errors.designation?.message}
        </p>
      </div>

      {/* Company */}

      <div>
        <label style={styles.labelNoMargin}>
          Organization / Company
        </label>

        <input
          {...register("company")}
          style={styles.input}
        />
      </div>

      {/* Message */}

      <div>
        <label style={styles.labelNoMargin}>
          Testimonial Message *
        </label>

        <textarea
          rows={6}
          {...register("message", {
            required: "Message is required",
          })}
          style={styles.textarea}
        />

        <p style={styles.errorText}>
          {errors.message?.message}
        </p>
      </div>

      {/* Rating */}

      <div>
        <label style={styles.labelNoMargin}>Rating</label>

        <select {...register("rating")} style={styles.select}>
          <option value={5}>⭐⭐⭐⭐⭐ (5)</option>
          <option value={4}>⭐⭐⭐⭐ (4)</option>
          <option value={3}>⭐⭐⭐ (3)</option>
          <option value={2}>⭐⭐ (2)</option>
          <option value={1}>⭐ (1)</option>
        </select>
      </div>

      {/* Display Order */}

      <div>
        <label style={styles.labelNoMargin}>Display Order</label>

        <input
          type="number"
          min="1"
          {...register("displayOrder")}
          style={styles.input}
        />
      </div>

      {/* Options */}

      <div style={styles.optionsRow}>
        <label style={styles.checkboxLabel}>
          <input type="checkbox" {...register("featured")} />
          Featured Testimonial
        </label>

        <label style={styles.checkboxLabel}>
          <input type="checkbox" {...register("isActive")} />
          Active
        </label>
      </div>

      {/* Submit */}

      <button
        type="submit"
        disabled={loading}
        style={styles.submitButton(loading)}
        onMouseOver={(e) => {
          if (!loading) e.target.style.backgroundColor = "#1d4ed8";
        }}
        onMouseOut={(e) => {
          if (!loading) e.target.style.backgroundColor = "#2563eb";
        }}
      >
        {loading ? "Saving..." : "Save Testimonial"}
      </button>
    </form>
  );
};

export default TestimonialForm;