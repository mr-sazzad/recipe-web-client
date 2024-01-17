import React from "react";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="max-w-[1100px] mx-auto md:px-[50px] px-[30px]">
      {children}
    </div>
  );
};

export default Wrapper;
