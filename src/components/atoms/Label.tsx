import React from 'react'

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    className?: string
}

const Label = ({className, ...rest}: LabelProps) => {
    return (
        <label className={className} {...rest}/>
    )
}
export default Label
