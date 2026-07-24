import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import EventForm from "./EventForm";
import { createEvent } from "../../../api/events.api";

const AddEvent = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("title", data.title);
      formData.append("slug", data.slug || "");
      formData.append(
        "shortDescription",
        data.shortDescription || ""
      );
      formData.append(
        "description",
        data.description || ""
      );
      formData.append(
        "eventType",
        data.eventType || ""
      );
      formData.append(
        "startDate",
        data.startDate || ""
      );
      formData.append(
        "endDate",
        data.endDate || ""
      );
      formData.append(
        "startTime",
        data.startTime || ""
      );
      formData.append(
        "endTime",
        data.endTime || ""
      );
      formData.append("venue", data.venue || "");
      formData.append("city", data.city || "");
      formData.append(
        "country",
        data.country || ""
      );
      formData.append(
        "organizer",
        data.organizer || ""
      );
      formData.append(
        "registrationLink",
        data.registrationLink || ""
      );
      formData.append(
        "registrationFee",
        data.registrationFee || 0
      );
      formData.append(
        "maxParticipants",
        data.maxParticipants || 0
      );
      formData.append(
        "chiefGuest",
        data.chiefGuest || ""
      );
      formData.append(
        "contactPerson",
        data.contactPerson || ""
      );
      formData.append(
        "contactNumber",
        data.contactNumber || ""
      );
      formData.append("email", data.email || "");
      formData.append(
        "displayOrder",
        data.displayOrder || 1
      );
      formData.append(
        "featured",
        data.featured
      );
      formData.append(
        "isActive",
        data.isActive
      );

      if (data.banner && data.banner.length > 0) {
        formData.append("banner", data.banner[0]);
      }

      await createEvent(formData);

      toast.success("Event created successfully.");

      navigate("/admin/events");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to create event."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">
          Add Event
        </h1>

        <p className="text-gray-500 mt-1">
          Create a new event for the website.
        </p>
      </div>

      <EventForm
        onSubmit={onSubmit}
        loading={loading}
      />
    </div>
  );
};

export default AddEvent;