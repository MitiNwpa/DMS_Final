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
            items:{},
          companyName:'',
          contactNumber : '',
          firstName:'',
          hourlyRate:'',
          lastName:'',
          overtimeRate:'',
          position:'',
          totalHours:'',
          activityName:'',
          ccNumber:'',
          company:'',
          id:'',
          site:'',
          

        }
        this.readUser = this.readUser.bind(this);
        this.readActivity = this.readActivity.bind(this);
        this.writeUser = this.writeUser.bind(this);




    }


    componentWillMount() {
        this.readUser();
        this.readActivity();
        
      

    }
    componentDidMount(){

    }


     


    readUser() {
        let userData = [];
        // let you = [];
        refUser.onSnapshot((doc) => {
            userData.push(doc.data());
            
        })
                   
        this.setState({
            items:userData,
          
        })       


    }

    writeUser(){
        console.log("write user")
       let dos= this.state.items.map((boot,i)=>{
          
        console.log(boot.companyName);
            })
    
    }

    readActivity() {
        let activityData = [];
        const refAct=refActivity.doc(`${this.props.userID}`);
        
        refAct.onSnapshot((doc) => {

            // doc.forEach((item)=>{
            //     console.log(item)
            // })

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
                <button onClick={this.writeUser}>please</button>

            </div>


        )
    }
}

export default DocketEntry;