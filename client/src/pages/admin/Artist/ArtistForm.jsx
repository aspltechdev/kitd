// // import { useEffect, useState } from "react";
// // import { useForm } from "react-hook-form";

// // const ArtistForm = ({
// //   initialValues = {},
// //   onSubmit,
// //   loading = false,
// // }) => {
// //   const {
// //     register,
// //     handleSubmit,
// //     watch,
// //     reset,
// //     formState: { errors },
// //   } = useForm();

// //   const photo = watch("photo");
// //   const [preview, setPreview] = useState(null);

// //   useEffect(() => {
// //     if (initialValues) {
// //       reset({
// //         fullName: initialValues.fullName || "",
// //         stageName: initialValues.stageName || "",
// //         email: initialValues.email || "",
// //         mobile: initialValues.mobile || "",
// //         gender: initialValues.gender || "",
// //         dateOfBirth: initialValues.dateOfBirth
// //           ? initialValues.dateOfBirth.substring(0, 10)
// //           : "",
// //         danceStyle: initialValues.danceStyle || "",
// //         experience: initialValues.experience || "",
// //         qualification: initialValues.qualification || "",
// //         biography: initialValues.biography || "",
// //         city: initialValues.city || "",
// //         state: initialValues.state || "",
// //         country: initialValues.country || "",
// //         website: initialValues.website || "",
// //         facebook: initialValues.facebook || "",
// //         instagram: initialValues.instagram || "",
// //         youtube: initialValues.youtube || "",
// //         displayOrder: initialValues.displayOrder || 1,
// //         isActive:
// //           initialValues.isActive === undefined
// //             ? true
// //             : initialValues.isActive,
// //       });

// //       if (initialValues.photo) {
// //         setPreview(
// //           `${import.meta.env.VITE_API_BASE_URL.replace(
// //             "/api",
// //             ""
// //           )}/uploads/artists/${initialValues.photo}`
// //         );
// //       }
// //     }
// //   }, [initialValues, reset]);

// //   useEffect(() => {
// //     if (photo && photo.length > 0) {
// //       const file = photo[0];
// //       setPreview(URL.createObjectURL(file));
// //     }
// //   }, [photo]);

// //   return (
// //     <form
// //       onSubmit={handleSubmit(onSubmit)}
// //       className="bg-white rounded-xl shadow p-6 space-y-6"
// //     >
// //       {/* Photo */}

// //       <div>
// //         <label className="block font-medium mb-2">
// //           Artist Photo
// //         </label>

// //         <input
// //           type="file"
// //           accept="image/*"
// //           {...register("photo")}
// //         />

// //         {preview && (
// //           <img
// //             src={preview}
// //             alt="Preview"
// //             className="mt-4 w-32 h-32 rounded-full object-cover border"
// //           />
// //         )}
// //       </div>

// //       {/* Full Name */}

// //       <div>
// //         <label className="block font-medium">
// //           Full Name *
// //         </label>

// //         <input
// //           {...register("fullName", {
// //             required: "Full Name is required",
// //           })}
// //           className="w-full border rounded-lg p-3 mt-2"
// //         />

// //         <p className="text-red-500 text-sm">
// //           {errors.fullName?.message}
// //         </p>
// //       </div>

// //       {/* Stage Name */}

// //       <div>
// //         <label className="block font-medium">
// //           Stage Name
// //         </label>

// //         <input
// //           {...register("stageName")}
// //           className="w-full border rounded-lg p-3 mt-2"
// //         />
// //       </div>

// //       {/* Email */}

// //       <div>
// //         <label className="block font-medium">
// //           Email *
// //         </label>

// //         <input
// //           type="email"
// //           {...register("email", {
// //             required: "Email is required",
// //           })}
// //           className="w-full border rounded-lg p-3 mt-2"
// //         />

// //         <p className="text-red-500 text-sm">
// //           {errors.email?.message}
// //         </p>
// //       </div>

// //       {/* Mobile */}

// //       <div>
// //         <label className="block font-medium">
// //           Mobile *
// //         </label>

// //         <input
// //           {...register("mobile", {
// //             required: "Mobile Number is required",
// //           })}
// //           className="w-full border rounded-lg p-3 mt-2"
// //         />

// //         <p className="text-red-500 text-sm">
// //           {errors.mobile?.message}
// //         </p>
// //       </div>

// //       {/* Gender & DOB */}

// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //         <div>
// //           <label className="block font-medium">
// //             Gender
// //           </label>

// //           <select
// //             {...register("gender")}
// //             className="w-full border rounded-lg p-3 mt-2"
// //           >
// //             <option value="">Select Gender</option>
// //             <option value="MALE">Male</option>
// //             <option value="FEMALE">Female</option>
// //             <option value="OTHER">Other</option>
// //           </select>
// //         </div>

// //         <div>
// //           <label className="block font-medium">
// //             Date of Birth
// //           </label>

// //           <input
// //             type="date"
// //             {...register("dateOfBirth")}
// //             className="w-full border rounded-lg p-3 mt-2"
// //           />
// //         </div>
// //       </div>

// //       {/* Dance Style */}

// //       <div>
// //         <label className="block font-medium">
// //           Dance Style
// //         </label>

// //         <select
// //           {...register("danceStyle")}
// //           className="w-full border rounded-lg p-3 mt-2"
// //         >
// //           <option value="">Select Dance Style</option>
// //           <option value="BHARATANATYAM">
// //             Bharatanatyam
// //           </option>
// //           <option value="KATHAK">
// //             Kathak
// //           </option>
// //           <option value="KUCHIPUDI">
// //             Kuchipudi
// //           </option>
// //           <option value="ODISSI">
// //             Odissi
// //           </option>
// //           <option value="MOHINIYATTAM">
// //             Mohiniyattam
// //           </option>
// //           <option value="KATHAKALI">
// //             Kathakali
// //           </option>
// //           <option value="MANIPURI">
// //             Manipuri
// //           </option>
// //           <option value="SATTRIYA">
// //             Sattriya
// //           </option>
// //           <option value="OTHER">
// //             Other
// //           </option>
// //         </select>
// //       </div>

// //       {/* Experience */}

// //       <div>
// //         <label className="block font-medium">
// //           Experience (Years)
// //         </label>

// //         <input
// //           type="number"
// //           min="0"
// //           {...register("experience")}
// //           className="w-full border rounded-lg p-3 mt-2"
// //         />
// //       </div>

// //       {/* Qualification */}

// //       <div>
// //         <label className="block font-medium">
// //           Qualification
// //         </label>

