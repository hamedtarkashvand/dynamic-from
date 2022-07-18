import React from 'react';
import * as api from './../Api'
import { useDispatch } from 'react-redux';
import { createProduct , failedProduct } from '../Redux/Actions'
import {toast} from "react-toastify";


const useCreateProduct = () =>  {
    const [isLoading , setIsLoading] = React.useState(false);
    const dispatch = useDispatch();
    const fetch = (formData) => {
        setIsLoading(true);
        api.createUser(formData).then(()=>{
            toast.success('susses new product');

            dispatch(createProduct(formData));
            setIsLoading(false)
        }).catch(()=>{
            toast.error('error new product');
            console.log("dsfsdf")
            dispatch(failedProduct(formData));
            setIsLoading(false)
        })
    };

    return [fetch, {isLoading}]
};
export {useCreateProduct}

