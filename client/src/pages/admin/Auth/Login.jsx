
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import { Eye, EyeOff, Mail, Lock } from "lucide-react";
// import toast from "react-hot-toast";

// import { login } from "../../../api/auth.api";
// import { useAuth } from "../../../context/AuthContext";

// const Login = () => {
//   const navigate = useNavigate();
//   const { login: authLogin } = useAuth();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm();

//   const [showPassword, setShowPassword] = useState(false);

// const onSubmit = async (formData) => {
//   console.log("Form Submitted");

//   try {
//     const response = await login(formData);

//     console.log("Response:", response.data);

//     alert("Login Success");

//     // Comment everything else
//     authLogin(response.data.data.user, response.data.data.token);
//     navigate("/admin/dashboard");

//   } catch (error) {
//     console.error(error);
//     alert(error.response?.data?.message || error.message);
//   }
// };

//   return (
//     <div className="min-h-screen bg-slate-100 flex items-center justify-center p-5">
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

//         {/* Logo */}
//         <div className="text-center mb-8">
//           {/* Uncomment if you have a logo */}
//           {/* <img src="/logo.png" alt="KITD" className="h-16 mx-auto mb-4" /> */}

//           <h1 className="text-3xl font-bold text-slate-800">
//             KITD Admin
//           </h1>

//           <p className="text-gray-500 mt-2">
//             Welcome Back 👋
//           </p>
//         </div>

//         <form onSubmit={handleSubmit(onSubmit)}>

//           {/* Email */}

//           <div className="mb-5">
//             <label className="block mb-2 font-medium">
//               Email Address
//             </label>

//             <div className="relative">

//               <Mail
//                 size={18}
//                 className="absolute left-3 top-4 text-gray-400"
//               />

//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 autoComplete="email"
//                 className="w-full border rounded-lg pl-10 pr-3 py-3 outline-none focus:ring-2 focus:ring-blue-500"
//                 {...register("email", {
//                   required: "Email is required",
//                   pattern: {
//                     value: /^\S+@\S+$/i,
//                     message: "Enter a valid email",
//                   },
//                 })}
//               />

//             </div>

//             {errors.email && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.email.message}
//               </p>
//             )}
//           </div>

//           {/* Password */}

//           <div className="mb-5">

//             <label className="block mb-2 font-medium">
//               Password
//             </label>

//             <div className="relative">

//               <Lock
//                 size={18}
//                 className="absolute left-3 top-4 text-gray-400"
//               />

//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Enter your password"
//                 autoComplete="current-password"
//                 className="w-full border rounded-lg pl-10 pr-10 py-3 outline-none focus:ring-2 focus:ring-blue-500"
//                 {...register("password", {
//                   required: "Password is required",
//                   minLength: {
//                     value: 6,
//                     message: "Minimum 6 characters",
//                   },
//                 })}
//               />

//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-3 text-gray-500 hover:text-black"
//               >
//                 {showPassword ? (
//                   <EyeOff size={20} />
//                 ) : (
//                   <Eye size={20} />
//                 )}
//               </button>

//             </div>

//             {errors.password && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.password.message}
//               </p>
//             )}
//           </div>

//           {/* Forgot Password */}

//           <div className="flex justify-end mb-6">

//             <button
//               type="button"
//               onClick={() => navigate("/forgot-password")}
//               className="text-blue-600 hover:underline text-sm"
//             >
//               Forgot Password?
//             </button>

//           </div>

//           {/* Login */}

//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white py-3 rounded-lg font-semibold disabled:opacity-50"
//           >
//             {isSubmitting ? "Signing In..." : "Login"}
//           </button>

//         </form>

//       </div>
//     </div>
//   );
// };

// export default Login;


// src/pages/Admin/Login.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, Mail, Lock, LogIn, Shield, Sparkles } from "lucide-react";
import toast from "react-hot-toast";

import { login } from "../../../api/auth.api";
import { useAuth } from "../../../context/AuthContext";

import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const { login: authLogin } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (formData) => {
    try {
      const response = await login(formData);
      authLogin(response.data.data.user, response.data.data.token);
      toast.success("Welcome back! 🎉");
      navigate("/admin/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Decorative Elements */}
        <div className="login-decoration">
          <div className="decoration-circle circle-1"></div>
          <div className="decoration-circle circle-2"></div>
          <div className="decoration-circle circle-3"></div>
          <div className="decoration-circle circle-4"></div>
        </div>

        {/* Login Card */}
        <div className="login-card">
          {/* Logo Section */}
          <div className="login-header">
            <div className="logo-wrapper">
              <div className="logo-icon">
                <Shield size={32} />
              </div>
            </div>
            <h1>KITD Admin</h1>
            <p className="subtitle">Welcome Back 👋</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="login-form">
            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email">
                Email Address
                <span className="required">*</span>
              </label>
              <div className="input-wrapper">
                <Mail size={18} className="input-icon" />
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  className={`input-field ${errors.email ? 'error' : ''}`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Please enter a valid email",
                    },
                  })}
                />
              </div>
              {errors.email && (
                <p className="error-message">{errors.email.message}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label htmlFor="password">
                Password
                <span className="required">*</span>
              </label>
              <div className="input-wrapper">
                <Lock size={18} className="input-icon" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  className={`input-field ${errors.password ? 'error' : ''}`}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="password-toggle"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && (
                <p className="error-message">{errors.password.message}</p>
              )}
            </div>

            {/* Forgot Password */}
            <div className="form-options">
              <div className="remember-me">
                <input
                  type="checkbox"
                  id="remember"
                  className="checkbox"
                  {...register("remember")}
                />
                <label htmlFor="remember">Remember me</label>
              </div>
              <button
                type="button"
                onClick={() => navigate("/forgot-password")}
                className="forgot-password"
              >
                Forgot Password?
              </button>
            </div>

            {/* Submit Button */}z
            <button
              type="submit"
              disabled={isSubmitting}
              className="login-btn"
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Signing In...
                </>
              ) : (
                <>
                  <LogIn size={20} />
                  Login
                </>
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="login-footer">
            <p>
              &copy; {new Date().getFullYear()} KITD. All rights reserved.
            </p>
            <div className="footer-links">
              <a href="/privacy">Privacy</a>
              <span className="divider">|</span>
              <a href="/terms">Terms</a>
            </div>
          </div>
        </div>

        {/* Decorative Side Element */}
        <div className="login-side">
          <div className="side-content">
            <Sparkles size={48} />
            <h2>Admin Dashboard</h2>
            <p>Manage KITD's content, events, and community</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;