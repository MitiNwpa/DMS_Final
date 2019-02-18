import React from 'react';
import 'firebase/firestore';
import firebase from "./firestore";
import Navigation from './Navigation';

const db = firebase.firestore();
const refDoc = db.collection('docket');

class DocketDetails extends React.Component{
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
        status:'',
        startTime:'',
        endTime:'',
        break:'',
        docketNumber:''
        
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
                startTime:snapshot.data().startTime,
                endTime:snapshot.data().endTime,
                breakTimethis:snapshot.data().breakTimethis,
                status:snapshot.data().status,
                docketNumber:snapshot.data().docketNumber

            })
        })
    }





render(){
    return(
<div>
    <Navigation pageName="Docket Details" />
    <div className='docketDetails'>
     
            Company name {this.state.companyName}
            <br />
            Name {this.state.firstName}
            <br />
            Activity {this.state.activityName}
            <br />
            Start Time {this.state.startTime}
            <br />
            End Time {this.state.endTime}
            <br />
            Break {this.state.breakTimethis} mins
            <br />
            Status {this.state.status}
            <br />
            <br />
            Docket Number {this.state.docketNumber}
            <br />
     
    </div>
</div>
      
   
   
    )
}
}

export default DocketDetails;