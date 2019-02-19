import React, { Component } from "react";
import firebase from "./firestore";
import { navigate } from "@reach/router";
import Navigation from "./Navigation";

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const db = firebase.firestore();
const refDoc = db.collection("docket");

class Approval extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      sumArray:[],
      sum: 0
    };

    this.calcSum = this.calcSum.bind(this);
  }

  componentWillMount() {
    db.collection("docket").onWrite( z =>{
      this.calcSum();
    });


    refDoc.onSnapshot(docSnapShot => {
      let items = [];
      docSnapShot.forEach(doc => {
        items.push(doc.data());
      });
      this.setState({
        items,
        loaded: true
      });
    });


  }


  calcSum() {
    var sumArray=[];

    refDoc.where("payAmount", ">", 0).get().then(snapshot => {
      snapshot.forEach(doc => {

        sumArray.push(doc.data().payAmount)

        // this.setState({
        //   tempSum: (doc.data().payAmount)
        // });
      });
      this.setState({
        sumArray
      })
      var sim1 = sumArray.reduce(function(a, b) { return a + b; }, 0);
      this.setState({
        sum:sim1
      })
    });
  }

  renderDockets() {
    const ListItem = this.state.items.map((item, index) => {
      return (
        <li key={index}>
          <div>
            <h5>Company Name : {item.company}</h5>
            <h5>Docket Number : {item.docketNumber}</h5>
            <h5>Activity : {item.activityName}</h5>
            <h5>Approval : {item.status}</h5>
          </div>
          <button
            className="view"
            onClick={() => navigate(`/docketdetailsapproval/${item.id}`)}
          >
            <div />
            view
          </button>
        </li>
      );
    });


    return <ul>{ListItem}</ul>;
  }

  render() {
    // this.calcSum();
    return (
      <div className="father">
        <Navigation pageName="Docket Approval" />

        <div className="approval">
        <h1>SUM :$ {this.state.sum}</h1>
          <h3>Approval stage</h3>
          <br />
          <h3 />
          {this.renderDockets()}
        </div>
      </div>
    );
  }
}

export default Approval;
