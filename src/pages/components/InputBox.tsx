import React from "react";

interface InputBoxProps {
  text: string;
  className: string;
}
const InputBox = ({ className, props }: InputBoxProps) => {
  return (
    <input
      className={`${className} bg-white border pb-3 pt-3 mb-1 w-full border-gray-400 text-center text-base text-black font-medium rounded-lg`}
      placeholder={props}
      type="text"
    />
  );
};

export default InputBox;
