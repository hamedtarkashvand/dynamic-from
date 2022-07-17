import React from 'react';
import './input.scss'

const Input = ({nameField, titleField}) => {
    return (
       <div className='mb-1'>
           <label>{titleField}</label>
           <input className="form-control form-control-lg" name={nameField} type="text" placeholder={`Please insert ${titleField}`}
                  aria-label=".form-control-lg example"/>
       </div>
    )
};
export default Input