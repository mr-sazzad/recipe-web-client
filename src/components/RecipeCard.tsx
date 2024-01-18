"use client";

import {
  useDeleteSingleRecipeMutation,
  useUpdateSingleRecipeMutation,
} from "@/redux/api/recipe/recipeApi";
import { IDBRecipe } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FiTrash2 } from "react-icons/fi";
import { BiEdit } from "react-icons/bi";
import Modal from "./Modal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {
  getArrayOfIngredients,
  ingredientsObj,
  isArraysAreEqual,
} from "@/utils/recipe";
import { UploadImageToImageBB } from "@/helper/imageUpload";
import Input from "./Input";
import IngredientSelect from "./Select";
import TextArea from "./Text-area";

const RecipeCard = ({ recipe }: { recipe: IDBRecipe }) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isOpen, setOpen] = useState<boolean>(false);
  const [deleteSingleRecipe] = useDeleteSingleRecipeMutation();
  const [updateSingleRecipe] = useUpdateSingleRecipeMutation();

  const recipeObj = ingredientsObj(recipe.ingredients);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      title: recipe.title,
      ingredients: recipeObj,
      instructions: recipe.instructions,
      image: "",
    },
  });

  const handleRecipeDelete = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();

    try {
      const result: any = await deleteSingleRecipe(recipe.id);
      if (result.error) {
        toast.error("something went wrong");
      } else {
        toast.success("recipe deleted");
      }
    } catch (err) {
      toast.error("something went wrong");
    }
  };

  const handleRecipeUpdate: SubmitHandler<FieldValues> = async (data) => {
    try {
      setLoading(true);

      let imageUrl = "";

      if (data.image) {
        imageUrl = await UploadImageToImageBB(data.image[0]);
      }

      const requestedData: Partial<IDBRecipe> = {};

      const ingredients = getArrayOfIngredients(data.ingredients);

      const isArraysEqual: boolean = isArraysAreEqual(
        ingredients,
        recipe.ingredients
      );

      console.log(isArraysEqual, "is arrays are equal");
      console.log(requestedData, "data");

      // checking which field is modified
      if (data.title !== recipe.title) {
        requestedData.title = data.title;
      }

      if (data.instructions !== recipe.instructions) {
        requestedData.instructions = data.instructions;
      }

      if (!isArraysEqual) {
        requestedData.ingredients = ingredients;
      }

      if (imageUrl) {
        requestedData.image = imageUrl;
      }
      const result: any = await updateSingleRecipe({
        id: recipe.id,
        data: requestedData,
      });

      if (result.error) {
        toast.error("something went wrong");
        setLoading(false);
      } else {
        toast.success("Recipe updated");
        setLoading(false);
        setOpen(false);
      }
    } catch (err: any) {
      toast.error("Something went wrong");
      setLoading(false);
    }
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
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
      <div className="disabled:cursor-not-allowed disabled:opacity-70">
        <div className="border-2 border-neutral-300 rounded p-3 relative group">
          <div className="absolute top-5 right-5 z-50 transition-transform duration-300 scale-0 group-hover:scale-100 flex justify-center items-center rounded-xl overflow-hidden">
            <button onClick={() => setOpen(true)}>
              <BiEdit
                size={24}
                className="p-1 bg-white text-black hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
              />
            </button>

            <button onClick={(e) => handleRecipeDelete(e)}>
              <FiTrash2
                size={24}
                className="p-1 bg-white text-black hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
              />
            </button>
          </div>
          <Link href={`/dashboard/recipes/${recipe.id}`}>
            <div className="relative h-[150px]">
              <Image
                src={
                  recipe.image ? recipe.image : "/assets/image-placeholder.png"
                }
                alt="recipe-image"
                fill
                className="bg-neutral-100 rounded"
              />
            </div>

            <div className="text-2xl font-semibold">{recipe.title}</div>
          </Link>
        </div>
      </div>
      <Modal
        title="Update Recipe"
        onSubmit={handleSubmit(handleRecipeUpdate)}
        onClose={() => setOpen(false)}
        isOpen={isOpen}
        buttonLabel="Update Recipe"
        disabled={isLoading}
        body={bodyContent}
      />
    </>
  );
};

export default RecipeCard;
