import React, { Component } from "react";
import firebase from "./firestore";
import NavigationJH from "./NavigationJH";
import SignatureCanvas from "react-signature-canvas";

const db = firebase.firestore();
const refDoc = db.collection("docket");

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: this.props.status,
      sComment: ""
    };
    this.docketStatus = this.docketStatus.bind(this);
  }

  docketStatus = e => {
    refDoc.doc(this.props.userID).update({
      status: this.state.status,
      supervisorComment: this.state.sComment
    });
  };

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <NavigationJH pageName="Confirmation" />

        <div className="confirmation">
          <div className="welcome">
            <h2 class="welcome-text">
              Confrim docket:{" "}
              <span class="welcome-text-color purple">${this.state.sum}</span>
            </h2>
          </div>

          <div class="confirmation__main">
            <div class="title__container">
              <h4 className="title__text">Add Notes</h4>
            </div>
            <br />
            <textarea
              name="Confirmation__sComment"
              id="sComment"
              // cols="30"
              // rows="10"
              value={this.state.comment}
              onChange={this.updateInput}
            />
            <div class="title__container">
              <h4 className="title__text">Signature</h4>
            </div>
            <br />
            <div className="sig">
              <SignatureCanvas
                penColor="black"
                canvasProps={{
                  // width: 200,
                  // height: 200,
                  className: "sig__Canvas"
                }}
              />
            </div>

            <button onClick={this.docketStatus}>hello</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Confirmation;
