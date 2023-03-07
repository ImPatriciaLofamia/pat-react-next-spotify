interface TextProps {
    paragraph : string
}

const Text = (props:TextProps) => {
    return (
        <div className="">
            <p>{props.paragraph}</p>
        </div>
    )
}

export default Text;