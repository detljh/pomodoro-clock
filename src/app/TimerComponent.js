import React from 'react';

class TimerComponent extends React.Component {
    constructor(props) {
        super(props);
        this.getTimeDisplay = this.getTimeDisplay.bind(this);
    }

    getTimeDisplay() {
        let minutes = Math.floor(this.props.timeLeft / 60);
        let seconds = this.props.timeLeft % 60;

        if (minutes < 10) {
            minutes = "0".concat(minutes);
        } 

        if (seconds < 10) {
            seconds = "0".concat(seconds);
        }
        return minutes + ":" + seconds;
    }

    render() {
        return (
            <div>
                <div id="timer">
                    <span id="timer-label">{this.props.timerLabel}</span>
                    <span id="time-left">{this.getTimeDisplay()}</span>
                </div>
                <div id="controls">
                    <span id="start_stop" onClick={this.props.startStop}>start_stop</span>
                    <span id="reset" onClick={this.props.reset}>reset</span>
                </div>
                <audio id="beep" src="beep.mp3" />
            </div>
        );
    }
}

export default TimerComponent;