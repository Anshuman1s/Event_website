import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import Dropdown from "./Dropdown";

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    contactNumber: "",
    gender: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateNumber = (number) => /^[0-9]{10}$/.test(number);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "email") {
      setErrors((prev) => ({
        ...prev,
        email: validateEmail(value) ? "" : "Invalid email format",
      }));
    } else if (name === "contactNumber") {
      setErrors((prev) => ({
        ...prev,
        contactNumber: validateNumber(value)
          ? ""
          : "Contact number must be 10 digits",
      }));
    } else if (name === "fullName" && value.trim() === "") {
      setErrors((prev) => ({
        ...prev,
        fullName: "Name cannot be empty",
      }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !validateEmail(formData.email) ||
      !validateNumber(formData.contactNumber)
    ) {
      setIsSubmitted(false);
      return;
    }

    setIsSubmitted(true);

    // Redirect to the Pass component with formData after a delay
    setTimeout(() => {
      navigate("/passes", { state: { formData } });
    }, 2000);
  };

  return (
    <div className="w-full min-h-screen flex bg-gray-50">
      {/* Left Side: Image */}
      <div className="hidden lg:block w-1/2">
        <img
          src="https://img.freepik.com/free-vector/registration-form-template-with-flat-design_23-2147971971.jpg"
          alt="Registration Illustration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side: Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-10 bg-white bg-opacity-90 font-[Poppins]">
        <div className="w-full max-w-lg">
          <h1 className="text-3xl font-bold font-[Poppins] text-center text-gray-800 mb-8">
            Registration For Event
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border-black border-b-[2px] outline-none"
                placeholder="Enter your full name"
                required
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border-black border-b-[2px] outline-none"
                placeholder="Enter your email"
                required
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                className="mt-1 w-full px-4 py-2 border-black border-b-[2px] outline-none"
                placeholder="Enter your address"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Contact Number
              </label>
              <input
                type="number"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border-black border-b-[2px] outline-none"
                placeholder="Enter your contact number"
                required
              />
              {errors.contactNumber && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.contactNumber}
                </p>
              )}
            </div>

            <Dropdown
              title="Gender"
              options={["Male", "Female", "Prefer not to say"]}
              onSelect={(value) => setFormData({ ...formData, gender: value })}
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white rounded-md text-lg font-semibold hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
            >
              Submit
            </button>
          </form>

          {isSubmitted && (
            <div className="mt-5 bg-green-100 text-green-800 px-4 py-2 rounded-md shadow-md border-l-4 border-green-500 flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="text-sm font-medium">Form submitted successfully!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Registration;
