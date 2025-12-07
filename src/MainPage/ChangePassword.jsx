import React, { useState } from "react";
import { FiEye, FiEyeOff, FiLock } from "react-icons/fi";

export default function ChangePassword() {
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">

        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Change Password
        </h2>

        {/* Old Password */}
        <div className="mb-4">
          <label className="text-gray-700 font-medium">Old Password</label>
          <div className="mt-2 flex items-center px-3 py-2 bg-gray-50 border rounded-lg focus-within:border-blue-600">
            <FiLock className="text-gray-500" size={20} />
            <input
              type={showOld ? "text" : "password"}
              placeholder="Enter old password"
              className="w-full bg-transparent outline-none px-2"
            />
            <span
              className="cursor-pointer text-gray-600"
              onClick={() => setShowOld(!showOld)}
            >
              {showOld ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </span>
          </div>
        </div>

        {/* New Password */}
        <div className="mb-4">
          <label className="text-gray-700 font-medium">New Password</label>
          <div className="mt-2 flex items-center px-3 py-2 bg-gray-50 border rounded-lg focus-within:border-blue-600">
            <FiLock className="text-gray-500" size={20} />
            <input
              type={showNew ? "text" : "password"}
              placeholder="Enter new password"
              className="w-full bg-transparent outline-none px-2"
            />
            <span
              className="cursor-pointer text-gray-600"
              onClick={() => setShowNew(!showNew)}
            >
              {showNew ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </span>
          </div>
        </div>

        {/* Confirm New Password */}
        <div className="mb-6">
          <label className="text-gray-700 font-medium">Confirm Password</label>
          <div className="mt-2 flex items-center px-3 py-2 bg-gray-50 border rounded-lg focus-within:border-blue-600">
            <FiLock className="text-gray-500" size={20} />
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm new password"
              className="w-full bg-transparent outline-none px-2"
            />
            <span
              className="cursor-pointer text-gray-600"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </span>
          </div>
        </div>

        {/* Submit Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg text-lg font-medium">
          Update Password
        </button>
      </div>
    </div>
  );
}
