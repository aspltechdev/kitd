// // src/pages/member-registration/MemberRegistration.jsx

// import { useState, useEffect } from "react";
// import { useParams, useNavigate, Link } from "react-router-dom";
// import toast from "react-hot-toast";
// import {
//   User,
//   Mail,
//   Phone,
//   Calendar,
//   MapPin,
//   Globe,
//   Award,
//   Upload,
//   X,
//   Check,
//   AlertCircle,
//   Loader2,
//   UserCheck,
//   Clock,
//   FileText,
//   Shield,
//   Music,
//   BookOpen,
//   Users,
// } from "lucide-react";

// import {
//   validateRegistrationToken,
//   registerMember,
// } from "../../api/membershipEnquiry.api";

// import "./MemberRegistration.css";

// const MemberRegistration = () => {
//   const { token } = useParams();
//   const navigate = useNavigate();

//   const [step, setStep] = useState("validating"); // validating, form, success, error
//   const [loading, setLoading] = useState(false);
//   const [submitting, setSubmitting] = useState(false);
//   const [tokenData, setTokenData] = useState(null);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [formData, setFormData] = useState({
//     fullName: "",
//     gender: "",
//     dateOfBirth: "",
//     address: "",
//     city: "",
//     state: "",
//     country: "Germany",
//     danceStyle: "",
//     guru: "",
//     experience: "",
//     document: null,
//   });
//   const [formErrors, setFormErrors] = useState({});
//   const [documentPreview, setDocumentPreview] = useState(null);
//   const [documentName, setDocumentName] = useState("");
//   const [dragOver, setDragOver] = useState(false);

//   // Validate token on mount
//   useEffect(() => {
//     validateToken();
//   }, [token]);

//   const validateToken = async () => {
//     try {
//       setStep("validating");
//       const response = await validateRegistrationToken(token);
      
//       if (response.data?.success) {
//         const data = response.data?.data || response.data;
//         setTokenData(data);
//         // Pre-fill form with enquiry data
//         setFormData(prev => ({
//           ...prev,
//           fullName: data.fullName || "",
//           email: data.email || "",
//           mobile: data.mobile || "",
//           membershipType: data.membershipType || "",
//         }));
//         setStep("form");
//       } else {
//         setStep("error");
//         setErrorMessage(response.data?.message || "Invalid registration link");
//       }
//     } catch (error) {
//       console.error("Token validation error:", error);
//       setStep("error");
      
//       const message = error.response?.data?.message || "Registration link has expired or is invalid";
//       setErrorMessage(message);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//     // Clear error for this field
//     if (formErrors[name]) {
//       setFormErrors(prev => ({ ...prev, [name]: "" }));
//     }
//   };

//   const handleFileChange = (e) => {
//     const files = e.target.files;
//     if (files && files.length > 0) {
//       const file = files[0];
//       // Validate file size (max 5MB)
//       if (file.size > 5 * 1024 * 1024) {
//         toast.error("File size must be less than 5MB");
//         return;
//       }
//       // Validate file type
//       const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];
//       if (!allowedTypes.includes(file.type)) {
//         toast.error("Please upload a JPEG, PNG, or PDF file");
//         return;
//       }
      
//       setFormData(prev => ({ ...prev, document: file }));
//       setDocumentName(file.name);
      
//       // Create preview for images
//       if (file.type.startsWith('image/')) {
//         const reader = new FileReader();
//         reader.onload = (e) => {
//           setDocumentPreview(e.target.result);
//         };
//         reader.readAsDataURL(file);
//       } else {
//         setDocumentPreview(null);
//       }
//     }
//   };

//   const removeDocument = () => {
//     setFormData(prev => ({ ...prev, document: null }));
//     setDocumentName("");
//     setDocumentPreview(null);
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//     setDragOver(true);
//   };

//   const handleDragLeave = (e) => {
//     e.preventDefault();
//     setDragOver(false);
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     setDragOver(false);
//     const files = e.dataTransfer.files;
//     if (files && files.length > 0) {
//       const file = files[0];
//       // Same validation as above
//       if (file.size > 5 * 1024 * 1024) {
//         toast.error("File size must be less than 5MB");
//         return;
//       }
//       const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];
//       if (!allowedTypes.includes(file.type)) {
//         toast.error("Please upload a JPEG, PNG, or PDF file");
//         return;
//       }
      
