interface ButtonProps {
    buttonName: string,
    icon: any
}   
const Button = (props:ButtonProps) => {
    return(

        <button className="flex justify-center text-2xl font-bold border-2 border-teal-900 py-2 px-4 rounded-full w-8/12">
            <span className="pr-1 ">{props.icon}</span>
            <span className="">{props.buttonName}</span>
        </button>

    )
}
export default Button;