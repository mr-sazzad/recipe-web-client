"use client";

import { useGetAllRecipesQuery } from "@/redux/api/recipe/recipeApi";
import React, { useState } from "react";
import RecipeCard from "@/components/RecipeCard";
import Masonry from "react-masonry-css";
import Loading from "@/app/loading";
import { breakpointColumnsObj } from "@/constants/breakpointsObj";
import { IDBRecipe } from "@/types";

const AllRecipes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data: recipes, isLoading } = useGetAllRecipesQuery(undefined);

  if (isLoading) {
    return <Loading />;
  }

  const filteredRecipes = recipes?.filter(
    (recipe: IDBRecipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.ingredients.some((ingredient: string) =>
        ingredient.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div className="mb-14 lg:mb-0">
      <input
        type="text"
        placeholder="Search by title or ingredients"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-3 py-[6px] border-2 border-neutral-300 outline-none focus:border-neutral-700 rounded w-full sm:w-[300px] text-thin"
      />

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {filteredRecipes?.map((recipe: IDBRecipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </Masonry>
    </div>
  );
};

export default AllRecipes;
