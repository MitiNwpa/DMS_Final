import React, { Component } from "react";
import firebase from "./firestore";
import Navigation from "./Navigation";

const db = firebase.firestore();
const refDoc = db.collection("docket");

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      sumArray: [],
      sum: 0
    };

    this.calcSum = this.calcSum.bind(this);
  }
  componentDidMount(){
    this.calcSum();
  }

  calcSum() {
    let sumArray = [];

    refDoc
      .where("payAmount", ">", 0)
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          sumArray.push(doc.data().payAmount);
        });

        this.setState({
          sumArray
        });

        let finalSum = sumArray.reduce(function(a, b) {
          return a + b;
        }, 0);
        this.setState({
          sum: finalSum
        });
      });
  }

  render() {
    return (
      <div>
        <Navigation pageName="Dashboard" />
        <div>
          <h1>SUM :$ {this.state.sum}</h1>

          <p>This is the Dashboard 1234</p>
        </div>
      </div>
    );
  }
}

export default Dashboard;
