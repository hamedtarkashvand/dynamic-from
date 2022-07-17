import React from 'react';
import './input.scss'
import {Field} from "formik";

const Input = ({nameField, titleField}) => {
    return (
       <div className='mb-1'>
           <label className="form-label">{titleField}</label>
           <Field className="form-control form-control-lg"
                  name={nameField} type="text" placeholder={`  ${titleField}  وارد کنید `}
                  aria-label=".form-control-lg example"/>
       </div>
    )
};
export default Input