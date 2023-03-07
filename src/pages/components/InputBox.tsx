interface InputBoxProps {
  text: string;
}
const InputBox = (props: InputBoxProps) => {
  return (
    <input
      className="bg-white border pb-3 pt-3 border-gray-400 text-center text-base text-black font-medium rounded-lg"
      placeholder={props.text}
      type="text"
    />
  );
};

export default InputBox;
