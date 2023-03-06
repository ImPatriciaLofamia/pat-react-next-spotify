interface ButtonProps {
    buttonName: string,
    icon: any
}   
const Button = (props:ButtonProps) => {
    return(

        <button className="flex justify-center text-1xl font-bold border-2 border-black py-1 px-3 rounded-full w-7/12 pb-2 pt-2">
            <span className="pr-1 ">{props.icon}</span>
            <span className="">{props.buttonName}</span>
        </button>

    )
}
export default Button;