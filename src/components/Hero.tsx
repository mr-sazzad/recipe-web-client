"use client";

import React from "react";
import Wrapper from "./Wrapper";

import { LuLayoutDashboard } from "react-icons/lu";
import Image from "next/image";
import RecipeLink from "./RecipeLink";

const Hero = () => {
  return (
    <Wrapper>
      <div className="flex md:flex-row md:justify-between items-center flex-col gap-5 mt-10">
        <div className="flex flex-col flex-1">
          <h2 className="md:text-5xl text-4xl md:text-start text-center font-semibold">
            Kitchen Chronicles: Stories of Delicious Discovery
          </h2>
          <p className="text-sm mt-2 text-gray-500 md:text-start text-center">
            Welcome to Kitchen Chronicles, where culinary tales unfold into
            delicious discoveries. Embark on a journey through the art of
            cooking, as each recipe shares a unique story, bringing flavors to
            life on your plate. Explore the narrative behind every dish and let
            your kitchen become the canvas for your own epicurean adventures.
          </p>
          <div>
            <RecipeLink
              label="Dashboard"
              href="/dashboard"
              className="mt-3"
              rounded
              icon={LuLayoutDashboard}
            />
          </div>
        </div>
        <div className="flex-1">
          <Image
            src="/assets/recipe-banner.png"
            alt="banner-image"
            height={417}
            width={626}
            className="object-contain"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