//       setFormData(prev => ({ ...prev, document: file }));
//       setDocumentName(file.name);
      
//       if (file.type.startsWith('image/')) {
//         const reader = new FileReader();
//         reader.onload = (e) => {
//           setDocumentPreview(e.target.result);
//         };
//         reader.readAsDataURL(file);
//       } else {
//         setDocumentPreview(null);
//       }
//     }
//   };

//   const validateForm = () => {
//     const errors = {};
//     if (!formData.fullName) errors.fullName = "Full name is required";
//     if (!formData.gender) errors.gender = "Gender is required";
//     if (!formData.dateOfBirth) errors.dateOfBirth = "Date of birth is required";
//     if (!formData.address) errors.address = "Address is required";
//     if (!formData.city) errors.city = "City is required";
//     if (!formData.state) errors.state = "State is required";
//     if (!formData.country) errors.country = "Country is required";
//     if (!formData.danceStyle) errors.danceStyle = "Dance style is required";
//     if (!formData.guru) errors.guru = "Guru name is required";
//     if (!formData.experience) errors.experience = "Experience is required";
//     if (!formData.document) errors.document = "Document is required";
    
//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!validateForm()) {
//       toast.error("Please fill in all required fields");
//       return;
//     }

//     try {
//       setSubmitting(true);

//       const submitFormData = new FormData();
      
//       // Append all form fields
//       Object.keys(formData).forEach(key => {
//         if (key !== 'document' && formData[key] !== null && formData[key] !== undefined) {
//           submitFormData.append(key, formData[key]);
//         }
//       });

//       // Append document
//       if (formData.document) {
//         submitFormData.append('document', formData.document);
//       }

//       const response = await registerMember(token, submitFormData);

//       if (response.data?.success) {
//         setStep("success");
//         toast.success("Registration completed successfully! 🎉");
//       } else {
//         toast.error(response.data?.message || "Registration failed");
//       }
//     } catch (error) {
//       console.error("Registration error:", error);
//       toast.error(error.response?.data?.message || "Failed to register. Please try again.");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   const danceStyles = [
//     "Bharatanatyam",
//     "Kathak",
//     "Kuchipudi",
//     "Odissi",
//     "Mohiniyattam",
//     "Kathakali",
//     "Manipuri",
//     "Sattriya",
//     "Other",
//   ];

//   const experienceOptions = [
//     "Less than 1 year",
//     "1-3 years",
//     "3-5 years",
//     "5-10 years",
//     "10-15 years",
//     "15+ years",
//   ];

//   // Loading / Validation State
//   if (step === "validating") {
//     return (
//       <div className="registration-page">
//         <div className="registration-page__container">
//           <div className="registration__loading">
//             <div className="registration__loading-spinner">
//               <div className="registration__spinner-ring" />
//             </div>
//             <div className="registration__loading-content">
//               <Shield size={48} className="registration__loading-icon" />
//               <h2>Validating Registration Link</h2>
//               <p>Please wait while we verify your registration link...</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Error State
//   if (step === "error") {
//     return (
//       <div className="registration-page">
//         <div className="registration-page__container">
//           <div className="registration__error">
//             <div className="registration__error-card">
//               <div className="registration__error-icon-wrapper">
//                 <AlertCircle size={48} className="registration__error-icon" />
//               </div>
//               <h2>Registration Link Invalid</h2>
//               <p>{errorMessage}</p>
//               <Link to="/contact" className="registration__error-btn">
//                 Contact Support
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Success State
//   if (step === "success") {
//     return (
//       <div className="registration-page">
//         <div className="registration-page__container">
//           <div className="registration__success">
//             <div className="registration__success-card">
//               <div className="registration__success-icon-wrapper">
//                 <Check size={48} className="registration__success-icon" />
//               </div>
//               <h2>Registration Complete!</h2>
//               <p>Your registration has been submitted successfully. We will review your application and get back to you soon.</p>
//               <div className="registration__success-actions">
//                 <Link to="/" className="registration__success-btn">
//                   Return to Home
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Form State
//   return (
//     <div className="registration-page">
//       <div className="registration-page__container">
        
