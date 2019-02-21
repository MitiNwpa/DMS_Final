import React, { Component } from "react";
import firebase from "./firestore";
// import './index.css';
import { navigate } from "@reach/router";
import Navigation from "./Navigation";

const db = firebase.firestore();
const refDoc = db.collection("docket");

// .where("cName", '==', 'hrishi')
class ListDockets extends Component {
  constructor() {
    super();
    this.state = {
      items: []
      // status: 'rejected'
    };
    this.changeclass = this.changeclass.bind(this);
    // this.approveIt = this.approveIt.bind(this);
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

  handleChange = e => {
    const t = e.target;
    this.setState({
      [t.name]: t.value
    });
  };

  renderDockets() {
    const PendingDocket = this.state.items.map((item, index) => {
      if (item.status === "pending") {
        return (
          <li key={item.id} id={item.id} className={item.status}>
            <div>
              <h5>Company Name : {item.companyName}</h5>
              <h5>Docket Number : {item.docketNumber}</h5>
              <h5>Activity : {item.activityName}</h5>
              <h5>Approval : {item.status}</h5>
            </div>
            <button
              className="delete"
              value={item.id}
              onClick={this.deleteDocket}
            >
              X
            </button>
            {/* <button onClick={this.sendId(item)}>Show More</button> */}
            <button
              className="list"
              onClick={() => navigate(`/docketdetails/${item.id}`)}
            >
              <div />
              View
            </button>
          </li>
        );
      }
    });

    const ApprovedDocket = this.state.items.map((item, index) => {
      if (item.status === "approved") {
        return (
          <li key={item.id} id={item.id} className={item.status}>
            <div>
              <h5>Company Name : {item.companyName}</h5>
              <h5>Activity : {item.activityName}</h5>
              <h5>Approval : {item.status}</h5>
            </div>
            <button
              className="delete"
              value={item.id}
              onClick={this.deleteDocket}
            >
              X
            </button>
            {/* <button onClick={this.sendId(item)}>Show More</button> */}
            <button
              className="list"
              onClick={() => navigate(`/docketdetails/${item.id}`)}
            >
              <div />
              View
            </button>
          </li>
        );
      }
    });

    const RejectedDocket = this.state.items.map((item, index) => {
      if (item.status === "rejected") {
        return (
          <li key={item.id} id={item.id} className={item.status}>
            <div>
              <h5>Company Name : {item.companyName}</h5>
              <h5>Activity : {item.activityName}</h5>
              <h5>Approval : {item.status}</h5>
            </div>
            <button
              className="delete"
              value={item.id}
              onClick={this.deleteDocket}
            >
              X
            </button>
            {/* <button onClick={this.sendId(item)}>Show More</button> */}
            <button
              className="list"
              onClick={() => navigate(`/docketdetails/${item.id}`)}
            >
              <div />
              View
            </button>
          </li>
        );
      }
    });

    return (
      <ul>
        <div>
          <h4>Pending</h4>
          {PendingDocket}
        </div>

        <div>
          <h4>Approved</h4>
          {ApprovedDocket}
        </div>
        <div>
          <h4>Rejected</h4>

          {RejectedDocket}
        </div>
      </ul>
    );
  }

  changeclass() {
    refDoc.onUpdate((docsnap, index) => {
      docsnap.forEach(doc => {
        console.log("hey");
      });
    });
  }

  render() {
    return (
      <div>
        <Navigation pageName="Docket List" />
        {this.renderDockets()}
      </div>
    );
  }
}

export default ListDockets;
