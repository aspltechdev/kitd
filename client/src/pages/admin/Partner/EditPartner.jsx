import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import PartnerForm from "./PartnerForm";
import {
  getPartnerById,
  updatePartner,
} from "../../../api/partner.api";

const EditPartner = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [initialValues, setInitialValues] = useState(null);

  useEffect(() => {
    fetchPartner();
  }, []);

  const fetchPartner = async () => {
    try {
      const res = await getPartnerById(id);

      const partner =
        res.data?.data?.partner ||
        res.data?.data ||
        res.data;

      setInitialValues(partner);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to fetch partner."
      );

      navigate("/admin/partners");
    }
  };

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

      // Upload new logo only if selected
      if (data.logo && data.logo.length > 0) {
        formData.append("logo", data.logo[0]);
      }

      await updatePartner(id, formData);

      toast.success(
        "Partner updated successfully."
      );

      navigate("/admin/partners");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to update partner."
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
          Edit Partner
        </h1>

        <p className="text-gray-500 mt-1">
          Update partner details.
        </p>
      </div>

      <PartnerForm
        initialValues={initialValues}
        onSubmit={onSubmit}
        loading={loading}
      />
    </div>
  );
};

export default EditPartner;