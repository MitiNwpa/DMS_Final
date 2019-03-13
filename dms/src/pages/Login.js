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

          <div class="login__logo">
            <svg
              className="login__logo-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />>
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M15 11V5.83c0-.53-.21-1.04-.59-1.41L12.7 2.71c-.39-.39-1.02-.39-1.41 0l-1.7 1.7C9.21 4.79 9 5.3 9 5.83V7H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2h-4zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z" />
            </svg>
            <span class="login__logo-name">CivilEX</span>
          </div>

          <div class="login__input">
            <input
              className="login__input-text"
              type="text"
              name="uName"
              placeholder="Username"
            />

            <input
              className="login__input-text"
              type="password"
              name="pName"
              placeholder="Password"
            />

            <Link to="/home">
              <button className="btn btn__login" id="login">
                Login
              </button>
            </Link>
            <span className="login__input-forgot">
              <h6>Forgot Password</h6>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
