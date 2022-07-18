import {combineReducers} from 'redux';
import userReducer from './UserReducer'
import productReducer from './ProductReducer'

 const rootReducer = combineReducers({
    user:userReducer,
    product:productReducer,
});

export default rootReducer