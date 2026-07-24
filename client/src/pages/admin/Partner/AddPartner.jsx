import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import PartnerForm from "./PartnerForm";
import { createPartner } from "../../../api/partner.api";

const AddPartner = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("name", data.name);
      formData.append(
        "partnerType",
        data.partnerType || ""
      );
      formData.append(
        "website",
        data.website || ""
      );
      formData.append(
        "description",
        data.description || ""
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

      if (data.logo && data.logo.length > 0) {
        formData.append("logo", data.logo[0]);
      }

      await createPartner(formData);

      toast.success("Partner created successfully.");

      navigate("/admin/partners");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to create partner."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">
          Add Partner
        </h1>

        <p className="text-gray-500 mt-1">
          Create a new partner.
        </p>
      </div>

      <PartnerForm
        onSubmit={onSubmit}
        loading={loading}
      />
    </div>
  );
};

export default AddPartner;