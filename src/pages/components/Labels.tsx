interface LabelProps {
    text : string,
    icon : any
}

const Labels = (props: LabelProps) => {
    return (
    <h1 className="flex justify-center text-4x1 TE">
        <span>{props.icon}</span>
        <span>{props.text}</span>
        </h1>
)}
export default Labels;