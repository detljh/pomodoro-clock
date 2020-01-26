import { connect } from 'react-redux';
import TimerComponent from './TimerComponent';
import { homeOperations } from './duck';

const mapStateToProps = (state) => {
    return {
        timerLabel: state.home.timerLabel,
        timeLeft: state.home.timeLeft,
        audioPlay: state.home.audioPlay,
        resetAudio: state.home.resetAudio
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        startStop: () => {
            dispatch(homeOperations.startStop());
        },
        reset: () => {
            dispatch(homeOperations.reset());
        }
    };
}

const TimerContainer = connect(mapStateToProps, mapDispatchToProps)(TimerComponent);
export default TimerContainer;