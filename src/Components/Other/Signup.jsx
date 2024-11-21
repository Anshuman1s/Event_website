import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiLockPasswordLine } from "react-icons/ri";
import { LuUser } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook, SiGithub } from "react-icons/si";

const Signup = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false); // State for success animation

  const navigate = useNavigate();

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = () => {
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = () => {
    validateEmail();
    validatePassword();

    if (!emailError && !passwordError && email && password) {
      const user = { email, password };
      localStorage.setItem('user', JSON.stringify(user));

      // Show success animation
      setShowSuccess(true);

      // Hide animation after 2 seconds and navigate to home
      setTimeout(() => {
        setShowSuccess(false);
        navigate('/');
      }, 2000);
    }
  };

  return (
    <div className="h-screen w-full flex relative">
      {/* Left Section */}
      <div className="flex-1 h-full flex items-center justify-center">
        <img
          className="w-[90%] h-auto object-contain mix-blend-multiply"
          src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?t=st=1732165106~exp=1732168706~hmac=f65c630f22f78f303f27a6daa28bae9f820b9faeee56c7655c2444ee72e4e80e&w=740"
          alt="Access Control System"
        />
      </div>

      {/* Right Section */}
      <div className="flex-1 h-full flex items-center justify-center">
        <div className="w-[40vw] h-[40vw]">
          <div className="w-full h-[6vw] flex items-center justify-center">
            <h1 className="text-4xl font-medium font-[Poppins]">Sign Up</h1>
          </div>
          <div className="w-full h-[33.9vw] p-[0.1px]">
            {/* Email Input */}
            <div className="w-[17vw] h-[3vw] flex items-center gap-3 mt-10 font-semibold font-[Poppins] ml-3">
              <LuUser />
              <h1>Enter Your Email</h1>
            </div>
            <input
              className="w-[39vw] ml-3 h-[2.4vw] border-b-[2px] outline-none border-black bg-transparent font-medium"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail}
            />
            {emailError && <p className="text-red-500 text-sm ml-3 font-medium">{emailError}</p>}

            {/* Password Input */}
            <div className="w-[17vw] h-[3vw] flex items-center gap-3 mt-10 font-semibold font-[Poppins] ml-3">
              <RiLockPasswordLine />
              <h1>Enter Your Password</h1>
            </div>
            <input
              className="w-[39vw] ml-3 h-[2.4vw] border-b-[2px] outline-none border-black bg-transparent font-medium"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={validatePassword}
            />
            {passwordError && <p className="text-red-500 text-sm ml-3 font-medium">{passwordError}</p>}

            {/* Submit Button */}
            <div className="w-full h-[3vw] flex items-center justify-center mt-[5vw]">
              <button
                className="bg-green-600 w-[50%] h-[3vw] font-medium font-[Poppins] text-xl"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>

            {/* Social Icons */}
            <div className="img w-[30vw] h-[3vw] mt-10 ml-[5vw] flex items-center justify-around text-4xl">
              <FcGoogle className="hover:scale-110 duration-700 cursor-pointer" />
              <SiFacebook className="text-blue-900 hover:scale-125 duration-700 cursor-pointer" />
              <SiGithub className="hover:scale-110 duration-700 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Success Animation */}
      {showSuccess && (
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white text-xl font-medium py-3 px-6 rounded-lg shadow-lg animate-bounce"
        >
          Signup Successful!
        </div>
      )}
    </div>
  );
};

export default Signup;
