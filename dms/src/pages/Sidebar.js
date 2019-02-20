// Import React
import React, { Component } from 'react';
import { Router, navigate ,Link } from '@reach/router';
import firebase from './firestore';
import { slide as Menu } from "react-burger-menu";

import './burger.css'



class Sidebar extends Component{

  

    render(){
    return(
        <Menu>
           
        <a className="menu-item" href='/home'>
          Home
        </a>
       
  
  
        <a className="menu-item" href="/activity">
          Activity
        </a>
        <a className="menu-item" href="/activityenter">
          Activity Enter
        </a>
 
  
        <a className="menu-item" href="/listdockets">
          Dockets
        </a>
        <a className="menu-item" href="/approval">
          Approval
        </a>
        <a className="menu-item" href="/docketdetailsapproval">
          Docket Details Approval
        </a>
        <a className="menu-item" href="/dashboard">
          Dashboard
        </a>
        <a className="menu-item" href="/listdocketsengineer">
          List Dockets Engineer
        </a>
      </Menu>

      
    )
  }
}

export default Sidebar;