import React from 'react';
import { useSelector} from 'react-redux';
import { useNavigate  } from "react-router-dom";

import {Button} from '../../Common';
import './AddProduct.scss';

const EndGame = () =>{
    let history = useNavigate ();
    // let dispatch = useDispatch()
    const allQuestions  = useSelector(state=>state.quiz.allQuestions)
    const username = useSelector(state=>state.quiz.userName)
    const correctAnswer = useSelector(state=>state.quiz.correctAnswer)
    return  (
         <div className="addProduct-page">
             <h1 className="text">Great !</h1>
             <h3 className='userName'>{username}</h3>
             <h3 className='text'>You've answred</h3>
             <h3 className='correctAnswer'>{`${correctAnswer} / ${allQuestions.length}`}</h3>
             <h3 className='text'>of Questions</h3>
             <Button
              lable='retry' 
              type='sucess'
              onClick={(e)=>{
                history('/questions')
                // dispatch({type:'RETRY'})
              } } />
         </div>
     )}

export default EndGame
