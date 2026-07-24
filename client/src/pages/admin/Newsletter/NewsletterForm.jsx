import { useEffect } from "react";
import { useForm } from "react-hook-form";

const NewsletterForm = ({
  initialValues = {},
  onSubmit,
  loading = false,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (initialValues) {
      reset({
        name: initialValues.name || "",
        email: initialValues.email || "",
        phone: initialValues.phone || "",
        source: initialValues.source || "",
        notes: initialValues.notes || "",
        isActive:
          initialValues.isActive === undefined
            ? true
            : initialValues.isActive,
      });
    }
  }, [initialValues, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-xl shadow p-6 space-y-6"
    >
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
          placeholder="Enter full name"
        />

        <p className="text-red-500 text-sm">
          {errors.name?.message}
        </p>
      </div>

      {/* Email */}

      <div>
        <label className="block font-medium">
          Email Address *
        </label>

        <input
          type="email"
          {...register("email", {
            required: "Email is required",
          })}
          className="w-full border rounded-lg p-3 mt-2"
          placeholder="Enter email address"
        />

        <p className="text-red-500 text-sm">
          {errors.email?.message}
        </p>
      </div>

      {/* Phone */}

      <div>
        <label className="block font-medium">
          Phone Number
        </label>

        <input
          {...register("phone")}
          className="w-full border rounded-lg p-3 mt-2"
          placeholder="Enter phone number"
        />
      </div>

      {/* Source */}

      <div>
        <label className="block font-medium">
          Source
        </label>

        <select
          {...register("source")}
          className="w-full border rounded-lg p-3 mt-2"
        >
          <option value="">
            Select Source
          </option>
          <option value="Website">
            Website
          </option>
          <option value="Landing Page">
            Landing Page
          </option>
          <option value="Event">
            Event
          </option>
          <option value="Campaign">
            Campaign
          </option>
          <option value="Referral">
            Referral
          </option>
          <option value="Manual">
            Manual Entry
          </option>
        </select>
      </div>

      {/* Notes */}

      <div>
        <label className="block font-medium">
          Notes
        </label>

        <textarea
          rows={4}
          {...register("notes")}
          className="w-full border rounded-lg p-3 mt-2"
          placeholder="Additional notes..."
        />
      </div>

      {/* Status */}

      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          {...register("isActive")}
        />

        <label>Active Subscriber</label>
      </div>

      {/* Submit */}

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg disabled:opacity-50"
      >
        {loading
          ? "Saving..."
          : "Save Subscriber"}
      </button>
    </form>
  );
};

export default NewsletterForm;