// //         <input
// //           {...register("qualification")}
// //           className="w-full border rounded-lg p-3 mt-2"
// //         />
// //       </div>

// //       {/* Biography */}

// //       <div>
// //         <label className="block font-medium">
// //           Biography
// //         </label>

// //         <textarea
// //           rows={5}
// //           {...register("biography")}
// //           className="w-full border rounded-lg p-3 mt-2"
// //         />
// //       </div>

// //       {/* Address */}

// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //         <div>
// //           <label className="block font-medium">
// //             City
// //           </label>

// //           <input
// //             {...register("city")}
// //             className="w-full border rounded-lg p-3 mt-2"
// //           />
// //         </div>

// //         <div>
// //           <label className="block font-medium">
// //             State
// //           </label>

// //           <input
// //             {...register("state")}
// //             className="w-full border rounded-lg p-3 mt-2"
// //           />
// //         </div>

// //         <div>
// //           <label className="block font-medium">
// //             Country
// //           </label>

// //           <input
// //             {...register("country")}
// //             className="w-full border rounded-lg p-3 mt-2"
// //           />
// //         </div>
// //       </div>

// //       {/* Social Links */}

// //       <div className="space-y-4">
// //         <input
// //           type="url"
// //           placeholder="Website"
// //           {...register("website")}
// //           className="w-full border rounded-lg p-3"
// //         />

// //         <input
// //           type="url"
// //           placeholder="Facebook"
// //           {...register("facebook")}
// //           className="w-full border rounded-lg p-3"
// //         />

// //         <input
// //           type="url"
// //           placeholder="Instagram"
// //           {...register("instagram")}
// //           className="w-full border rounded-lg p-3"
// //         />

// //         <input
// //           type="url"
// //           placeholder="YouTube"
// //           {...register("youtube")}
// //           className="w-full border rounded-lg p-3"
// //         />
// //       </div>

// //       {/* Display Order */}

// //       <div>
// //         <label className="block font-medium">
// //           Display Order
// //         </label>

// //         <input
// //           type="number"
// //           min="1"
// //           {...register("displayOrder")}
// //           className="w-full border rounded-lg p-3 mt-2"
// //         />
// //       </div>

// //       {/* Status */}

// //       <div className="flex items-center gap-3">
// //         <input
// //           type="checkbox"
// //           {...register("isActive")}
// //         />

// //         <label>Active Artist</label>
// //       </div>

// //       {/* Submit */}

// //       <button
// //         type="submit"
// //         disabled={loading}
// //         className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg disabled:opacity-50"
// //       >
// //         {loading ? "Saving..." : "Save Artist"}
// //       </button>
// //     </form>
// //   );
// // };

// // export default ArtistForm;

// // src/pages/admin/Artists/ArtistForm.jsx

// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
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
//   Image as ImageIcon,
//   ToggleRight,
//   ToggleLeft,
//   Check,
//   Users,
//   Music,
//   BookOpen,
//   Link,
//   Facebook,
//   Instagram,
//   Youtube,
//   Hash,
//   Briefcase,
//   Star,
// } from "lucide-react";

// import "./ArtistForm.css";

// const ArtistForm = ({
//   initialValues = {},
//   onSubmit,
//   loading = false,
//   isEdit = false,
// }) => {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     reset,
//     setValue,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       fullName: "",
//       stageName: "",
//       email: "",
//       mobile: "",
//       gender: "",
//       dateOfBirth: "",
//       danceStyle: "",
//       experience: "",
//       qualification: "",
//       biography: "",
//       city: "",
//       state: "",
//       country: "",
//       website: "",
//       facebook: "",
//       instagram: "",
//       youtube: "",
//       displayOrder: 1,
//       isActive: true,
//     },
//   });

//   const photo = watch("photo");
//   const isActive = watch("isActive", true);

//   const [preview, setPreview] = useState(null);
//   const [fileName, setFileName] = useState("");
//   const [dragOver, setDragOver] = useState(false);

//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050/api';
//   const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

//   useEffect(() => {
//     if (initialValues && Object.keys(initialValues).length > 0) {
//       reset({
//         fullName: initialValues.fullName || "",
//         stageName: initialValues.stageName || "",
//         email: initialValues.email || "",
//         mobile: initialValues.mobile || "",
//         gender: initialValues.gender || "",
//         dateOfBirth: initialValues.dateOfBirth ? initialValues.dateOfBirth.substring(0, 10) : "",
//         danceStyle: initialValues.danceStyle || "",
//         experience: initialValues.experience || "",
//         qualification: initialValues.qualification || "",
//         biography: initialValues.biography || "",
//         city: initialValues.city || "",
//         state: initialValues.state || "",
//         country: initialValues.country || "",
//         website: initialValues.website || "",
//         facebook: initialValues.facebook || "",
//         instagram: initialValues.instagram || "",
//         youtube: initialValues.youtube || "",
//         displayOrder: initialValues.displayOrder || 1,
//         isActive: initialValues.isActive !== undefined ? initialValues.isActive : true,
//       });

//       if (initialValues.photo) {
//         setPreview(`${IMAGE_BASE_URL}/uploads/artists/${initialValues.photo}`);
//         setFileName(initialValues.photo);
//       }
//     }
//   }, [initialValues, reset]);

//   useEffect(() => {
//     if (photo && photo.length > 0) {
//       const file = photo[0];
//       setPreview(URL.createObjectURL(file));
//       setFileName(file.name);
//     }
//   }, [photo]);

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
//     if (files.length > 0) {
//       setValue("photo", files);
//     }
//   };

//   const clearFile = () => {
//     setPreview(null);
//     setFileName("");
//     setValue("photo", []);
//   };

//   const danceStyles = [
//     { value: "BHARATANATYAM", label: "Bharatanatyam" },
//     { value: "KATHAK", label: "Kathak" },
//     { value: "KUCHIPUDI", label: "Kuchipudi" },
//     { value: "ODISSI", label: "Odissi" },
//     { value: "MOHINIYATTAM", label: "Mohiniyattam" },
//     { value: "KATHAKALI", label: "Kathakali" },
//     { value: "MANIPURI", label: "Manipuri" },
//     { value: "SATTRIYA", label: "Sattriya" },
//     { value: "OTHER", label: "Other" },
//   ];

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="artist-form"
//     >
//       <div className="artist-form__grid">
//         {/* Left Column - Main Fields */}
//         <div className="artist-form__main">
//           {/* Full Name */}
//           <div className="form-group">
//             <label className="form-group__label">
//               Full Name <span className="required">*</span>
//             </label>
//             <div className="form-group__input-wrapper">
//               <User size={18} className="input-icon" />
//               <input
//                 {...register("fullName", {
//                   required: "Full Name is required",
//                 })}
//                 className={`form-group__input ${errors.fullName ? "error" : ""}`}
//                 placeholder="Enter full name"
//                 disabled={loading}
//               />
//             </div>
//             {errors.fullName && (
//               <p className="form-group__error">{errors.fullName.message}</p>
//             )}
//           </div>

