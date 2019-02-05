import React from 'react';
import 'firebase/firestore';
import firebase from "./firestore";
const db = firebase.firestore();
const refDoc = db.collection('docket');

class DocketDetailsApproval extends React.Component{
constructor(props){
    super(props);
    this.state={
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
        status:'pending'
    }
    this.readDocket=this.readDocket.bind(this);
}




componentWillMount(){
    this.readDocket();
}
 readDocket() {
        const promise = refDoc.doc(`${this.props.userID}`).get();
        promise.then((snapshot) => {

            this.setState({
                activityName: snapshot.data().activityName,
                ccNumber: snapshot.data().ccNumber,
                company: snapshot.data().company,
                id: snapshot.data().id,
                site: snapshot.data().site,
                companyName: snapshot.data().companyName,
                contactNumber: snapshot.data().contactNumber,
                firstName: snapshot.data().firstName,
                hourlyRate: snapshot.data().hourlyRate,
                lastName: snapshot.data().lastName,
                overtimeRate: snapshot.data().overtimeRate,
                position: snapshot.data().position,
                payAmount: snapshot.data().payAmount,
                totalHours : snapshot.data().totalHours,


            })
        })
    }





render(){
    return(
        <div>
            its me your boi number  {this.props.userID}
            <br />
            The activity name {this.state.activityName}
            <br />

            company name{this.state.companyName}
            <br />
            i can 


        </div>
   
    )
}
}

export default DocketDetailsApproval;