
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import toast from "react-hot-toast";

import { login } from "../../../api/auth.api";
import { useAuth } from "../../../context/AuthContext";

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
  console.log("Form Submitted");

  try {
    const response = await login(formData);

    console.log("Response:", response.data);

    alert("Login Success");

    // Comment everything else
    authLogin(response.data.data.user, response.data.data.token);
    navigate("/admin/dashboard");

  } catch (error) {
    console.error(error);
    alert(error.response?.data?.message || error.message);
  }
};

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-5">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        {/* Logo */}
        <div className="text-center mb-8">
          {/* Uncomment if you have a logo */}
          {/* <img src="/logo.png" alt="KITD" className="h-16 mx-auto mb-4" /> */}

          <h1 className="text-3xl font-bold text-slate-800">
            KITD Admin
          </h1>

          <p className="text-gray-500 mt-2">
            Welcome Back 👋
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>

          {/* Email */}

          <div className="mb-5">
            <label className="block mb-2 font-medium">
              Email Address
            </label>

            <div className="relative">

              <Mail
                size={18}
                className="absolute left-3 top-4 text-gray-400"
              />

              <input
                type="email"
                placeholder="Enter your email"
                autoComplete="email"
                className="w-full border rounded-lg pl-10 pr-3 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Enter a valid email",
                  },
                })}
              />

            </div>

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}

          <div className="mb-5">

            <label className="block mb-2 font-medium">
              Password
            </label>

            <div className="relative">

              <Lock
                size={18}
                className="absolute left-3 top-4 text-gray-400"
              />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                autoComplete="current-password"
                className="w-full border rounded-lg pl-10 pr-10 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters",
                  },
                })}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500 hover:text-black"
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>

            </div>

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Forgot Password */}

          <div className="flex justify-end mb-6">

            <button
              type="button"
              onClick={() => navigate("/forgot-password")}
              className="text-blue-600 hover:underline text-sm"
            >
              Forgot Password?
            </button>

          </div>

          {/* Login */}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white py-3 rounded-lg font-semibold disabled:opacity-50"
          >
            {isSubmitting ? "Signing In..." : "Login"}
          </button>

        </form>

      </div>
    </div>
  );
};

export default Login;