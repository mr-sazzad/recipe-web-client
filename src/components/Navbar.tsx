"use client";

import React from "react";
import Logo from "./Logo";
import Wrapper from "./Wrapper";
import { usePathname } from "next/navigation";

import { RxDashboard } from "react-icons/rx";
import { RxHome } from "react-icons/rx";
import RecipeLink from "./RecipeLink";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="py-3 border-b border-b-gray-200 w-full bg-white/60 backdrop-blur shadow-md sticky top-0 z-50">
      <Wrapper>
        <div className="flex justify-between items-center">
          <Logo />
          {pathname.startsWith("/dashboard") ? (
            <RecipeLink
              label="Go To Home"
              href="/"
              icon={RxHome}
              rounded
              outlined
            />
          ) : (
            <RecipeLink
              href="/dashboard"
              label="Go To Dashboard"
              icon={RxDashboard}
              outlined
              rounded
            />
          )}
        </div>
      </Wrapper>
    </div>
  );
};

export default Navbar;
