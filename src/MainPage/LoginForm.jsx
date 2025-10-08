import React, { use, useContext, useState } from "react";
import { BlogContext } from "../App";
import axios from "axios";
import { useCookies } from "react-cookie";

const LoginForm = () => {

  const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { setOpenLoingForm, openLoingForm, setSignUp, setUserDetails } = useContext(BlogContext)



 // LoginForm.jsx

const handleSubmit = async (e) => {
  try {
      e.preventDefault();
      const res = await axios.post("http://localhost:8000/api/v1/users/login",
          { email: email, password: password },
          { withCredentials: true }
      );
      
      if (res.status) {
          console.log(res);
          setOpenLoingForm(false);
          
        
          const sevenDaysFromNow = new Date();
          sevenDaysFromNow.setDate(sevenDaysFromNow.getDate() + 7); 
          
          setCookie("accessToken", res.data.data.token, { 
              path: "/", 
              sameSite: "lax", 
              secure: false, 
              expires: sevenDaysFromNow 
          });
          setUserDetails(res.data.data.user);
          // -------------------------------------------------------------
      }
  } catch (error) {
      alert(error.message);
  }
};



  const hanleOpenSingup = () => {
    setOpenLoingForm(false)
    setSignUp(true)
  }

  if (!openLoingForm) return null; // agar false ho to render hi mat karo
  

  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50 z-50">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md relative">

        {/* Close Button */}
        <button
          onClick={() => setOpenLoingForm(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block mb-1 text-gray-600 font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-gray-600 font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-black" /> Remember me
            </label>
            <a href="#" className="text-black hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Login
          </button>
        </form>

        {/* Signup Link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <span
            onClick={hanleOpenSingup}
            className="text-black font-medium hover:underline">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
