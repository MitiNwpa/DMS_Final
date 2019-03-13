import React, { Component } from "react";
import firebase from "./firestore";
// import './index.css';
import { navigate } from "@reach/router";
import NavigationJH from "./NavigationJH";

const db = firebase.firestore();
const refDoc = db.collection("docket");

// .where("cName", '==', 'hrishi')
class Approval extends Component {
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
    const list = "list";
    const PendingDocket = this.state.items.map((item, index) => {
      if (item.status === "pending") {
        return (
          <li
            key={item.id}
            id={item.id}
            className="list"
            onClick={() => navigate(`/docketdetailsapproval/${item.id}`)}
          >
            <span class="list__border-pending" />
            <div className="list__container">
              <span className="list__line">
                <span class="list__key">Company :</span>
                <span class="list__value">{item.companyName}</span>
              </span>

              <span className="list__line">
                <span class="list__key">Docket :</span>
                <span class="list__value">{item.docketNumber}</span>
              </span>

              <span className="list__line">
                <span class="list__key">Activity :</span>
                <span class="list__value">{item.activityName}</span>
              </span>

              <span className="list__line">
                <span class="list__key">Payment :</span>
                <span class="list__value">${item.payAmount}</span>
              </span>
            </div>
          </li>
        );
      }
    });

    const ApprovedDocket = this.state.items.map((item, index) => {
      if (item.status === "approved") {
        return (
          <li
            key={item.id}
            id={item.id}
            className="list"
            onClick={() => navigate(`/docketdetailsapproval/${item.id}`)}
          >
            <span class="list__border-approved" />
            <div className="list__container">
              <span className="list__line">
                <span class="list__key">Company :</span>
                <span class="list__value">{item.companyName}</span>
              </span>

              <span className="list__line">
                <span class="list__key">Docket :</span>
                <span class="list__value">{item.docketNumber}</span>
              </span>

              <span className="list__line">
                <span class="list__key">Activity :</span>
                <span class="list__value">{item.activityName}</span>
              </span>

              <span className="list__line">
                <span class="list__key">Payment :</span>
                <span class="list__value">${item.payAmount}</span>
              </span>
            </div>
          </li>
        );
      }
    });

    const RejectedDocket = this.state.items.map((item, index) => {
      if (item.status === "rejected") {
        return (
          <li
            key={item.id}
            id={item.id}
            className="list"
            onClick={() => navigate(`/docketdetailsapproval/${item.id}`)}
          >
            <span class="list__border-rejected" />
            <div className="list__container">
              <span className="list__line">
                <span class="list__key">Company :</span>
                <span class="list__value">{item.companyName}</span>
              </span>

              <span className="list__line">
                <span class="list__key">Docket :</span>
                <span class="list__value">{item.docketNumber}</span>
              </span>

              <span className="list__line">
                <span class="list__key">Activity :</span>
                <span class="list__value">{item.activityName}</span>
              </span>

              <span className="list__line">
                <span class="list__key">Payment :</span>
                <span class="list__value">${item.payAmount}</span>
              </span>
            </div>
          </li>
        );
      }
    });

    return (
      <div class="listdockets__container-main">
        <div class="listdockets__container">
          <div class="title__container">
            <h4 className="title__text">Approved</h4>
            <span class="title__line" />
          </div>
          {ApprovedDocket}
        </div>

        <div class="listdockets__container">
          <div class="title__container">
            <h4 className="title__text">Pending</h4>
            <span class="title__line" />
          </div>

          {PendingDocket}
        </div>

        <div class="listdockets__container">
          <div class="title__container">
            <h4 className="title__text">Rejected</h4>
            <span class="title__line" />
          </div>
          {RejectedDocket}
        </div>
      </div>
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
        <NavigationJH pageName="Docket List" active="dockets-active" />
        <div class="listdockets">
          <div className="welcome">
            <h2 class="welcome-text">
              Total Dockets : <span class="welcome-text-color purple">25</span>
            </h2>
          </div>
          {this.renderDockets()}
        </div>
      </div>
    );
  }
}

export default Approval;
