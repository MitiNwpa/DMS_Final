// Import React
import React, { Component } from "react";
import { Router, navigate, Link } from "@reach/router";
import firebase from "./firestore";
import Navigation from "./Navigation";

class BottomNavigation extends Component {
  // constructor(props){
  //   super(props);
  //   this.state={
  //     user : '',
  //     email:'',
  //     password:'',

  //   }
  // }

  render() {
    return (
      <div className="bottom-navigation">
        <div className="bottom-navigation__item">
          <a href="#">Hrishi</a>
        </div>

        <div className="bottom-navigation__item">
          <a href="#">Gullu</a>
        </div>

        <div className="bottom-navigation__item">
          <a href="#">Nemo</a>
        </div>

        <div className="bottom-navigation__item">
          <a href="#">Bunty</a>
        </div>
        
      </div>
    );
  }
}

export default BottomNavigation;
