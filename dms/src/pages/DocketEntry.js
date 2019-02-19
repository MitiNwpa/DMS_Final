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

class DocketEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      startTime: "",
      endTime: "",
      breakTime: "",
      docketNumber: 0
    };
    this.readUser = this.readUser.bind(this);
    this.readActivity = this.readActivity.bind(this);
    this.readDocketNumber = this.readDocketNumber.bind(this);
    this.addDocket = this.addDocket.bind(this);
    this.calc = this.calc.bind(this);
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
    ref.set({
        companyName: this.state.companyName,
        contactNumber: this.state.contactNumber,
        firstName: this.state.firstName,
        hourlyRate: this.state.hourlyRate,
        lastName: this.state.lastName,
        overtimeRate: this.state.overtimeRate,
        position: this.state.position,
        totalHours: this.state.totalHours,
        // activityName: this.state.activityName,
        ccNumber: this.state.ccNumber,
        company: this.state.company,
        id: ref.id,
        site: this.state.site,
        payAmount: this.state.pay,
        status: "pending",
        startTime: this.state.startTime,
        endTime: this.state.endTime,
        breakTimethis: this.state.breakTime,
        docketNumber: this.state.docketNumber
      });
      
        db.collection("docketNumber").doc("docketNumber").set({
          number:(this.state.docketNumber + 1)
       
      });
  }

  render() {
    return (
      <div>
        <Navigation pageName="Docket Entry" />

        <div className="docketentry">
          <h3>
            Docket Entry for {this.state.activityName} at {this.state.site}
          </h3>
          <br />
          <h3>Date: 08/02/19</h3>
          <br />
          {/* <form> */}
            <div>
              <label for="startTime">Enter Start Time</label>
              <input
                type="time"
                name="startTime"
                value={this.state.startTime}
                onChange={this.updateInput}
                required
              />
            </div>

            <br />

            <div>
              <label for="startTime">Enter End Time</label>
              <input
                type="time"
                name="endTime"
                value={this.state.endTime}
                onChange={this.updateInput}
                required
              />
            </div>

            <br />
            <div>
              <label for="breakTime">Break(mins)</label>
              <input
                className="breaktime"
                type="number"
                name="breakTime"
                value={this.state.breakTime}
                onChange={this.updateInput}
                required
              />
            </div>

            <button onClick={this.calc}>
              Agree to terms
            </button>
          {/* </form> */}
          <Link to="/confirm">
            <button>Send</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default DocketEntry;
