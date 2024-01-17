"use client";

import { cn } from "@/utils/cn";
import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  label: string | React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: IconType;
  outlined?: boolean;
  small?: boolean;
  className?: string;
  rounded?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  outlined,
  small,
  className,
  rounded,
  disabled,
  icon: Icon,
}) => {
  return (
    <button
      className={cn(
        "relative px-3 hover:opacity-80 transition gap-2 disabled:opacity-70 disabled:cursor-not-allowed",
        outlined ? "bg-white" : "bg-green-400",
        outlined ? "border-green-400" : "border-green-400",
        outlined ? "text-green-400" : "text-white",
        small ? "py-1" : "py-2",
        small ? "text-sm" : "text-md",
        small ? "font-light" : "font-semibold",
        small ? "border-[1px]" : "border-2",
        Icon ? "flex items-center" : "",
        rounded ? "rounded-full" : "rounded-[2px]",
        className
      )}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {Icon && <Icon size={24} />}
      {label}
    </button>
  );
};

export default Button;
