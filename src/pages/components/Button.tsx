import React from "react"

interface ButtonProps {
    buttonName: string,
    icon: any,
    className: string
}

const Button = ({className,buttonName, icon}:ButtonProps) => {
    
    return(
        <button
        className={`${className} flex justify-center text-1xl font-bold border w-4/12 border-gray-400 py-1 px-3 rounded-full pb-3 pt-3`}>
            <span className="pr-1">{icon}</span>
            <span>{buttonName}</span>
        </button>

    )
}
export default Button;