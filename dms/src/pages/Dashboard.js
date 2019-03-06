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
      flag: 0
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

    refActivity.get().then(snapshot => {
      snapshot.forEach(doc => {
        ccArray.push(doc.data().ccNumber);
      });
      console.log(`cc aray is ${ccArray}`);

      this.setState(
        {
          ccArray
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
            neee: holder,
            CostCodeMap
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

      return (
        <div key={item}>
          <li key={item}>
            the cost code of {index} cost is {this.state.neee[item]}
          </li>
        </div>
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
          <h4>CostCode</h4>
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
  handleClick_1= () => {
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
          <NavigationJH pageName="Dashboard" />
          <div>
            <h1>SUM :$ {this.state.sum}</h1>
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
          <NavigationJH pageName="Dashboard" />
          <div>
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
          <NavigationJH pageName="Dashboard" />
          <div>
            <h1>SUM :$ {this.state.sum}</h1>
            <p>This is the Dashboard sdfasd</p>
            <button type="button" onClick={this.calcCost}>
              refresh
            </button>
            {/* <button type="button" onClick={this.handleClick}>cliccck</button> */}
            <div>{this.mapCostCodes()}</div>
            {/* {console.log(`holder issssssss ${holder}`)} */}
          </div>
        </div>
      );
    }
  }
}

export default Dashboard;