// Import React
import React, { Component } from "react";
import { Router, navigate, Link } from "@reach/router";
import firebase from "./firestore";
import Sidebar from "./Sidebar";
import download from "../img/chat.svg";
import nwpalogo from "../img/NWPA_logo.png";

// import './index.css'

class NavigationJH extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageName: ""
    };
  }

  render() {
    return (
      <div>
        <div class="navigation-heading navigation-heading_nwpa">
          <div class="navigation-heading__logo-box navigation-heading__logo-box-small">
            <img src={nwpalogo} alt=""  class="navigation-heading__logo-box-image"/>
          </div>
          <h1 class="navigation-heading__heading navigation-heading__heading-black">{this.props.pageName}</h1>
        </div>

        <div className="navigation">
          <div class={`navigation__container container-activity-${this.props.active}`}>
            <Link style={{ textDecoration: "none" }} to="/activityenter">
              <div className="navigation__item">
                <svg
                  className={`navigation__icon activity-${this.props.active}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0V0z" />
                  <path d="M7 15h7v2H7zm0-4h10v2H7zm0-4h10v2H7zm12-4h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04-.39.08-.74.28-1.01.55-.18.18-.33.4-.43.64-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z" />
                </svg>
                <a className={`navigation__text text-activity-${this.props.active}`} href="">
                  Activity
                </a>
              </div>
            </Link>
          </div>

          <div class={`navigation__container container-home-${this.props.active}`}>
            <Link style={{ textDecoration: "none" }} to="/homejh">
              <div className="navigation__item">
                <svg
                  className={`navigation__icon home-${this.props.active}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0V0z" />
                  <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
                </svg>
                <a className={`navigation__text text-home-${this.props.active}`} href="#">
                  Home
                </a>
              </div>
            </Link>
          </div>

          <div class={`navigation__container container-dashboard-${this.props.active}`}>
            <Link style={{ textDecoration: "none" }} to="/dashboard">
              <div className="navigation__item">
              <svg className={`navigation__icon dashboard-${this.props.active}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M6.4 9.2h.2c.77 0 1.4.63 1.4 1.4v7c0 .77-.63 1.4-1.4 1.4h-.2c-.77 0-1.4-.63-1.4-1.4v-7c0-.77.63-1.4 1.4-1.4zM12 5c.77 0 1.4.63 1.4 1.4v11.2c0 .77-.63 1.4-1.4 1.4-.77 0-1.4-.63-1.4-1.4V6.4c0-.77.63-1.4 1.4-1.4zm5.6 8c.77 0 1.4.63 1.4 1.4v3.2c0 .77-.63 1.4-1.4 1.4-.77 0-1.4-.63-1.4-1.4v-3.2c0-.77.63-1.4 1.4-1.4z"/></svg>
                <a className={`navigation__text text-dashboard-${this.props.active}`} href="#">
                  Dashboard
                </a>
              </div>
            </Link>
          </div>

          <div class={`navigation__container container-dockets-${this.props.active}`}>
            <Link style={{ textDecoration: "none" }} to="/approval">
              <div className="navigation__item">
                <svg
                  className={`navigation__icon dockets-${this.props.active}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0V0z" />
                  <path d="M18 9l-1.41-1.42L10 14.17l-2.59-2.58L6 13l4 4zm1-6h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04-.39.08-.74.28-1.01.55-.18.18-.33.4-.43.64-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z" />
                </svg>
                <a className={`navigation__text text-dockets-${this.props.active}`} href="#">
                  Dockets
                </a>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default NavigationJH;
