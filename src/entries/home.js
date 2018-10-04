import React from 'react'
import ReactDOM from 'react-dom'
//import Playlist from "./src/playlist/components/playlist"
//import data from '../api.json'
import Home from '../pages/container/home'
import {createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import reducer from '../reducer/index';
import {Map as map} from 'immutable';
import logger from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
/*
function looger({getState, dispatch}){
    return (next)=>{
        return (action)=>{
            console.log("Mi viejo estado", getState().toJS())
            console.log("vamos enviar nuestra accion", action)
            const value = next(action)
            console.log("Este es mi nuevo estado", getState().toJS())
            return value
        }
    }
}
*/
const loogerES6 = ({getState, dispatch})=> next => action=>{
    console.log("Mi viejo estado", getState().toJS())
    console.log("vamos enviar nuestra accion", action)
    const value = next(action)
    console.log("Este es mi nuevo estado", getState().toJS())
    return value
}
const store = createStore(
    reducer,
    map(),
    // Varios middleware
    composeWithDevTools(
        applyMiddleware(
            logger,
            thunk
        )
    )
)
const app = document.getElementById("home-container")

ReactDOM.render(
<Provider store={store} >
    <Home/>
</Provider>,
app)

