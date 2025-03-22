type ButtonProp = {
    title: string;
    onClick: () => void;
}

export const Button = ({title, onClick}: ButtonProp) => {
    return <button onClick={onClick}>{title}</button>
}