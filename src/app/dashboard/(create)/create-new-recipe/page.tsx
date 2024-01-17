"use client";

import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRecipeModal } from "@/hook/useRecipeModal";
import Modal from "@/components/Modal";
import Button from "@/components/Button";
import { UploadImageToImageBB } from "@/helper/imageUpload";
import { useCreateNewRecipeMutation } from "@/redux/api/recipe/recipeApi";
import { MdOutlineFastfood } from "react-icons/md";
import toast from "react-hot-toast";
import { getArrayOfIngredients } from "@/utils/recipe";
import Input from "@/components/Input";
import IngredientSelect from "@/components/Select";
import TextArea from "@/components/Text-area";

const CreateNewRecipe = () => {
  const createRecipe = useRecipeModal();
  const [createNewRecipe] = useCreateNewRecipeMutation();

  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      ingredients: [],
      instructions: "",
      image: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);

    try {
      let imageUrl = "";

      if (data.image) {
        imageUrl = await UploadImageToImageBB(data.image[0]);
      }

      const ingredients: string[] = getArrayOfIngredients(data.ingredients);

      const requestedData = {
        title: data.title,
        ingredients,
        instructions: data.instructions,
        image: imageUrl,
      };

      const result: any = await createNewRecipe(requestedData);

      if (result.success !== false) {
        toast.success("Your recipe Uploaded");
        setIsLoading(false);
        createRecipe.onClose();
        reset();
      }
    } catch (err: any) {
      toast.error("Something went wrong");
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  const bodyContent = (
    <div className="flex flex-col gap-4 ">
      <Input
        id="title"
        label="Title"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

      <IngredientSelect
        control={control}
        name="ingredients"
        label="Ingredients"
        errors={errors}
        disabled={isLoading}
        required
      />

      <TextArea
        id="instructions"
        placeholder="write your instructions here"
        label="Instructions"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="image"
        label="Image"
        disabled={isLoading}
        register={register}
        errors={errors}
        type="file"
      />
    </div>
  );

  return (
    <>
      <div className="flex justify-center items-center dashboard-height w-full">
        <Button
          label="Create New Recipe"
          onClick={createRecipe.onOpen}
          icon={MdOutlineFastfood}
        />
      </div>
      {/* modal component */}
      <Modal
        disabled={isLoading}
        isOpen={createRecipe.isOpen}
        title="Create New Recipe"
        buttonLabel="Create Recipe"
        onClose={createRecipe.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
      />
    </>
  );
};

export default CreateNewRecipe;
