import React from 'react'

const InputType = ({
    handleChange,
    type,
    name,
    required,
    placeholder,
    value
}) => {

    return (
        <input
            onChange={handleChange}
            type={type}
            name={name}
            required={required}
            placeholder={placeholder}
            value={value}
        />
    )
}

export default InputType