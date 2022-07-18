import React, {useState, useEffect} from 'react';
import {Formik} from 'formik';
import DataItemFields from '../../Global/users.json'
import {Button, Elements} from '../../Common'
import './addUsers.scss';
import {useCreateUser} from '../../Hooks';

const AddUsers = () => {
    const [fieldsForm, setFieldsForm] = useState(null)
    const  [fetch, {isLoading}] = useCreateUser();

    useEffect(() => {
        setFieldsForm(DataItemFields[0])
    }, []);

    const submitForm = (value) => {
        fetch(value)
    };

    return (
        <div className="addUsers-page">
            <main className='p-5 container'>
                <h3 className='text-center'> { fieldsForm?.titleform } </h3>
                <div className='col-5 m-auto bg-body rounded shadow-sm p-5'>
                    <Formik
                        initialValues={{
                            fullname: '',
                            password: '',
                            gender: 'women'

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

                                <Button
                                    label='ذخیره'
                                    type='success'
                                    disabled={isLoading} />
                            </form>)

                        }
                    </Formik>
                </div>
            </main>

        </div>
)
};

export default AddUsers