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
    maxWidth: "600px",
    margin: "0 auto",
  },
  fieldGroup: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    display: "block",
    fontWeight: 500,
    fontSize: "14px",
    marginBottom: "8px",
    color: "#111827",
  },
  input: {
    width: "100%",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    padding: "12px",
    fontSize: "14px",
    color: "#111827",
    backgroundColor: "#ffffff",
    boxSizing: "border-box",
    outline: "none",
  },
  textarea: {
    width: "100%",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    padding: "12px",
    fontSize: "14px",
    color: "#111827",
    backgroundColor: "#ffffff",
    boxSizing: "border-box",
    outline: "none",
    resize: "vertical",
    fontFamily: "inherit",
  },
  select: {
    width: "100%",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    padding: "12px",
    fontSize: "14px",
    color: "#111827",
    backgroundColor: "#ffffff",
    boxSizing: "border-box",
    outline: "none",
  },
  fileInput: {
    fontSize: "14px",
    color: "#111827",
  },
  preview: {
    marginTop: "16px",
    width: "112px",
    height: "112px",
    borderRadius: "9999px",
    objectFit: "cover",
    border: "1px solid #e5e7eb",
    display: "block",
  },
  errorText: {
    color: "#ef4444",
    fontSize: "13px",
    marginTop: "4px",
    minHeight: "16px",
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
    fontSize: "14px",
    color: "#111827",
    cursor: "pointer",
  },
  checkbox: {
    width: "16px",
    height: "16px",
    cursor: "pointer",
  },
  submitButton: {
    backgroundColor: "#2563eb",
    color: "#ffffff",
    padding: "12px 24px",
    borderRadius: "8px",
    border: "none",
    fontSize: "15px",
    fontWeight: 500,
    cursor: "pointer",
    transition: "background-color 0.2s ease",
  },
  submitButtonDisabled: {
    backgroundColor: "#2563eb",
    color: "#ffffff",
    padding: "12px 24px",
    borderRadius: "8px",
    border: "none",
    fontSize: "15px",
    fontWeight: 500,
    cursor: "not-allowed",
    opacity: 0.5,
  },
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
      const file = photo[0];
      setPreview(URL.createObjectURL(file));
    }
  }, [photo]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
      {/* Photo */}
      <div style={styles.fieldGroup}>
        <label style={styles.label}>Photo</label>

        <input
          type="file"
          accept="image/*"
          style={styles.fileInput}
          {...register("photo")}
        />

        {preview && (
          <img src={preview} alt="Preview" style={styles.preview} />
        )}
      </div>

      {/* Name */}
      <div style={styles.fieldGroup}>
        <label style={styles.label}>Name *</label>

        <input
          type="text"
          autoComplete="off"
          style={styles.input}
          {...register("name", {
            required: "Name is required",
          })}
        />

        <p style={styles.errorText}>{errors.name?.message}</p>
      </div>

      {/* Designation */}
      <div style={styles.fieldGroup}>
        <label style={styles.label}>Designation *</label>

        <input
          type="text"
          autoComplete="off"
          style={styles.input}
          {...register("designation", {
            required: "Designation is required",
          })}
        />

        <p style={styles.errorText}>{errors.designation?.message}</p>
      </div>

      {/* Company */}
      <div style={styles.fieldGroup}>
        <label style={styles.label}>Organization / Company</label>

        <input
          type="text"
          autoComplete="off"
          style={styles.input}
          {...register("company")}
        />
      </div>

      {/* Message */}
      <div style={styles.fieldGroup}>
        <label style={styles.label}>Testimonial Message *</label>

        <textarea
          rows={6}
          style={styles.textarea}
          {...register("message", {
            required: "Message is required",
          })}
        />

        <p style={styles.errorText}>{errors.message?.message}</p>
      </div>

      {/* Rating */}
      <div style={styles.fieldGroup}>
        <label style={styles.label}>Rating</label>

        <select style={styles.select} {...register("rating")}>
          <option value={5}>⭐⭐⭐⭐⭐ (5)</option>
          <option value={4}>⭐⭐⭐⭐ (4)</option>
          <option value={3}>⭐⭐⭐ (3)</option>
          <option value={2}>⭐⭐ (2)</option>
          <option value={1}>⭐ (1)</option>
        </select>
      </div>

      {/* Display Order */}
      <div style={styles.fieldGroup}>
        <label style={styles.label}>Display Order</label>

        <input
          type="number"
          min="1"
          style={styles.input}
          {...register("displayOrder")}
        />
      </div>

      {/* Options */}
      <div style={styles.optionsRow}>
        <label style={styles.checkboxLabel}>
          <input
            type="checkbox"
            style={styles.checkbox}
            {...register("featured")}
          />
          Featured Testimonial
        </label>

        <label style={styles.checkboxLabel}>
          <input
            type="checkbox"
            style={styles.checkbox}
            {...register("isActive")}
          />
          Active
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        style={
          loading ? styles.submitButtonDisabled : styles.submitButton
        }
        onMouseOver={(e) => {
          if (!loading) e.currentTarget.style.backgroundColor = "#1d4ed8";
        }}
        onMouseOut={(e) => {
          if (!loading) e.currentTarget.style.backgroundColor = "#2563eb";
        }}
      >
        {loading ? "Saving..." : "Save Testimonial"}
      </button>
    </form>
  );
};

export default TestimonialForm;