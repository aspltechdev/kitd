// src/pages/admin/news/EditNews.jsx

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import NewsForm from "./NewsForm";
import {
  getNewsById,
  updateNews,
} from "../../../api/news.api";

const EditNews = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [initialValues, setInitialValues] = useState(null);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const res = await getNewsById(id);

      const news =
        res.data?.data?.news ||
        res.data?.data ||
        res.data;

      setInitialValues(news);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to fetch news."
      );

      navigate("/admin/news");
    }
  };

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

      // Upload new thumbnail only if selected
      if (
        data.thumbnail &&
        data.thumbnail.length > 0
      ) {
        formData.append(
          "thumbnail",
          data.thumbnail[0]
        );
      }

      await updateNews(id, formData);

      toast.success(
        "News updated successfully."
      );

      navigate("/admin/news");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to update news."
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
          Edit News
        </h1>

        <p className="text-gray-500 mt-1">
          Update news article details.
        </p>
      </div>

      <NewsForm
        initialValues={initialValues}
        onSubmit={onSubmit}
        loading={loading}
      />
    </div>
  );
};

export default EditNews;