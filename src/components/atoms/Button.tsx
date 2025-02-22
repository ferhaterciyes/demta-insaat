import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
}

const Button = ({text, className, ...rest}: ButtonProps) => {
    return (
        <button className={className} {...rest}>{text}</button>
    )
}

export default Button
