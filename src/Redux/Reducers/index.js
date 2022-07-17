import {combineReducers} from 'redux';
import QuizReducer from './QuizReducer'

 const rootReducer = combineReducers({
    quiz:QuizReducer
})

export default rootReducer