import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Mail, Lock, Eye, EyeOff, Link } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Btn from "../components/Btn";
import { NavLink } from "react-router-dom";

export default function LoginPage() {

  const [showPass, setShowPass] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    mode: "onChange"
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">

      <Navbar />

      {/* CENTER LOGIN */}
      <div className="flex-1 min-h-[calc(100vh-100px)] flex items-center justify-center px-4">

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-3xl shadow-xl border border-gray-200 p-10 w-full max-w-md"
        >

          <h2 className="text-2xl font-semibold text-gray-800 text-center">
            Login to your Workspace
          </h2>

          <p className="text-sm text-gray-500 text-center mt-1 mb-6">
            Access billing dashboard securely
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>

            {/* EMAIL */}
            <div className="mb-4">
              <label className="text-sm text-gray-600 block mb-1">
                Email Address
              </label>

              <div className="flex items-center border rounded-xl px-3 py-2 focus-within:ring-2 ring-blue-500">
                <Mail size={18} className="text-gray-400 mr-2" />
                <input
                  type="email"
                  placeholder="company@email.com"
                  className="outline-none w-full text-sm"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid Email"
                    }
                  })}
                />
              </div>

              {errors.email && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* PASSWORD */}
            <div className="mb-2">
              <label className="text-sm text-gray-600 block mb-1">
                Password
              </label>

              <div className="flex items-center border rounded-xl px-3 py-2 focus-within:ring-2 ring-blue-500">
                <Lock size={18} className="text-gray-400 mr-2" />
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Enter password"
                  className="outline-none w-full text-sm"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Minimum 6 characters"
                    }
                  })}
                />

                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? <EyeOff size={18}/> : <Eye size={18}/>}
                </button>

              </div>

              {errors.password && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* REMEMBER + FORGOT */}
            <div className="flex justify-between items-center text-sm mb-6 mt-2">
              <label className="flex items-center gap-2 text-gray-600">
         <input type="checkbox"/>
                Remember me
        </label>

              <a href="/forgot-password" className="text-blue-600 hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* LOGIN BTN */}
            <button
              disabled={!isValid}
              className={`w-full py-2.5 rounded-xl text-sm text-white transition-all ${
                isValid
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              Continue to Dashboard →
            </button>

          </form>

          {/* DIVIDER */}
          <div className="flex items-center gap-2 my-6">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-xs text-gray-400">OR</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* GOOGLE LOGIN */}
          <button className="w-full border border-gray-200 rounded-xl py-2.5 text-sm hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          {/* SIGNUP */}
          <p className="text-sm text-center text-gray-500 mt-6">
            Don't have an account?{" "}
            <NavLink to="/signup" className="text-blue-600 font-medium hover:underline">
              Sign up
            </NavLink>
          </p>

        </motion.div>

      </div>

      <Footer />

    </div>
  );
}