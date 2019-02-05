import React, { Component } from 'react';
import { Router, navigate, Link } from '@reach/router';
import firebase from './firestore';
import _ from 'lodash'
import './index.css'

const db = firebase.firestore();
const refUser = db.collection('user').doc('joe');
const refActivity = db.collection('activity');
const refDocket = db.collection('docket');




class DocketEntry extends Component {

    constructor(props) {
        super(props);
        this.state = {
            companyName: '',
            contactNumber: '',
            firstName: '',
            hourlyRate: '',
            lastName: '',
            overtimeRate: '',
            position: '',
            totalHours: '',
            activityName: '',
            ccNumber: '',
            company: '',
            id: '',
            site: '',
            pay: '',
            status:'pending'


        }
        this.readUser = this.readUser.bind(this);
        this.readActivity = this.readActivity.bind(this);
        this.calcHours = this.calcHours.bind(this);
        this.addDocket = this.addDocket.bind(this);
        // this.add = this.add.bind(this);






    }


    componentWillMount() {
        this.readUser();
        this.readActivity();
        



    }



    // readUser() {
    //     let userData = [];
    //     // let you = [];
    //     refUser.onSnapshot((doc) => {
    //         userData.push(doc.data());

    //     })

    //     this.setState({
    //         items:userData,

    //     })       


    // }


    readUser() {
        const promise = refUser.get();
        promise.then((snapshot) => {
            this.setState({
                companyName: snapshot.data().companyName,
                contactNumber: snapshot.data().contactNumber,
                firstName: snapshot.data().firstName,
                hourlyRate: snapshot.data().hourlyRate,
                lastName: snapshot.data().lastName,
                overtimeRate: snapshot.data().overtimeRate,
                position: snapshot.data().position,
            })
        })
    }

    readActivity() {
        const promise = refActivity.doc(`${this.props.userID}`).get();
        promise.then((snapshot) => {

            this.setState({
                activityName: snapshot.data().activityName,
                ccNumber: snapshot.data().ccNumber,
                company: snapshot.data().company,
                id: snapshot.data().id,
                site: snapshot.data().site
            })
        })
    }


    // readActivity() {
    //     let activityData = [];
    //     const refAct=refActivity.doc(`${this.props.userID}`);

    //     refAct.onSnapshot((doc) => {

    //         // doc.forEach((item)=>{
    //         //     console.log(item)
    //         // })

    //         activityData.push(doc.data());


    //     })

    //     this.setState({

    //         activity: activityData,
    //         loaded: true,
    //         hrishi: true
    //     })
    // }




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
    updateInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    calcHours() {
        console.log('calc renderer')
        let rate = this.state.hourlyRate;
        let wHours = this.state.totalHours;
        let pay = rate * wHours;

        this.setState({
            pay: pay
        }, () =>{
            this.addDocket()})
        
        // this.addDocket();

    }


    addDocket(){
        // e.preventDefault();

        const ref = refDocket.doc();
        ref.set({
            companyName: this.state.companyName,
            contactNumber: this.state.contactNumber,
            firstName: this.state.firstName,
            hourlyRate: this.state.hourlyRate,
            lastName: this.state.lastName,
            overtimeRate: this.state.overtimeRate,
            position: this.state.position,
            totalHours: this.state.totalHours,
            activityName: this.state.activityName,
            ccNumber: this.state.ccNumber,
            company: this.state.company,
            id: ref.id,
            site: this.state.site,
            payAmount: this.state.pay,
            status:'pending'
        })
    }
    







    render() {
        return (
            <div>
                DocketEntry for {this.props.userID}

                <input
                    type="text"
                    name="totalHours"
                    placeholder='Enter Hours'
                    onChange={this.updateInput}
                    value={this.state.totalHours}
                />
                <Link to='/confirm'>
                <button onClick={this.calcHours}>send</button>

                </Link>
                {/* <button onClick={this.addDocket}>Add docket</button> */}

            </div>


        )
    }
}

export default DocketEntry;