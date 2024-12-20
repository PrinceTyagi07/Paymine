import React from 'react';
import logo from "../assets/banner-b-1.png"
import man from "../assets/man.png"

const Hero = () => {
  return (
    <div className="relative w-full h-[84vh]">
      {/* Background Image */}
      <img
        className="w-full h-full object-center object-cover"
        src={logo}
        alt="Background"
      />

      {/* Overlay Content */}
      <div className=" z-10 text-blue-900 capitalize absolute inset-0 lg:bg-transparent bg-[#b1d1f361] bg-opacity-50 flex flex-col items-start md:pl-36 pl-10 justify-center text-left">
        <h1 className="lg:text-6xl text-4xl font-bold capitalize w-[50vw] lilita-one-regular style-script-regular ">
         We provide the Smart, Secure, and Swift Payments.
        </h1>
        <p className="text-2xl mt-6 font-semibold lg w-[70%] pacifico-regular">Lightning-fast payment processing saves you time and enhances productivity.</p>
      </div>
      <div className="absolute top-24 right-10 h-[93%] overflow-hidden"><img  className=" h-[90%]  object-cover" src={man} alt="" /></div>
    </div>
  );
};

export default Hero;
