import React, {Component} from 'react';
import Search from '../components/search';

class SearchContainer extends Component{
    state ={
        value:""
    }
    handleSubmit =(event) =>{
        event.preventDefault()
        console.log(this.input.value)
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
export default SearchContainer;
