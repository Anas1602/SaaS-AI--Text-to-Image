import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Login = () => {
  const [state, setState] = useState("Login");
  const { setShowLogin } = useContext(AppContext);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <form className="relative bg-white p-10 rounded-xl text-slate-500">
        <h1 className="text-center text-2xl text-neutral-700 font-medium mb-2">
          {state}
        </h1>
        <p className="text-sm">Welcome Back! Please sign in to continue</p>

        {state !== "Login" && (
          <div className="border border-gray-300 px-6 py-2 flex items-center gap-2 rounded-full mt-4">
            <img src={assets} alt="" />
            <input
              type="text"
              placeholder="Full Name"
              required
              className="outline-none text-sm"
            />
          </div>
        )}
        <div className="border border-gray-300 px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <img src={assets.email_icon} alt="" />
          <input
            type="email"
            placeholder="email"
            required
            className="outline-none text-sm"
          />
        </div>
        <div className="border border-gray-300 px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <img src={assets.lock_icon} alt="" />
          <input
            type="password"
            placeholder="password"
            required
            className="outline-none text-sm"
          />
        </div>
        <p className="text-sm text-blue-600 my-4 cursor-pointer">
          Forgot password
        </p>
        <button className="bg-blue-600 w-full text-white py-2 rounded-full">
          {state === "Login" ? "Login" : "Create Account"}
        </button>

        {state === "Login" ? (
          <p className="mt-5 text-center text-sm ">
            Don't Have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer ml-1"
              onClick={() => {
                setState("Sign Up");
              }}>
              Sign Up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center text-sm">
            Already Have an account
            <span
              className="text-blue-600 cursor-pointer ml-1"
              onClick={() => {
                setState("Login");
              }}>
              Login
            </span>
          </p>
        )}

        <img
          onClick={() => {
            setShowLogin(false);
          }}
          className="absolute top-5 right-5 cursor-pointer"
          src={assets.cross_icon}
          alt=""
        />
      </form>
    </div>
  );
};

export default Login;