//           {/* Stage Name */}
//           <div className="form-group">
//             <label className="form-group__label">Stage Name</label>
//             <div className="form-group__input-wrapper">
//               <Star size={18} className="input-icon" />
//               <input
//                 {...register("stageName")}
//                 className="form-group__input"
//                 placeholder="Enter stage name (optional)"
//                 disabled={loading}
//               />
//             </div>
//           </div>

//           {/* Email & Mobile */}
//           <div className="form-group form-group--inline">
//             <div className="form-group__half">
//               <label className="form-group__label">
//                 Email <span className="required">*</span>
//               </label>
//               <div className="form-group__input-wrapper">
//                 <Mail size={18} className="input-icon" />
//                 <input
//                   type="email"
//                   {...register("email", {
//                     required: "Email is required",
//                     pattern: {
//                       value: /^\S+@\S+$/i,
//                       message: "Invalid email format",
//                     },
//                   })}
//                   className={`form-group__input ${errors.email ? "error" : ""}`}
//                   placeholder="Enter email address"
//                   disabled={loading}
//                 />
//               </div>
//               {errors.email && (
//                 <p className="form-group__error">{errors.email.message}</p>
//               )}
//             </div>
//             <div className="form-group__half">
//               <label className="form-group__label">
//                 Mobile <span className="required">*</span>
//               </label>
//               <div className="form-group__input-wrapper">
//                 <Phone size={18} className="input-icon" />
//                 <input
//                   {...register("mobile", {
//                     required: "Mobile Number is required",
//                   })}
//                   className={`form-group__input ${errors.mobile ? "error" : ""}`}
//                   placeholder="Enter mobile number"
//                   disabled={loading}
//                 />
//               </div>
//               {errors.mobile && (
//                 <p className="form-group__error">{errors.mobile.message}</p>
//               )}
//             </div>
//           </div>

//           {/* Gender & DOB */}
//           <div className="form-group form-group--inline">
//             <div className="form-group__half">
//               <label className="form-group__label">Gender</label>
//               <div className="form-group__input-wrapper">
//                 <Users size={18} className="input-icon" />
//                 <select
//                   {...register("gender")}
//                   className="form-group__input form-group__select"
//                   disabled={loading}
//                 >
//                   <option value="">Select Gender</option>
//                   <option value="MALE">Male</option>
//                   <option value="FEMALE">Female</option>
//                   <option value="OTHER">Other</option>
//                 </select>
//               </div>
//             </div>
//             <div className="form-group__half">
//               <label className="form-group__label">Date of Birth</label>
//               <div className="form-group__input-wrapper">
//                 <Calendar size={18} className="input-icon" />
//                 <input
//                   type="date"
//                   {...register("dateOfBirth")}
//                   className="form-group__input"
//                   disabled={loading}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Dance Style & Experience */}
//           <div className="form-group form-group--inline">
//             <div className="form-group__half">
//               <label className="form-group__label">Dance Style</label>
//               <div className="form-group__input-wrapper">
//                 <Music size={18} className="input-icon" />
//                 <select
//                   {...register("danceStyle")}
//                   className="form-group__input form-group__select"
//                   disabled={loading}
//                 >
//                   <option value="">Select Dance Style</option>
//                   {danceStyles.map((style) => (
//                     <option key={style.value} value={style.value}>
//                       {style.label}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//             <div className="form-group__half">
//               <label className="form-group__label">Experience (Years)</label>
//               <div className="form-group__input-wrapper">
//                 <Award size={18} className="input-icon" />
//                 <input
//                   type="number"
//                   min="0"
//                   {...register("experience")}
//                   className="form-group__input"
//                   placeholder="0"
//                   disabled={loading}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Qualification */}
//           <div className="form-group">
//             <label className="form-group__label">Qualification</label>
//             <div className="form-group__input-wrapper">
//               <BookOpen size={18} className="input-icon" />
//               <input
//                 {...register("qualification")}
//                 className="form-group__input"
//                 placeholder="Enter qualification"
//                 disabled={loading}
//               />
//             </div>
//           </div>

//           {/* Biography */}
//           <div className="form-group">
//             <label className="form-group__label">Biography</label>
//             <div className="form-group__input-wrapper">
//               <Briefcase size={18} className="input-icon" />
//               <textarea
//                 rows={4}
//                 {...register("biography")}
//                 className="form-group__textarea"
//                 placeholder="Write a brief biography about the artist..."
//                 disabled={loading}
//               />
//             </div>
//           </div>

