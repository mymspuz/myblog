import React from 'react'

interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    title: string
}

const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
    return (
        <button
            type='submit'
            {...props}
        >
            {props.title}
        </button>
    )
}

export default Button