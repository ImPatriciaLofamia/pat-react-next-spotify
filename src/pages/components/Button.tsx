import React from "react";

interface ButtonProps {
  buttonName: string;
  icon?: any;
  className?: string;
  onClick?: () => void;
  success?: boolean;
  primary?: boolean;
}
const Button = ({
  className,
  buttonName,
  icon,
  onClick,
  success,
  primary,
}: ButtonProps) => {
  return (
    <button
      className={`${className} rounded-full flex px-8 py-2 border border-gray-400 sm:text-sm items-center font-medium
      ${success && "text-black bg-green-500 "}
      ${primary && "text-white bg-blue-500 hover:bg-blue-600"}
      `}
    >
      <span className="pr-1 hidden sm:block">{icon}</span>
      {buttonName}
    </button>
  );
};
export default Button;
