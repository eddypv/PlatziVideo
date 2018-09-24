import React, {Component} from 'react';
import Media from '../components/media';
import { connect } from 'react-redux';
//import data from '../../reducer/data';

class MediaContainer extends Component{
    render(){
        return <Media {...this.props.data}/>
    }
}
function mapStateToProps(state, props){
    const data= state.data.entities.media[props.id]
    return {
        data:data
    };
}

export default connect(mapStateToProps)(MediaContainer);