//         {/* Header */}
//         <div className="registration__header">
//           <div className="registration__header-content">
//             <div className="registration__header-icon">
//               <UserCheck size={28} />
//             </div>
//             <div>
//               <h1 className="registration__title">Complete Your Registration</h1>
//               <p className="registration__subtitle">
//                 Please fill in the details below to complete your membership registration
//               </p>
//             </div>
//           </div>
          
//           {/* Progress Steps */}
//           <div className="registration__progress">
//             <div className="registration__progress-step registration__progress-step--active">
//               <span className="registration__progress-number">1</span>
//               <span className="registration__progress-label">Personal Info</span>
//             </div>
//             <div className="registration__progress-line" />
//             <div className="registration__progress-step registration__progress-step--active">
//               <span className="registration__progress-number">2</span>
//               <span className="registration__progress-label">Address</span>
//             </div>
//             <div className="registration__progress-line" />
//             <div className="registration__progress-step registration__progress-step--active">
//               <span className="registration__progress-number">3</span>
//               <span className="registration__progress-label">Dance Details</span>
//             </div>
//             <div className="registration__progress-line" />
//             <div className="registration__progress-step registration__progress-step--active">
//               <span className="registration__progress-number">4</span>
//               <span className="registration__progress-label">Documents</span>
//             </div>
//           </div>
//         </div>

//         {/* Form */}
//         <div className="registration__form-card">
//           <form onSubmit={handleSubmit} className="registration__form">
            
//             {/* Personal Information */}
//             <div className="registration__section">
//               <h3 className="registration__section-title">
//                 <User size={20} />
//                 Personal Information
//               </h3>
              
//               <div className="registration__form-row">
//                 <div className="registration__form-group">
//                   <label htmlFor="fullName" className="registration__label">
//                     Full Name <span className="required">*</span>
//                   </label>
//                   <div className="registration__input-wrapper">
//                     <User size={18} className="registration__input-icon" />
//                     <input
//                       id="fullName"
//                       name="fullName"
//                       type="text"
//                       value={formData.fullName}
//                       onChange={handleInputChange}
//                       className={`registration__input ${formErrors.fullName ? "error" : ""}`}
//                       placeholder="Enter your full name"
//                     />
//                   </div>
//                   {formErrors.fullName && (
//                     <p className="registration__error-text">{formErrors.fullName}</p>
//                   )}
//                 </div>

//                 <div className="registration__form-group">
//                   <label htmlFor="gender" className="registration__label">
//                     Gender <span className="required">*</span>
//                   </label>
//                   <div className="registration__input-wrapper">
//                     <Users size={18} className="registration__input-icon" />
//                     <select
//                       id="gender"
//                       name="gender"
//                       value={formData.gender}
//                       onChange={handleInputChange}
//                       className={`registration__input registration__select ${formErrors.gender ? "error" : ""}`}
//                     >
//                       <option value="">Select Gender</option>
//                       <option value="MALE">Male</option>
//                       <option value="FEMALE">Female</option>
//                       <option value="OTHER">Other</option>
//                     </select>
//                   </div>
//                   {formErrors.gender && (
//                     <p className="registration__error-text">{formErrors.gender}</p>
//                   )}
//                 </div>

//                 <div className="registration__form-group">
//                   <label htmlFor="dateOfBirth" className="registration__label">
//                     Date of Birth <span className="required">*</span>
//                   </label>
//                   <div className="registration__input-wrapper">
//                     <Calendar size={18} className="registration__input-icon" />
//                     <input
//                       id="dateOfBirth"
//                       name="dateOfBirth"
//                       type="date"
//                       value={formData.dateOfBirth}
//                       onChange={handleInputChange}
//                       className={`registration__input ${formErrors.dateOfBirth ? "error" : ""}`}
//                     />
//                   </div>
//                   {formErrors.dateOfBirth && (
//                     <p className="registration__error-text">{formErrors.dateOfBirth}</p>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Address Information */}
//             <div className="registration__section">
//               <h3 className="registration__section-title">
//                 <MapPin size={20} />
//                 Address Information
//               </h3>

