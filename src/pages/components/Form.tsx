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
      <div className="bg-yellow-200 w-4/12">
        <div className="flex justify-start bg-pink-400">
          <span className="font-bold font-sans">
            <Text paragraph={props.text} />
          </span>
        </div>
        <div className="flex justify-start bg-purple-400">
          <span className="flex justify-center bg-slate-400">
            <InputBox text={props.text}/>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Form;
