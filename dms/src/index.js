import React from 'react';
import ReactDOM from 'react-dom';
import { Router, navigate, Link } from '@reach/router';
import './css/style.css'
import Login from './Login';
import * as serviceWorker from './serviceWorker';
import Navigation from './Navigation';
import Home from './Home';
import Activity from './Activity';
import ActivityEnter from './ActivityEnter';
import DocketEntry from './DocketEntry';
import ListDockets from './ListDockets';
import DocketDetails from './DocketDetails';
import Approval from './Approval';
import DocketDetailsApproval from './DocketDetailsApproval';
import TimeEnter from './TimeEnter';


ReactDOM.render(

    <div>
        {/* <Navigation /> */}
   
        <Router>
            <Login path='/' />
            <Home path='/home' />
            <Activity path='/activity' />
            <ActivityEnter path='/activityenter' />
            <DocketEntry path='/docketentry/:userID' />
            <ListDockets path='/listdockets' />
            <DocketDetails path='/docketdetails/:userID' />
            <Approval path='/approval' />
            <DocketDetailsApproval path='docketdetailsapproval/:userID'/>

        </Router>

    </div>

, document.getElementById('root'));

// If you want your Login to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
