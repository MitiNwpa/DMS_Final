// Import React
import React, { Component } from 'react';
import { Router, navigate ,Link } from '@reach/router';
import firebase from './firestore';


class Login extends Component{
constructor(props){
  super(props);
  this.state={
    user : '',
    email:'',
    password:'',


  }
}



  render(){
    return(
      <div>
        hello
        <input type="text"
         placeholder='Username'/>
        <input type="text" 
        placeholder='Password'/>
<Link to='/home'>
<button>Login In</button>
</Link>
     
      </div>

      
    )
  }
}

export default Login;