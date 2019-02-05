import React, { Component } from 'react';
import firebase from './firestore'
import './index.css';
import { navigate } from '@reach/router';

const db = firebase.firestore();
const refDoc = db.collection('docket');


// .where("cName", '==', 'hrishi')
class ListDockets extends Component {
  constructor() {
    super();
    this.state = {
      items: []
      // status: 'rejected'
    }
    this.changeclass = this.changeclass.bind(this);
    // this.approveIt = this.approveIt.bind(this);
  }

  componentWillMount() {
    refDoc.onSnapshot((docSnapShot) => {
      let items = []

      docSnapShot.forEach(doc => { items.push(doc.data()) })
      this.setState({
        items,
        loaded: true
      })
    })
  }



  deleteDocket = (e) => {
    refDoc.doc(e.target.value).delete().then(function () {
      console.log("Document successfully deleted!");
    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });
  }

  handleChange = (e) => {
    const t = e.target
    this.setState({
      [t.name]: t.value
    })
  }





  renderDockets() {
    const PendingDocket = this.state.items.map((item, index) => {

      if (item.status === 'pending') {
        return (
          <li key={item.id} id={item.id} className={item.status}>
            {item.email}
            <br />
            {item.company}

            <button value={item.id} onClick={this.deleteDocket}>X</button>
            {/* <button onClick={this.sendId(item)}>Show More</button> */}
            <button onClick={() => navigate(`/docketdetails/${item.id}`)}>
              <div>

              </div>
              start</button>

            <div>
              approval status is {item.status}
            </div>
          </li>
        )
      }
    }
    )


    const ApprovedDocket = this.state.items.map((item, index) => {

      if (item.status === 'approved') {
        return (
          <li key={item.id} id={item.id} className={item.status}>
            {item.email}
            <br />
            {item.company}

            <button value={item.id} onClick={this.deleteDocket}>X</button>
            {/* <button onClick={this.sendId(item)}>Show More</button> */}
            <button onClick={() => navigate(`/docketdetails/${item.id}`)}>
              <div>

              </div>
              start</button>

            <div>
              approval status is {item.status}
            </div>
          </li>
        )
      }
    }
    )


    const RejectedDocket = this.state.items.map((item, index) => {

      if (item.status === 'rejected') {
        return (
          <li key={item.id} id={item.id} className={item.status}>
            {item.email}
            <br />
            {item.company}

            <button value={item.id} onClick={this.deleteDocket}>X</button>
            {/* <button onClick={this.sendId(item)}>Show More</button> */}
            <button onClick={() => navigate(`/docketdetails/${item.id}`)}>
              <div>

              </div>
              start</button>

            <div>
              approval status is {item.status}
            </div>
          </li>
        )
      }
    }
    )

    return (
      <ul>
        <div>Pending
          {PendingDocket}

        </div>

        <div>Approved 
          {ApprovedDocket}
        </div>
        <div>
          Rejected
          {RejectedDocket}

        </div>

      </ul>
    )
  }












  changeclass() {
    refDoc.onUpdate((docsnap, index) => {
      docsnap.forEach(doc => {
        console.log('hey')
      });
    })
  }


  render() {
    return (
      <div>
          {this.renderDockets()}
      </div>
    )
  }
}

export default ListDockets;