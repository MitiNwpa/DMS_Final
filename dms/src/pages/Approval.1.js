import React, { Component } from "react";
import firebase from "./firestore";
import { navigate } from "@reach/router";
import NavigationJH from "./NavigationJH";

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
  }

  componentWillMount() {
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
        <NavigationJH pageName="Docket Approval" active="dockets-active"/>

        <div className="approval">

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
