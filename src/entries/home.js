import React from 'react'
import ReactDOM from 'react-dom'
//import Playlist from "./src/playlist/components/playlist"
//import data from '../api.json'
import Home from '../pages/container/home'
import {createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import reducer from '../reducer/index';
import {Map as map} from 'immutable';

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
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    applyMiddleware(loogerES6)
)
const app = document.getElementById("home-container")

ReactDOM.render(
<Provider store={store} >
    <Home/>
</Provider>,
app)

