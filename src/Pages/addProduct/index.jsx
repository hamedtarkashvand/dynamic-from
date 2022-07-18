import React, {useEffect, useState} from 'react';
import {Formik} from 'formik';
import DataItemFields from '../../Global/products'
import {Button, Elements} from '../../Common'
import {useCreateProduct} from '../../Hooks';
import './AddProduct.scss';


const AddProduct = () => {
    const [fieldsForm, setFieldsForm] = useState(null)
    const [fetch, {isLoading}] = useCreateProduct();

    useEffect(() => {
        setFieldsForm(DataItemFields[0])
    }, []);

    const submitForm = (value) => {
        fetch(value)
    }

    return (
        <div className="addProduct-page">
            <main className='p-5 container '>
                <h3 className='text-center mb-3'> {fieldsForm?.titleform} </h3>
                <div className='col-5 m-auto bg-body rounded shadow-sm p-5'>
                    <Formik
                        initialValues={{
                            productname: undefined,
                            count: undefined,
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
                                    disabled={isLoading}/>
                            </form>)

                        }
                    </Formik>
                </div>
            </main>

        </div>
    )
};

export default AddProduct