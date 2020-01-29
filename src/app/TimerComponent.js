import React from 'react';
import alarm from '../assets/beep.mp3';
import './timer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import './app.scss';

class TimerComponent extends React.Component {
    constructor(props) {
        super(props);
        this.getTimeDisplay = this.getTimeDisplay.bind(this);
        this.audio = React.createRef();
    }

    componentDidUpdate() {
        
        if (this.audio.current.currentTime >= this.audio.current.duration - 0.5) {
            this.props.disableAlarmBlink();
            this.audio.current.pause();
            this.audio.current.currentTime = 0;
        }

        if (this.props.audioPlay) {
            this.audio.current.play();
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
        const startStopIcon = this.props.isRunning ? faPause : faPlay;
        return (
            <div id="timer-container">
                <div id="timer">
                    <span className={ this.props.timeLeft < 16 ? "red-border" :
                        this.props.timerLabel === "Session" ? 'orange-border' : 'green-border'
                    } id="timer-label">
                        {this.props.timerLabel}
                    </span>
                    <div id="timer-controls-container">
                        <FontAwesomeIcon className="controls" icon={faSyncAlt} id="reset" onClick={this.props.reset} />
                        <span className={this.props.alarmBlink ? "blinker" : ""} id="time-left">
                            {this.getTimeDisplay()}
                            </span>
                        <FontAwesomeIcon className="controls" icon={startStopIcon} id="start-stop" onClick={this.props.startStop} /> 
                    </div>
                </div>
                
                <audio preload="auto" id="beep" src={alarm} ref={this.audio}/>
            </div>
        );
    }
}

export default TimerComponent;