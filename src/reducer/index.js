import data from './data'
import modal from './modal'
//import {combineReducers} from 'redux';
// Combinar reducer inmutables
import {combineReducers} from 'redux-immutable';

const rootReducer = combineReducers({
    data:data,
    modal:modal
})

export default rootReducer;
