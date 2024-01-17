"use client";

import useRoutes from "@/hook/dashboardRoutes";
import React from "react";
import SidebarItem from "./SidebarItem";

const DesktopSidebar = () => {
  const items = useRoutes();

  return (
    <div className="hidden lg:flex h-[90vh] fixed top-[75px]">
      <ul className="border-r border-gray-200 pt-2 flex flex-col gap-1 w-[250px] h-full shadow">
        {items.map((item) => (
          <li key={item.id} className="">
            <SidebarItem
              label={item.label}
              icon={item.icon}
              href={item.href}
              active={item.active}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DesktopSidebar;
