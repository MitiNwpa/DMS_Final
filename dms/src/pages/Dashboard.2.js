import React, { Component } from "react";
import firebase from "./firestore";
import Navigation from "./Navigation";

const db = firebase.firestore();
const refDoc = db.collection("docket");
const refActivity = db.collection("activity");
let addd = 9699;
var holder;

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      sumArray: [],
      ccArray: [],
      sum: 0,
      testSum: 10
    };

    this.calcSum = this.calcSum.bind(this);
    this.listCostCodes = this.listCostCodes.bind(this);
    this.mapCostCodes = this.mapCostCodes.bind(this);
    this.clear = this.clear.bind(this);
  }

  componentWillMount() {
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

        this.setState(
          {
            sum: finalSum
          },
          this.listCostCodes
        );
      });
  }

  listCostCodes() {
    let ccArray = [];

    refActivity.get().then(snapshot => {
      snapshot.forEach(doc => {
        ccArray.push(doc.data().ccNumber);
      });

      this.setState({
        ccArray
      });
    });
  }

  clear() {
    this.setState({
      tempArray: 0,
      tempSum: 0
    });
  }


  mapMe(){

  }



  mapCostCodes() {
    const CostCodeMap = this.state.ccArray.map((index, item) => {
      const test = [];
      const promise = refDoc
        .where("ccNumber", "==", `${index}`)
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            test.push(doc.data().payAmount);
          });

          console.log(test);
          addd = test.reduce(function(a, b) {
            return a + b;
          }, 0);
          holder = addd;
          console.log(addd);
          console.log(`the holder is ${holder}`);
          console.log(`the cost code is step 2 ${index}`);
          console.log(`the key is ${item}`);

        });

      console.log(`the cost code is step 2 ${index}`);
      return (
          <li key={item}>
            the cost code is {index} cost is plij {holder}
          </li>
       );
    });

    return (
      <ul>
        <div>
          <h4>CostCode</h4>
          {CostCodeMap}
        </div>
      </ul>
    );
  }

  render() {
    console.log(`please man the holder is $`);
    return (
      <div>
        <Navigation pageName="Dashboard" />
        <div>
          <h1>SUM :$ {this.state.sum}</h1>
          <p>This is the Dashboard 1234</p>
          <button onClick={this.mapCostCodes} />
          {/* <div>{this.mapCostCodes()}</div> */}
          {console.log(`holder issssssss ${holder}`)}
        </div>
      </div>
    );
  }
}

export default Dashboard;
