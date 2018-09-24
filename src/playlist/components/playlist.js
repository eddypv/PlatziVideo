import React,{Component} from 'react';
//import Media from './media.js';
import MediaContainer from '../containers/media';
import './playlist.css';



function Playlist (props){
    return(
        <div className="Playlist">
            {
                props.playlist.map((mediaId)=>{
                    return <MediaContainer id={mediaId} openModal={props.handleOpenModal}  key={mediaId}/>
                })
            }
            
        </div>
    ) 
}
export default Playlist;