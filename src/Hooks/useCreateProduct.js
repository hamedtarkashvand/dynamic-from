import React from 'react';
import * as api from './../Api'
import { useDispatch } from 'react-redux';
import { createProduct , failedProduct } from '../Redux/Actions'


const useCreateProduct = () =>  {
    const [isLoading , setIsLoading] = React.useState(false);
    const dispatch = useDispatch();
    const fetch = (formData) => {
        setIsLoading(true);
        api.createUser(formData).then(()=>{
            dispatch(createProduct(formData));
            setIsLoading(false)
        }).catch(()=>{
            dispatch(failedProduct(formData));
            setIsLoading(false)
        })
    };

    return [fetch, {isLoading}]
};
export {useCreateProduct}

