import React, {useState , useEffect} from 'react';

import DataItemFields from '../../Global/users.json'
import {Elements} from '../../Common'
import './addUsers.scss';

const AddUsers = () => {
    const [fieldsForm, setFieldsForm] = useState(null);

    useEffect(()=>{
        setFieldsForm(DataItemFields[0])
    },[]);

    console.log(DataItemFields);
    return (
        <div className="addUsers-page mt-5">
            <h3> { fieldsForm?.titleform } </h3>
            {
                fieldsForm && fieldsForm?.field.map((field , index)=>{
                    return (
                        <Elements key={index} data={field} />
                    )
                })
            }

        </div>
    )
};

export default AddUsers