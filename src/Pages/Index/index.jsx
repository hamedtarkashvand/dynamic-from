import React from 'react';
import {useNavigate} from "react-router-dom";

import {Button, Input} from '../../Common'
import './login.scss'

const Index = () => {
    let history = useNavigate();
    // const dispatch = useDispatch();
    // const [name , setName] = useState('')

    // const onChangeUserName = (event) =>{
    //   setName(event)
    //   dispatch(setUserName(event))
    // }

    return (
        <div className="login-page">
            {/* <Input onChange={(e)=>onChangeUserName(e.target.value)} placeHolder='your name'/> */}

            <Button
                lable='add user'
                type='sucess'
                // disabled={!(!!name)}
                onClick={(e) => history('/addUsers')}/>

            <Button
                lable='add address'
                type='success'
                // disabled={!(!!name)}
                onClick={(e) => history('/questions')}/>
        </div>
    )
}

export default Index
