import React, { useState } from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = () => {
    const newErrors = {};

    if (name.trim() === '') {
      newErrors.name = "Name can't be empty";
    }
    if (email.trim() === '') {
      newErrors.email = "Email can't be empty";
    }
    if (message.trim() === '') {
      newErrors.message = "Message can't be empty";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
      setName('');
      setEmail('');
      setMessage('');
    }, 3000);
  };

  return (
    <div className="w-full min-h-screen ">
      {/* Back Button */}
      <div className="w-full h-[10vh] flex items-center">
        <div className="ml-10 px-4 py-2 cursor-pointer flex items-center gap-2 text-gray-700">
          <FaArrowLeftLong className="inline-block" />
          <span className="text-xl font-medium">Back</span>
        </div>
      </div>

      
      <div className="flex justify-center items-center min-h-[80vh] px-4 lg:px-20">
        
        <div className="hidden lg:block lg:w-1/2">
          <img
            src="https://img.freepik.com/free-vector/online-assistant-user-help-frequently-asked-questions-call-center-worker-cartoon-character-woman-working-hotline_335657-2336.jpg?t=st=1732179830~exp=1732183430~hmac=e02774756825a115ce35990e714ffc6d524409be4604f7dd03598243fb5eea26&w=740"
            alt="Contact Us Illustration"
            className="w-full h-auto"
          />
        </div>

        
        <div className="w-full lg:w-1/2 bg-white p-6 font-[Poppins]">
          <h1 className="text-3xl font-semibold text-center mt-2 font-[Poppins]">Contact Us</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className="mt-4 space-y-6"
          >
            <div>
              <label className="block font-medium mb-1">Enter Your Name</label>
              <input
                type="text"
                className="w-full bg-transparent outline-none border-b-2 border-gray-400 py-2"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && (
                <p className="text-red-500 text-sm font-medium mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="block font-medium mb-1">Enter Your Email</label>
              <input
                type="email"
                className="w-full bg-transparent outline-none border-b-2 border-gray-400 py-2"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 font-medium">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block font-medium mb-1">Your Message</label>
              <textarea
                className="w-full bg-transparent outline-none border-b-2 border-gray-400 py-2"
                rows="4"
                placeholder="Write your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1 font-medium">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white font-medium py-2 mt-4 rounded hover:bg-green-600 transition"
            >
              Submit
            </button>
          </form>
          {showMessage && (
            <div className="mt-4 p-4 bg-green-500 text-white rounded shadow">
              Thank you for your message! We'll get back to you soon.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
