import React from 'react';
import 'firebase/firestore';
import firebase from "./firestore";
import { Link } from '@reach/router';
import Navigation from './Navigation';



const db = firebase.firestore();
const refDoc = db.collection('activity');
const divStyle = {
    color: 'blue',
    border: '10px solid blue'
};

class ActivityEnter extends React.Component {

    constructor() {
        super();
        this.state = {
            activityName: '',
            company: '',
            ccNumber: '',
            site: '',
            id: ''

        };
    }

    updateInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    addDocket = e => {
        e.preventDefault();

        const userRef = refDoc.doc();
        userRef.set({
            id: userRef.id,
            activityName: this.state.activityName,
            company: this.state.company,
            site: this.state.site,
            ccNumber: this.state.ccNumber

        });
        this.setState({
            activityName: '',
            company: '',
            ccNumber: '',
            site: '',
            id: ''
        });
    };





    render() {

        return (<div>
                        <Navigation pageName="Enter Activity"/>

            <div style={divStyle}>
                <br />
                Activity name {this.state.activityName}

                <form onSubmit={this.addDocket}>
                    <input
                        type="text"
                        name="activityName"
                        placeholder='Activity Name'
                        onChange={this.updateInput}
                        value={this.state.activityName}
                    />
                    {/* <input
                        type="text"
                        name="company"
                        placeholder='Company Name'
                        onChange={this.updateInput}
                        value={this.state.company}
                    /> */}

                    <select name='company' onChange={this.updateInput}
                        value={this.state.company}>
                        <option value="cndd">CNDD</option>
                        <option value="cycon">CYCON</option>
                        <option value="atkins">ATKINS</option>
                        <option value="SOM">SOM</option>

                    </select >

                    <input
                        type="text"
                        name="ccNumber"
                        placeholder='Enter CostCode'
                        onChange={this.updateInput}
                        value={this.state.ccNumber}
                    />
                    <input
                        type="text"
                        name="site"
                        placeholder='Enter Site'
                        onChange={this.updateInput}
                        value={this.state.site}
                    />

                    {/* <Link to='/confirm'> */}
                    <button type="submit">send</button>
                    {/* </Link>            */}
                </form>
            </div>
        </div>
            
        )
    }
}

export default ActivityEnter;