//               <div className="registration__form-row">
//                 <div className="registration__form-group registration__form-group--full">
//                   <label htmlFor="address" className="registration__label">
//                     Address <span className="required">*</span>
//                   </label>
//                   <div className="registration__input-wrapper">
//                     <MapPin size={18} className="registration__input-icon" />
//                     <input
//                       id="address"
//                       name="address"
//                       type="text"
//                       value={formData.address}
//                       onChange={handleInputChange}
//                       className={`registration__input ${formErrors.address ? "error" : ""}`}
//                       placeholder="Enter your address"
//                     />
//                   </div>
//                   {formErrors.address && (
//                     <p className="registration__error-text">{formErrors.address}</p>
//                   )}
//                 </div>

//                 <div className="registration__form-group">
//                   <label htmlFor="city" className="registration__label">
//                     City <span className="required">*</span>
//                   </label>
//                   <div className="registration__input-wrapper">
//                     <MapPin size={18} className="registration__input-icon" />
//                     <input
//                       id="city"
//                       name="city"
//                       type="text"
//                       value={formData.city}
//                       onChange={handleInputChange}
//                       className={`registration__input ${formErrors.city ? "error" : ""}`}
//                       placeholder="Enter your city"
//                     />
//                   </div>
//                   {formErrors.city && (
//                     <p className="registration__error-text">{formErrors.city}</p>
//                   )}
//                 </div>

//                 <div className="registration__form-group">
//                   <label htmlFor="state" className="registration__label">
//                     State <span className="required">*</span>
//                   </label>
//                   <div className="registration__input-wrapper">
//                     <MapPin size={18} className="registration__input-icon" />
//                     <input
//                       id="state"
//                       name="state"
//                       type="text"
//                       value={formData.state}
//                       onChange={handleInputChange}
//                       className={`registration__input ${formErrors.state ? "error" : ""}`}
//                       placeholder="Enter your state"
//                     />
//                   </div>
//                   {formErrors.state && (
//                     <p className="registration__error-text">{formErrors.state}</p>
//                   )}
//                 </div>

//                 <div className="registration__form-group">
//                   <label htmlFor="country" className="registration__label">
//                     Country <span className="required">*</span>
//                   </label>
//                   <div className="registration__input-wrapper">
//                     <Globe size={18} className="registration__input-icon" />
//                     <input
//                       id="country"
//                       name="country"
//                       type="text"
//                       value={formData.country}
//                       onChange={handleInputChange}
//                       className={`registration__input ${formErrors.country ? "error" : ""}`}
//                       placeholder="Enter your country"
//                     />
//                   </div>
//                   {formErrors.country && (
//                     <p className="registration__error-text">{formErrors.country}</p>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Dance Information */}
//             <div className="registration__section">
//               <h3 className="registration__section-title">
//                 <Music size={20} />
//                 Dance Information
//               </h3>

//               <div className="registration__form-row">
//                 <div className="registration__form-group">
//                   <label htmlFor="danceStyle" className="registration__label">
//                     Dance Style <span className="required">*</span>
//                   </label>
//                   <div className="registration__input-wrapper">
//                     <Music size={18} className="registration__input-icon" />
//                     <select
//                       id="danceStyle"
//                       name="danceStyle"
//                       value={formData.danceStyle}
//                       onChange={handleInputChange}
//                       className={`registration__input registration__select ${formErrors.danceStyle ? "error" : ""}`}
//                     >
//                       <option value="">Select Dance Style</option>
//                       {danceStyles.map((style) => (
//                         <option key={style} value={style}>
//                           {style}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                   {formErrors.danceStyle && (
//                     <p className="registration__error-text">{formErrors.danceStyle}</p>
//                   )}
//                 </div>

