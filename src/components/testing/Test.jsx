import React, { useState } from "react";

const HoverEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Update position on mouse move
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect(); // Get element boundaries
    const x = e.clientX - rect.left; // Mouse X position relative to element
    const y = e.clientY - rect.top;  // Mouse Y position relative to element
    setPosition({ x, y });
  };

  return (
    <div
      className="relative w-64 h-64 bg-gray-300 overflow-hidden"
      onMouseMove={handleMouseMove} // Track mouse movement
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="absolute bg-blue-500 w-10 h-10 rounded-full"
        style={{
          transform: `translate(${position.x - 20}px, ${position.y - 20}px)`, // Center the element
          transition: "transform 0.1s ease-out", // Smooth movement
        }}
      ></div>
      <p className="z-10 text-black text-center">Hover over me!</p>
    </div>
  );
};

export default HoverEffect;
