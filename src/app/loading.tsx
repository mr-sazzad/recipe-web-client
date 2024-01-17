import React from "react";
import { FadeLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full h-full z-50">
      <div className="flex flex-col gap-2">
        <FadeLoader />
        <p>Loading ...</p>
      </div>
    </div>
  );
};

export default Loading;
