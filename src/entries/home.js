import React from 'react'
import ReactDOM from 'react-dom'
//import Playlist from "./src/playlist/components/playlist"
import data from '../api.json'
import Home from '../pages/container/home'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../reducer/data'

const initialState={
    data:{
        ...data,
    },
    search:[]
}

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
console.log(store.getState());
const app = document.getElementById("home-container")

ReactDOM.render(
<Provider store={store} >
    <Home/>
</Provider>,
app)

