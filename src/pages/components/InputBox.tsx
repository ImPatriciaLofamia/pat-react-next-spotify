interface InputBoxProps {
    text: string
}
const InputBox = (props:InputBoxProps) => {
    return(
        <input className="border-2 bg-white border pb-2 pt-2 border-gray-400 w-6/12 text-center text-lg text-black font-semibold rounded-lg" placeholder={props.text} type="text"/>
    )
}

export default InputBox;