import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const EventForm = ({
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

  const banner = watch("banner");
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (initialValues) {
      reset({
        title: initialValues.title || "",
        slug: initialValues.slug || "",
        shortDescription:
          initialValues.shortDescription || "",
        description:
          initialValues.description || "",
        eventType:
          initialValues.eventType || "",
        startDate: initialValues.startDate
          ? initialValues.startDate.substring(0, 10)
          : "",
        endDate: initialValues.endDate
          ? initialValues.endDate.substring(0, 10)
          : "",
        startTime:
          initialValues.startTime || "",
        endTime:
          initialValues.endTime || "",
        venue: initialValues.venue || "",
        city: initialValues.city || "",
        country: initialValues.country || "",
        organizer:
          initialValues.organizer || "",
        registrationLink:
          initialValues.registrationLink || "",
        registrationFee:
          initialValues.registrationFee || "",
        maxParticipants:
          initialValues.maxParticipants || "",
        chiefGuest:
          initialValues.chiefGuest || "",
        contactPerson:
          initialValues.contactPerson || "",
        contactNumber:
          initialValues.contactNumber || "",
        email: initialValues.email || "",
        displayOrder:
          initialValues.displayOrder || 1,
        featured:
          initialValues.featured || false,
        isActive:
          initialValues.isActive === undefined
            ? true
            : initialValues.isActive,
      });

      if (initialValues.banner) {
        setPreview(
          `${import.meta.env.VITE_API_BASE_URL.replace(
            "/api",
            ""
          )}/uploads/events/${initialValues.banner}`
        );
      }
    }
  }, [initialValues, reset]);

  useEffect(() => {
    if (banner && banner.length > 0) {
      setPreview(URL.createObjectURL(banner[0]));
    }
  }, [banner]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-xl shadow p-6 space-y-6"
    >
      {/* Banner */}

      <div>
        <label className="block font-medium mb-2">
          Event Banner
        </label>

        <input
          type="file"
          accept="image/*"
          {...register("banner")}
        />

        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="mt-4 w-72 rounded-lg border"
          />
        )}
      </div>

      {/* Title */}

      <div>
        <label className="block font-medium">
          Event Title *
        </label>

        <input
          {...register("title", {
            required: "Title is required",
          })}
          className="w-full border rounded-lg p-3 mt-2"
        />

        <p className="text-red-500 text-sm">
          {errors.title?.message}
        </p>
      </div>

      {/* Slug */}

      <div>
        <label className="block font-medium">
          Slug
        </label>

        <input
          {...register("slug")}
          className="w-full border rounded-lg p-3 mt-2"
        />
      </div>

      {/* Short Description */}

      <div>
        <label className="block font-medium">
          Short Description
        </label>

        <textarea
          rows={3}
          {...register("shortDescription")}
          className="w-full border rounded-lg p-3 mt-2"
        />
      </div>

      {/* Description */}

      <div>
        <label className="block font-medium">
          Full Description
        </label>

        <textarea
          rows={6}
          {...register("description")}
          className="w-full border rounded-lg p-3 mt-2"
        />
      </div>

      {/* Event Type */}

      <div>
        <label className="block font-medium">
          Event Type
        </label>

        <select
          {...register("eventType")}
          className="w-full border rounded-lg p-3 mt-2"
        >
          <option value="">Select Event Type</option>
          <option value="WORKSHOP">
            Workshop
          </option>
          <option value="PERFORMANCE">
            Performance
          </option>
          <option value="FESTIVAL">
            Festival
          </option>
          <option value="SEMINAR">
            Seminar
          </option>
          <option value="COMPETITION">
            Competition
          </option>
          <option value="CONFERENCE">
            Conference
          </option>
        </select>
      </div>

      {/* Dates */}

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label>Start Date</label>
          <input
            type="date"
            {...register("startDate")}
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>

        <div>
          <label>End Date</label>
          <input
            type="date"
            {...register("endDate")}
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>
      </div>

      {/* Time */}

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label>Start Time</label>
          <input
            type="time"
            {...register("startTime")}
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>

        <div>
          <label>End Time</label>
          <input
            type="time"
            {...register("endTime")}
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>
      </div>

      {/* Venue */}

      <input
        placeholder="Venue"
        {...register("venue")}
        className="w-full border rounded-lg p-3"
      />

      <div className="grid md:grid-cols-2 gap-4">
        <input
          placeholder="City"
          {...register("city")}
          className="border rounded-lg p-3"
        />

        <input
          placeholder="Country"
          {...register("country")}
          className="border rounded-lg p-3"
        />
      </div>

      {/* Organizer */}

      <input
        placeholder="Organizer"
        {...register("organizer")}
        className="w-full border rounded-lg p-3"
      />

      {/* Registration */}

      <div className="grid md:grid-cols-2 gap-4">
        <input
          placeholder="Registration Link"
          {...register("registrationLink")}
          className="border rounded-lg p-3"
        />

        <input
          type="number"
          placeholder="Registration Fee"
          {...register("registrationFee")}
          className="border rounded-lg p-3"
        />
      </div>

      <input
        type="number"
        placeholder="Maximum Participants"
        {...register("maxParticipants")}
        className="w-full border rounded-lg p-3"
      />

      {/* Chief Guest */}

      <input
        placeholder="Chief Guest"
        {...register("chiefGuest")}
        className="w-full border rounded-lg p-3"
      />

      {/* Contact */}

      <div className="grid md:grid-cols-3 gap-4">
        <input
          placeholder="Contact Person"
          {...register("contactPerson")}
          className="border rounded-lg p-3"
        />

        <input
          placeholder="Contact Number"
          {...register("contactNumber")}
          className="border rounded-lg p-3"
        />

        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className="border rounded-lg p-3"
        />
      </div>

      {/* Display Order */}

      <div>
        <label>Display Order</label>

        <input
          type="number"
          min="1"
          {...register("displayOrder")}
          className="w-full border rounded-lg p-3 mt-2"
        />
      </div>

      {/* Checkboxes */}

      <div className="flex gap-8">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            {...register("featured")}
          />
          Featured Event
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
        {loading ? "Saving..." : "Save Event"}
      </button>
    </form>
  );
};

export default EventForm;