// Import React
import React, { Component } from "react";
import { Router, navigate, Link } from "@reach/router";
import firebase from "./firestore";
import Navigation from "./Navigation";

const db = firebase.firestore();
const refDoc = db.collection("user").doc("joe");

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: null,
      firstName: "",
      lastName: ""
    };
  }

  componentWillMount() {
    refDoc.get().then(doc => {
      console.log(doc.data().lastName);
      this.setState({
        companyName: doc.data().companyName,
        firstName: doc.data().firstName,
        lastName: doc.data().lastName
      });
    });
  }

  render() {
    return (
      <div>
        <Navigation pageName="Home" />
        <div className="home">
        <div className="home__welcome">
        <h2 class="home__welcome-text">
        Welcome, <span class="home__welcome-text-color">{this.state.firstName} {this.state.lastName}
        </span> 
        </h2>
      
        </div>
        <div className="home">
       
          <h4>Active Sites</h4>
          <br />
          <Link to="/activity">
            <button>High Street</button>
          </Link>
          <br />
          <Link to="/activity">
            <button>Skye Road</button>
          </Link>
        </div>
        </div>
      </div>
    );
  }
}

export default Home;
