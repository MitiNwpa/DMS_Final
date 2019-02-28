import React, { Component } from "react";
import { Router, navigate, Link } from "@reach/router";
import firebase from "./firestore";
import _ from "lodash";
// import './index.css'
import Navigation from "./Navigation";

var moment = require("moment");
moment().format();

const db = firebase.firestore();
const refUser = db.collection("user").doc("joe");
const refActivity = db.collection("activity");
const refDocket = db.collection("docket");
const refDocketNumber = db.collection("docketNumber").doc("docketNumber");
var today = new Date(),
  date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();

class DocketEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: date,
      companyName: "",
      contactNumber: "",
      firstName: "",
      hourlyRate: "",
      lastName: "",
      overtimeRate: "",
      position: "",
      totalHours: "",
      activityName: "",
      ccNumber: "",
      company: "",
      id: "",
      site: "",
      pay: "",
      status: "pending",
      startTime: "08:00",
      endTime: "16:00",
      breakTime: "30",
      docketNumber: 0,
      timeStamp: 0
    };
    this.readUser = this.readUser.bind(this);
    this.readActivity = this.readActivity.bind(this);
    this.readDocketNumber = this.readDocketNumber.bind(this);
    this.addDocket = this.addDocket.bind(this);
    this.calc = this.calc.bind(this);
    this.navigateBois = this.navigateBois.bind(this);
  }

  componentWillMount() {
    this.readDocketNumber();
    this.readActivity();
    this.readUser();
  }

  readDocketNumber() {
    const promise = refDocketNumber.get();
    promise.then(snapshot => {
      this.setState({
        docketNumber: snapshot.data().number
      });
    });
  }

  readUser() {
    const promise = refUser.get();
    promise.then(snapshot => {
      this.setState({
        companyName: snapshot.data().companyName,
        contactNumber: snapshot.data().contactNumber,
        firstName: snapshot.data().firstName,
        hourlyRate: snapshot.data().hourlyRate,
        lastName: snapshot.data().lastName,
        overtimeRate: snapshot.data().overtimeRate,
        position: snapshot.data().position
      });
    });
  }

  readActivity() {
    const promise = refActivity.doc(`${this.props.userID}`).get();
    promise.then(snapshot => {
      this.setState({
        activityName: snapshot.data().activityName,
        ccNumber: snapshot.data().ccNumber,
        company: snapshot.data().company,
        id: snapshot.data().id,
        site: snapshot.data().site
      });
    });
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  calc() {
    var start = moment(this.state.startTime, "HH::mm A");
    var end = moment(this.state.endTime, "HH::mm A");
    var breakT = this.state.breakTime / 60;
    var result = moment.duration(end.diff(start));
    var hours = result.asHours() - breakT;
    let rate = this.state.hourlyRate;
    let pay = rate * hours;

    this.setState(
      {
        totalHours: hours,
        pay: pay
      },
      () => {
        this.addDocket();
      }
    );
  }

  addDocket() {
    // e.preventDefault();
    const ref = refDocket.doc();
    ref.set(
      {
        companyName: this.state.companyName,
        contactNumber: this.state.contactNumber,
        firstName: this.state.firstName,
        hourlyRate: this.state.hourlyRate,
        lastName: this.state.lastName,
        overtimeRate: this.state.overtimeRate,
        position: this.state.position,
        totalHours: this.state.totalHours,
        activityName: this.state.activityName,
        ccNumber: this.state.ccNumber,
        company: this.state.company,
        id: ref.id,
        site: this.state.site,
        payAmount: this.state.pay,
        status: "pending",
        startTime: this.state.startTime,
        endTime: this.state.endTime,
        breakTimethis: this.state.breakTime,
        docketNumber: this.state.docketNumber,
        supervisorComment: "",
        engineerComment: "",
        timeStamp: firebase.firestore.FieldValue.serverTimestamp()
      },
      this.setState({
        id: ref.id
      })
    );

    db.collection("docketNumber")
      .doc("docketNumber")
      .set({
        number: this.state.docketNumber + 1
      });

    this.navigateBois();
  }

  navigateBois() {
    navigate(`/listdockets`);
  }

  render() {
    return (
      <div>
        <Navigation pageName="Docket Entry" />

        <div className="docketentry">
          <div className="welcome">
            <h2 class="welcome-text">
              Welcome, <span class="welcome-text-color">Docket Entry</span>
            </h2>
          </div>

          {/* <h3>
            Docket Entry for {this.state.activityName} at {this.state.site}
          </h3> */}
          {/* <br />
          <h3>Date:{this.state.date}</h3>
          <br /> */}
          {/* <form> */}
          <div class="input">
            {/* <div class="title__container">
              <h4 className="title__text">Docket Entry</h4>
              <span class="title__line" />
            </div> */}

            <div class="input__parent">
              <div class="input__time-box">
                <div class="icon__box">
                  <div>
                    <svg
                      className="icon icon__green"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path fill="none" d="M0 0h24v24H0V0z" />
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-.22-13h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l4.15 2.49c.34.2.78.1.98-.24.21-.34.1-.79-.25-.99l-3.87-2.3V7.72c0-.4-.32-.72-.72-.72z" />
                    </svg>
                  </div>
                </div>

                <div class="input__fields">
                  <div className="input__container">
                    <div class="title__container_m0">
                      <h4 className="title__input">Start Time</h4>
                      {/* <span class="title__line" /> */}
                    </div>
                    <input
                      type="time"
                      name="startTime"
                      value={this.state.startTime}
                      className="input__time"
                      onChange={this.updateInput}
                      required
                    />
                  </div>

                  <br />

                  <div className="input__container">
                    <div class="title__container_m0">
                      <h4 className="title__input">End Time</h4>
                      {/* <span class="title__line" /> */}
                    </div>
                    <input
                      type="time"
                      name="endTime"
                      value={this.state.endTime}
                      className="input__time"
                      onChange={this.updateInput}
                      required
                    />
                  </div>
                </div>
              </div>

              <div class="input__time-box">
                <div class="icon__box">
                  <div>
                    <svg
                      className="icon icon__yellow"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path fill="none" d="M0 0h24v24H0V0z" />
                      <path d="M21.9 5H18V2c0-.55-.45-1-1-1s-1 .45-1 1v3h-3.9c-.59 0-1.05.51-1 1.1l.12 1.21C14.9 8.16 18 10.77 18 15l.02 8h1.7c.84 0 1.53-.65 1.63-1.47L22.89 6.1c.06-.59-.4-1.1-.99-1.1zM15 21H2c-.55 0-1 .45-1 1s.45 1 1 1h13c.55 0 1-.45 1-1s-.45-1-1-1zM2.1 15h12.8c.62 0 1.11-.56.99-1.16-.65-3.23-4.02-4.85-7.39-4.85s-6.73 1.62-7.39 4.85c-.12.6.38 1.16.99 1.16zM15 17H2c-.55 0-1 .45-1 1s.45 1 1 1h13c.55 0 1-.45 1-1s-.45-1-1-1z" />
                    </svg>
                  </div>
                </div>

                <div class="input__fields">
                  <div className="input__container">
                    <div class="title__container_break">
                      <h4 className="title__input">Break</h4>
                      {/* <span class="title__line" /> */}
                    </div>
                    <input
                      type="number"
                      name="breakTime"
                      value={this.state.breakTime}
                      className="input__time input__time-break"
                      onChange={this.updateInput}
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="align__center-row">
                <button onClick={this.calc} className="btn btn__submit">
                  Agree to terms
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* </form> */}
      </div>
    );
  }
}

export default DocketEntry;
