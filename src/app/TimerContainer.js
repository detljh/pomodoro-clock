import { connect } from 'react-redux';
import TimerComponent from './TimerComponent';
import { homeOperations } from './duck';

const mapStateToProps = (state) => {
    return {
        timerLabel: state.home.timerLabel,
        timeLeft: state.home.timeLeft,
        audioPlay: state.home.audioPlay,
        isRunning: state.home.isRunning,
        alarmBlink: state.home.alarmBlink
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        startStop: () => {
            dispatch(homeOperations.startStop());
        },
        reset: () => {
            dispatch(homeOperations.reset());
        },
        disableAlarmBlink: () => {
            dispatch(homeOperations.disableAlarmBlink());
        }
    };
}

const TimerContainer = connect(mapStateToProps, mapDispatchToProps)(TimerComponent);
export default TimerContainer;