import React, {Component} from 'react';

class Video extends Component{
    
    render(){
        return(
            <div className="Video">
                <video 
                    controls
                    autoPlay={this.props.autoPlay}
                    src={this.props.src} 
                />  
            </div>
        )
    }

 }
export default Video;