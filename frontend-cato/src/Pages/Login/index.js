import React, { Component } from 'react';
import InputText from '../../Components/InputText';
import './Login.css';
class Login extends Component {
    render(){
        return (
            <div>
                <div className="Login">
                    <InputText name="email" onChange={this.onChange}/>
                    <br></br>
                    <InputText name="senha" hide={true} onChange={this.onChange}/>
                </div>
            </div> 
        );
    }

    onChange = (event) => {
        // get value inside 
        console.log(event.target.value);
    }
}

export default Login;