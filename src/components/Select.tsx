import React from "react";
import Select from "react-select";
import { ingredients } from "@/constants/ingredients";
import { Controller } from "react-hook-form";
import { Control, FieldErrors } from "react-hook-form";

interface IngredientSelectProps {
  control: Control;
  name: string;
  label: string;
  errors: FieldErrors;
  required: boolean;
  disabled: boolean;
}

const IngredientSelect: React.FC<IngredientSelectProps> = ({
  control,
  name,
  label,
  errors,
  required,
  disabled,
}) => {
  return (
    <div>
      <label className="ml-2">{label}</label>
      <Controller
        name={name}
        control={control}
        rules={{ required }}
        render={({ field }) => (
          <Select
            {...field}
            options={ingredients}
            isDisabled={disabled}
            className={errors[name] ? "border-rose-500" : "border-neutral-300"}
            isMulti
          />
        )}
      />
      {errors[name] && (
        <p className="text-rose-500 text-sm ml-2">This field also required</p>
      )}
    </div>
  );
};

export default IngredientSelect;
