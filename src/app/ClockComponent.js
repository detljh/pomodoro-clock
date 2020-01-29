import React from 'react';
import Label from './LabelComponent';
import Timer from './TimerContainer';
import './clock.scss';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './app.scss';


const ClockComponent = (props) => {
    return (
        <div id="clock-container">
            <CircularProgressbarWithChildren value={props.progress} strokeWidth="2" 
                styles={{
                    path: {
                      stroke: props.timeLeft < 16 ? 'red' : 
                      props.timerLabel === "Session" ? 'orange' : 'green'
                    }
                  }}>
                <Timer />
                <hr className={props.timeLeft < 16 ? "red-border" :
                    props.timerLabel === "Session" ? 'orange-border' : 'green-border'} id="divider" />
                <div id="labels">
                    <Label id="break" text="Break Length" handleIncrement={props.increment} 
                    handleDecrement={props.decrement} length={props.breakLength} timerLabel={props.timerLabel}
                    timeLeft={props.timeLeft} />
                    <Label id="session" text="Session Length" handleIncrement={props.increment} 
                    handleDecrement={props.decrement} length={props.sessionLength} timerLabel={props.timerLabel} 
                    timeLeft={props.timeLeft} />
                </div>
            </CircularProgressbarWithChildren>
        </div>
    );
}

export default ClockComponent;