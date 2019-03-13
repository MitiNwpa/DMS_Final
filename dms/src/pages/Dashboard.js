import React, { Component } from "react";
import firebase from "./firestore";
import NavigationJH from "./NavigationJH";

const db = firebase.firestore();
const refDoc = db.collection("docket");
const refActivity = db.collection("activity");
let addd = 9699;
const holder = [];

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      sumArray: [],
      ccArray: [],
      costArray: [],
      sum: 0,
      testSum: 10,
      loading: true,
      test: [],
      neee: [],
      flag: 0,
      budget: [675, 600, 500, 600, 700, 800, 250, 421, 8704]
    };

    this.calcSum = this.calcSum.bind(this);
    this.listCostCodes = this.listCostCodes.bind(this);
    this.mapCostCodes = this.mapCostCodes.bind(this);
    this.calcCost = this.calcCost.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClick_1 = this.handleClick_1.bind(this);
  }

  componentDidMount() {
    this.calcSum();
    this.calcCost();
  }

  calcSum() {
    let sumArray = [];

    refDoc
      .where("payAmount", ">", 0)
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          sumArray.push(doc.data().payAmount);
        });

        this.setState({
          sumArray
        });

        let finalSum = sumArray.reduce(function(a, b) {
          return a + b;
        }, 0);

        this.setState(
          {
            sum: finalSum
          },
          () => {
            this.listCostCodes();
          }
        );
      });
  }

  listCostCodes() {
    let ccArray = [];
    let activityArray = [];

    refActivity.get().then(snapshot => {
      snapshot.forEach(doc => {
        ccArray.push(doc.data().ccNumber);
        activityArray.push(doc.data().activityName);
      });
      console.log(`cc aray is ${ccArray}`);

      this.setState(
        {
          ccArray,
          activityArray
        },
        () => {
          this.calcCost();
        }
      );
    });
  }

  calcCost() {
    const CostCodeMap = this.state.ccArray.map((index, item) => {
      const testy = [];
      const promise = refDoc
        .where("ccNumber", "==", `${index}`)
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            testy.push(doc.data().payAmount);
            console.log("---------START-------");

            console.log("i have set the state");
          });

          addd = testy.reduce(function(a, b) {
            return a + b;
          }, 0);

          holder[item] = addd;
          this.setState({
            neee: holder
            // CostCodeMap
          });
          console.log(`this is the final sum bruhssss ${this.state.neee}`);
          console.log(addd);
          console.log(`the key is ${item}`);
          console.log(`the cost code is step 2 ${index}`);
          console.log(`the holder cost at ${item} is ${holder[item]}`);
          // console.log(`neee at is ${this.state.neee.index[3]}`);
        });

      promise.then(() => {
        console.log("---------END-------");
      });

      console.log("---------Im rendering-------");
      const percent = parseFloat(
        100 -
          ((this.state.budget[item] - this.state.neee[item]) /
            this.state.budget[item]) *
            100
      ).toFixed(1);
      var divStyle = {
        width: `${percent}%`
      };

      return (
        <li className="list__dashboard" key={item}>
          <div className="list__dashboard_container">
            <div className="list__dashboard_container-left">
              <span className="list__value list__value_big purple">{index}</span>
              <span className="list__key">{this.state.activityArray[item]}</span>
            </div>

            <div className="list__dashboard_container-right">
              <div className="list__dashboard_container-right-box">
                <span className="list__value list__value_big purple">Budget</span>
                <span className="list__key">
                  ${this.state.neee[item]} / ${this.state.budget[item]}{" "}
                </span>
              </div>
            </div>
          </div>

          <div className="list__dashboard_progress">
            <div className="list__percent">
              <span className="list__percent_bg" style={divStyle}>
                <span className="list__percent_bg-text">{percent}%</span>
              </span>
            </div>
          </div>
        </li>
      );
    });

    this.setState({
      CostCodeMap
    });
  }

  mapCostCodes() {
    //    const hello=[]
    //  const mapper = this.state.CostCodeMap.map((index,item)=>{

    //  })
    return (
      <ul>
        <div>
          <h4 className="title__text">CostCode Breakdown</h4>
          <span class="title__line" />

          {this.state.CostCodeMap}
        </div>
      </ul>
    );
  }

  handleClick = () => {
    console.log("working");
    this.setState({
      flag: 1
    });
  };
  handleClick_1 = () => {
    console.log("working");
    this.setState({
      flag: 2
    });
    this.calcCost();
  };

  render() {
    console.log(`DOM UPDATE`);

    if (this.state.flag == 0) {
      return (
        <div>
          <NavigationJH pageName="Dashboard" active="dashboard-active"/>

          <div className="dashboard">
            <div className="welcome">
              <h2 class="welcome-text">
                Welcome, <span class="welcome-text-color purple">Poop</span>
              </h2>
            </div>
            <h1>SUM :${this.state.sum}</h1>
            <p>This is the Dashboard sdfasd</p>
            <button type="button" onClick={this.handleClick}>
              Project
            </button>
            {/* {console.log(`holder issssssss ${holder}`)} */}
          </div>
        </div>
      );
    }
    if (this.state.flag == 1) {
      return (
        <div>
          <NavigationJH pageName="Dashboard" active="dashboard-active"/>

          <div className="dashboard">
            <div className="welcome">
              <h2 class="welcome-text">
                Welcome, <span class="welcome-text-color purple">Poop</span>
              </h2>
            </div>
            <h1>SUM :$ {this.state.sum}</h1>
            <p>This is the Dashboard sdfasd</p>
            <button type="button" onClick={this.handleClick_1}>
              Cost to Date
            </button>
            {/* <button type="button" onClick={this.handleClick}>cliccck</button> */}
            {/* <div>{this.mapCostCodes()}</div> */}
            {/* {console.log(`holder issssssss ${holder}`)} */}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <NavigationJH pageName="High Street" active="dashboard-active"/>
          <div className="dashboard">
            <div className="welcome">
              <h2 class="welcome-text">
                Cost To Date:  <span class="welcome-text-color purple">${this.state.sum}</span>
              </h2>
            </div>

            <div className="dashboard__bois">{this.mapCostCodes()}</div>

            <button type="button" onClick={this.calcCost}>
              refresh
            </button>
          </div>
        </div>
      );
    }
  }
}

export default Dashboard;
