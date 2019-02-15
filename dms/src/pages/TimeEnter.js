import React from 'react';
// import './index.css';
var moment = require('moment');
moment().format();

class TimeEnter extends React.Component{
    constructor(){
        super()
        this.state={
            hello:'',
            time:'',
            endTime:''
        }
        this.readTime=this.readTime.bind(this);
        this.updateInput=this.updateInput.bind(this)
        this.calc=this.calc.bind(this)


    }

    componentDidMount(){
        // this.readTime();
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

calc(){
    var start =moment(this.state.time, 'HH::mm');
    var end =moment(this.state.endTime, 'HH::mm');
    var result= moment.duration(end.diff(start))
    var hours = result.asHours();
    console.log(start,end,result,hours)
}

render(){
    return(
        <div>
            <input type="time" 
            name='time'
            value={this.state.time} onChange={this.updateInput} />
                   <input type="time" 
            name='endTime'
            value={this.state.endTime} onChange={this.updateInput} />
            
           <button onClick={this.calc}>calc</button>
        
        </div>
    )
}

}

export default TimeEnter;