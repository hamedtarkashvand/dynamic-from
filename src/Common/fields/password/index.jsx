import React from 'react';
import './input.scss'

const Password = ({placeHolder, value, onChange}) => {
    return (
        <input className="form-control form-control-lg" type="password" placeholder="password"
               aria-label=".form-control-lg example"/>
    )
};
export default Password