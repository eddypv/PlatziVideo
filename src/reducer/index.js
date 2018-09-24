import data from './data'
import modal from './modal'
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    data:data,
    modal:modal
})

export default rootReducer;
