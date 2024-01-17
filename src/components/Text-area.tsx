import { cn } from "@/utils/cn";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface TextAreaProps {
  id: string;
  label: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  placeholder?: string;
  disabled: boolean;
  required?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({
  id,
  label,
  register,
  errors,
  placeholder,
  disabled,
  required,
}) => {
  return (
    <div>
      <label className="ml-2">{label}</label>
      <textarea
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder={placeholder}
        className={cn(
          "w-full border-[2px] rounded border-neutral-300 outline-none focus:border-black px-4 py-[6px] disabled:opacity-70 disabled:cursor-not-allowed font-light",
          errors[id] ? "border-rose-500" : "border-neutral-300",
          errors[id] ? "focus:border-rose-500" : "focus:border-black"
        )}
        rows={4}
      />
    </div>
  );
};

export default TextArea;
