import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const PartnerForm = ({
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

  const logo = watch("logo");
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (initialValues) {
      reset({
        name: initialValues.name || "",
        partnerType: initialValues.partnerType || "",
        website: initialValues.website || "",
        description: initialValues.description || "",
        displayOrder:
          initialValues.displayOrder || 1,
        featured:
          initialValues.featured || false,
        isActive:
          initialValues.isActive === undefined
            ? true
            : initialValues.isActive,
      });

      if (initialValues.logo) {
        setPreview(
          `${import.meta.env.VITE_API_BASE_URL.replace(
            "/api",
            ""
          )}/uploads/partners/${initialValues.logo}`
        );
      }
    }
  }, [initialValues, reset]);

  useEffect(() => {
    if (logo && logo.length > 0) {
      setPreview(
        URL.createObjectURL(logo[0])
      );
    }
  }, [logo]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-xl shadow p-6 space-y-6"
    >
      {/* Logo */}

      <div>
        <label className="block font-medium mb-2">
          Partner Logo
        </label>

        <input
          type="file"
          accept="image/*"
          {...register("logo")}
        />

        {preview && (
          <img
            src={preview}
            alt="Logo Preview"
            className="mt-4 w-36 h-36 object-contain border rounded-lg p-2 bg-white"
          />
        )}
      </div>

      {/* Partner Name */}

      <div>
        <label className="block font-medium">
          Partner Name *
        </label>

        <input
          {...register("name", {
            required: "Partner name is required",
          })}
          className="w-full border rounded-lg p-3 mt-2"
          placeholder="Enter partner name"
        />

        <p className="text-red-500 text-sm">
          {errors.name?.message}
        </p>
      </div>

      {/* Partner Type */}

      <div>
        <label className="block font-medium">
          Partner Type *
        </label>

        <select
          {...register("partnerType", {
            required:
              "Partner type is required",
          })}
          className="w-full border rounded-lg p-3 mt-2"
        >
          <option value="">
            Select Partner Type
          </option>

          <option value="Sponsor">
            Sponsor
          </option>

          <option value="Institutional Partner">
            Institutional Partner
          </option>

          <option value="Cultural Partner">
            Cultural Partner
          </option>

          <option value="Educational Partner">
            Educational Partner
          </option>

          <option value="Corporate Partner">
            Corporate Partner
          </option>

          <option value="Media Partner">
            Media Partner
          </option>

          <option value="Government Organization">
            Government Organization
          </option>

          <option value="NGO">
            NGO
          </option>

          <option value="Other">
            Other
          </option>
        </select>

        <p className="text-red-500 text-sm">
          {errors.partnerType?.message}
        </p>
      </div>

      {/* Website */}

      <div>
        <label className="block font-medium">
          Website URL
        </label>

        <input
          type="url"
          {...register("website")}
          className="w-full border rounded-lg p-3 mt-2"
          placeholder="https://example.com"
        />
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
          placeholder="Partner description..."
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
          Featured Partner
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
          : "Save Partner"}
      </button>
    </form>
  );
};

export default PartnerForm;