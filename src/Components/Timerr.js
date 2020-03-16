import React from 'react'

class Timerr extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            count: false,
            runtime: 0,
            seconds:0,
            hours:0,
            minutes:0
        }
      
        setInterval(
            () => {
            if(this.state.count){ 
            this.setState({
                runtime: this.state.runtime + 100
            })
            this.csToHMS(this.state.runtime)
        } 
        },
            1000
            )
        }
    
    
    csToHMS = ( cs ) => {
        this.setState({
        hours: Math.floor(cs / 360000),
        minutes: Math.floor((cs - (this.state.hours * 360000)) / 6000),
        seconds: parseInt((cs - (this.state.hours * 360000) - (this.state.minutes * 6000)) / 100)
        })
    }

    Click = () => {
        this.setState( {count: !this.state.count} )
    }
  
    Reset = () => {
        this.setState({ count:false, runtime: 0, seconds:0, hours:0, minutes:0 });
    };
    

    render() {
    return (<div className="container">
                <div className="whole-container">
                    <div className="timecont">
                        <p className="form">{String(this.state.hours).padStart(2, '0')}:</p>
                        <p className="hour">Hours</p>
                    </div>
                    <div className="timecont">
                        <p className="form">{String(this.state.minutes).padStart(2, '0')}:</p>
                        <p className="hour">Minutes</p>
                    </div>
                    <div className="timecont">
                        <p className="form">{String(this.state.seconds).padStart(2, '0')}</p>
                        <p className="hour">Seconds</p>
                    </div>
                </div>
                <div>
                    <button className="button" onClick={this.Click}>{this.state.count ? 'Stop' : 'Start'}</button>
                    <button className="button" onClick={this.Reset}>Reset</button>
                </div>
            </div>
)
}
}

export default Timerr;