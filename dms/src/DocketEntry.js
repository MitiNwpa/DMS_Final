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
            items: {},
            activity: {}
        }
        this.readUser = this.readUser.bind(this);
        this.readActivity = this.readActivity.bind(this);
        this.wellwell = this.wellwell.bind(this);


    }


    componentWillMount() {
        this.readUser();
        this.readActivity();

    }


wellwell(){
    // let dos = this.state.items.map((boot,i) =>{
    //     console.log(boot.companyName);
    //     // let foc = boot.item.map((uno,i) =>{
    //     //     console.log(uno.companyName);

    //     // })
    //     })
      
     Object.keys(this.state.items).map((item)=> {
         console.log(item.map)
     })

        
    }
        


    readUser() {
        let userData = [];
        // let you = [];
        refUser.onSnapshot((doc) => {
            userData.push(doc.data());

        })

        this.setState({
            // ud:userData,
            items: userData,
            loaded: true,
            hrishi: true
        })

       


    }

    readActivity() {
        let activityData = [];
        const refAct=refActivity.doc(`${this.props.userID}`);
        
        refAct.onSnapshot((doc) => {
            activityData.push(doc.data());
            

        })

        this.setState({

            activity: activityData,
            loaded: true,
            hrishi: true
        })
    }




    // readActivity() {
    //     let activityData = [];
    //     const refAct=refActivity.doc(`${this.props.userID}`);
        
    //     refAct.onSnapshot((doc) => {
    //         activityData.push(doc.data());
            

    //     })

    //     this.setState({

    //         activity: activityData,
    //         loaded: true,
    //         hrishi: true
    //     })
    // }



    render() {
        return (
            <div>
                DocketEntry for {this.props.userID}
                <button onClick={this.wellwell}>please</button>

            </div>


        )
    }
}

export default DocketEntry;