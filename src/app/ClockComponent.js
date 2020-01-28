import React from 'react';
import Label from './LabelComponent';
import Timer from './TimerContainer';
import './clock.scss';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const ClockComponent = (props) => {
    return (
        <div id="clock-container">
            <CircularProgressbarWithChildren value={props.progress} strokeWidth="1" 
                styles={{
                    path: {
                      stroke: props.timerLabel === "Session" ? 
                      props.timeLeft > 15 ? 'orange' : 'red' : 
                      props.timeLeft > 15 ? 'green' : 'red'
                    }
                  }}>
                <Timer />
                <div id="labels">
                    <Label id="break" text="Break Length" handleIncrement={props.increment} 
                    handleDecrement={props.decrement} length={props.breakLength} />
                    <Label id="session" text="Session Length" handleIncrement={props.increment} 
                    handleDecrement={props.decrement} length={props.sessionLength} />
                </div>
            </CircularProgressbarWithChildren>
        </div>
    );
}

export default ClockComponent;