// Import React
import React, { Component } from "react";
import { Router, navigate, Link } from "@reach/router";
import firebase from "./firestore";
import Sidebar from "./Sidebar";
import download from "../img/chat.svg";

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
        <div class="navigation-heading red">
          <div class="navigation-heading__logo-box">
            <svg
              className="navigation-heading__icon navigation-heading__icon-large"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 219 72"
            >
              <polygon
                fill="#FFFFFF"
                points="18.4,45.9 18.4,55.5 7.4,55.5 7.4,45.9 0,45.9 0,71.6 7.4,71.6 7.4,61.9 18.4,61.9 18.4,71.6 
	25.8,71.6 25.8,45.9 "
              />
              <polygon
                fill="#FFFFFF"
                points="66.9,45.8 66.9,71.5 88.8,71.5 88.8,65 74.3,65 74.3,45.8 "
              />
              <polygon
                fill="#FFFFFF"
                points="96.4,45.8 96.4,71.5 118.3,71.5 118.3,65 103.8,65 103.8,45.8 "
              />
              <polygon
                fill="#FFFFFF"
                points="134.9,45.8 123.9,71.5 131.5,71.5 138.6,54.1 145.8,71.5 153.8,71.5 142.9,45.8 "
              />
              <polygon
                fill="#FFFFFF"
                points="178.1,45.8 178.1,59.5 167.5,45.8 159.3,45.8 159.3,71.5 166.5,71.5 166.5,55.7 178.9,71.5 
	185.1,71.5 185.1,45.8 "
              />
              <g>
                <defs>
                  <path
                    id="SVGID_1_"
                    d="M200.3,52h3.3c4.1,0,7,2.2,7,6.6c0,4.2-2.9,6.6-7,6.6h-3.3V52z M192.8,45.8v25.7h10.9
			c8.2,0,14.4-4.3,14.4-12.9c0-8.8-6.2-12.9-14.4-12.9H192.8z"
                  />
                </defs>
                <clipPath id="SVGID_2_">
                  <use xlinkHref="#SVGID_1_" overflow="visible" />
                </clipPath>
                <rect
                  x="187.8"
                  y="40.8"
                  clip-path="url(#SVGID_2_)"
                  fill="#FFFFFF"
                  width="35.2"
                  height="35.7"
                />
              </g>
              <g>
                <defs>
                  <path
                    id="SVGID_3_"
                    d="M132.6,13.3c0-3.8,2.4-6.7,6.3-6.7c3.9,0,6.3,2.9,6.3,6.7c0,3.8-2.4,6.7-6.3,6.7
			C135,20,132.6,17.1,132.6,13.3 M125.1,13.3c0,8,6,13.3,13.8,13.3c7.7,0,13.8-5.3,13.8-13.3c0-8.1-6.1-13.3-13.8-13.3
			C131.2,0,125.1,5.2,125.1,13.3"
                  />
                </defs>
                <clipPath id="SVGID_4_">
                  <use xlinkHref="#SVGID_3_" overflow="visible" />
                </clipPath>
                <rect
                  x="120.1"
                  y="-5"
                  clip-path="url(#SVGID_4_)"
                  fill="#FFFFFF"
                  width="37.6"
                  height="36.6"
                />
              </g>
              <g>
                <defs>
                  <path
                    id="SVGID_5_"
                    d="M40.1,58.6c0-3.8,2.4-6.7,6.3-6.7c3.9,0,6.3,2.9,6.3,6.7c0,3.8-2.4,6.7-6.3,6.7S40.1,62.4,40.1,58.6
			 M32.6,58.6c0,8,6,13.3,13.8,13.3c7.7,0,13.8-5.3,13.8-13.3c0-8.1-6.1-13.3-13.8-13.3S32.6,50.5,32.6,58.6"
                  />
                </defs>
                <clipPath id="SVGID_6_">
                  <use xlinkHref="#SVGID_5_" overflow="visible" />
                </clipPath>
                <rect
                  x="27.6"
                  y="40.4"
                  clip-path="url(#SVGID_6_)"
                  fill="#FFFFFF"
                  width="37.6"
                  height="36.6"
                />
              </g>
              <polygon
                fill="#FFFFFF"
                points="177.8,0.6 177.8,10.2 166.8,10.2 166.8,0.6 159.4,0.6 159.4,26.3 166.8,26.3 166.8,16.7 177.8,16.7 
	177.8,26.3 185.2,26.3 185.2,0.6 "
              />
              <polygon
                fill="#FFFFFF"
                points="211.6,0.6 211.6,14.3 201.1,0.6 192.8,0.6 192.8,26.3 200.1,26.3 200.1,10.5 212.5,26.3 218.7,26.3 
	218.7,0.6 "
              />
              <g>
                <defs>
                  <path
                    id="SVGID_7_"
                    d="M110.9,0.6v15.8c0,2-0.9,3.6-3,3.6h-1.3c-2.2,0-3.1-1.7-3.1-3.6v-2.9h-7v3.7c0,5.5,3.1,9.4,10.1,9.4h1.3
			c6.9,0,10.5-3.9,10.5-9.4V0.6H110.9z"
                  />
                </defs>
                <clipPath id="SVGID_8_">
                  <use xlinkHref="#SVGID_7_" overflow="visible" />
                </clipPath>
                <rect
                  x="91.4"
                  y="-4.4"
                  clip-path="url(#SVGID_8_)"
                  fill="#FFFFFF"
                  width="31.9"
                  height="36"
                />
              </g>
              <rect
                x="119.2"
                y="32.5"
                fill="#FFFFFF"
                width="39.3"
                height="6.5"
              />
            </svg>
          </div>
          <div class="navigation-heading__setting-box">
            <svg
              className="navigation-heading__icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
            </svg>
          </div>
          <h1 class="navigation-heading__heading">{this.props.pageName}</h1>
        </div>

        <div className="navigation">
          <div class="navigation__container">
            <Link style={{ textDecoration: "none" }} to="/activityenter">
              <div className="navigation__item">
                <svg
                  className="navigation__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0V0z" />
                  <path d="M7 15h7v2H7zm0-4h10v2H7zm0-4h10v2H7zm12-4h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04-.39.08-.74.28-1.01.55-.18.18-.33.4-.43.64-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z" />
                </svg>
                <a className="navigation__text" href="">
                  Activity
                </a>
              </div>
            </Link>
          </div>

          <div class="navigation__container">
            <Link style={{ textDecoration: "none" }} to="/homejh">
              <div className="navigation__item">
                <svg
                  className="navigation__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0V0z" />
                  <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
                </svg>
                <a className="navigation__text" href="#">
                  Home
                </a>
              </div>
            </Link>
          </div>

          <div class="navigation__container">
            <Link style={{ textDecoration: "none" }} to="/dashboard">
              <div className="navigation__item">
                <svg
                  className="navigation__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0V0z" />
                  <path d="M18 9l-1.41-1.42L10 14.17l-2.59-2.58L6 13l4 4zm1-6h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04-.39.08-.74.28-1.01.55-.18.18-.33.4-.43.64-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z" />
                </svg>
                <a className="navigation__text" href="#">
                  Dashboard
                </a>
              </div>
            </Link>
          </div>

          <div class="navigation__container">
            <Link style={{ textDecoration: "none" }} to="/approval">
              <div className="navigation__item">
                <svg
                  className="navigation__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0V0z" />
                  <path d="M18 9l-1.41-1.42L10 14.17l-2.59-2.58L6 13l4 4zm1-6h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04-.39.08-.74.28-1.01.55-.18.18-.33.4-.43.64-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z" />
                </svg>
                <a className="navigation__text" href="#">
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
