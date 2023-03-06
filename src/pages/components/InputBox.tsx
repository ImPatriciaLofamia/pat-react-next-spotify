interface InputBoxProps {
    text: string
}
const InputBox = (props:InputBoxProps) => {
    return(
        <input className="bg-white border pb-2 pt-2 border-gray-400 w-6/12 text-center text-base text-black font-medium rounded-lg" placeholder={props.text} type="text"/>
    )
}

export default InputBox;