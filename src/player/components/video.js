import React, {Component} from 'react';

class Video extends Component{
    
    togglePlay(){
        if(this.props.pause){
            this.video.play();
        }else{
            this.video.pause();
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.pause !== this.props.pause){
            this.togglePlay()
        }
    }
    setRef =(element) =>{
        this.video = element
    }

    render(){
        return(
            <div className="Video">
                <video 
                    autoPlay={this.props.autoPlay}
                    src={this.props.src} 
                    ref={this.setRef}
                    onLoadedMetadata={this.props.onLoadedMetaData}
                />  
            </div>
        )
    }

 }
export default Video;