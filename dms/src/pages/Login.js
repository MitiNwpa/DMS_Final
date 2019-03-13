// Import React
import React, { Component } from "react";
import { Router, navigate, Link } from "@reach/router";
import firebase from "./firestore";
import Navigation from "./Navigation";

class Login extends Component {
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
      <div className="login">


        <div className="login__main">
          <h4 id="login">Welcome to DMS</h4>


          <input
            className="input__login"
            type="text"
            name="uName"
            placeholder="Username"
          />

          <input
            className="input__login"
            type="password"
            name="pName"
            placeholder="Password"
          />

          <Link to="/home">
            <button id="login">Login</button>
          </Link>
          <span>
            <h6>Forgot Password</h6>
          </span>
        </div>
      </div>
    );
  }
}

export default Login;
