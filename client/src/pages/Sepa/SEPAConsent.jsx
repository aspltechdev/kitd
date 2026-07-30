// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import {
//   CreditCard,
//   Loader,
//   AlertCircle,
//   CheckCircle,
//   Upload,
//   FileText,
//   Shield,
//   ArrowRight,
// } from "lucide-react";
// import { validateSepaToken, submitSepaConsent } from "../../api/membershipEnquiry.api";

// const SEPAConsent = () => {
//   const { token } = useParams();
//   const navigate = useNavigate();

//   const [loading, setLoading] = useState(true);
//   const [submitting, setSubmitting] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const [enquiry, setEnquiry] = useState(null);
//   const [error, setError] = useState("");
//   const [file, setFile] = useState(null);

//   const [formData, setFormData] = useState({
//     iban: "",
//     accountHolder: "",
//     bankName: "",
//   });

//   const [errors, setErrors] = useState({});

//   // Validate token on mount
//   useEffect(() => {
//     const validateToken = async () => {
//       try {
//         const res = await validateSepaToken(token);
//         setEnquiry(res.data?.data || res.data);
//       } catch (err) {
//         setError(
//           err.response?.data?.message || "Invalid or expired SEPA consent link."
//         );
//       } finally {
//         setLoading(false);
//       }
//     };
//     validateToken();
//   }, [token]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
//   };

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile) {
//       if (selectedFile.size > 10 * 1024 * 1024) {
//         toast.error("File size must be less than 10MB");
//         return;
//       }
//       setFile(selectedFile);
//     }
//   };

//   const validate = () => {
//     const newErrors = {};

//     if (!formData.iban.trim()) {
//       newErrors.iban = "IBAN is required";
//     } else if (!/^[A-Z]{2}\d{2}[A-Z0-9]{1,30}$/.test(formData.iban.replace(/\s/g, ""))) {
//       newErrors.iban = "Please enter a valid IBAN";
//     }

//     if (!formData.accountHolder.trim()) {
//       newErrors.accountHolder = "Account holder name is required";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validate()) return;

//     setSubmitting(true);
//     try {
//       const formDataToSend = new FormData();
//       formDataToSend.append("iban", formData.iban.replace(/\s/g, ""));
//       formDataToSend.append("accountHolder", formData.accountHolder);
//       formDataToSend.append("bankName", formData.bankName);

//       if (file) {
//         formDataToSend.append("sepaConsentFile", file);
//       }

//       await submitSepaConsent(token, formDataToSend);
//       setSubmitted(true);
//       toast.success("SEPA mandate submitted successfully!");
//     } catch (err) {
//       toast.error(
//         err.response?.data?.message || "Failed to submit SEPA consent. Please try again."
//       );
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="text-center">
//           <Loader size={48} className="animate-spin mx-auto mb-4 text-teal-600" />
//           <p className="text-gray-600">Loading SEPA consent form...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
//         <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
//           <AlertCircle size={64} className="mx-auto mb-4 text-red-500" />
//           <h2 className="text-2xl font-bold text-gray-900 mb-2">Link Expired</h2>
//           <p className="text-gray-600 mb-6">{error}</p>
//           <button
//             onClick={() => navigate("/")}
//             className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition"
//           >
//             Go to Homepage
//           </button>
//         </div>
//       </div>
//     );
//   }

//   if (submitted) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
//         <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
//           <CheckCircle size={64} className="mx-auto mb-4 text-green-500" />
//           <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
//           <p className="text-gray-600 mb-2">
//             Your SEPA Direct Debit Mandate has been submitted successfully.
//           </p>
//           <p className="text-gray-500 mb-6">
//             Our team will review your details and give final approval to your membership.
//             You'll receive a confirmation email with your Member ID shortly.
//           </p>
//           <button
//             onClick={() => navigate("/")}
//             className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition"
//           >
//             Go to Homepage
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4">
//       <div className="max-w-2xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
//             <CreditCard size={32} className="text-teal-600" />
//           </div>
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">
//             SEPA Direct Debit Mandate
//           </h1>
//           <p className="text-gray-600">
//             Complete your payment setup for KITD Membership
//           </p>
//           {enquiry && (
//             <p className="text-teal-600 font-medium mt-2">
//               Welcome, {enquiry.fullName}
//             </p>
//           )}
//         </div>

//         {/* Form */}
//         <div className="bg-white rounded-xl shadow-lg p-8">
//           <form onSubmit={handleSubmit}>
//             {/* IBAN */}
//             <div className="mb-6">
//               <label htmlFor="iban" className="block text-sm font-semibold text-gray-700 mb-2">
//                 IBAN *
//               </label>
//               <input
//                 type="text"
//                 id="iban"
//                 name="iban"
//                 value={formData.iban}
//                 onChange={handleInputChange}
//                 placeholder="DE89 3704 0044 0532 0130 00"
//                 className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${
//                   errors.iban ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//               {errors.iban && (
//                 <p className="text-red-500 text-sm mt-1">{errors.iban}</p>
//               )}
//             </div>

//             {/* Account Holder */}
//             <div className="mb-6">
//               <label htmlFor="accountHolder" className="block text-sm font-semibold text-gray-700 mb-2">
//                 Account Holder Name *
//               </label>
//               <input
//                 type="text"
//                 id="accountHolder"
//                 name="accountHolder"
//                 value={formData.accountHolder}
//                 onChange={handleInputChange}
//                 placeholder="John Doe"
//                 className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${
//                   errors.accountHolder ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//               {errors.accountHolder && (
//                 <p className="text-red-500 text-sm mt-1">{errors.accountHolder}</p>
//               )}
//             </div>

//             {/* Bank Name */}
//             <div className="mb-6">
//               <label htmlFor="bankName" className="block text-sm font-semibold text-gray-700 mb-2">
//                 Bank Name (Optional)
//               </label>
//               <input
//                 type="text"
//                 id="bankName"
//                 name="bankName"
//                 value={formData.bankName}
//                 onChange={handleInputChange}
//                 placeholder="Deutsche Bank"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//               />
//             </div>

//             {/* File Upload */}
//             <div className="mb-6">
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Upload Signed SEPA Mandate (Optional)
//               </label>
//               <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-teal-500 transition cursor-pointer">
//                 <input
//                   type="file"
//                   onChange={handleFileChange}
//                   accept=".pdf,.jpg,.jpeg,.png"
//                   className="hidden"
//                   id="sepaFile"
//                 />
//                 <label htmlFor="sepaFile" className="cursor-pointer">
//                   {file ? (
//                     <div className="flex items-center justify-center gap-2 text-teal-600">
//                       <FileText size={20} />
//                       <span>{file.name}</span>
//                     </div>
//                   ) : (
//                     <>
//                       <Upload size={32} className="mx-auto mb-2 text-gray-400" />
//                       <p className="text-gray-600">Click to upload signed mandate</p>
//                       <p className="text-gray-400 text-sm">PDF, JPG, PNG (max 10MB)</p>
//                     </>
//                   )}
//                 </label>
//               </div>
//             </div>

//             {/* Info Box */}
//             <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
//               <div className="flex items-start gap-3">
//                 <Shield size={20} className="text-blue-600 mt-0.5" />
//                 <div>
//                   <h4 className="font-semibold text-blue-800 mb-1">Secure Payment Setup</h4>
//                   <p className="text-blue-600 text-sm">
//                     Your bank details are encrypted and stored securely. The SEPA Direct Debit 
//                     Mandate allows KITD to collect the annual membership fee from your account. 
//                     You can cancel this mandate at any time.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Membership Fee Info */}
//             <div className="bg-gray-50 rounded-lg p-4 mb-6">
//               <h4 className="font-semibold text-gray-700 mb-2">Membership Fees:</h4>
//               <ul className="text-sm text-gray-600 space-y-1">
//                 <li>• Active Member: €50/year</li>
//                 <li>• Supporting Member: €75/year</li>
//                 <li>• Youth Member: €25/year</li>
//               </ul>
//             </div>

//             {/* Submit */}
//             <button
//               type="submit"
//               disabled={submitting}
//               className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition disabled:bg-gray-400 flex items-center justify-center gap-2"
//             >
//               {submitting ? (
//                 <>
//                   <Loader size={20} className="animate-spin" />
//                   Submitting...
//                 </>
//               ) : (
//                 <>
//                   Submit SEPA Mandate
//                   <ArrowRight size={20} />
//                 </>
//               )}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SEPAConsent;

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  CreditCard,
  Loader,
  AlertCircle,
  CheckCircle,
  Upload,
  FileText,
  Shield,
  ArrowRight,
  X,
} from "lucide-react";
import { validateSepaToken, submitSepaConsent } from "../../api/membershipEnquiry.api";
import "./SEPAConsent.css";

