// Import React
import React, { Component } from "react";
import { Router, navigate, Link } from "@reach/router";
import firebase from "./firestore";
import Navigation from "./Navigation";
import lxra from "../img/NWPA_LXRA_logo.png";

class LoginJH extends Component {
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
      <div className="login login__nwpa">
        <div className="login__main">

          <div class="login__logo">
          <img src={lxra} alt=""  class="login__logo-png"/>
            
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

            <Link to="/homejh">
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

export default LoginJH;
