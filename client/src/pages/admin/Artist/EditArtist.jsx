import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import ArtistForm from "./ArtistForm";
import {
  getArtistById,
  updateArtist,
} from "../../../api/artist.api";

const EditArtist = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [initialValues, setInitialValues] = useState(null);

  useEffect(() => {
    fetchArtist();
  }, []);

  const fetchArtist = async () => {
    try {
      const res = await getArtistById(id);

      const artist =
        res.data?.data?.artist ||
        res.data?.data ||
        res.data;

      setInitialValues(artist);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to fetch artist."
      );

      navigate("/admin/artists");
    }
  };

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

      // Upload new photo only if selected
      if (data.photo && data.photo.length > 0) {
        formData.append("photo", data.photo[0]);
      }

      await updateArtist(id, formData);

      toast.success("Artist updated successfully.");

      navigate("/admin/artists");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to update artist."
      );
    } finally {
      setLoading(false);
    }
  };

  if (!initialValues) {
    return (
      <div className="p-6 text-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">
          Edit Artist
        </h1>

        <p className="text-gray-500 mt-1">
          Update artist details.
        </p>
      </div>

      <ArtistForm
        initialValues={initialValues}
        onSubmit={onSubmit}
        loading={loading}
      />
    </div>
  );
};

export default EditArtist;