interface ButtonProps {
    buttonName: string,
    icon: any
}

const Button = (props:ButtonProps) => {
    
    return(
        <button
        className="flex justify-center text-1xl font-bold border border-gray-400 py-1 px-3 rounded-full w-6/12 pb-3 pt-3">
            <span className="pr-1 ">{props.icon}</span>
            <span className="">{props.buttonName}</span>
        </button>

    )
}
export default Button;