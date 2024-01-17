import Image from "next/image";
import React from "react";

interface LogoProps {
  subtitle?: boolean;
}

const Logo: React.FC<LogoProps> = ({ subtitle }) => {
  return (
    <div className="flex flex-col">
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
      {subtitle && <p className="text-xs ml-2 -mt-2 text-gray-500"></p>}
    </div>
  );
};

export default Logo;
