import React from "react";
import "firebase/firestore";
import firebase from "./firestore";
import { Link, navigate } from "@reach/router";
import NavigationJH from "./NavigationJH";

const db = firebase.firestore();
const refDoc = db.collection("activity");

class ActivityEnter extends React.Component {
  constructor() {
    super();
    this.state = {
      supervisor:"Oliver Smith",
      activityName: "",
      company: "",
      ccNumber: "",
      site: "",
      id: "",
   
    };
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addDocket = e => {
    e.preventDefault();

    // this.setState({
    //   supervisor:'Oliver Smith',
    // })

    const userRef = refDoc.doc();
    userRef.set({
      supervisor:this.state.supervisor,
      id: userRef.id,
      activityName: this.state.activityName,
      company: this.state.company,
      site: this.state.site,
      ccNumber: this.state.ccNumber,
      
    });
    this.setState({
      supervisor:'Oliver Smith',
      activityName: "",
      company: "",
      ccNumber: "",
      site: "",
      id: "",
      

    },()=>{navigate(`/homejh`)});
  };

  render() {
    return (
      <div>
        <NavigationJH pageName="Enter Activity" active="activity-active" />
        <div class="activityenter">
          <div className="welcome">
            <h2 class="welcome-text">
              Welcome,{" "}
              <span class="welcome-text-color purple">Enter Activity</span>
            </h2>
          </div>

          <div class="input">
            <div class="title__container">
              <h4 className="title__text">New Activity</h4>
              <span class="title__line" />
            </div>

            <div class="input__parent">
              <div class="input__time-box">
                <div class="icon__box">
                  <div>
                  <svg className="icon icon__yellow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>
                  </div>
                </div>

                <div class="input__fields">

                  <div className="input__container">
                    <div class="title__container_m0">
                      <h4 className="title__input">Activity Name</h4>
                      {/* <span class="title__line" /> */}
                    </div>
                    <input
                      type="text"
                      name="activityName"
                      placeholder="Activity Name"
                      onChange={this.updateInput}
                      value={this.state.activityName}
                      className="input__time input__time-break"
                      required
                    />
                  </div>

                  <div className="input__container">
                    <div class="title__container_m0">
                      <h4 className="title__input">Company</h4>
                      {/* <span class="title__line" /> */}
                    </div>
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      onChange={this.updateInput}
                      value={this.state.company}
                      className="input__time input__time-break"
                      required
                    />
                  </div>
             



                </div>
              </div>

              <div class="input__time-box">


                <div class="input__fields">

                <div className="input__container">
                    <div class="title__container_m0">
                      <h4 className="title__input">Cost Code No.</h4>
                      {/* <span class="title__line" /> */}
                    </div>
                    <input
                      type="text"
                      name="ccNumber"
                      placeholder="eg. S1205"
                      onChange={this.updateInput}
                      value={this.state.ccNumber}
                      className="input__time input__time-break"
                      required
                    />
                  </div>

                  <div className="input__container">
                    <div class="title__container_m0">
                      <h4 className="title__input">Site</h4>
                      {/* <span class="title__line" /> */}
                    </div>
                    <input
                      type="text"
                      name="site"
                      placeholder="Site"
                      onChange={this.updateInput}
                      value={this.state.site}
                      className="input__time input__time-break"
                      required
                    />
                  </div>


                </div>
              </div>
              <div class="align__center-row">
                <button onClick={this.addDocket} className="btn btn__submit">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    );
  }
}

export default ActivityEnter;
