import React from 'react';
import './button.scss'

 const Button = ({lable,className,disabled, type,onClick}) => {
    return (
        <button
         disabled={disabled}
         className={`button ${className||''} ${type}`}
         onClick={onClick}>
             {lable}
        </button>
    )
}

export {Button}