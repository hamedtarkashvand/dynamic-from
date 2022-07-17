export const actionType = {
    SET_USER_NAME:'SET_USER_NAME',
    SET_QUESTIONS:'SET_QUESTIONS',
    CHENG_INDEX:'CHANG_INDEX',
    CHENG_LOADING:'CHANG_LOADING',
    CHENG_CORRECT_ANSWER:'CHENG_CORRECT_ANSWER',
    SET_CURRENT_QUESTION:'SET_CURRENT_QUESTION'
}

export const setQuestions = (question) => ({
    type: actionType.SET_QUESTIONS,
    payload: question,
  });
  
export const updateIndex = (index) => {
    return {
       type: actionType.CHENG_INDEX,
       payload: index,
    }
};
export const setUserName = (userName) => ({
    type: actionType.SET_USER_NAME,
    payload: userName,
  });

export const changLoading = (loading) => ({
    type: actionType.CHENG_LOADING,
    payload: loading,
  });

export const changCorrectAnswer = (countCorrect) => ({
    type: actionType.CHENG_CORRECT_ANSWER,
    payload:countCorrect
  });

export const setCurrentQuestion = (question) => ({
    type: actionType.SET_CURRENT_QUESTION,
    payload:question
  });