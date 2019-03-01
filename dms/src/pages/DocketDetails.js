import React from "react";
import "firebase/firestore";
import firebase from "./firestore";
import Navigation from "./Navigation";

const db = firebase.firestore();
const refDoc = db.collection("docket");

class DocketDetails extends React.Component {
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
      startTime: "",
      endTime: "",
      break: "",
      docketNumber: "",
      dateCreated: ""
    };
    this.readDocket = this.readDocket.bind(this);
  }

  componentWillMount() {
    this.readDocket();
  }
  readDocket() {
    const promise = refDoc.doc(`${this.props.userID}`).get();
    promise.then(snapshot => {
      const fireDate = snapshot.data().timeStamp;
      console.log(fireDate);
      const mainDate = fireDate.toDate();
      console.log(mainDate);
      const myDay = mainDate.getDate();
      const myMonth = mainDate.getMonth() + 1;
      const myYear = mainDate.getFullYear();
      var hour = mainDate.getHours();
      var ampm = hour >= 12 ? "pm" : "am";
      hour = hour % 12;
      hour = hour ? hour : 12;
      var min = mainDate.getMinutes();
      min = min < 10 ? "0" + min : min;
      const today = `${myDay}-${myMonth}-${myYear}`;
      const time = `${hour}:${min} ${ampm}`;

      console.log(myDay);
      console.log(myMonth);
      console.log(myYear);
      console.log(today);
      console.log(time);

      this.setState({
        activityName: snapshot.data().activityName,
        ccNumber: snapshot.data().ccNumber,
        company: snapshot.data().company,
        id: snapshot.data().id,
        site: snapshot.data().site,
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
        docketNumber: snapshot.data().docketNumber,
        dateCreated: today,
        time: time,
        supervisorComment: snapshot.data().supervisorComment,
        engineerComment: snapshot.data().engineerComment
      });
    });
  }

  render() {
    return (
      <div>
        <Navigation pageName="Docket Details" />
        <div className="docketdetails">
          <div className="welcome details">
            <h2 class="welcome-text">
              Docket No&nbsp;:&nbsp;
              <span class="welcome-text-color">{this.state.docketNumber}</span>
            </h2>
            <h2 class="welcome-text">
              Approval Status&nbsp;:&nbsp;
              <span class="welcome-text-color">{this.state.status}</span>
            </h2>
          </div>
          <div class="docketdetails__main">
            <div className="docketdetails__name">
              <div className="docketdetails__name-a">
                <h2 class="title__details">Name : {this.state.firstName}</h2>
              </div>
              <div className="docketdetails__name-b">
                <h2 class="title__details">
                  Company : {this.state.companyName}
                </h2>
              </div>
            </div>

            <div class="docketdetails__time">
              <div className="docketdetails__time-a">
                <h2 class="title__details">Start Time</h2>
                <h2 class="title__large">{this.state.startTime}</h2>
              </div>

              <div className="docketdetails__time-b">
                <h2 class="title__details">End Time</h2>
                <h2 class="title__large">{this.state.endTime}</h2>
              </div>
            </div>

            <div class="docketdetails__time">
              <div className="docketdetails__time-a yellow">
                <h2 class="title__details">Break(mins)</h2>
                <h2 class="title__large">{this.state.breakTimethis}</h2>
              </div>

              <div className="docketdetails__time-b blue">
                <h2 class="title__details">Total Hours</h2>
                <h2 class="title__large">{this.state.totalHours}</h2>
              </div>
            </div>

            <div class="docketdetails__notes">
              <div>
                <h4 className="title__text">Supervisor Notes :</h4>
              </div>
              <div className="docketdetails__notes-supervisor">
              {this.state.supervisorComment}
              </div>

              <div>
                <h4 className="title__text">Engineer Notes</h4>
              </div>
              <div className="docketdetails__notes-engineer">
              
              {this.state.engineerComment}
              </div>
            </div>



            {/* Company name {this.state.companyName}
            <br />
            Name {this.state.firstName}
            <br />
            Activity {this.state.activityName}
            <br />
            Start Time {this.state.startTime}
            <br />
            End Time {this.state.endTime}
            <br />
            Break {this.state.breakTimethis} mins
            <br />
            Status {this.state.status}
            <br />
            <br />
            Docket Number {this.state.docketNumber}
            <br />
            Date Created {this.state.dateCreated} at {this.state.time}
            <br />
            <br />
            Supervisor Notes {this.state.supervisorComment}
            <br /> <br />
            Engineer Notes {this.state.engineerComment}
            <br /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default DocketDetails;
