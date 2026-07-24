import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const ArtistForm = ({
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
        fullName: initialValues.fullName || "",
        stageName: initialValues.stageName || "",
        email: initialValues.email || "",
        mobile: initialValues.mobile || "",
        gender: initialValues.gender || "",
        dateOfBirth: initialValues.dateOfBirth
          ? initialValues.dateOfBirth.substring(0, 10)
          : "",
        danceStyle: initialValues.danceStyle || "",
        experience: initialValues.experience || "",
        qualification: initialValues.qualification || "",
        biography: initialValues.biography || "",
        city: initialValues.city || "",
        state: initialValues.state || "",
        country: initialValues.country || "",
        website: initialValues.website || "",
        facebook: initialValues.facebook || "",
        instagram: initialValues.instagram || "",
        youtube: initialValues.youtube || "",
        displayOrder: initialValues.displayOrder || 1,
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
          )}/uploads/artists/${initialValues.photo}`
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
          Artist Photo
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

      {/* Stage Name */}

      <div>
        <label className="block font-medium">
          Stage Name
        </label>

        <input
          {...register("stageName")}
          className="w-full border rounded-lg p-3 mt-2"
        />
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

      {/* Gender & DOB */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

        <div>
          <label className="block font-medium">
            Date of Birth
          </label>

          <input
            type="date"
            {...register("dateOfBirth")}
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>
      </div>

      {/* Dance Style */}

      <div>
        <label className="block font-medium">
          Dance Style
        </label>

        <select
          {...register("danceStyle")}
          className="w-full border rounded-lg p-3 mt-2"
        >
          <option value="">Select Dance Style</option>
          <option value="BHARATANATYAM">
            Bharatanatyam
          </option>
          <option value="KATHAK">
            Kathak
          </option>
          <option value="KUCHIPUDI">
            Kuchipudi
          </option>
          <option value="ODISSI">
            Odissi
          </option>
          <option value="MOHINIYATTAM">
            Mohiniyattam
          </option>
          <option value="KATHAKALI">
            Kathakali
          </option>
          <option value="MANIPURI">
            Manipuri
          </option>
          <option value="SATTRIYA">
            Sattriya
          </option>
          <option value="OTHER">
            Other
          </option>
        </select>
      </div>

      {/* Experience */}

      <div>
        <label className="block font-medium">
          Experience (Years)
        </label>

        <input
          type="number"
          min="0"
          {...register("experience")}
          className="w-full border rounded-lg p-3 mt-2"
        />
      </div>

      {/* Qualification */}

      <div>
        <label className="block font-medium">
          Qualification
        </label>

        <input
          {...register("qualification")}
          className="w-full border rounded-lg p-3 mt-2"
        />
      </div>

      {/* Biography */}

      <div>
        <label className="block font-medium">
          Biography
        </label>

        <textarea
          rows={5}
          {...register("biography")}
          className="w-full border rounded-lg p-3 mt-2"
        />
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

      {/* Social Links */}

      <div className="space-y-4">
        <input
          type="url"
          placeholder="Website"
          {...register("website")}
          className="w-full border rounded-lg p-3"
        />

        <input
          type="url"
          placeholder="Facebook"
          {...register("facebook")}
          className="w-full border rounded-lg p-3"
        />

        <input
          type="url"
          placeholder="Instagram"
          {...register("instagram")}
          className="w-full border rounded-lg p-3"
        />

        <input
          type="url"
          placeholder="YouTube"
          {...register("youtube")}
          className="w-full border rounded-lg p-3"
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

      {/* Status */}

      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          {...register("isActive")}
        />

        <label>Active Artist</label>
      </div>

      {/* Submit */}

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg disabled:opacity-50"
      >
        {loading ? "Saving..." : "Save Artist"}
      </button>
    </form>
  );
};

export default ArtistForm;