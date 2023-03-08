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
      {label && <p className="text-sm font-bold">{label}</p>}
      <input
        className={`${className} ${type && "accent-green-600"} bg-white border pb-3 pt-3  border-gray-400 text-base text-black font-medium rounded-lg`}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
};

export default InputBox;
