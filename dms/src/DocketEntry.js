import React, { Component } from 'react';
import { Router, navigate, Link } from '@reach/router';
import firebase from './firestore';
import _ from 'lodash'
import './index.css'

const db = firebase.firestore();
const refDoc = db.collection('user').doc('joe');


class DocketEntry extends Component {

    constructor() {
        super();
        this.state = {
            items: []
        }
        this.readUser=this.readUser.bind(this);
    }


    componentWillMount(){
        this.readUser();
    }
    readUser() {
        let userData = [];
        // let you = [];
        refDoc.onSnapshot((doc) => {
             userData.push(doc.data());
               
        })

          this.setState({
         
            items:userData,
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