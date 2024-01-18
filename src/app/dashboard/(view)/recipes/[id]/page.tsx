"use client";

import Loading from "@/app/loading";
import CommentCard from "@/components/CommentCard";
import { breakpointColumnsObj } from "@/constants/breakpointsObj";
import { useCreateNewCommentMutation } from "@/redux/api/comment/commentApi";
import { useGetSingleRecipeQuery } from "@/redux/api/recipe/recipeApi";
import { IComment } from "@/types";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

import { BsFillArrowUpSquareFill } from "react-icons/bs";
import Masonry from "react-masonry-css";

const RecipeDetailsPage = () => {
  const { id } = useParams();
  const [comment, setComment] = useState("");
  const { data: recipe, isLoading } = useGetSingleRecipeQuery(id);
  const [createNewComment, { isLoading: isCommentCreating }] =
    useCreateNewCommentMutation();

  if (isLoading) {
    return <Loading />;
  }

  const handleCreateComment = async () => {
    try {
      if (comment === "") {
        toast.error("please enter a comment first!");
        return;
      }
      const requestedData = { recipeId: id, comment };
      const result: any = await createNewComment(requestedData);

      if (result.success !== false) {
        toast.success("Comment added");
      }
    } catch (err: any) {
      toast.error("Something went wrong");
    }
  };

  const postedOn = new Date(recipe?.createdAt).toDateString();
  const lastUpdated = new Date(recipe?.updatedAt).toDateString();

  return (
    <div className="flex justify-center p-4 bg-white text-gray-800 mb-14 lg:mb-0">
      <div className="flex flex-col gap-5 max-w-4xl">
        <div className="flex justify-center w-full">
          <div className="relative lg:h-[400px] lg:w-[600px] md:w-[450px] md:h-[300px] sm:w-[400px] sm:h-[300px] h-[180px] w-[300px]">
            <Image
              src={
                recipe?.image ? recipe.image : "/assets/image-placeholder.png"
              }
              alt="recipe-image"
              priority
              className="rounded-lg shadow-md"
              objectFit="cover"
              layout="fill"
            />
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-semibold capitalize md:text-5xl">
            {recipe?.title}
          </h2>
          <p className="text-sm text-gray-500 mt-1">Posted on: {postedOn}</p>
          {postedOn !== lastUpdated && (
            <p className="text-sm text-gray-500">Last Modify: {lastUpdated}</p>
          )}
        </div>

        <div>
          <h3 className="text-2xl font-semibold">Ingredients</h3>
          <ul className="list-disc pl-5 mt-2">
            {recipe?.ingredients.map((ingredient: string, index: number) => (
              <li key={index} className="text-neutral-900">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold">Instructions</h3>
          <p>{recipe?.instructions}</p>
        </div>

        {/* comment section */}
        <div className="mt-5">
          <div className="relative">
            <textarea
              className="w-full border-2 border-neutral-400 resize-none rounded-md outline-none focus:border-neutral-700 px-4 py-2"
              rows={1}
              value={comment}
              placeholder="leave a comment"
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              type="submit"
              onClick={handleCreateComment}
              disabled={isCommentCreating}
              className="disabled:cursor-not-allowed disabled:opacity-70"
            >
              <BsFillArrowUpSquareFill
                size={24}
                className="absolute top-3 right-2 hover:rotate-90 transition-all duration-150 cursor-pointer"
              />
            </button>
          </div>
          <div>
            <h4 className="mt-5 mb-3 text-xl font-semibold">
              Our Users Comments
            </h4>

            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {recipe?.comments &&
                recipe.comments.map((comment: IComment) => (
                  <CommentCard key={comment.id} comment={comment} />
                ))}
            </Masonry>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailsPage;
