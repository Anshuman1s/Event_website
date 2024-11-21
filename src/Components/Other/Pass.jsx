import React from "react";
import { useLocation } from "react-router-dom"; 
import { LuDownload } from "react-icons/lu";

const Pass = () => {
  const location = useLocation();
  const formData = location.state?.formData || {}; 

  const handleDownload = () => {
    const passDetails = `
      --- User Pass Details ---
      Name: ${formData.fullName || "Example Name"}
      Email: ${formData.email || "example@gmail.com"}
      Address: ${formData.address || "N/A"}
      Contact Number: ${formData.contactNumber || "9999999999"}
      Date: ${new Date().toLocaleDateString()}
      
      --- Event Details ---
      Welcome to an exciting journey filled with unique experiences. This pass grants you exclusive access to workshops, performances, and talks that ignite your curiosity and passion. Create unforgettable memories with this exclusive pass.
    `;

    const blob = new Blob([passDetails], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

  
    const a = document.createElement("a");
    a.href = url;
    a.download = `${formData.fullName || "ticket"}_pass.txt`; 
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a); 
    URL.revokeObjectURL(url); 
  };

  return (
    <div className="w-full h-screen flex">
      
      <div
        className="w-1/2 flex flex-col items-center justify-center  p-10"
        style={{
          background: "", 
          backdropFilter: "blur(10px)", 
        }}
      >
        <h1 className="font-semibold font-[Poppins] text-3xl text-[#0e7490] mb-4">
          Valid Pass For Entry
        </h1>
        <div
          onClick={handleDownload} 
          className="flex items-center justify-center cursor-pointer transition-all transform  group relative overflow-hidden mb-4"
        >
          <h1 className="text-xl flex items-center font-semibold">
            Download <LuDownload className="inline-block ml-2" />
          </h1>
         
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-700 group-hover:w-full"></span>
        </div>
        <h1 className="text-lg font-[Poppins] font-medium text-zinc-500 mb-8">
          Date: <span>{new Date().toLocaleDateString()}</span>
        </h1>
        <h1 className="text-2xl font-medium text-center font-[Bolton] text-blue-900 mb-6">
          User Details
        </h1>
        <div className="w-[100%] h-[20vw] p-5 rounded-xl bg-white shadow-lg">
          <p className="font-medium font-[Saira] text-xl mb-10">
            <strong>Name:</strong> {formData.fullName || "Full Name"}
          </p>
          <p className="font-medium font-[Saira] text-xl mb-10">
            <strong>Email:</strong> {formData.email || "example@gmail.com"}
          </p>
          <p className="font-medium font-[Saira] text-xl mb-10">
            <strong>Address:</strong> {formData.address || "xyz"}
          </p>
          <p className="font-medium font-[Saira] text-xl mb-3">
            <strong>Contact Number:</strong> {formData.contactNumber || "9999999999"}
          </p>
        </div>
      </div>

      
      <div className="w-1/2 h-full">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://media.coachella.com/content/coachella-2024/image-secondary-pass-types-pic.png')`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Pass;
