import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <>
      <div className="flex items-center">
        <Image
          src="/assets/recipe-logo.svg"
          alt="logo-image"
          height={50}
          width={50}
        />
        <p className="md:text-2xl text-xl font-bold website-name bg-white text-neutral-900">
          Recipe
        </p>
      </div>
    </>
  );
};

export default Logo;
