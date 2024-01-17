import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface SidebarItemProps {
  icon: IconType;
  label: string;
  href: string;
  active: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  href,
  active,
}) => {
  return (
    <Link
      href={href}
      className={`flex items-center gap-2 px-3 py-2 hover:bg-green-200 hover:shadow border-l-4 hover:border-l-green-500 ${
        active
          ? "bg-green-200 font-medium border-l-green-500"
          : "border-l-4 border-white"
      }`}
    >
      <Icon className={`${active && "text-green-600"}`} /> {label}
    </Link>
  );
};

export default SidebarItem;
