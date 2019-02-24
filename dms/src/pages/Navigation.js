// Import React
import React, { Component } from "react";
import { Router, navigate, Link } from "@reach/router";
import firebase from "./firestore";
import Sidebar from "./Sidebar";
import download from "../img/chat.svg";

// import './index.css'

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageName: ""
    };
  }

  render() {
    return (
      <div className="navigation">
        <div className="navigation__item">
          
          <svg class="navigation__icon">
            <use xlinkhref="../img/sprite.svg#icon-star" />
          </svg>

          <a href="#">Hrishi</a>
        </div>

        <div className="navigation__item">
          <a href="#">Gullu</a>
        </div>

        <div className="navigation__item">
          <a href="#">Nemo</a>
        </div>

        <div className="navigation__item">
          <a href="#">Bunty</a>
        </div>
      </div>
    );
  }
}
export default Navigation;
