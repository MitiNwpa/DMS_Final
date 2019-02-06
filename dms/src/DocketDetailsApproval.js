import React from 'react';
import 'firebase/firestore';
import firebase from "./firestore";
import Navigation from './Navigation';
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
        status:'pending',
        comment:''
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
    deleteDocket = (e) => {
        refDoc.doc(e.target.value).delete().then(function() {
          console.log("Document successfully deleted!");
        }).catch(function(error) {
          console.error("Error removing document: ", error);
        });
      }

      holdDocket = (e) => {
        refDoc.doc(e.target.value).update({
            'status' :"pending"
           
        })
      }

      approveDocket = (e) => {
        refDoc.doc(e.target.value).update({
            'status' :"approved"
           
        })        
    }

    rejectDocket = (e) => {
        refDoc.doc(e.target.value).update({
            'status' :"rejected"
         })
    }

    updateInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }




render(){
    return(
        <div>
            <Navigation pageName="Docket Details"/>
            its me your boi number  {this.props.userID}
            <br />
            The activity name {this.state.activityName}
            <br />

            company name{this.state.companyName}
            <br />
            total payment ${this.state.payAmount}
            <br />
            i can do everything
            <button value={this.state.id} onClick={this.rejectDocket}>X</button>
              <button value={this.state.id} onClick={this.approveDocket}> ✓</button>
              <button value={this.state.id} onClick={this.holdDocket}> ||</button>

              {/* <textarea name="comment" id="" cols="30" rows="10" onChange={this.updateInput} value={this.state.comment}>
              </textarea>
              <button onClick={this.addComment} value='comment'>Add Comment</button> */}


        </div>
   
    )
}
}

export default DocketDetailsApproval;