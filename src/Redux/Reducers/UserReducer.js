import {actionType} from '../Actions'

const initState = {
    userList: [],
    failedUserList: [],
}

const UserReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.CREATE_USERS_LIST :
            return {
                ...state,
                userList:[...state.failedUserList , action.payload]
            };
        case actionType.FAILED_USERS_LIST :
            return {
                ...state,
                failedUserList: [...state.failedUserList , action.payload]
            };
        default:
            return state
    }
}

export default UserReducer