//           {/* Address */}
//           <div className="form-group form-group--section">
//             <label className="form-group__section-label">Location</label>
//             <div className="form-group--inline">
//               <div className="form-group__half">
//                 <div className="form-group__input-wrapper">
//                   <MapPin size={18} className="input-icon" />
//                   <input
//                     {...register("city")}
//                     className="form-group__input"
//                     placeholder="City"
//                     disabled={loading}
//                   />
//                 </div>
//               </div>
//               <div className="form-group__half">
//                 <div className="form-group__input-wrapper">
//                   <MapPin size={18} className="input-icon" />
//                   <input
//                     {...register("state")}
//                     className="form-group__input"
//                     placeholder="State"
//                     disabled={loading}
//                   />
//                 </div>
//               </div>
//               <div className="form-group__half">
//                 <div className="form-group__input-wrapper">
//                   <Globe size={18} className="input-icon" />
//                   <input
//                     {...register("country")}
//                     className="form-group__input"
//                     placeholder="Country"
//                     disabled={loading}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Social Links */}
//           <div className="form-group form-group--section">
//             <label className="form-group__section-label">Social Links</label>
//             <div className="form-group--inline">
//               <div className="form-group__half">
//                 <div className="form-group__input-wrapper">
//                   <Globe size={18} className="input-icon" />
//                   <input
//                     type="url"
//                     {...register("website")}
//                     className="form-group__input"
//                     placeholder="Website URL"
//                     disabled={loading}
//                   />
//                 </div>
//               </div>
//               <div className="form-group__half">
//                 <div className="form-group__input-wrapper">
//                   <Facebook size={18} className="input-icon" />
//                   <input
//                     type="url"
//                     {...register("facebook")}
//                     className="form-group__input"
//                     placeholder="Facebook URL"
//                     disabled={loading}
//                   />
//                 </div>
//               </div>
//               <div className="form-group__half">
//                 <div className="form-group__input-wrapper">
//                   <Instagram size={18} className="input-icon" />
//                   <input
//                     type="url"
//                     {...register("instagram")}
//                     className="form-group__input"
//                     placeholder="Instagram URL"
//                     disabled={loading}
//                   />
//                 </div>
//               </div>
//               <div className="form-group__half">
//                 <div className="form-group__input-wrapper">
//                   <Youtube size={18} className="input-icon" />
//                   <input
//                     type="url"
//                     {...register("youtube")}
//                     className="form-group__input"
//                     placeholder="YouTube URL"
//                     disabled={loading}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Display Order & Status */}
//           <div className="form-group form-group--inline">
//             <div className="form-group__half">
//               <label className="form-group__label">Display Order</label>
//               <div className="form-group__input-wrapper">
//                 <Hash size={18} className="input-icon" />
//                 <input
//                   type="number"
//                   {...register("displayOrder", {
//                     min: {
//                       value: 0,
//                       message: "Order must be 0 or greater",
//                     },
//                   })}
//                   className={`form-group__input ${errors.displayOrder ? "error" : ""}`}
//                   placeholder="1"
//                   disabled={loading}
//                 />
//               </div>
//               {errors.displayOrder && (
//                 <p className="form-group__error">{errors.displayOrder.message}</p>
//               )}
//             </div>
//             <div className="form-group__half">
//               <label className="form-group__label">Status</label>
//               <button
//                 type="button"
//                 onClick={() => setValue("isActive", !isActive)}
//                 className={`status-toggle-btn ${isActive ? "active" : "inactive"}`}
//                 disabled={loading}
//               >
//                 {isActive ? (
//                   <>
//                     <ToggleRight size={24} />
//                     <span>Active</span>
//                   </>
//                 ) : (
//                   <>
//                     <ToggleLeft size={24} />
//                     <span>Inactive</span>
//                   </>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Right Column - Photo Upload */}
//         <div className="artist-form__media">
//           <div className="media-section">
//             <div className="media-section__header">
//               <div className="media-section__header-left">
//                 <ImageIcon size={20} />
//                 <h3>Profile Photo</h3>
//               </div>
//               <span className="media-section__badge">Recommended</span>
//             </div>

//             {/* Drop Zone */}
//             <div
//               className={`media-dropzone ${dragOver ? "drag-over" : ""} ${
//                 preview ? "has-preview" : ""
//               }`}
//               onDragOver={handleDragOver}
//               onDragLeave={handleDragLeave}
//               onDrop={handleDrop}
//             >
//               {!preview ? (
//                 <div className="media-dropzone__content">
//                   <Upload size={40} className="dropzone-icon" />
//                   <p className="dropzone-text">Drag & drop a photo here</p>
//                   <span className="dropzone-hint">or click to browse</span>
//                   <input
//                     type="file"
//                     accept="image/*"
//                     {...register("photo")}
//                     className="media-dropzone__input"
//                     disabled={loading}
//                     id="photo-upload"
//                   />
//                   <label htmlFor="photo-upload" className="dropzone-btn">
//                     Choose Photo
//                   </label>
//                 </div>
//               ) : (
//                 <div className="media-preview">
//                   <div className="media-preview__container">
//                     <img
//                       src={preview}
//                       alt="Profile preview"
//                       className="media-preview__image"
//                     />
//                     <div className="media-preview__overlay">
//                       <button
//                         type="button"
//                         onClick={clearFile}
//                         className="media-preview__remove"
//                         disabled={loading}
//                       >
//                         <X size={18} />
//                         Remove
//                       </button>
//                     </div>
//                   </div>
//                   {fileName && (
//                     <p className="media-preview__filename">{fileName}</p>
//                   )}
//                 </div>
//               )}
//             </div>

//             <p className="media-hint">
//               Recommended: 400x400px square image, max 2MB
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Form Actions */}
//       <div className="artist-form__actions">
//         <button
//           type="submit"
//           disabled={loading}
//           className="btn btn--primary btn--submit"
//         >
//           {loading ? (
//             <>
//               <span className="spinner-btn"></span>
//               {isEdit ? "Updating..." : "Creating..."}
//             </>
//           ) : (
//             <>
//               <Check size={18} />
//               {isEdit ? "Update Artist" : "Create Artist"}
//             </>
//           )}
//         </button>
//       </div>
//     </form>
//   );
// };

// export default ArtistForm;


// src/pages/admin/Artists/ArtistForm.jsx

// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
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
//   Image as ImageIcon,
//   ToggleRight,
//   ToggleLeft,
//   Check,
//   Users,
//   Music,
//   BookOpen,
//   Link,
//   Facebook,
//   Instagram,
//   Youtube,
//   Hash,
//   Briefcase,
//   Star,
// } from "lucide-react";

// import "./ArtistForm.css";

// const ArtistForm = ({
//   initialValues = {},
//   onSubmit,
//   loading = false,
//   isEdit = false,
// }) => {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     reset,
//     setValue,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       fullName: "",
//       stageName: "",
//       email: "",
//       mobile: "",
//       gender: "",
//       dateOfBirth: "",
//       danceStyle: "",
//       experience: "",
//       qualification: "",
//       biography: "",
//       city: "",
//       state: "",
//       country: "",
//       website: "",
//       facebook: "",
//       instagram: "",
//       youtube: "",
//       displayOrder: 1,
//       isActive: true,
//     },
//   });

//   const photo = watch("photo");
//   const isActive = watch("isActive", true);

//   const [preview, setPreview] = useState(null);
//   const [fileName, setFileName] = useState("");
//   const [dragOver, setDragOver] = useState(false);

//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050/api';
//   const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

//   useEffect(() => {
//     if (initialValues && Object.keys(initialValues).length > 0) {
//       reset({
//         fullName: initialValues.fullName || "",
//         stageName: initialValues.stageName || "",
//         email: initialValues.email || "",
//         mobile: initialValues.mobile || "",
//         gender: initialValues.gender || "",
//         dateOfBirth: initialValues.dateOfBirth ? initialValues.dateOfBirth.substring(0, 10) : "",
//         danceStyle: initialValues.danceStyle || "",
//         experience: initialValues.experience || "",
//         qualification: initialValues.qualification || "",
//         biography: initialValues.biography || "",
//         city: initialValues.city || "",
//         state: initialValues.state || "",
//         country: initialValues.country || "",
//         website: initialValues.website || "",
//         facebook: initialValues.facebook || "",
//         instagram: initialValues.instagram || "",
//         youtube: initialValues.youtube || "",
//         displayOrder: initialValues.displayOrder || 1,
//         isActive: initialValues.isActive !== undefined ? initialValues.isActive : true,
//       });

