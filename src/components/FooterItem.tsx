import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface FooterItemProps {
  label: string;
  icon: IconType;
  href: string;
  active: boolean;
}

const FooterItem: React.FC<FooterItemProps> = ({
  label,
  icon: Icon,
  href,
  active,
}) => {
  return (
    <Link
      href={href}
      className={`flex flex-col gap-1 justify-center items-center w-full h-full hover:border-t-4 hover:border-t-green-500 ${
        active && "font-medium border-t-4 border-t-green-500"
      }`}
    >
      <Icon className={`${active && "text-green-600"}`} />
      <p className={`flex text-sm ${active && "font-medium"}`}>{label}</p>
    </Link>
  );
};

export default FooterItem;
