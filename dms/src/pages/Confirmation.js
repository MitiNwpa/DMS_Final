import React, { Component } from "react";
import firebase from "./firestore";
import Navigation from "./Navigation";

const db = firebase.firestore();
const refDoc = db.collection("docket");

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div>
        <Navigation pageName="Confirmation" />
        <div>
           <p>This is the Confirmation {this.props.approvalState}</p>
        </div>
      </div>
    );
  }
}

export default Confirmation;