//       if (initialValues.photo) {
//         setPreview(`${IMAGE_BASE_URL}/uploads/artists/${initialValues.photo}`);
//         setFileName(initialValues.photo);
//       }
//     }
//   }, [initialValues, reset]);

//   useEffect(() => {
//     if (photo && photo.length > 0) {
//       const file = photo[0];
//       setPreview(URL.createObjectURL(file));
//       setFileName(file.name);
//     }
//   }, [photo]);

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
//     if (files.length > 0) {
//       setValue("photo", files);
//     }
//   };

//   const clearFile = () => {
//     setPreview(null);
//     setFileName("");
//     setValue("photo", []);
//   };

//   const danceStyles = [
//     { value: "BHARATANATYAM", label: "Bharatanatyam" },
//     { value: "KATHAK", label: "Kathak" },
//     { value: "KUCHIPUDI", label: "Kuchipudi" },
//     { value: "ODISSI", label: "Odissi" },
//     { value: "MOHINIYATTAM", label: "Mohiniyattam" },
//     { value: "KATHAKALI", label: "Kathakali" },
//     { value: "MANIPURI", label: "Manipuri" },
//     { value: "SATTRIYA", label: "Sattriya" },
//     { value: "OTHER", label: "Other" },
//   ];

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="artist-form"
//     >
//       <div className="artist-form__grid">
//         {/* Left Column - Main Fields */}
//         <div className="artist-form__main">
//           {/* Full Name */}
//           <div className="form-group">
//             <label className="form-group__label">
//               Full Name <span className="required">*</span>
//             </label>
//             <div className="form-group__input-wrapper">
//               <User size={18} className="input-icon" />
//               <input
//                 {...register("fullName", {
//                   required: "Full Name is required",
//                 })}
//                 className={`form-group__input ${errors.fullName ? "error" : ""}`}
//                 placeholder="Enter full name"
//                 disabled={loading}
//               />
//             </div>
//             {errors.fullName && (
//               <p className="form-group__error">{errors.fullName.message}</p>
//             )}
//           </div>

//           {/* Stage Name */}
//           <div className="form-group">
//             <label className="form-group__label">Stage Name</label>
//             <div className="form-group__input-wrapper">
//               <Star size={18} className="input-icon" />
//               <input
//                 {...register("stageName")}
//                 className="form-group__input"
//                 placeholder="Enter stage name (optional)"
//                 disabled={loading}
//               />
//             </div>
//           </div>

//           {/* Email & Mobile */}
//           <div className="form-group form-group--inline">
//             <div className="form-group__half">
//               <label className="form-group__label">
//                 Email <span className="required">*</span>
//               </label>
//               <div className="form-group__input-wrapper">
//                 <Mail size={18} className="input-icon" />
//                 <input
//                   type="email"
//                   {...register("email", {
//                     required: "Email is required",
//                     pattern: {
//                       value: /^\S+@\S+$/i,
//                       message: "Invalid email format",
//                     },
//                   })}
//                   className={`form-group__input ${errors.email ? "error" : ""}`}
//                   placeholder="Enter email address"
//                   disabled={loading}
//                 />
//               </div>
//               {errors.email && (
//                 <p className="form-group__error">{errors.email.message}</p>
//               )}
//             </div>
//             <div className="form-group__half">
//               <label className="form-group__label">
//                 Mobile <span className="required">*</span>
//               </label>
//               <div className="form-group__input-wrapper">
//                 <Phone size={18} className="input-icon" />
//                 <input
//                   {...register("mobile", {
//                     required: "Mobile Number is required",
//                   })}
//                   className={`form-group__input ${errors.mobile ? "error" : ""}`}
//                   placeholder="Enter mobile number"
//                   disabled={loading}
//                 />
//               </div>
//               {errors.mobile && (
//                 <p className="form-group__error">{errors.mobile.message}</p>
//               )}
//             </div>
//           </div>

//           {/* Gender & DOB */}
//           <div className="form-group form-group--inline">
//             <div className="form-group__half">
//               <label className="form-group__label">Gender</label>
//               <div className="form-group__input-wrapper">
//                 <Users size={18} className="input-icon" />
//                 <select
//                   {...register("gender")}
//                   className="form-group__input form-group__select"
//                   disabled={loading}
//                 >
//                   <option value="">Select Gender</option>
//                   <option value="MALE">Male</option>
//                   <option value="FEMALE">Female</option>
//                   <option value="OTHER">Other</option>
//                 </select>
//               </div>
//             </div>
//             <div className="form-group__half">
//               <label className="form-group__label">Date of Birth</label>
//               <div className="form-group__input-wrapper">
//                 <Calendar size={18} className="input-icon" />
//                 <input
//                   type="date"
//                   {...register("dateOfBirth")}
//                   className="form-group__input"
//                   disabled={loading}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Dance Style & Experience */}
//           <div className="form-group form-group--inline">
//             <div className="form-group__half">
//               <label className="form-group__label">Dance Style</label>
//               <div className="form-group__input-wrapper">
//                 <Music size={18} className="input-icon" />
//                 <select
//                   {...register("danceStyle")}
//                   className="form-group__input form-group__select"
//                   disabled={loading}
//                 >
//                   <option value="">Select Dance Style</option>
//                   {danceStyles.map((style) => (
//                     <option key={style.value} value={style.value}>
//                       {style.label}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//             <div className="form-group__half">
//               <label className="form-group__label">Experience (Years)</label>
//               <div className="form-group__input-wrapper">
//                 <Award size={18} className="input-icon" />
//                 <input
//                   type="number"
//                   min="0"
//                   {...register("experience")}
//                   className="form-group__input"
//                   placeholder="0"
//                   disabled={loading}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Qualification */}
//           <div className="form-group">
//             <label className="form-group__label">Qualification</label>
//             <div className="form-group__input-wrapper">
//               <BookOpen size={18} className="input-icon" />
//               <input
//                 {...register("qualification")}
//                 className="form-group__input"
//                 placeholder="Enter qualification"
//                 disabled={loading}
//               />
//             </div>
//           </div>

//           {/* Biography */}
//           <div className="form-group">
//             <label className="form-group__label">Biography</label>
//             <div className="form-group__input-wrapper">
//               <Briefcase size={18} className="input-icon" />
//               <textarea
//                 rows={4}
//                 {...register("biography")}
//                 className="form-group__textarea"
//                 placeholder="Write a brief biography about the artist..."
//                 disabled={loading}
//               />
//             </div>
//           </div>

