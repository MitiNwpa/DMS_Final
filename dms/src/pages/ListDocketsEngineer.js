import React, { Component } from "react";
import firebase from "./firestore";
// import './index.css';
import { navigate } from "@reach/router";
import Navigation from "./Navigation";

const db = firebase.firestore();
const refDoc = db.collection("docket");

class ListDocketsEngineer extends Component {
  constructor() {
    super();
    this.state = {
      items: []
      // status: 'rejected'
    };
    this.changeclass = this.changeclass.bind(this);
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
    const ApprovedDocket = this.state.items.map((item, index) => {
      if (item.status === "approved") {
        return (
          <li key={item.id} id={item.id} className={item.status}>
            <div>
              <h5>Company Name : {item.companyName}</h5>
              <h5>Name : {item.firstName}</h5>
              <h5>Docket No : {item.docketNumber}</h5>
              <h5>Start Time : {item.startTime}</h5>
              <h5>End Time : {item.endTime}</h5>
              <h5>Hours Worked : {item.totalHours}</h5>
              <h5>Inclement Weather : this is pending, might have to assign it in the activity itself</h5>
              <h5>Cost Code : {item.ccNumber}</h5>



            </div>

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
          <h4>Approved</h4>
          {ApprovedDocket}
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

export default ListDocketsEngineer;
