import React, { Component } from "react";
import firebase from "./firestore";
import Navigation from "./Navigation";

const db = firebase.firestore();
const refDoc = db.collection("docket");
const refActivity = db.collection("activity");


class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      sumArray: [],
      ccArray:[],
      sum: 0
    };

    this.calcSum = this.calcSum.bind(this);
    this.listCostCodes = this.listCostCodes.bind(this);
    this.mapCostCodes = this.mapCostCodes.bind(this);


  }
  componentDidMount(){
    this.calcSum();
    this.listCostCodes();

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




  listCostCodes(){
    let ccArray = [];

    refActivity
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        ccArray.push(doc.data().ccNumber);
      },()=>{
        this.mapCostCodes();
      });

      this.setState({
        ccArray
      });
    });
}


mapCostCodes(){
  const CostCodeMap = this.state.ccArray.map((index,item)=>{
    console.log(`the cost code is ${index}`);
    return(
      <div>
      <li key={item.id} id={item.id}>the cost code is {index}</li>
      </div>
    )
  });

  return(
    <ul>
      <div>
        <h4>CostCode</h4>
          {CostCodeMap}
      </div>
    </ul>
  )
}

  

  render() {
    return (
      <div>
        <Navigation pageName="Dashboard" />
        <div>
          <h1>SUM :$ {this.state.sum}</h1>

          <p>This is the Dashboard 1234</p>
          <div>{this.mapCostCodes()}</div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
