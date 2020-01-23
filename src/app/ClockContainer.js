import { connect } from 'react-redux';
import ClockComponent from './ClockComponent';
import { homeOperations } from './duck';

const mapStateToProps = (state) => {
    return {
        breakLength: state.home.breakLength,
        sessionLength: state.home.sessionLength
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: (event) => {
            dispatch(homeOperations.increment(event.target.id));
        },
        decrement: (event) => {
            dispatch(homeOperations.decrement(event.target.id));
        }
    };
}

const ClockContainer = connect(mapStateToProps, mapDispatchToProps)(ClockComponent);
export default ClockContainer;