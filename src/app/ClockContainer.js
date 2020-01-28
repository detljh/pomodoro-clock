import { connect } from 'react-redux';
import ClockComponent from './ClockComponent';
import { homeOperations } from './duck';

const mapStateToProps = (state) => {
    return {
        breakLength: state.home.breakLength,
        sessionLength: state.home.sessionLength,
        progress: state.home.progress,
        timerLabel: state.home.timerLabel,
        timeLeft: state.home.timeLeft
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: (type) => {
            dispatch(homeOperations.increment(type));
        },
        decrement: (type) => {
            dispatch(homeOperations.decrement(type));
        }
    };
}

const ClockContainer = connect(mapStateToProps, mapDispatchToProps)(ClockComponent);
export default ClockContainer;