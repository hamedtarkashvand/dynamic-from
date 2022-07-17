import React from 'react';
import './input.scss'
import {Field} from "formik";

const Radio = ({nameField, titleField, optionField}) => {
    return (
        <>
            <label className="form-label">{titleField}</label>
            <div>
                <div className="form-check">
                    <Field value="woman" className="form-check-input" type="radio" name={nameField}
                           id="flexRadioDefault1"/>
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                       مونث
                    </label>
                </div>
                <div className="form-check">
                    <Field value="men" className="form-check-input" type="radio" name={nameField}
                           id="flexRadioDefault2"/>
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        مذکر
                    </label>
                </div>
            </div>
        </>
    )
};


export default Radio;