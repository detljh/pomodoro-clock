import Creators from './actions.js';

const startStop = () => {
    return (dispatch, getState) {
        const isRunning = getState().home.isRunning;
        if (isRunning) {
            dispatch(Creators.stop());
        } else {
            dispatch(Creators.start());
        }
    };
};

const increment = (type) => {
    return (dispatch) {
        if (type === "break") {
            dispatch(Creators.incrementBreak());
        } else if (type === "session") {
            dispatch(Creators.incrementSession());
        }
    };
};

const decrement = (type) => {
    return (dispatch) {
        if (type === "break") {
            dispatch(Creators.decrementBreak());
        } else if (type === "session") {
            dispatch(Creators.decrementSession());
        }
    };
};

const reset = () => {

}

export default {
    startStop,
    increment,
    decrement,
    reset
};