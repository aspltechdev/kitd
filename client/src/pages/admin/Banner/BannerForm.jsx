import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const BannerForm = ({
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

  const mediaType = watch("mediaType", "IMAGE");
  const media = watch("media");

  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (initialValues) {
      reset({
        title: initialValues.title || "",
        subtitle: initialValues.subtitle || "",
        description: initialValues.description || "",
        mediaType: initialValues.mediaType || "IMAGE",
        buttonText: initialValues.buttonText || "",
        buttonLink: initialValues.buttonLink || "",
        displayOrder: initialValues.displayOrder || 1,
        isActive:
          initialValues.isActive === undefined
            ? true
            : initialValues.isActive,
      });

      if (initialValues.mediaUrl) {
        setPreview(
          `${import.meta.env.VITE_API_URL}/uploads/banners/${initialValues.mediaUrl}`
        );
      }
    }
  }, [initialValues, reset]);

  useEffect(() => {
    if (media && media.length > 0) {
      const file = media[0];
      setPreview(URL.createObjectURL(file));
    }
  }, [media]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-xl shadow p-6 space-y-6"
    >
      {/* Title */}

      <div>
        <label className="font-medium">
          Banner Title *
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

      {/* Subtitle */}

      <div>
        <label className="font-medium">
          Subtitle
        </label>

        <input
          {...register("subtitle")}
          className="w-full border rounded-lg p-3 mt-2"
        />
      </div>

      {/* Description */}

      <div>
        <label className="font-medium">
          Description
        </label>

        <textarea
          rows={4}
          {...register("description")}
          className="w-full border rounded-lg p-3 mt-2"
        />
      </div>

      {/* Media Type */}

      <div>
        <label className="font-medium">
          Media Type
        </label>

        <select
          {...register("mediaType")}
          className="w-full border rounded-lg p-3 mt-2"
        >
          <option value="IMAGE">
            Image
          </option>

          <option value="VIDEO">
            Video
          </option>
        </select>
      </div>

      {/* Upload */}

      <div>
        <label className="font-medium">
          Upload {mediaType}
        </label>

        <input
          type="file"
          accept={
            mediaType === "IMAGE"
              ? "image/*"
              : "video/*"
          }
          {...register("media")}
          className="mt-2"
        />
      </div>

      {/* Preview */}

      {preview && (
        <div>

          <label className="font-medium">
            Preview
          </label>

          {mediaType === "IMAGE" ? (
            <img
              src={preview}
              alt="Preview"
              className="mt-3 rounded-lg w-80 h-48 object-cover border"
            />
          ) : (
            <video
              controls
              className="mt-3 rounded-lg w-80 h-48 object-cover border"
            >
              <source src={preview} />
            </video>
          )}

        </div>
      )}

      {/* CTA */}

      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <label className="font-medium">
            Button Text
          </label>

          <input
            {...register("buttonText")}
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>

        <div>
          <label className="font-medium">
            Button Link
          </label>

          <input
            {...register("buttonLink")}
            className="w-full border rounded-lg p-3 mt-2"
          />
        </div>

      </div>

      {/* Order */}

      <div>
        <label className="font-medium">
          Display Order
        </label>

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

        <label>
          Active Banner
        </label>

      </div>

      {/* Submit */}

      <button
        disabled={loading}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        {loading ? "Saving..." : "Save Banner"}
      </button>

    </form>
  );
};

export default BannerForm;