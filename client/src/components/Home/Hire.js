import React, { useState, useEffect } from "react";

function Hire() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      handleScroll();
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="hire-container relative top-0 left-0 h-[400px]">
      <div
        className="hire_image z-5 h-full w-full absolute top-0 left-0"
        style={{
          backgroundImage: `url("/images/parallex.jpg")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="bg-black opacity-[0.65] z-10 h-full w-full"></div>
      <div className="hire flex flex-col items-center justify-center absolute top-0 left-0 h-full w-full">
        <h1 className="py-11 mb-12 text-white text-4xl font-semibold">
          Interested Working With Me
        </h1>
        <div className="hireme mt-10 mb-4 px-12 py-4 border-2 border-black bg-orange-300 cursor-pointer">
          Hire Me
        </div>
      </div>
    </div>
  );
}
export default Hire;
