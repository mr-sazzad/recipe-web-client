import React from "react";
import Logo from "./Logo";
import Accounts from "./accounts";
import Wrapper from "./Wrapper";

const Footer = () => {
  return (
    <Wrapper>
      <div className="mt-[51px] sticky bottom-0 right-0 left-0">
        <div className="flex flex-col border border-gray-400 rounded">
          <div className="flex flex-row justify-around h-[60px] border-b border-gray-400">
            <div className="w-full h-full border-r border-gray-400 flex justify-start items-center px-5">
              <Logo />
            </div>
            <div className="w-full h-full flex justify-start items-center px-5">
              <Accounts />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="my-5">
              <div className="flex justify-center mb-2">
                <Logo />
              </div>
              <p className="text-neutral-600">
                Copyright &#169; {new Date().getFullYear()} All right reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
