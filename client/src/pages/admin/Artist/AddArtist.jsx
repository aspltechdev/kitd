import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import ArtistForm from "./ArtistForm";
import { createArtist } from "../../../api/artist.api";

const AddArtist = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("fullName", data.fullName);
      formData.append("stageName", data.stageName || "");
      formData.append("email", data.email);
      formData.append("mobile", data.mobile);
      formData.append("gender", data.gender || "");
      formData.append(
        "dateOfBirth",
        data.dateOfBirth || ""
      );
      formData.append(
        "danceStyle",
        data.danceStyle || ""
      );
      formData.append(
        "experience",
        data.experience || 0
      );
      formData.append(
        "qualification",
        data.qualification || ""
      );
      formData.append(
        "biography",
        data.biography || ""
      );
      formData.append("city", data.city || "");
      formData.append("state", data.state || "");
      formData.append("country", data.country || "");
      formData.append(
        "website",
        data.website || ""
      );
      formData.append(
        "facebook",
        data.facebook || ""
      );
      formData.append(
        "instagram",
        data.instagram || ""
      );
      formData.append(
        "youtube",
        data.youtube || ""
      );
      formData.append(
        "displayOrder",
        data.displayOrder || 1
      );
      formData.append(
        "isActive",
        data.isActive
      );

      if (data.photo && data.photo.length > 0) {
        formData.append("photo", data.photo[0]);
      }

      await createArtist(formData);

      toast.success("Artist created successfully.");

      navigate("/admin/artists");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to create artist."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">
          Add Artist
        </h1>

        <p className="text-gray-500 mt-1">
          Add a new artist to the website.
        </p>
      </div>

      <ArtistForm
        onSubmit={onSubmit}
        loading={loading}
      />
    </div>
  );
};

export default AddArtist;