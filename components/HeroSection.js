import React from "react";
import Image from "next/image";
import IMG_0996 from "../public/IMG_0996.jpeg";

function HeroSection() {
  return (
    <div className="flex items-center space-x-32 justify-center w-full px-24 py-28 mb-20 ">
      <div className="">
        <Image
          className="rounded-full w-72 min-w-72 shadow-lg"
          src={IMG_0996}
        />
      </div>
      <div className="">
        <p className="text-6xl w-96">I am a junior front end developer.</p>
      </div>
    </div>
  );
}

export default HeroSection;
