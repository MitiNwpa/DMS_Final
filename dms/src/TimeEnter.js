import React from 'react'
var moment = require('moment');
moment().format();

class TimeEnter extends React.Component{
    constructor(){
        super()
        this.state={
            hello:'',
            time:''
        }
        this.readTime=this.readTime.bind(this);
        this.updateInput=this.updateInput.bind(this)

    }

    componentDidMount(){
        this.readTime();
    }

readTime(){
var startTime=moment("12:16:59 am", "HH:mm:ss a");
var endTime=moment("06:12:07 pm", "HH:mm:ss a");
var duration = moment.duration(endTime.diff(startTime));
var hours = parseInt(duration.asHours());
var minutes = parseInt(duration.asMinutes())-hours*60;
// alert (hours + ' hour and '+ minutes+' minutes.')
       
       var result = endTime.diff(startTime, 'hours') + " Hrs and " +     
                        endTime.diff(startTime, 'minutes') + " Mns";
console.log(minutes)
}

updateInput = e => {
    this.setState({
        [e.target.name]: e.target.value
    })

}


render(){
    return(
        <div>
            <input type="time" value={this.state.time} required></input>
        
         {/* <input type="time" value={start.format('HH:mm:ss')} /> */}
        </div>
    )
}

}

export default TimeEnter;