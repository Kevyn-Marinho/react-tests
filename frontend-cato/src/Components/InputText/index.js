import React, { Component } from 'react'

class InputText extends Component {
    render() {
        return (
            <input 
                type={this.props.hide ? "password" : "text"} 
                value={this.props.value} 
                onChange={this.props.onChange} 
                />
        );
    }
}

export default InputText;