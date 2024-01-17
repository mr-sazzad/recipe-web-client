"use client";

import { cn } from "@/utils/cn";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  disabled,
  register,
  required,
  errors,
  placeholder,
}) => {
  return (
    <div className="w-full">
      <label className="ml-2">{label}</label>
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder={placeholder}
        type={type}
        className={cn(
          "w-full px-4 py-[6px] font-light bg-white border-[2px] rounded outline-none transition disabled:opacity-70 disabled:cursor-not-allowed",
          errors[id] ? "border-rose-500" : "border-neutral-300",
          errors[id] ? "focus:border-rose-500" : "focus:border-black"
        )}
      />
    </div>
  );
};

export default Input;
