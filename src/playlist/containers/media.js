import React, {Component} from 'react';
import Media from '../components/media';
import { connect } from 'react-redux';
//import data from '../../reducer/data';

class MediaContainer extends Component{
    render(){
        return <Media {...this.props.data.toJS()}/>
    }
}
function mapStateToProps(state, props){
    const data= state.get('data').get('entities').get('media').get(props.id)
    return {
        data:data
    };
}

export default connect(mapStateToProps)(MediaContainer);