//                 <div className="registration__form-group">
//                   <label htmlFor="guru" className="registration__label">
//                     Guru <span className="required">*</span>
//                   </label>
//                   <div className="registration__input-wrapper">
//                     <BookOpen size={18} className="registration__input-icon" />
//                     <input
//                       id="guru"
//                       name="guru"
//                       type="text"
//                       value={formData.guru}
//                       onChange={handleInputChange}
//                       className={`registration__input ${formErrors.guru ? "error" : ""}`}
//                       placeholder="Enter your guru's name"
//                     />
//                   </div>
//                   {formErrors.guru && (
//                     <p className="registration__error-text">{formErrors.guru}</p>
//                   )}
//                 </div>

//                 <div className="registration__form-group">
//                   <label htmlFor="experience" className="registration__label">
//                     Experience <span className="required">*</span>
//                   </label>
//                   <div className="registration__input-wrapper">
//                     <Award size={18} className="registration__input-icon" />
//                     <select
//                       id="experience"
//                       name="experience"
//                       value={formData.experience}
//                       onChange={handleInputChange}
//                       className={`registration__input registration__select ${formErrors.experience ? "error" : ""}`}
//                     >
//                       <option value="">Select Experience</option>
//                       {experienceOptions.map((exp) => (
//                         <option key={exp} value={exp}>
//                           {exp}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                   {formErrors.experience && (
//                     <p className="registration__error-text">{formErrors.experience}</p>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Document Upload */}
//             <div className="registration__section">
//               <h3 className="registration__section-title">
//                 <FileText size={20} />
//                 Document Upload
//               </h3>

//               <div className="registration__form-group">
//                 <label className="registration__label">
//                   Upload Identity/Supporting Document <span className="required">*</span>
//                 </label>
                
//                 <div
//                   className={`registration__dropzone ${dragOver ? "drag-over" : ""} ${
//                     documentName ? "has-file" : ""
//                   }`}
//                   onDragOver={handleDragOver}
//                   onDragLeave={handleDragLeave}
//                   onDrop={handleDrop}
//                 >
//                   {!documentName ? (
//                     <div className="registration__dropzone-content">
//                       <Upload size={40} className="registration__dropzone-icon" />
//                       <p className="registration__dropzone-text">Drag & drop your document here</p>
//                       <span className="registration__dropzone-hint">or click to browse</span>
//                       <input
//                         type="file"
//                         accept=".jpg,.jpeg,.png,.pdf"
//                         onChange={handleFileChange}
//                         className="registration__dropzone-input"
//                         id="document-upload"
//                       />
//                       <label htmlFor="document-upload" className="registration__dropzone-btn">
//                         Choose File
//                       </label>
//                       <p className="registration__dropzone-info">Supported formats: JPEG, PNG, PDF (max 5MB)</p>
//                     </div>
//                   ) : (
//                     <div className="registration__file-preview">
//                       <div className="registration__file-preview-content">
//                         {documentPreview ? (
//                           <img
//                             src={documentPreview}
//                             alt="Document preview"
//                             className="registration__file-preview-image"
//                           />
//                         ) : (
//                           <div className="registration__file-preview-icon">
//                             <FileText size={40} />
//                           </div>
//                         )}
//                         <div className="registration__file-info">
//                           <p className="registration__file-name">{documentName}</p>
//                           <button
//                             type="button"
//                             onClick={removeDocument}
//                             className="registration__file-remove"
//                           >
//                             <X size={16} />
//                             Remove
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//                 {formErrors.document && (
//                   <p className="registration__error-text">{formErrors.document}</p>
//                 )}
//               </div>
//             </div>

//             {/* Form Actions */}
//             <div className="registration__form-actions">
//               <Link to="/" className="registration__cancel-btn">
//                 Cancel
//               </Link>
//               <button
//                 type="submit"
//                 disabled={submitting}
//                 className="registration__submit-btn"
//               >
//                 {submitting ? (
//                   <>
//                     <Loader2 size={18} className="registration__submit-icon--spinning" />
//                     <span>Submitting...</span>
//                   </>
//                 ) : (
//                   <>
//                     <Check size={18} />
//                     <span>Complete Registration</span>
//                   </>
//                 )}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MemberRegistration;