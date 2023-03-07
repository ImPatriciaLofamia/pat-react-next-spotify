import React from "react";
import Text from "./Text";
import InputBox from "./InputBox";
import Button from "./Button";

interface FormProps {
  text: string;
}

const Form = (props: FormProps) => {
  return (
    <div className="flex justify-center">
      <div className="w-4/12">
        <div className="flex justify-start">
          <span className="font-bold font-sans">
            <Text paragraph={props.text} />
          </span>
        </div>
        <div className="flex justify-start">
          <span className="flex justify-center">
            <InputBox text={props.text}/>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Form;
