import React from 'react';
import './button.scss'

 const Button = ({ label,className,disabled, type,onClick}) => {
    return (
        <button
         type='submit'
         disabled={disabled}
         className={`button ${className||''} ${type}`}
         onClick={onClick}>
             {label}
        </button>
    )
}

export {Button}