//           {/* Address */}
//           <div className="form-group form-group--section">
//             <label className="form-group__section-label">Location</label>
//             <div className="form-group--inline">
//               <div className="form-group__half">
//                 <div className="form-group__input-wrapper">
//                   <MapPin size={18} className="input-icon" />
//                   <input
//                     {...register("city")}
//                     className="form-group__input"
//                     placeholder="City"
//                     disabled={loading}
//                   />
//                 </div>
//               </div>
//               <div className="form-group__half">
//                 <div className="form-group__input-wrapper">
//                   <MapPin size={18} className="input-icon" />
//                   <input
//                     {...register("state")}
//                     className="form-group__input"
//                     placeholder="State"
//                     disabled={loading}
//                   />
//                 </div>
//               </div>
//               <div className="form-group__half">
//                 <div className="form-group__input-wrapper">
//                   <Globe size={18} className="input-icon" />
//                   <input
//                     {...register("country")}
//                     className="form-group__input"
//                     placeholder="Country"
//                     disabled={loading}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Social Links */}
//           <div className="form-group form-group--section">
//             <label className="form-group__section-label">Social Links</label>
//             <div className="form-group--inline">
//               <div className="form-group__half">
//                 <div className="form-group__input-wrapper">
//                   <Globe size={18} className="input-icon" />
//                   <input
//                     type="url"
//                     {...register("website")}
//                     className="form-group__input"
//                     placeholder="Website URL"
//                     disabled={loading}
//                   />
//                 </div>
//               </div>
//               <div className="form-group__half">
//                 <div className="form-group__input-wrapper">
//                   <Facebook size={18} className="input-icon" />
//                   <input
//                     type="url"
//                     {...register("facebook")}
//                     className="form-group__input"
//                     placeholder="Facebook URL"
//                     disabled={loading}
//                   />
//                 </div>
//               </div>
//               <div className="form-group__half">
//                 <div className="form-group__input-wrapper">
//                   <Instagram size={18} className="input-icon" />
//                   <input
//                     type="url"
//                     {...register("instagram")}
//                     className="form-group__input"
//                     placeholder="Instagram URL"
//                     disabled={loading}
//                   />
//                 </div>
//               </div>
//               <div className="form-group__half">
//                 <div className="form-group__input-wrapper">
//                   <Youtube size={18} className="input-icon" />
//                   <input
//                     type="url"
//                     {...register("youtube")}
//                     className="form-group__input"
//                     placeholder="YouTube URL"
//                     disabled={loading}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Display Order & Status */}
//           <div className="form-group form-group--inline">
//             <div className="form-group__half">
//               <label className="form-group__label">Display Order</label>
//               <div className="form-group__input-wrapper">
//                 <Hash size={18} className="input-icon" />
//                 <input
//                   type="number"
//                   {...register("displayOrder", {
//                     min: {
//                       value: 0,
//                       message: "Order must be 0 or greater",
//                     },
//                   })}
//                   className={`form-group__input ${errors.displayOrder ? "error" : ""}`}
//                   placeholder="1"
//                   disabled={loading}
//                 />
//               </div>
//               {errors.displayOrder && (
//                 <p className="form-group__error">{errors.displayOrder.message}</p>
//               )}
//             </div>
//             <div className="form-group__half">
//               <label className="form-group__label">Status</label>
//               <button
//                 type="button"
//                 onClick={() => setValue("isActive", !isActive)}
//                 className={`status-toggle-btn ${isActive ? "active" : "inactive"}`}
//                 disabled={loading}
//               >
//                 {isActive ? (
//                   <>
//                     <ToggleRight size={24} />
//                     <span>Active</span>
//                   </>
//                 ) : (
//                   <>
//                     <ToggleLeft size={24} />
//                     <span>Inactive</span>
//                   </>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Right Column - Photo Upload */}
//         <div className="artist-form__media">
//           <div className="media-section">
//             <div className="media-section__header">
//               <div className="media-section__header-left">
//                 <ImageIcon size={20} />
//                 <h3>Profile Photo</h3>
//               </div>
//               <span className="media-section__badge">Recommended</span>
//             </div>

//             {/* Drop Zone */}
//             <div
//               className={`media-dropzone ${dragOver ? "drag-over" : ""} ${
//                 preview ? "has-preview" : ""
//               }`}
//               onDragOver={handleDragOver}
//               onDragLeave={handleDragLeave}
//               onDrop={handleDrop}
//             >
//               {!preview ? (
//                 <div className="media-dropzone__content">
//                   <Upload size={40} className="dropzone-icon" />
//                   <p className="dropzone-text">Drag & drop a photo here</p>
//                   <span className="dropzone-hint">or click to browse</span>
//                   <input
//                     type="file"
//                     accept="image/*"
//                     {...register("photo")}
//                     className="media-dropzone__input"
//                     disabled={loading}
//                     id="photo-upload"
//                   />
//                   <label htmlFor="photo-upload" className="dropzone-btn">
//                     Choose Photo
//                   </label>
//                 </div>
//               ) : (
//                 <div className="media-preview">
//                   <div className="media-preview__container">
//                     <img
//                       src={preview}
//                       alt="Profile preview"
//                       className="media-preview__image"
//                     />
//                     <div className="media-preview__overlay">
//                       <button
//                         type="button"
//                         onClick={clearFile}
//                         className="media-preview__remove"
//                         disabled={loading}
//                       >
//                         <X size={18} />
//                         Remove
//                       </button>
//                     </div>
//                   </div>
//                   {fileName && (
//                     <p className="media-preview__filename">{fileName}</p>
//                   )}
//                 </div>
//               )}
//             </div>

//             <p className="media-hint">
//               Recommended: 400x400px square image, max 2MB
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Form Actions */}
//       <div className="artist-form__actions">
//         <button
//           type="submit"
//           disabled={loading}
//           className="btn btn--primary btn--submit"
//         >
//           {loading ? (
//             <>
//               <span className="spinner-btn"></span>
//               {isEdit ? "Updating..." : "Creating..."}
//             </>
//           ) : (
//             <>
//               <Check size={18} />
//               {isEdit ? "Update Artist" : "Create Artist"}
//             </>
//           )}
//         </button>
//       </div>
//     </form>
//   );
// };

// export default ArtistForm;

// src/pages/admin/Artists/ArtistForm.jsx

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

// Lucide icons for UI elements
import {
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Globe,
  Award,
  Upload,
  X,
  Image as ImageIcon,
  ToggleRight,
  ToggleLeft,
  Check,
  Users,
  Music,
  BookOpen,
  Hash,
  Briefcase,
  Star,
  Link as LinkIcon,
} from "lucide-react";

