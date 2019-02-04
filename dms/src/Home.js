// Import React
import React, { Component } from 'react';
import { Router, navigate ,Link } from '@reach/router';
import firebase from './firestore';
const db = firebase.firestore();
const refDoc = db.collection('user').doc('joe');

class Home extends Component{
constructor(props){
  super(props);
  this.state={
 companyName:null,
 firstName : '',
 lastName: '', 


  }
}

componentWillMount() {
    refDoc.get().then((doc) => {
console.log(doc.data().lastName);
        this.setState({
            companyName: doc.data().companyName,
            firstName: doc.data().firstName,
            lastName: doc.data().lastName
          
        })
       
    })
}
  

  render(){
    return(
      <div>
Welcome {this.state.firstName}  {this.state.lastName}    

<div>
    Here are the sites You are currently working on
    <br />
   
                <Link to='/activity'>
                <button>High Street</button>
                </Link>
                <Link to='/activity'>
                <button>Skye Road 2</button>
                </Link>

</div>
      </div>

      
    )
  }
}

export default Home;