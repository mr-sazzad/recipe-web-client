import { IIngredient } from "@/types";

export const getArrayOfIngredients = (ingredientsArrOfObj: IIngredient[]) => {
  const ingredients: string[] = ingredientsArrOfObj.map(
    (ingredient: IIngredient) => ingredient.value
  );

  return ingredients;
};

export const ingredientsObj = (ingredients: string[]) => {
  const result = ingredients.map((ingredient: string) => {
    return {
      label: ingredient,
      value: ingredient,
    };
  });

  return result;
};

export const isArraysAreEqual = (arr1: string[], arr2: string[]) => {
  let arraysAreEqual: boolean = true;

  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        arraysAreEqual = false;
        break;
      }
    }
  } else {
    arraysAreEqual = false;
  }

  return arraysAreEqual;
};

export const generateRandomName = () => {
  const names = ["Guest", "Abdullah", "Bob", "Alice", "Charlie", "Eve"];
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
};
