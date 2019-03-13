// Import React
import React, { Component } from "react";
import { Router, navigate, Link } from "@reach/router";
import firebase from "./firestore";
import Navigation from "./Navigation";
import Calendar from 'react-calendar';


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
        <Navigation pageName="Home" active="home-active"/>
        <div className="home">
          <div className="home__welcome">
            <h2 class="home__welcome-text">
              Welcome,{" "}
              <span class="home__welcome-text-color">
                {this.state.firstName} {this.state.lastName}
              </span>
            </h2>
          </div>

          <div className="home__calendar" >
          <Calendar value={new Date}/>
          </div>


          
          <div className="home__snapshot" onClick={()=>{navigate(`/listdockets`)}}>
            {/* <div className="home__snapshot-heading">Docket Status</div> */}

            <div className="home__snapshot-status-box">
              <div className="home__snapshot-status-box-circle">
                <span className="home__snapshot-status-box-circle-shape approved">
                  <h5 className="home__snapshot-status-box-circle-label">12</h5>
                </span>
              </div>

              <h4 className="home__snapshot-status-box-label">Approved</h4>
            </div>
            <div className="home__snapshot-status-box">
              <div className="home__snapshot-status-box-circle">
                <span className="home__snapshot-status-box-circle-shape pending">
                  <h5 className="home__snapshot-status-box-circle-label">8</h5>
                </span>
              </div>

              <h4 className="home__snapshot-status-box-label">Pending</h4>
            </div>
            <div className="home__snapshot-status-box">
              <div className="home__snapshot-status-box-circle">
                <span className="home__snapshot-status-box-circle-shape rejected">
                  <h5 className="home__snapshot-status-box-circle-label">3</h5>
                </span>
              </div>

              <h4 className="home__snapshot-status-box-label">Rejected</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
