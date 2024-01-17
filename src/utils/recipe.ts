import { IIngredient } from "@/types";

export const getArrayOfIngredients = (ingredientsArrOfObj: IIngredient[]) => {
  const ingredients: string[] = ingredientsArrOfObj.map(
    (ingredient: IIngredient) => ingredient.value
  );

  return ingredients;
};
