import React from 'react';
import ReactDOM from 'react-dom';
import { Router, navigate, Link } from '@reach/router';
import './index.css';
import Login from './Login';

import * as serviceWorker from './serviceWorker';
import Navigation from './Navigation';
import Home from './Home';
import Activity from './Activity';
import DocketEntry from './DocketEntry';


ReactDOM.render(

    <div>
        <Navigation />
        <Router>
            <Login path='/' />
            <Home path='/home' />
            <Activity path='/activity' />
            <DocketEntry path='docketentry/:userID' />
        </Router>

    </div>








    , document.getElementById('root'));

// If you want your Login to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
