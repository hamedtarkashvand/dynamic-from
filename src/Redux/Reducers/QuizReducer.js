import {actionType} from '../Actions'

const initState = {
userName:null,
allQuestions:[],
index:0,
correctAnswer:0,
retry:false,
loading:false,
currentQuestion:{}
}

 const QuizReducer = (state = initState, action ) => {
    switch (action.type) {
        case actionType.SET_USER_NAME :
            return {
                ...state,
                userName:action.payload
            };

        case actionType.SET_QUESTIONS:
            return {
                ...state,
                allQuestions:action.payload

            };

        case actionType.CHENG_INDEX :
            return {
                ...state,
                index:action.payload 
            };

        case actionType.CHENG_CORRECT_ANSWER :
            return {
                ...state,
                correctAnswer:action.payload
            };

        case actionType.CHENG_LOADING :
            return {
                ...state,
                loading:action.payload
            };

        case actionType.SET_CURRENT_QUESTION :
            return {
                ...state,
                currentQuestion:action.payload
            };


        case 'RETRY' :
            return {
                ...state,
                retry:!state.retry
            };

        default:
           return state
    }
}

export default QuizReducer