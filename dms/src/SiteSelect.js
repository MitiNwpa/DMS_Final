import React from 'react'
import { Link } from '@reach/router'


class SiteSelect extends React.Component{



    render(){
        return(
            <div>
                <p>This is Site Selection</p>
                <Link to='/activity'>
                <button>High Street</button>
                </Link>
                <Link to='/activity'>
                <button>Skye Road 2</button>
                </Link>
       
            </div>
              
               
        )
    }
}

export default SiteSelect;