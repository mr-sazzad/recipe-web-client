export interface IIngredient {
  label: string;
  value: string;
}

export interface IDBRecipe {
  id?: string;
  title: string;
  ingredients: string[];
  instructions: string;
  image?: string;
}

export interface IComment {
  id?: string;
  comment: string;
  recipeId: string;
  createdAt: string;
  updatedAt: string;
}
