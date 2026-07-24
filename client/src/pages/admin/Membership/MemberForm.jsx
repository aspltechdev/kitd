import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const MemberForm = ({
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
        memberId: initialValues.memberId || "",
        fullName: initialValues.fullName || "",
        email: initialValues.email || "",
        mobile: initialValues.mobile || "",
        gender: initialValues.gender || "",
        membershipType: initialValues.membershipType || "",
        city: initialValues.city || "",
        state: initialValues.state || "",
        country: initialValues.country || "",
        joinedDate: initialValues.joinedDate
          ? initialValues.joinedDate.substring(0, 10)
          : "",
        expiryDate: initialValues.expiryDate
          ? initialValues.expiryDate.substring(0, 10)
          : "",
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
          )}/uploads/members/${initialValues.photo}`
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
          Member Photo
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
            className="mt-4 w-32 h-32 rounded-full object-cover border"
          />
        )}
      </div>

      {/* Member ID */}

      <div>
        <label className="block font-medium">
          Member ID *
        </label>

        <input
          {...register("memberId", {
            required: "Member ID is required",
          })}
          className="w-full border rounded-lg p-3 mt-2"
        />

        <p className="text-red-500 text-sm">
          {errors.memberId?.message}
        </p>
      </div>

      {/* Full Name */}

      <div>
        <label className="block font-medium">
          Full Name *
        </label>

        <input
          {...register("fullName", {
            required: "Full Name is required",
          })}
          className="w-full border rounded-lg p-3 mt-2"
        />

        <p className="text-red-500 text-sm">
          {errors.fullName?.message}
        </p>
      </div>

      {/* Email */}

      <div>
        <label className="block font-medium">
          Email *
        </label>

        <input
          type="email"
          {...register("email", {
            required: "Email is required",
          })}
          className="w-full border rounded-lg p-3 mt-2"
        />

        <p className="text-red-500 text-sm">
          {errors.email?.message}
        </p>
      </div>

      {/* Mobile */}

      <div>
        <label className="block font-medium">
          Mobile *
        </label>

        <input
          {...register("mobile", {
            required: "Mobile Number is required",
          })}
          className="w-full border rounded-lg p-3 mt-2"
        />

        <p className="text-red-500 text-sm">
          {errors.mobile?.message}
        </p>
      </div>

      {/* Gender */}

      <div>
        <label className="block font-medium">
          Gender
        </label>

        <select
          {...register("gender")}
          className="w-full border rounded-lg p-3 mt-2"
        >
          <option value="">Select Gender</option>
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
          <option value="OTHER">Other</option>
        </select>
      </div>

      {/* Membership Type */}

      <div>
        <label className="block font-medium">
          Membership Type
        </label>

        <select
          {...register("membershipType")}
          className="w-full border rounded-lg p-3 mt-2"
        >
          <option value="">Select Membership</option>
          <option value="STUDENT">Student</option>
          <option value="INDIVIDUAL">Individual</option>
          <option value="LIFETIME">Lifetime</option>
          <option value="INSTITUTIONAL">Institutional</option>
        </select>
      </div>

      {/* Address */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block font-medium">
            City
          </label>

          <input
            {...register("city")}
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>

        <div>
          <label className="block font-medium">
            State
          </label>

          <input
            {...register("state")}
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>

        <div>
          <label className="block font-medium">
            Country
          </label>

          <input
            {...register("country")}
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>
      </div>

      {/* Dates */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium">
            Joined Date
          </label>

          <input
            type="date"
            {...register("joinedDate")}
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>

        <div>
          <label className="block font-medium">
            Expiry Date
          </label>

          <input
            type="date"
            {...register("expiryDate")}
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>
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
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg disabled:opacity-50"
      >
        {loading ? "Saving..." : "Save Member"}
      </button>
    </form>
  );
};

export default MemberForm;