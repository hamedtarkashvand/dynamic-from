import React, {useState, useEffect} from 'react';
import {Formik} from 'formik';
import DataItemFields from '../../Global/users.json'
import {Elements} from '../../Common'
import './addUsers.scss';

const AddUsers = () => {
    const [fieldsForm, setFieldsForm] = useState(null);

    useEffect(() => {
        setFieldsForm(DataItemFields[0])
    }, []);

    const submitForm = (value) => {
        console.log('data', value)
    }

    return (
        <div className="addUsers-page">
            <main className='p-5 container'>
                <div className='col-5 m-auto bg-body rounded shadow-sm p-5'>
                    <Formik
                        initialValues={{
                            fullname: '',
                            password: '',
                            gender: ''

                        }}
                        onSubmit={(values => submitForm(values))}>
                        {props => (
                            <form onSubmit={props.handleSubmit}>
                                {
                                    fieldsForm && fieldsForm?.field.map((field, index) => {
                                        return (
                                            <Elements key={index} data={field}/>
                                        )
                                    })
                                }
                                <hr className="my-4"/>
                                <button type='submit' className='mt-3 btn w-100 btn-primary'> ذخیره</button>
                            </form>)

                        }
                    </Formik>
                </div>
            </main>

        </div>
)
};

export default AddUsers