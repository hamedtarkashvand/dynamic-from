import React from 'react';
import './card.scss';
const Card = ({current , max , question}) => {
    return (
        <div className='card'>
        <div className="inner">
          Question 
          <div className="counter">
             <span className='current'>{current}</span>
             /
             <span className='amount'>{max}</span>
          </div>
        </div> 
        <div className="question">
          <p>
            {question}
          </p>
        </div>
      </div>
    )
}

export {Card}