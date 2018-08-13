import React from 'react'
import ReactDOM from 'react-dom'
//import Playlist from "./src/playlist/components/playlist"
import data from '../api.json'
import Home from '../pages/container/home'
const app = document.getElementById("home-container")

ReactDOM.render(<Home data={data} />,app)

