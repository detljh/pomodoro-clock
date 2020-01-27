import React from 'react';
import Label from './LabelComponent';
import Timer from './TimerContainer';
import './clock.scss';

const ClockComponent = (props) => {
    return (
        <div id="clock-container">
            <Timer />
            <div id="labels">
                <Label id="break" text="Break Length" handleIncrement={props.increment} 
                handleDecrement={props.decrement} length={props.breakLength} />
                <Label id="session" text="Session Length" handleIncrement={props.increment} 
                handleDecrement={props.decrement} length={props.sessionLength} />
            </div>
        </div>
    );
}

export default ClockComponent;