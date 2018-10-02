import React, {Component} from 'react';
import Media from '../components/media';
import { connect } from 'react-redux';
import {openModal} from '../../actions/index'

class MediaContainer extends Component{
    openModal=(id)=>{
        this.props.dispatch(openModal(id))
    }
    render(){
        return <Media openModal={this.openModal} {...this.props.data.toJS()}/>
    }
}
function mapStateToProps(state, props){
    const data= state.get('data').get('entities').get('media').get(props.id)
    return {
        data:data
    };
}

export default connect(mapStateToProps)(MediaContainer);