// Import React
import React, { Component } from 'react';
import { Router, navigate ,Link } from '@reach/router';
import firebase from './firestore';
import './index.css'



class Navigation extends Component{
  constructor(props){
    super(props);
    this.state={
      pageName:''
    }
  }

    render(){
    return(
      <div className='nav'>
          welcome to {this.props.pageName}
      </div>

      
    )
  }
}

export default Navigation;