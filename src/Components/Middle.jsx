import React from 'react';

const Middle = () => {
  // const firstRowLogos = [
  //   "https://cdn.prod.website-files.com/600ee75084e3fe0e5731624c/65b6384089ec9e265952391f_bookmyshow-logo-vector-removebg-preview%20(1).png",
  //   "https://www.cdnlogo.com/logos/p/6/paytm.svg",
  // ];

  const secondRowLogos = [
    "https://upload.wikimedia.org/wikipedia/commons/c/cb/Rupay-Logo.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ4LzGtgnWm2TJmxFocUZXwuiU4eshkS8Pvw&s",
    "https://e7.pngegg.com/pngimages/530/165/png-clipart-logo-mastercard-pentagram-flat-design-brand-mastercard-text-trademark.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEzHTRfO-BS6NfMWXr8zbb3d-pcOCPNgJX9A&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnJsp8XvNmZx6HP0LaG9JGoSpBrCnkUEbjOw&s",
  ];

  return (
    <div className="w-full h-[10vw] bg-zinc-100">
      {/* First Row */}
      <div className="flex items-center justify-evenly">
        {firstRowLogos.map((logo, index) => (
          <img key={index} className="w-[10vw]" src={logo} alt={`Logo ${index + 1}`} />
        ))}
      </div>

      
     
    </div>
  );
};

export default Middle;
