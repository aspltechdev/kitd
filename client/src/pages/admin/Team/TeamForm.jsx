import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const TeamForm = ({
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
        name: initialValues.name || "",
        designation: initialValues.designation || "",
        bio: initialValues.bio || "",
        category: initialValues.category || "FOUNDER",
        email: initialValues.email || "",
        phone: initialValues.phone || "",
        linkedin: initialValues.linkedin || "",
        facebook: initialValues.facebook || "",
        instagram: initialValues.instagram || "",
        website: initialValues.website || "",
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
          )}/uploads/team/${initialValues.image}`
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
          Profile Image
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
            className="mt-4 w-36 h-36 rounded-xl object-cover border"
          />
        )}
      </div>

      {/* Name */}

      <div>
        <label className="block font-medium">
          Full Name *
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

      {/* Category */}

      <div>
        <label className="block font-medium">
          Category
        </label>

        <select
          {...register("category")}
          className="w-full border rounded-lg p-3 mt-2"
        >
          <option value="FOUNDER">Founder</option>
          <option value="CO_FOUNDER">
            Co-Founder
          </option>
          <option value="PRESIDENT">
            President
          </option>
          <option value="VICE_PRESIDENT">
            Vice President
          </option>
          <option value="SECRETARY">
            Secretary
          </option>
          <option value="TREASURER">
            Treasurer
          </option>
          <option value="EXECUTIVE_MEMBER">
            Executive Member
          </option>
          <option value="TEACHER">
            Teacher
          </option>
        </select>
      </div>

      {/* Bio */}

      <div>
        <label className="block font-medium">
          Biography
        </label>

        <textarea
          rows={5}
          {...register("bio")}
          className="w-full border rounded-lg p-3 mt-2"
        />
      </div>

      {/* Contact */}

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label>Email</label>

          <input
            type="email"
            {...register("email")}
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>

        <div>
          <label>Phone</label>

          <input
            {...register("phone")}
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>
      </div>

      {/* Social Links */}

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label>LinkedIn</label>

          <input
            {...register("linkedin")}
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>

        <div>
          <label>Facebook</label>

          <input
            {...register("facebook")}
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>

        <div>
          <label>Instagram</label>

          <input
            {...register("instagram")}
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>

        <div>
          <label>Website</label>

          <input
            {...register("website")}
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>
      </div>

      {/* Order */}

      <div>
        <label>Display Order</label>

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

        <label>Active Member</label>
      </div>

      {/* Submit */}

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
      >
        {loading ? "Saving..." : "Save Team Member"}
      </button>
    </form>
  );
};

export default TeamForm;