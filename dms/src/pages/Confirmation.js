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
      status:this.props.status,
      sComment:''
    };
    this.docketStatus=this.docketStatus.bind(this);
  }

  docketStatus = e => {
    refDoc.doc(this.props.userID).update({
      status: this.state.status,
      supervisorComment:this.state.sComment
    });
  };

  updateInput = e => {
    this.setState({
      [e.target.name]:                                                                                                                                                                                                                                                                                                                                                                                              e.target.value
    });
  };

  render() {
    return (
      <div>
        <NavigationJH pageName="Confirmation" />
        <div>
           <p>This is the Confirmation {this.props.status} {this.props.userID}</p>

           <div className="sig">
            <SignatureCanvas
              penColor="black"
              canvasProps={{
                width: 200,
                height: 200,
                className: "sig__Canvas"
              }}
            />
          </div>
          <button onClick={this.docketStatus}>
              hello
            </button>
            <textarea
            name="sComment"
            id="sComment"
            cols="30"
            rows="10"
            value={this.state.comment}
            onChange={this.updateInput}
          />
        </div>
      </div>
    );
  }
}

export default Confirmation;
