import Creators from './actions.js';

const  tick = (dispatch, getState, initial=false) => {
    setTimeout(() => {
        if (initial) {
            dispatch(Creators.start());
        } else {
            dispatch(Creators.tick());
        }
        
        const timeLeft = getState().home.timeLeft;
        const isRunning = getState().home.isRunning;
        if (timeLeft > 0 && isRunning) {
            tick(dispatch, getState);
        }
    }, 1000);
}

const startStop = () => {
    return (dispatch, getState) => {
        const isRunning = getState().home.isRunning;
        if (isRunning) {
            dispatch(Creators.stop());
        } else {
            tick(dispatch, getState, true);
        }
    };
};

const increment = (type) => {
    return (dispatch, getState) => {
        const isRunning = getState().home.isRunning;
        if (isRunning) {
            return;
        }
        if (type === "break") {
            if (getState().home.breakLength < 60) {
                dispatch(Creators.incrementBreak());
            }
        } else if (type === "session") {
            if (getState().home.sessionLength < 60) {
                let timeLeft = (getState().home.sessionLength + 1) * 60;
                dispatch(Creators.incrementSession(timeLeft));
            }
        }
    };
};

const decrement = (type) => {
    return (dispatch, getState) => {
        const isRunning = getState().home.isRunning;
        if (isRunning) {
            return;
        }
        if (type === "break") {
            if (getState().home.breakLength > 1) {
                dispatch(Creators.decrementBreak());
            }
        } else if (type === "session") {
            if (getState().home.sessionLength > 1) {
                let timeLeft = (getState().home.sessionLength - 1) * 60;
                dispatch(Creators.decrementSession(timeLeft));
            }
        }
    };
};

const reset = () => {
    return (dispatch) => {
        dispatch(Creators.reset());
    };
}

export default {
    startStop,
    increment,
    decrement,
    reset
};