interface TextProps {
    text: string
}

const Text = (props:TextProps) => {
    return (
        <div className="flex justify-center">
            <p>{props.text}</p>
        </div>
    )
}

export default Text;