// src/pages/admin/news/AddNews.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import NewsForm from "./NewsForm";
import { createNews } from "../../../api/news.api";

const AddNews = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("title", data.title);
      formData.append("slug", data.slug);
      formData.append(
        "shortDescription",
        data.shortDescription
      );
      formData.append("content", data.content);
      formData.append(
        "category",
        data.category || ""
      );
      formData.append(
        "author",
        data.author || ""
      );
      formData.append(
        "publishedDate",
        data.publishedDate || ""
      );
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

      if (
        data.thumbnail &&
        data.thumbnail.length > 0
      ) {
        formData.append(
          "thumbnail",
          data.thumbnail[0]
        );
      }

      await createNews(formData);

      toast.success(
        "News created successfully."
      );

      navigate("/admin/news");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to create news."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">
          Add News
        </h1>

        <p className="text-gray-500 mt-1">
          Create a new news article.
        </p>
      </div>

      <NewsForm
        onSubmit={onSubmit}
        loading={loading}
      />
    </div>
  );
};

export default AddNews;