import React, {Component} from 'react';
import firebase from './firestore';
import { navigate } from '@reach/router';
import Navigation from './Navigation';



const db = firebase.firestore();
const refDoc = db.collection('docket');

class Approval extends Component{
    constructor(){
        super();
        this.state = {
            items:[]
        }
    }

    componentWillMount () {
        refDoc.onSnapshot((docSnapShot) => {
          let items = []
          docSnapShot.forEach(doc => {items.push(doc.data())})
          this.setState({
            items,
            loaded: true
          })
        })
      }


      renderDockets () {
        const ListItem = this.state.items.map((item, index) => {
          return (
            <li key={index}>
               <div>
            <h5>Company Name : {item.company}</h5>
                  <h5>Activity : {item.activityName}</h5>
                  <h5>Approval : {item.status}</h5>

            </div>
              <button className='view' onClick={()=>navigate(`/docketdetailsapproval/${item.id}`)}>
              <div>
                
              </div>
              view
      </button>

             
            </li>
          )
        })
    
        return (
          <ul>
            {ListItem}
          </ul>
        )
      }

 
    render(){
        return(
          <div className='father'>
                        <Navigation pageName="Docket Approval"/>

             <div className='approval'>
                Approval stage
                <br />
                I am the site engineeeerrrr
                {this.renderDockets()}
            </div>
          </div>
           
        )
    }
}

export default Approval;