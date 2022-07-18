import React from 'react';
import * as api from './../Api'
import { useDispatch } from 'react-redux';
import { createUser , failedUser } from '../Redux/Actions'
import {toast} from "react-toastify";


const useCreateUser = () =>  {
    const [isLoading , setIsLoading] = React.useState(false);
    const dispatch = useDispatch();
     const fetch = (formData) => {
         setIsLoading(true);
          api.createUser(formData).then(()=>{
              toast.success('susses new user');
              dispatch(createUser(formData));
              setIsLoading(false)
          }).catch(()=>{
              toast.error('error new user');
              dispatch(failedUser(formData));
              setIsLoading(false)
          })
     };

     return [fetch, {isLoading}]
};
export {useCreateUser}


