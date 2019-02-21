import React from "react";
import "firebase/firestore";
import firebase from "./firestore";
import Navigation from "./Navigation";
import { Link, navigate } from "@reach/router";

const db = firebase.firestore();
const refDoc = db.collection("docket");

class DocketDetailsApproval extends React.Component {
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
      status: "",
      comment: "",
      startTime: "",
      endTime: "",
      break: "",
    };
    this.readDocket = this.readDocket.bind(this);
  }

  componentWillMount() {
    this.readDocket();
  }
  readDocket() {
    const promise = refDoc.doc(`${this.props.userID}`).get();
    promise.then(snapshot => {
      this.setState({
        activityName: snapshot.data().activityName,
        ccNumber: snapshot.data().ccNumber,
        company: snapshot.data().company,
        id: snapshot.data().id,
        site: snapshot.data().site,
        ccNumber: snapshot.data().ccNumber,
        companyName: snapshot.data().companyName,
        contactNumber: snapshot.data().contactNumber,
        firstName: snapshot.data().firstName,
        hourlyRate: snapshot.data().hourlyRate,
        lastName: snapshot.data().lastName,
        overtimeRate: snapshot.data().overtimeRate,
        position: snapshot.data().position,
        payAmount: snapshot.data().payAmount,
        totalHours: snapshot.data().totalHours,
        startTime: snapshot.data().startTime,
        endTime: snapshot.data().endTime,
        breakTimethis: snapshot.data().breakTimethis,
        status: snapshot.data().status,
        supervisorComment: snapshot.data().supervisorComment

      });
    });
  }
  deleteDocket = e => {
    refDoc
      .doc(e.target.value)
      .delete()
      .then(function() {
        console.log("Document successfully deleted!");
      })
      .catch(function(error) {
        console.error("Error removing document: ", error);
      });
  };

  holdDocket = e => {
    refDoc.doc(e.target.value).update({
      status: "pending"
    });
  };

  approveDocket = e => {
    refDoc.doc(e.target.value).update({
      status: "approved"
    });
  };

  rejectDocket = e => {
    refDoc.doc(e.target.value).update({
      status: "rejected"
    });
  };

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  navigateConfirm = e => {
    navigate(`/confirmation/${this.state.id}/${this.state.status}`, {
      name: this.state.firstName
    });
  };

  sendForConfirmation = e => {
        const promise = this.setState({
      [e.target.name]: e.target.value
    },()=>this.navigateConfirm());
  
    //
  };

  render() {
    return (
      <div>
        <Navigation pageName="Docket Details" />

        <div className="docketDetails">
          Company name {this.state.companyName}
          <br />
          Name {this.state.firstName}
          <br />
          Activity {this.state.activityName}
          <br />
          CostCode {this.state.ccNumber}
          <br />
          Start Time {this.state.startTime}
          <br />
          End Time {this.state.endTime}
          <br />
          Break {this.state.breakTimethis} mins
          <br />
          Status {this.state.status}
          <br />
          <h3> Payment Due ${this.state.payAmount}</h3>
          <br />
          <h3> Your Comments {this.state.supervisorComment}</h3>
          <br />
          <div className="approveButtons">
             <button
              className="reject"
              name="status"
              value="reject"
              onClick={this.sendForConfirmation}
            >
              X
            </button>

            <button
              className="approve"
              name="status"
              value="approve"
              onClick={this.sendForConfirmation}
            >
              {" "}
              ✓
            </button>

            <button
              className="pending"
              name="status"
              value="pending"
              onClick={this.sendForConfirmation}
            >
              II
            </button>
            <br />
          </div>

        </div>
      </div>
    );
  }
}

export default DocketDetailsApproval;
