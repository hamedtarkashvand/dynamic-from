import React from 'react';
import './input.scss'

const Radio = ({nameField, titleField, optionField}) => {
    return (
        <>
            <label>{titleField} </label>
            <div>
                <div className="form-check">
                    <input value="woman" className="form-check-input" type="radio" name={nameField}
                           id="flexRadioDefault1"/>
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                       مونث
                    </label>
                </div>
                <div className="form-check">
                    <input value="men" className="form-check-input" type="radio" name={nameField}
                           id="flexRadioDefault2"
                           checked/>
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        مذکر
                    </label>
                </div>
            </div>
        </>

    )
};


export default Radio;