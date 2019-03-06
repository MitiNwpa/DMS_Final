// Import React
import React, { Component } from "react";
import { Router, navigate, Link } from "@reach/router";
import firebase from "./firestore";
import Navigation from "./Navigation";

class UserSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      email: "",
      password: ""
    };
  }

  render() {
    return (
      <div className="loginbg">
        <div className="login">
          <h4 id="login">Choose your user</h4>

          {/* <label className='login' for="uName">UserName</label> */}
          <Link to="/login">
            <button id="login">Subcontractor</button>
          </Link>

          <Link to="/loginjh">
            <button id="login">Supervisor</button>
          </Link>
          <span>
            <h6>Forgot Password</h6>
          </span>
        </div>
      </div>
    );
  }
}

export default UserSelect;
