import React, {Component} from 'react';
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer'
import Controls from '../components/video-player-controls';
class VideoPlayer extends Component{
    state = {
        pause:false,
        duration:0
    }
    togglePlay =(event) =>{
        this.setState({
            pause:!this.state.pause
        })
    }
    componentDidMount(){
        this.setState({
            pause:!this.props.autoPlay
        })
    }
    handleLoadedMetaData =(event) =>{
        this.video = event.target
        this.setState({
            duration:this.video.duration
        }) 
    }
    render(){
        return (
            <VideoPlayerLayout>
                <Title title="Ejemplo de it" />
                <Controls>
                    <PlayPause 
                        handleClick={this.togglePlay}
                        pause={this.state.pause}    
                    />
                    <Timer duration={this.state.duration}/>
                </Controls>
                <Video 
                    autoPlay={this.props.autoPlay}
                    pause={this.state.pause}
                    onLoadedMetaData={this.handleLoadedMetaData}
                    src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
                    
                />
            </VideoPlayerLayout>
        )
    }
}
export default VideoPlayer;
