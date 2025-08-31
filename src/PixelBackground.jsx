// // src/PixelBackground.jsx
import React from "react";

// const PixelBackground = () => {
//   return (
//     <img
//       src="/bg.gif"
//       alt="Pixelated background"
//       className="absolute inset-0 w-full h-full object-cover -z-10"
//       style={{ imageRendering: "pixelated" }}
//     />
//   );
// };



const PixelBackground = () => { 
  return ( 
    <video 
    autoPlay 
    loop 
    muted 
    playsInline 
    className="absolute inset-0 w-full h-full object-cover -z-10" 
    style={{ imageRendering: "pixelated", }} > 
    
    <source src="/public/newpixel.mp4" type="video/mp4" /> 
    Your browser does not support the video tag. 
    </video> 
  ); 
};

export default PixelBackground;