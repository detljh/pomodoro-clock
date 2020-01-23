import React from 'react';

const TimerComponent = (props) => {
    return (
        <div>
            <div id="timer">
                <span id="timer-label">{props.timerLabel}</span>
                <span id="time-left">{props.timeLeft}</span>
            </div>
            <div id="controls">
                <span id="start_stop" onClick={props.start_stop}>start_stop</span>
                <span id="reset" onClick={props.reset}>reset</span>
            </div>
            <audio id="beep" src="beep.mp3" />
        </div>
    );
}

export default TimerComponent;