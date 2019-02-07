// Import React
import React, { Component } from 'react';
import { Router, navigate ,Link } from '@reach/router';
import firebase from './firestore';
import Sidebar from './Sidebar';

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
        <div className='nav_ham'>
          <Sidebar />
        </div>
   
      <div className='nav_sidebar'>
        <h4>{this.props.pageName}
          </h4>

      </div>
 
      </div>

       
    )
  }
}

export default Navigation;