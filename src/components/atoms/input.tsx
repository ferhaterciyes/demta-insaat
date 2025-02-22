import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string
}

const Input = ({className, ...rest}: InputProps) => {
    return (
        <input className={className} {...rest}/>
    )
}
export default Input
