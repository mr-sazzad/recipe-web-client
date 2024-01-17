import { cn } from "@/utils/cn";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface RecipeLinkProps {
  label: string;
  href: string;
  outlined?: boolean;
  icon?: IconType;
  rounded?: boolean;
  disabled?: boolean;
  className?: string;
}

const RecipeLink: React.FC<RecipeLinkProps> = ({
  label,
  href,
  outlined,
  icon: Icon,
  rounded,
  disabled,
  className,
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "relative px-3 py-[6px] hover:opacity-80 transition gap-2 border",
        disabled ? "opacity-70 cursor-not-allowed" : "",
        outlined ? "bg-white" : "bg-green-400",
        outlined ? "border-green-400" : " border-green-400",
        outlined ? "text-green-400" : "text-white",
        Icon ? "inline-flex items-center" : "",
        rounded ? "rounded-full" : "rounded-[2px]",
        className
      )}
    >
      {Icon && <Icon size={20} />}
      {label}
    </Link>
  );
};

export default RecipeLink;
