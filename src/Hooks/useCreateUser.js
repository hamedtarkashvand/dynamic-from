import React from 'react';
import * as api from './../Api'
import { useDispatch } from 'react-redux';
import { createUser , failedUser } from '../Redux/Actions'


const useCreateUser = () =>  {
    const [isLoading , setIsLoading] = React.useState(false);
    const dispatch = useDispatch();
     const fetch = (formData) => {
         setIsLoading(true);
          api.createUser(formData).then(()=>{
              dispatch(createUser(formData));
              setIsLoading(false)
          }).catch(()=>{
              dispatch(failedUser(formData));
              setIsLoading(false)
          })
     };

     return [fetch, {isLoading}]
};
export {useCreateUser}


