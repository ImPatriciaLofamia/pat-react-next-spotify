import React from "react";

interface InputBoxProps {
  placeholder?: string;
  className?: string;
  type?: string;
  value?: string;
  onChange?: (text: string) => void;
  label?: string;
}
const InputBox = ({
  type,
  label,
  className,
  placeholder,
  value,
  onChange = () => null,
}: InputBoxProps) => {
  return (
    <>
      {label && <p>{label}</p>}
      <input
        className={`${className} bg-white border pb-3 pt-3 mb-1 w-full border-gray-400 text-base text-black font-medium rounded-lg`}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
};

export default InputBox;
