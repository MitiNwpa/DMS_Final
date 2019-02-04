import React, { Component } from 'react';
import { Router, navigate, Link } from '@reach/router';
import firebase from './firestore';
import './index.css'
const db = firebase.firestore();
const refDoc = db.collection('user').doc('joe');


class DocketEntry extends Component {

    constructor() {
        super();
        this.state = {
            items: ''
        }
    }

    componentWillMount() {
        let items = []
        refDoc.onSnapshot((doc) => { items.push(doc.data()) })

          this.setState({
            items,
            loaded: true
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