// React Icons for social media
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

import "./ArtistForm.css";

const ArtistForm = ({
  initialValues = {},
  onSubmit,
  loading = false,
  isEdit = false,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      stageName: "",
      email: "",
      mobile: "",
      gender: "",
      dateOfBirth: "",
      danceStyle: "",
      experience: "",
      qualification: "",
      biography: "",
      city: "",
      state: "",
      country: "",
      website: "",
      facebook: "",
      instagram: "",
      youtube: "",
      displayOrder: 1,
      isActive: true,
    },
  });

  const photo = watch("photo");
  const isActive = watch("isActive", true);

  const [preview, setPreview] = useState(null);
  const [fileName, setFileName] = useState("");
  const [dragOver, setDragOver] = useState(false);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050/api';
  const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

  useEffect(() => {
    if (initialValues && Object.keys(initialValues).length > 0) {
      reset({
        fullName: initialValues.fullName || "",
        stageName: initialValues.stageName || "",
        email: initialValues.email || "",
        mobile: initialValues.mobile || "",
        gender: initialValues.gender || "",
        dateOfBirth: initialValues.dateOfBirth ? initialValues.dateOfBirth.substring(0, 10) : "",
        danceStyle: initialValues.danceStyle || "",
        experience: initialValues.experience || "",
        qualification: initialValues.qualification || "",
        biography: initialValues.biography || "",
        city: initialValues.city || "",
        state: initialValues.state || "",
        country: initialValues.country || "",
        website: initialValues.website || "",
        facebook: initialValues.facebook || "",
        instagram: initialValues.instagram || "",
        youtube: initialValues.youtube || "",
        displayOrder: initialValues.displayOrder || 1,
        isActive: initialValues.isActive !== undefined ? initialValues.isActive : true,
      });

      if (initialValues.photo) {
        setPreview(`${IMAGE_BASE_URL}/uploads/artists/${initialValues.photo}`);
        setFileName(initialValues.photo);
      }
    }
  }, [initialValues, reset]);

  useEffect(() => {
    if (photo && photo.length > 0) {
      const file = photo[0];
      setPreview(URL.createObjectURL(file));
      setFileName(file.name);
    }
  }, [photo]);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      setValue("photo", files);
    }
  };

  const clearFile = () => {
    setPreview(null);
    setFileName("");
    setValue("photo", []);
  };

  const danceStyles = [
    { value: "BHARATANATYAM", label: "Bharatanatyam" },
    { value: "KATHAK", label: "Kathak" },
    { value: "KUCHIPUDI", label: "Kuchipudi" },
    { value: "ODISSI", label: "Odissi" },
    { value: "MOHINIYATTAM", label: "Mohiniyattam" },
    { value: "KATHAKALI", label: "Kathakali" },
    { value: "MANIPURI", label: "Manipuri" },
    { value: "SATTRIYA", label: "Sattriya" },
    { value: "OTHER", label: "Other" },
  ];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="artist-form"
    >
      <div className="artist-form__grid">
        {/* Left Column - Main Fields */}
        <div className="artist-form__main">
          {/* Full Name */}
          <div className="form-group">
            <label className="form-group__label">
              Full Name <span className="required">*</span>
            </label>
            <div className="form-group__input-wrapper">
              <User size={18} className="input-icon" />
              <input
                {...register("fullName", {
                  required: "Full Name is required",
                })}
                className={`form-group__input ${errors.fullName ? "error" : ""}`}
                placeholder="Enter full name"
                disabled={loading}
              />
            </div>
            {errors.fullName && (
              <p className="form-group__error">{errors.fullName.message}</p>
            )}
          </div>

          {/* Stage Name */}
          <div className="form-group">
            <label className="form-group__label">Stage Name</label>
            <div className="form-group__input-wrapper">
              <Star size={18} className="input-icon" />
              <input
                {...register("stageName")}
                className="form-group__input"
                placeholder="Enter stage name (optional)"
                disabled={loading}
              />
            </div>
          </div>

          {/* Email & Mobile */}
          <div className="form-group form-group--inline">
            <div className="form-group__half">
              <label className="form-group__label">
                Email <span className="required">*</span>
              </label>
              <div className="form-group__input-wrapper">
                <Mail size={18} className="input-icon" />
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email format",
                    },
                  })}
                  className={`form-group__input ${errors.email ? "error" : ""}`}
                  placeholder="Enter email address"
                  disabled={loading}
                />
              </div>
              {errors.email && (
                <p className="form-group__error">{errors.email.message}</p>
              )}
            </div>
            <div className="form-group__half">
              <label className="form-group__label">
                Mobile <span className="required">*</span>
              </label>
              <div className="form-group__input-wrapper">
                <Phone size={18} className="input-icon" />
                <input
                  {...register("mobile", {
                    required: "Mobile Number is required",
                  })}
                  className={`form-group__input ${errors.mobile ? "error" : ""}`}
                  placeholder="Enter mobile number"
                  disabled={loading}
                />
              </div>
              {errors.mobile && (
                <p className="form-group__error">{errors.mobile.message}</p>
              )}
            </div>
          </div>

          {/* Gender & DOB */}
          <div className="form-group form-group--inline">
            <div className="form-group__half">
              <label className="form-group__label">Gender</label>
              <div className="form-group__input-wrapper">
                <Users size={18} className="input-icon" />
                <select
                  {...register("gender")}
                  className="form-group__input form-group__select"
                  disabled={loading}
                >
                  <option value="">Select Gender</option>
                  <option value="MALE">Male</option>
                  <option value="FEMALE">Female</option>
                  <option value="OTHER">Other</option>
                </select>
              </div>
            </div>
            <div className="form-group__half">
              <label className="form-group__label">Date of Birth</label>
              <div className="form-group__input-wrapper">
                <Calendar size={18} className="input-icon" />
                <input
                  type="date"
                  {...register("dateOfBirth")}
                  className="form-group__input"
                  disabled={loading}
                />
              </div>
            </div>
          </div>

          {/* Dance Style & Experience */}
          <div className="form-group form-group--inline">
            <div className="form-group__half">
              <label className="form-group__label">Dance Style</label>
              <div className="form-group__input-wrapper">
                <Music size={18} className="input-icon" />
                <select
                  {...register("danceStyle")}
                  className="form-group__input form-group__select"
                  disabled={loading}
                >
                  <option value="">Select Dance Style</option>
                  {danceStyles.map((style) => (
                    <option key={style.value} value={style.value}>
                      {style.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-group__half">
              <label className="form-group__label">Experience (Years)</label>
              <div className="form-group__input-wrapper">
                <Award size={18} className="input-icon" />
                <input
                  type="number"
                  min="0"
                  {...register("experience")}
                  className="form-group__input"
                  placeholder="0"
                  disabled={loading}
                />
              </div>
            </div>
          </div>

          {/* Qualification */}
          <div className="form-group">
            <label className="form-group__label">Qualification</label>
            <div className="form-group__input-wrapper">
              <BookOpen size={18} className="input-icon" />
              <input
                {...register("qualification")}
                className="form-group__input"
                placeholder="Enter qualification"
                disabled={loading}
              />
            </div>
          </div>

          {/* Biography */}
          <div className="form-group">
            <label className="form-group__label">Biography</label>
            <div className="form-group__input-wrapper">
              <Briefcase size={18} className="input-icon" />
              <textarea
                rows={4}
                {...register("biography")}
                className="form-group__textarea"
                placeholder="Write a brief biography about the artist..."
                disabled={loading}
              />
            </div>
          </div>

          {/* Address */}
          <div className="form-group form-group--section">
            <label className="form-group__section-label">Location</label>
            <div className="form-group--inline">
              <div className="form-group__half">
                <div className="form-group__input-wrapper">
                  <MapPin size={18} className="input-icon" />
                  <input
                    {...register("city")}
                    className="form-group__input"
                    placeholder="City"
                    disabled={loading}
                  />
                </div>
              </div>
              <div className="form-group__half">
                <div className="form-group__input-wrapper">
                  <MapPin size={18} className="input-icon" />
                  <input
                    {...register("state")}
                    className="form-group__input"
                    placeholder="State"
                    disabled={loading}
                  />
                </div>
              </div>
              <div className="form-group__half">
                <div className="form-group__input-wrapper">
                  <Globe size={18} className="input-icon" />
                  <input
                    {...register("country")}
                    className="form-group__input"
                    placeholder="Country"
                    disabled={loading}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="form-group form-group--section">
            <label className="form-group__section-label">Social Links</label>
            <div className="form-group--inline">
              <div className="form-group__half">
                <div className="form-group__input-wrapper">
                  <Globe size={18} className="input-icon" />
                  <input
                    type="url"
                    {...register("website")}
                    className="form-group__input"
                    placeholder="Website URL"
                    disabled={loading}
                  />
                </div>
              </div>
              <div className="form-group__half">
                <div className="form-group__input-wrapper">
                  <FaFacebookF size={18} className="input-icon social-icon" />
                  <input
                    type="url"
                    {...register("facebook")}
                    className="form-group__input"
                    placeholder="Facebook URL"
                    disabled={loading}
                  />
                </div>
              </div>
              <div className="form-group__half">
                <div className="form-group__input-wrapper">
                  <FaInstagram size={18} className="input-icon social-icon" />
                  <input
                    type="url"
                    {...register("instagram")}
                    className="form-group__input"
                    placeholder="Instagram URL"
                    disabled={loading}
                  />
                </div>
              </div>
              <div className="form-group__half">
                <div className="form-group__input-wrapper">
                  <FaYoutube size={18} className="input-icon social-icon" />
                  <input
                    type="url"
                    {...register("youtube")}
                    className="form-group__input"
                    placeholder="YouTube URL"
                    disabled={loading}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Display Order & Status */}
          <div className="form-group form-group--inline">
            <div className="form-group__half">
              <label className="form-group__label">Display Order</label>
              <div className="form-group__input-wrapper">
                <Hash size={18} className="input-icon" />
                <input
                  type="number"
                  {...register("displayOrder", {
                    min: {
                      value: 0,
                      message: "Order must be 0 or greater",
                    },
                  })}
                  className={`form-group__input ${errors.displayOrder ? "error" : ""}`}
                  placeholder="1"
                  disabled={loading}
                />
              </div>
              {errors.displayOrder && (
                <p className="form-group__error">{errors.displayOrder.message}</p>
              )}
            </div>
            <div className="form-group__half">
              <label className="form-group__label">Status</label>
              <button
                type="button"
                onClick={() => setValue("isActive", !isActive)}
                className={`status-toggle-btn ${isActive ? "active" : "inactive"}`}
                disabled={loading}
              >
                {isActive ? (
                  <>
                    <ToggleRight size={24} />
                    <span>Active</span>
                  </>
                ) : (
                  <>
                    <ToggleLeft size={24} />
                    <span>Inactive</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Photo Upload */}
        <div className="artist-form__media">
          <div className="media-section">
            <div className="media-section__header">
              <div className="media-section__header-left">
                <ImageIcon size={20} />
                <h3>Profile Photo</h3>
              </div>
              <span className="media-section__badge">Recommended</span>
            </div>

            {/* Drop Zone */}
            <div
              className={`media-dropzone ${dragOver ? "drag-over" : ""} ${
                preview ? "has-preview" : ""
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {!preview ? (
                <div className="media-dropzone__content">
                  <Upload size={40} className="dropzone-icon" />
                  <p className="dropzone-text">Drag & drop a photo here</p>
                  <span className="dropzone-hint">or click to browse</span>
                  <input
                    type="file"
                    accept="image/*"
                    {...register("photo")}
                    className="media-dropzone__input"
                    disabled={loading}
                    id="photo-upload"
                  />
                  <label htmlFor="photo-upload" className="dropzone-btn">
                    Choose Photo
                  </label>
                </div>
              ) : (
                <div className="media-preview">
                  <div className="media-preview__container">
                    <img
                      src={preview}
                      alt="Profile preview"
                      className="media-preview__image"
                    />
                    <div className="media-preview__overlay">
                      <button
                        type="button"
                        onClick={clearFile}
                        className="media-preview__remove"
                        disabled={loading}
                      >
                        <X size={18} />
                        Remove
                      </button>
                    </div>
                  </div>
                  {fileName && (
                    <p className="media-preview__filename">{fileName}</p>
                  )}
                </div>
              )}
            </div>

            <p className="media-hint">
              Recommended: 400x400px square image, max 2MB
            </p>
          </div>
        </div>
      </div>

      {/* Form Actions */}
      <div className="artist-form__actions">
        <button
          type="submit"
          disabled={loading}
          className="btn btn--primary btn--submit"
        >
          {loading ? (
            <>
              <span className="spinner-btn"></span>
              {isEdit ? "Updating..." : "Creating..."}
            </>
          ) : (
            <>
              <Check size={18} />
              {isEdit ? "Update Artist" : "Create Artist"}
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default ArtistForm;