type InputElementType = {
    type: string,
    onChanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string | boolean;
    name: string
}

export const InputElement: React.FC<InputElementType> = (props) => {
    if (props.type === "checkbox") {
        return <>
            <label htmlFor={props.name}>
                {props.name}:
            </label>
            <input type={props.type} name={props.name} id={props.name} checked={typeof props.value === "boolean" ? props.value : false} onChange={props.onChanged} />
        </>
    }

    return <><label htmlFor={props.name}>
        {props.name}:
    </label>
        <input type={props.type} name={props.name} id={props.name} value={props.value as string} onChange={props.onChanged} />
    </>

}