const SEPAConsent = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [enquiry, setEnquiry] = useState(null);
  const [error, setError] = useState("");
  const [file, setFile] = useState(null);

  const [formData, setFormData] = useState({
    iban: "",
    accountHolder: "",
    bankName: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const validateToken = async () => {
      try {
        setLoading(true);
        const res = await validateSepaToken(token);
        console.log("Token validation response:", res);
        setEnquiry(res.data?.data || res.data);
        setError("");
      } catch (err) {
        console.error("Token validation error:", err);
        const message = err.response?.data?.message || "Invalid or expired SEPA consent link.";
        setError(message);
        toast.error(message);
      } finally {
        setLoading(false);
      }
    };
    
    if (token) {
      validateToken();
    } else {
      setError("No token provided.");
      setLoading(false);
    }
  }, [token]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.size > 10 * 1024 * 1024) {
        toast.error("File size must be less than 10MB");
        return;
      }
      setFile(selectedFile);
    }
  };

  const removeFile = () => {
    setFile(null);
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.iban.trim()) {
      newErrors.iban = "IBAN is required";
    } else if (!/^[A-Z]{2}\d{2}[A-Z0-9]{1,30}$/.test(formData.iban.replace(/\s/g, ""))) {
      newErrors.iban = "Please enter a valid IBAN (e.g., DE89370400440532013000)";
    }

    if (!formData.accountHolder.trim()) {
      newErrors.accountHolder = "Account holder name is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) {
      toast.error("Please fix the errors before submitting.");
      return;
    }

    setSubmitting(true);
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("iban", formData.iban.replace(/\s/g, ""));
      formDataToSend.append("accountHolder", formData.accountHolder.trim());
      formDataToSend.append("bankName", formData.bankName.trim());

      if (file) {
        formDataToSend.append("sepaConsentFile", file);
      }

      console.log("Submitting SEPA consent...", {
        iban: formData.iban,
        accountHolder: formData.accountHolder,
        bankName: formData.bankName,
        hasFile: !!file,
      });

      const response = await submitSepaConsent(token, formDataToSend);
      console.log("SEPA consent response:", response);
      
      setSubmitted(true);
      toast.success("SEPA mandate submitted successfully!");
    } catch (err) {
      console.error("SEPA consent error:", err);
      const message = err.response?.data?.message || "Failed to submit SEPA consent. Please try again.";
      toast.error(message);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="sepa-container">
        <div className="sepa-loading">
          <Loader size={48} className="animate-spin text-teal-600" />
          <h2>Loading SEPA Consent Form</h2>
          <p>Please wait while we verify your link...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="sepa-container">
        <div className="sepa-card sepa-error-card">
          <AlertCircle size={64} className="text-red-500" />
          <h2>Link Expired or Invalid</h2>
          <p>{error}</p>
          <p className="sepa-help-text">
            Please contact KITD at <a href="mailto:membership@kitd.de">membership@kitd.de</a> for assistance.
          </p>
          <button onClick={() => navigate("/")} className="sepa-btn sepa-btn-primary">
            Go to Homepage
          </button>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="sepa-container">
        <div className="sepa-card sepa-success-card">
          <CheckCircle size={64} className="text-green-500" />
          <h2>Thank You!</h2>
          <p>Your SEPA Direct Debit Mandate has been submitted successfully.</p>
          <p className="sepa-help-text">
            Our team will review your details and give final approval to your membership.
            You'll receive a confirmation email with your Member ID shortly.
          </p>
          <button onClick={() => navigate("/")} className="sepa-btn sepa-btn-primary">
            Go to Homepage
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="sepa-container">
      <div className="sepa-form-wrapper">
        {/* Header */}
        <div className="sepa-header">
          <div className="sepa-icon-wrapper">
            <CreditCard size={32} />
          </div>
          <h1>SEPA Direct Debit Mandate</h1>
          <p>Complete your payment setup for KITD Membership</p>
          {enquiry && (
            <div className="sepa-welcome">
              Welcome, <strong>{enquiry.fullName}</strong>
            </div>
          )}
        </div>

        {/* Form */}
        <div className="sepa-card">
          <form onSubmit={handleSubmit} noValidate>
            {/* IBAN Field */}
            <div className="sepa-form-group">
              <label htmlFor="iban">
                IBAN <span className="required">*</span>
              </label>
              <input
                type="text"
                id="iban"
                name="iban"
                value={formData.iban}
                onChange={handleInputChange}
                placeholder="DE89 3704 0044 0532 0130 00"
                className={`sepa-input ${errors.iban ? "sepa-input-error" : ""}`}
                disabled={submitting}
              />
              {errors.iban && <span className="sepa-error">{errors.iban}</span>}
            </div>

            {/* Account Holder Field */}
            <div className="sepa-form-group">
              <label htmlFor="accountHolder">
                Account Holder Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="accountHolder"
                name="accountHolder"
                value={formData.accountHolder}
                onChange={handleInputChange}
                placeholder="John Doe"
                className={`sepa-input ${errors.accountHolder ? "sepa-input-error" : ""}`}
                disabled={submitting}
              />
              {errors.accountHolder && <span className="sepa-error">{errors.accountHolder}</span>}
            </div>

            {/* Bank Name Field */}
            <div className="sepa-form-group">
              <label htmlFor="bankName">Bank Name <span className="optional">(Optional)</span></label>
              <input
                type="text"
                id="bankName"
                name="bankName"
                value={formData.bankName}
                onChange={handleInputChange}
                placeholder="Deutsche Bank"
                className="sepa-input"
                disabled={submitting}
              />
            </div>

            {/* File Upload */}
            <div className="sepa-form-group">
              <label>Upload Signed SEPA Mandate <span className="optional">(Optional)</span></label>
              
              {file ? (
                <div className="sepa-file-preview">
                  <FileText size={20} />
                  <span className="sepa-file-name">{file.name}</span>
                  <button type="button" onClick={removeFile} className="sepa-file-remove">
                    <X size={18} />
                  </button>
                </div>
              ) : (
                <div className="sepa-upload-area">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="sepa-file-input"
                    id="sepaFile"
                    disabled={submitting}
                  />
                  <label htmlFor="sepaFile" className="sepa-upload-label">
                    <Upload size={32} />
                    <span>Click to upload signed mandate</span>
                    <small>PDF, JPG, PNG (max 10MB)</small>
                  </label>
                </div>
              )}
            </div>

            {/* Info Boxes */}
            <div className="sepa-info-box sepa-security-box">
              <Shield size={20} />
              <div>
                <h4>Secure Payment Setup</h4>
                <p>
                  Your bank details are encrypted and stored securely. The SEPA Direct Debit 
                  Mandate allows KITD to collect the annual membership fee from your account. 
                  You can cancel this mandate at any time.
                </p>
              </div>
            </div>

            <div className="sepa-info-box sepa-fees-box">
              <CreditCard size={20} />
              <div>
                <h4>Membership Fees</h4>
                <ul>
                  <li>Active Member: €50/year</li>
                  <li>Supporting Member: €75/year</li>
                  <li>Youth Member: €25/year</li>
                </ul>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitting}
              className="sepa-btn sepa-btn-submit"
            >
              {submitting ? (
                <>
                  <Loader size={20} className="animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Submit SEPA Mandate
                  <ArrowRight size={20} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SEPAConsent;