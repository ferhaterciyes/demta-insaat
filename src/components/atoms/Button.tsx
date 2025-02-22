import React from 'react'

interface ButtonProps {
    text: string
}

const Button = ({ text }: ButtonProps) => {
    return (
            <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                {text}
            </button>
)
}
export default Button
