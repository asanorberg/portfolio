import React from "react";
import Image from "next/image";

function Card({ href, imgAlt, imgSrc, children }) {
  return (
    <div className="rounded-xl w-80 h-96 mb-10 flex-shrink-0 border shadow-lg overflow-hidden">
      <div className=" h-60 w-full">
        <Image
          className="h-full w-full object-cover opacity-90"
          src={imgSrc}
          alt={imgAlt}
          href={href}
        />
      </div>
      <div className=" h-28 p-8 pt-4"> {children} </div>
      <div className=" px-8 flex justify-between text-sm">
        {" "}
        <a href={href}>Live preview</a> <a href={href}>Code</a>{" "}
      </div>
    </div>
  );
}

export default Card;
