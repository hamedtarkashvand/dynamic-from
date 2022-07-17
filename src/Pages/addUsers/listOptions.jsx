import React , { useState , useEffect} from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { updateIndex , changCorrectAnswer} from '../../Redux/Actions'
import { decodeHTML , getRandomNumber } from '../../Global/utils'
import { Item } from '../../Common';
export const ListOptions = (
  {encodedQuestions ,
     currentQustion ,
      onClick ,
      onChange,
      endList,
    }) =>{
  let dispatch = useDispatch()
// useSelectors

  // const encodedQuestions  = useSelector(state=>state.quiz.allQuestions)
  const correctAnswer = useSelector(state=>state.quiz.correctAnswer)
  const questionIndex  = useSelector(store=>store.quiz.index)
  

// useState
  const [allQuestion, setAllQuestions] = useState([])
  const [answerSelected, setAnswerSelected] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [answers, setAnswer] = useState([])

// this useEffect for create  new objects custom peroperty
  useEffect(() => {
    const createNewObject = encodedQuestions.map(item => {
      return {
        ...item,
        question: decodeHTML(item.question),
        correct_answer: decodeHTML(item.correct_answer),
        incorrect_answers: item.incorrect_answers.map(answer => decodeHTML(answer))
      }
    })

    setAllQuestions(createNewObject)
  
  }, [encodedQuestions])

  // set current question
  const question = allQuestion[questionIndex]
  const answer = question && question.correct_answer
 

// this useEffect for push anser question in other ansers & move postion at array
// and call callback function for pass currect ansser to parent component
  useEffect(() => {
    if (!question) {
      return;
    }


    let answers = [...question.incorrect_answers]
    answers.splice(getRandomNumber(question.incorrect_answers.length + 1), 0, question.correct_answer)
    setAnswer(answers) 
    currentQustion(question)
    onClick()
  }, [question])

// handel click item for cheak  correct Answer
  const handleListItemClick = (event) => {
    setDisabled(true)
    setAnswerSelected(true)
    setSelectedAnswer(event.target.textContent)
    onChange()


    if(event.target.textContent === answer) {
        dispatch(changCorrectAnswer(correctAnswer + 1))
    }


    if (questionIndex + 1 <= allQuestion.length) {
      
      setTimeout(() => {
        setAnswerSelected(false)
        setSelectedAnswer(null)

        if ( questionIndex + 1  === allQuestion.length ) {
          setDisabled(true)
          endList()

          // dispatch(updateIndex(0))
          // dispatch(changCorrectAnswer(0))
        } else {
          setDisabled(false)
          dispatch(updateIndex(questionIndex + 1))
          onChange()
        }
       
      }, 1500)
    }
  
  }


//cheack generaite class name after select option
  const getClass = option => {
    if (!answerSelected) {
      return ``;
    }
    if (option === answer) {
      return `correct`
    }
    if (option === selectedAnswer) {
      return `selected`
    }
  }


    return (
        <div className="list-items">
        <ul className="list">
          {
            answers.map((answer)=>(
              <li  key={answer} className="item">
                <Item
                  key={answer} 
                  disabled={disabled}                
                  lable={answer}
                  className={getClass(answer)}
                  onClick={handleListItemClick}
                  />
            </li>
            ))
          }
        </ul>
    </div>
    )

}