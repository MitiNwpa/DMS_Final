import React from 'react'

class TimeEnter extends React.Component{
    constructor(){
        super()
        this.state={
            hello:''
        }
    }
render(){
    return(
        <div>
            <input type="time" id="appt" name="appt" value={this.state.hello}></input>
        </div>
    )
}

}

export default TimeEnter;