import React from 'react';
import alarm from './beep.mp3';
import './timer.scss';

class TimerComponent extends React.Component {
    constructor(props) {
        super(props);
        this.getTimeDisplay = this.getTimeDisplay.bind(this);
        this.audio = React.createRef();
    }

    componentDidUpdate() {
        if (this.props.audioPlay) {
            this.audio.current.play();
        } else if (this.props.resetAudio) {
            this.audio.current.pause();
            this.audio.current.currentTime = 0;
        }
    }

    getTimeDisplay() {
        let minutes = Math.floor(this.props.timeLeft / 60);
        let seconds = this.props.timeLeft % 60;

        minutes = minutes < 10 ? "0".concat(minutes) : minutes;
        seconds = seconds < 10 ? "0".concat(seconds) : seconds;
        return minutes + ":" + seconds;
    }

    render() {
        return (
            <div id="timer-container">
                <div id="timer">
                    <span id="timer-label">{this.props.timerLabel}</span>
                    <span id="time-left">{this.getTimeDisplay()}</span>
                </div>
                <div id="controls">
                    <span id="start_stop" onClick={this.props.startStop}>start_stop</span>
                    <span id="reset" onClick={this.props.reset}>reset</span>
                </div>
                <audio preload="auto" id="beep" src={alarm} ref={this.audio}/>
            </div>
        );
    }
}

export default TimerComponent;