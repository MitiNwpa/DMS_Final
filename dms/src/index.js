import React from 'react';
import ReactDOM from 'react-dom';
import { Router, navigate, Link } from '@reach/router';
// import './css/style.css'
import './sass/main.scss'

import Login from './pages/Login';
import * as serviceWorker from './pages/serviceWorker';
import Navigation from './pages/Navigation';
import Home from './pages/Home';
import Activity from './pages/Activity';
import ActivityEnter from './pages/ActivityEnter';
import DocketEntry from './pages/DocketEntry';
import ListDockets from './pages/ListDockets';
import DocketDetails from './pages/DocketDetails';
import Approval from './pages/Approval';
import DocketDetailsApproval from './pages/DocketDetailsApproval';
import Dashboard from './pages/Dashboard';
import TimeEnter from './pages/TimeEnter';
import Confirmation from './pages/Confirmation';
import ListDocketsEngineer from './pages/ListDocketsEngineer';
import BottomNavigation from './pages/BottomNavigation';



ReactDOM.render(

    <div>  
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
            <Dashboard path='/dashboard'/>
            <Confirmation path='/confirmation/:userID/:status' />
            <ListDocketsEngineer path='/listdocketsengineer' />
        </Router>
    </div>

, document.getElementById('root'));

// If you want your Login to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
