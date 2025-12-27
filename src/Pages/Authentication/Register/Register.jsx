import React from "react";
import { useForm } from "react-hook-form";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import useAuth from "../../../Context/useAuth/useAuth";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Loader from "../../Loader/Loader";

const MySwal = withReactContent(Swal);

const Register = () => {
  const navigate = useNavigate();
  const { googleLogin, registerEmail, updateUserProfile, loading } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (loading) return <Loader />;

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        MySwal.fire({
          title: <p>🎉 Logged in with Google!</p>,
          icon: "success",
          background: "#fff5e6",
          color: "#ff4d4d",
          confirmButtonColor: "#ff4d4d",
          customClass: { popup: "rounded-3xl shadow-lg" },
        });
        navigate("/");
      })
      .catch((err) => {
        MySwal.fire({
          title: <p>⚠️ Login Failed</p>,
          text: err.message,
          icon: "error",
          background: "#fff5e6",
          color: "#ff4d4d",
          confirmButtonColor: "#ff4d4d",
          customClass: { popup: "rounded-3xl shadow-lg" },
        });
      });
  };

  const onSubmit = async (data) => {
    const { email, password, name, phone, location, photo } = data;

    try {
      // 1️⃣ Upload photo to ImgBB
      const formData = new FormData();
      const photoFile = photo[0]; // get the selected file
      formData.append("image", photoFile);

      const imgbbRes = await fetch(
        `https://api.imgbb.com/1/upload?key=87c495bcefe6e7cc9c4b646f5dcee6a9`,
        { method: "POST", body: formData }
      );

      const imgData = await imgbbRes.json();

      if (!imgData.success) throw new Error("Image upload failed");

      const photoURL = imgData.data.url;

      // 2️⃣ Register user with email & password
      await registerEmail(email, password);

      // 3️⃣ Update Firebase profile
      await updateUserProfile({ displayName: name, photoURL });

      // 4️⃣ Show success alert
      MySwal.fire({
        title: <p>🍔 Welcome {name}!</p>,
        text: "Your account has been created successfully!",
        icon: "success",
        background: "#fff5e6",
        color: "#ff4d4d",
        confirmButtonColor: "#ff4d4d",
        customClass: { popup: "rounded-3xl shadow-lg" },
      });

      navigate("/");
    } catch (err) {
      MySwal.fire({
        title: <p>⚠️ Registration Failed</p>,
        text: err.message,
        icon: "error",
        background: "#fff5e6",
        color: "#ff4d4d",
        confirmButtonColor: "#ff4d4d",
        customClass: { popup: "rounded-3xl shadow-lg" },
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/40 dark:bg-gray-800/50 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white/20 dark:border-gray-700/40">
        <h2 className="text-3xl font-extrabold text-center mb-8 dark:text-white">
          Join <span className="text-red-600">TastyHaat</span>
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          {/* NAME */}
          <div>
            <input
              type="text"
              placeholder="Full Name"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
              })}
              className="w-full p-4 rounded-2xl border border-gray-200 dark:border-gray-600 bg-white/60 dark:bg-gray-700 text-gray-800 dark:text-gray-100 outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              className="w-full p-4 rounded-2xl border border-gray-200 dark:border-gray-600 bg-white/60 dark:bg-gray-700 text-gray-800 dark:text-gray-100 outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* PHOTO */}
          <div>
            <input
              type="file"
              accept="image/*"
              {...register("photo", {
                required: "Profile picture is required",
              })}
              className="w-full p-4 rounded-2xl border border-gray-200 dark:border-gray-600 bg-white/60 dark:bg-gray-700 text-gray-800 dark:text-gray-100 outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
            />
            {errors.photo && (
              <p className="text-red-500 text-xs mt-1">
                {errors.photo.message}
              </p>
            )}
          </div>

          {/* PHONE */}
          <div>
            <input
              type="tel"
              placeholder="Phone Number"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^(?:\+8801|01)[3-9]\d{8}$/,
                  message: "Invalid Bangladeshi phone number",
                },
              })}
              className="w-full p-4 rounded-2xl border border-gray-200 dark:border-gray-600 bg-white/60 dark:bg-gray-700 text-gray-800 dark:text-gray-100 outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* LOCATION */}
          <div>
            <input
              type="text"
              placeholder="Location (e.g. Dhaka, Mirpur)"
              {...register("location", { required: "Location is required" })}
              className="w-full p-4 rounded-2xl border border-gray-200 dark:border-gray-600 bg-white/60 dark:bg-gray-700 text-gray-800 dark:text-gray-100 outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
            />
            {errors.location && (
              <p className="text-red-500 text-xs mt-1">
                {errors.location.message}
              </p>
            )}
          </div>

          {/* PASSWORD */}
          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="w-full p-4 rounded-2xl border border-gray-200 dark:border-gray-600 bg-white/60 dark:bg-gray-700 text-gray-800 dark:text-gray-100 outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="py-4 rounded-2xl bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold text-lg hover:from-red-600 hover:to-orange-600 shadow-lg transform hover:scale-105 transition duration-300"
          >
            Create Account
          </button>
        </form>

        {/* SOCIAL LOGIN */}
        <div className="flex gap-4 justify-center mt-6">
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-2xl shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
          >
            <FaGoogle /> Google
          </button>

          <button
            type="button"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-2xl shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
          >
            <FaFacebook /> Facebook
          </button>
        </div>

        <p className="text-center text-gray-500 dark:text-gray-400 mt-6 text-sm">
          Already have an account?{" "}
          <Link
            to={"/login"}
            className="text-red-600 hover:underline font-medium"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
