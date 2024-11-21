import React, { useEffect, useState } from 'react';
import Logo from '../assets/Images/Pen.png';
import { Link } from 'react-router-dom';
import { FaPlay } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    window.location.reload(); 
  };

  return (
    <div className="h-[5vw] w-full bg-[#212121] flex">
      {/* Left Section */}
      <div className="w-[30vw] h-[5vw]">
        <img className="w-[5.5vw] ml-10" src={Logo} alt="Logo" />
      </div>

      {/* Middle Section */}
      <div className="w-[40vw] h-[5vw] flex items-center justify-evenly">
        <Link to={'/passes'} className="text-[1vw] font-medium text-white">
          Passes
        </Link>
        <Link to={'/register'} className="text-[1vw] font-medium text-white">
          Register
        </Link>
        <Link to={'/event'} className="text-[1vw] font-medium text-white">
          Events
        </Link>
        <Link to={'/contact'} className="text-[1vw] font-medium text-white">
          Contact
        </Link>
        <div className="flex gap-2 items-center text-white">
          <h2 className="font-medium text-[1vw]">Play</h2>
          <h1 className="font-medium text-[1vw]"><FaPlay /></h1>
          <h2 className="font-medium text-[1vw]">00.02</h2>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-[30vw] h-[5vw] flex items-center justify-center">
        {user ? (
          <div className="flex items-center gap-3">
            <span className="text-white text-[1vw]">{user.email}</span>
            <button
              className="bg-red-600 text-white py-1 px-3 rounded"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="w-[8vw] h-[3vw] bg-yellow-200 flex items-center justify-center gap-3 rounded">
            <FaUserAlt />
            <Link to={'/signup'}>Sign Up</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
