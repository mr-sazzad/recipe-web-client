import React from "react";
import { IComment } from "./../types/index";
import { generateRandomName } from "@/utils/recipe";

const CommentCard = ({ comment }: { comment: IComment }) => {
  const name = generateRandomName();
  const date = new Date(comment.createdAt).toDateString();
  return (
    <div className="flex flex-col gap-2 p-3 border border-gray-300 rounded">
      <p className="text-lg font-semibold">{name}</p>

      <p>{comment.comment}</p>
    </div>
  );
};

export default CommentCard;
