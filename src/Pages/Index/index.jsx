import React from 'react';
import {useNavigate} from "react-router-dom";

import {Button} from '../../Common'
import './index.scss'

const Index = () => {
    let history = useNavigate();

    return (
        <div className="login-page">
            <div className='col-4'>
                <Button
                    label='ایجاد کاربر جدید'
                    type='success'
                    onClick={() => history('/addUsers')}/>

                <Button
                    label='ایجاد محصول جدید'
                    type='success'
                    onClick={() => history('/questions')}/>
            </div>
        </div>
    )
}

export default Index
