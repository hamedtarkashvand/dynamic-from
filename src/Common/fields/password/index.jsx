import React from 'react';
import './input.scss'
import {Field} from "formik";

const Password = ({nameField, titleField}) => {
    return (
        <div>
            <label className="form-label">{titleField}</label>
            <Field className="form-control form-control-lg" name={nameField} type="password" placeholder={titleField} aria-label=".form-control-lg example"/>
        </div>

    )
};
export default Password