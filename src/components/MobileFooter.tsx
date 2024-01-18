"use client";

import React from "react";
import FooterItem from "./FooterItem";
import useRoutes from "@/hook/dashboardRoutes";

const MobileFooter = () => {
  const items = useRoutes();

  return (
    <div className="lg:hidden flex justify-between items-center h-[70px] w-full px-[20px] bg-gray-200 border-t border-gray-400 fixed bottom-0 right-0 left-0 z-20">
      {items.map((route) => (
        <FooterItem
          key={route.id}
          label={route.label}
          icon={route.icon}
          href={route.href}
          active={route.active}
        />
      ))}
    </div>
  );
};

export default MobileFooter;
