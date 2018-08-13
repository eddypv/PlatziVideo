import React,{Component} from 'react';
import Media from './media.js';
import './playlist.css';


class Playlist extends Component{
    render(){
        const playlist = this.props.playlist
        return(
            <div className="Playlist">
                {
                    playlist.map((item)=>{
                        return <Media {...item}  key={item.id} handleClick={this.props.handleOpenModal}/>
                    })
                }
                
            </div>
        ) 
        
    }
}
export default Playlist;