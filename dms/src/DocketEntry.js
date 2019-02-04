import React, { Component } from 'react';
import { Router, navigate, Link } from '@reach/router';
import firebase from './firestore';
import _ from 'lodash'
import './index.css'

const db = firebase.firestore();
const refUser = db.collection('user').doc('joe');
const refActivity = db.collection('activity');




class DocketEntry extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            activity: []
        }
        this.readUser=this.readUser.bind(this);
        this.readActivity=this.readActivity.bind(this);

    }


    componentWillMount(){
        // this.readUser();
        this.readActivity();
    }
    readUser() {
        let userData = [];
        // let you = [];
        refUser.onSnapshot((doc) => {
             userData.push(doc.data());
               
        })

          this.setState({
         
            items:userData,
            loaded: true,
            hrishi:true
          })
        }

        readActivity(){
            let activityData = [];
console.log("ref activity working")
            refActivity.doc(`${this.props.userID}`).get().then((doc) => {
                activityData.push(doc.data());
                  
           })
   
             this.setState({
            
               activity:activityData,
               loaded: true,
               hrishi:true
             })
           }
        
      
    

    render() {
        return (
            <div>
                DocketEntry for {this.props.userID}

            </div>


        )
    }
}

export default DocketEntry;