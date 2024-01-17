import { IFeedback } from "@/types";
import Image from "next/image";
import React from "react";

const FeedbackCard = ({ feedback }: { feedback: IFeedback }) => {
  const postedOn = new Date(feedback.createdAt).toDateString();
  return (
    <div className="p-3 border border-neutral-300 rounded">
      <div className="flex flex-col gap-3">
        <div className="flex gap-3 items-center justify-start">
          <Image
            src={
              feedback.image
                ? feedback.image
                : "/assets/recipe-person-placeholder.png"
            }
            alt="person-image"
            height={50}
            width={50}
            className="w-50 h-50 rounded-full ring-1 ring-neutral-300 ring-opacity-50 ring-offset-neutral-950 p-[1px]"
          />

          <div className="flex flex-col gap-1">
            <p>{feedback.name}</p>
            <p className="text-xs text-neutral-400">{postedOn}</p>
          </div>
        </div>
        <div className="text-neutral-900 p-3 text-sm bg-neutral-100 rounded">
          {feedback.feedback}
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
