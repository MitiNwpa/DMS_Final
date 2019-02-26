import React from "react";
import { Link } from "@reach/router";
import firebase from "./firestore";
import { navigate } from "@reach/router";
import Navigation from "./Navigation";

const db = firebase.firestore();
const refDoc = db.collection("activity");

class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.renderActivityList = this.renderActivityList.bind(this);
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

  renderActivityList() {
    const ActivityList = this.state.items.map((item, index) => {
      return (
        <li key={item.id} id={item.id} className="list">
          Activity : {item.activityName}
          <br />
          Site : {item.site}
          <br />
          Assigned Company : {item.company}
          <br />
          <button
            className="btn__list"
            onClick={() => navigate(`/docketentry/${item.id}`)}
          >
            Select
          </button>
        </li>
      );
    });

    return <div className="activity__container">{ActivityList}</div>;
  }

  render() {
    return (
      <div>
        <Navigation pageName="Activity Selection" />
        <div class="activity">

          <div className="welcome">
            <h2 class="welcome-text">
              Welcome, <span class="welcome-text-color">Activity</span>
            </h2>
          </div>
        
          <h4 className="activity__heading">This is Activity Selection</h4>
          {this.renderActivityList()}
        </div>
      </div>
    );
  }
}

export default Activity;
