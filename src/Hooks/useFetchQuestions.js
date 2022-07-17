import { useEffect} from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { setQuestions , changLoading ,  updateIndex , changCorrectAnswer } from '../Redux/Actions'


export default function useFetchQuestions ()  { 
    const apiUrl = `https://opentdb.com/api.php?amount=10&type=multiple`;
    const retry  = useSelector(state=>state.quiz.retry)
    const dispatch = useDispatch()
    const fetchQuestion = async () => {
        dispatch(updateIndex(0))
          dispatch(changCorrectAnswer(0))
        dispatch(changLoading(true))
        await fetch(apiUrl)
             .then((res) => res.json())
             .then((response) => {
               
                 dispatch(changLoading(false))
                 dispatch(setQuestions(response.results))
                
          });
    }    


    useEffect(()=>{
         
        fetchQuestion()
    },[retry])
}

