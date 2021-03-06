import React, {Component} from 'react';
import "./media.css"
import PropTypes from 'prop-types'
class Media extends Component{

    state = {
        author:"Eddy Perez"
    }
    
    
    handleClick =(event)=>{
        this.props.openModal(this.props.id)
    }
    render(){
        const styles = {
            container:{
                fontSize:"20px",
                color:"#44546b",
                cursor:"pointer",
                width:"260", 
                border:"1px solid red"
            }
        }
        return(
            <div className="Media" onClick={this.handleClick}>
                <div className="Media-cover">
                    <img 
                        className="Media-image"
                        src={this.props.cover}
                        alt=""
                        width={260}
                        height={160}
                    />
                    <h3 className="Media-title">{this.props.title}</h3>
                    <p className="Media-author">{this.props.author}</p>
                </div>
            </div>
        )        
    }
}
Media.propTypes ={
    image:PropTypes.string,
    title:PropTypes.string.isRequired,
    author:PropTypes.string,
    type:PropTypes.oneOf(["audio", "video"])

}
export default Media;