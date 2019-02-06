import React, {Component} from 'react';
import firebase from './firestore';
import { navigate } from '@reach/router';
import Navigation from './Navigation';



const db = firebase.firestore();
const refDoc = db.collection('docket');


const divStyle = {
  color: 'red',
  border: '50px solid pink'
};


// .where("cName", '==', 'hrishi')
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
              {item.email}
              <br/>
              {item.company}
              <div>
                  approval status is {item.site}
              </div>
              <button onClick={()=>navigate(`/docketdetailsapproval/${item.id}`)}>
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
          <div>
                        <Navigation pageName="Docket Approval"/>

             <div style={divStyle}>
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