// Import React
import React, { Component } from 'react';
import { Router, navigate ,Link } from '@reach/router';
import firebase from './firestore';
import Navigation from './Navigation';


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
      <div className='loginbg'>
            <div className='login'>
            

        <h4 id='login'>Welcome to DMS</h4>
        
        {/* <label className='login' for="uName">UserName</label> */}
        
        <input className='login' 
        type="text"
        name='uName'
         placeholder='Username'/>
{/* <br/>
<label className='login' for="pName">Password</label> */}
        <input className='login'  
        type="password"
        name= 'pName'
        placeholder='Password'/>
        <br />
    
<Link to='/home'>
<button id='login'>Login</button>
</Link>
<span>
          <h6>Forgot Password</h6>
        </span>
     
      </div>  
      </div>


      
    )
  }
}

export default Login;