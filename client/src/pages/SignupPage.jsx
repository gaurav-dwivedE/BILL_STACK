import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Mail, Lock, Eye, EyeOff, Building2, Globe, Link } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

export default function SignupPage() {

  const [showPass, setShowPass] = useState(false);
  const [showCPass, setShowCPass] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid }
  } = useForm({
    mode: "onChange"
  });

  const password = watch("password");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">

      <Navbar />

      {/* CENTER SIGNUP */}
      <div className="flex-1 min-h-[calc(100vh+30px)] flex items-center justify-center px-4">

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-3xl shadow-xl border border-gray-200 p-10 w-full max-w-md"
        >

          <h2 className="text-2xl font-semibold text-gray-800 text-center">
            Create Organization Workspace
          </h2>

          <p className="text-sm text-gray-500 text-center mt-1 mb-6">
            Start managing billing & inventory today
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>

            {/* ORG NAME */}
            <div className="mb-4">
              <label className="text-sm text-gray-600 block mb-1">
                Organization Name
              </label>

              <div className="flex items-center border rounded-xl px-3 py-2 focus-within:ring-2 ring-blue-500">
                <Building2 size={18} className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Acme Pvt Ltd"
                  className="outline-none w-full text-sm"
                  {...register("orgName", { required: "Required" })}
                />
              </div>

              {errors.orgName && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.orgName.message}
                </p>
              )}
            </div>
          

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
                    required: "Required"
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
            <div className="mb-4">
              <label className="text-sm text-gray-600 block mb-1">
                Password
              </label>

              <div className="flex items-center border rounded-xl px-3 py-2 focus-within:ring-2 ring-blue-500">
                <Lock size={18} className="text-gray-400 mr-2" />
                <input
                  type={showPass ? "text" : "password"}
                  className="outline-none w-full text-sm"
                  {...register("password", {
                    required: "Required",
                    minLength: {
                      value: 6,
                      message: "Min 6 characters"
                    }
                  })}
                />
                <button type="button" onClick={()=>setShowPass(!showPass)}>
                  {showPass ? <EyeOff size={18}/> : <Eye size={18}/>}
                </button>
              </div>

              {errors.password && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="mb-6">
              <label className="text-sm text-gray-600 block mb-1">
                Confirm Password
              </label>

              <div className="flex items-center border rounded-xl px-3 py-2 focus-within:ring-2 ring-blue-500">
                <Lock size={18} className="text-gray-400 mr-2" />
                <input
                  type={showCPass ? "text" : "password"}
                  className="outline-none w-full text-sm"
                  {...register("confirmPassword", {
                    validate: value =>
                      value === password || "Passwords do not match"
                  })}
                />
                <button type="button" onClick={()=>setShowCPass(!showCPass)}>
                  {showCPass ? <EyeOff size={18}/> : <Eye size={18}/>}
                </button>
              </div>

              {errors.confirmPassword && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* BTN */}
            <button
              disabled={!isValid}
              className={`w-full py-2.5 rounded-xl text-sm text-white transition-all ${
                isValid
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              Create Workspace →
            </button>

          </form>

          {/* DIVIDER */}
          <div className="flex items-center gap-2 my-6">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-xs text-gray-400">OR</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* GOOGLE SIGNUP */}
          <button className="w-full border border-gray-200 rounded-xl py-2.5 text-sm hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="w-5 h-5"
            />
            Signup with Google
          </button>

          {/* LOGIN */}
          <p className="text-sm text-center text-gray-500 mt-6">
            Already have an account?{" "}
            <NavLink to="/login" className="text-blue-600 font-medium hover:underline">
              Login
            </NavLink>
          </p>

        </motion.div>

      </div>

      <Footer />

    </div>
  );
}