import React from 'react';
import './item.scss'

 const Item = ({lable,className,disabled,onClick}) => {
    return (
        <button
         disabled={disabled}
         className={`item-list ${className||''}`}
         onClick={onClick}>
             {lable}
        </button>
    )
}

export {Item}