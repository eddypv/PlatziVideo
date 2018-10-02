import React, {Component} from 'react';
import Search from '../components/search';
import {connect} from 'react-redux';
import {searchEntities} from '../../actions/index'

class SearchContainer extends Component{
    state ={
        value:""
    }
    handleSubmit =(event) =>{
        event.preventDefault()
        this.props.dispatch(searchEntities(this.input.value))
    }
    setInputRef =(element)=>{
        this.input = element
    }
    handleInputChange =(event)=>{
        this.setState({
            value:event.target.value.replace(" ", "-")
        })
    }

    render(){
        return(
            <Search 
                handleSubmit={this.handleSubmit} 
                setRef={this.setInputRef}
                value={this.state.value}
                handleChange = {this.handleInputChange}
            />
        )
    }
}
export default connect()(SearchContainer);
