import Creators from './actions.js';

let timer = 0;

const tick = (dispatch, getState) => {
    return setInterval(() => {
        const timeLeft = getState().home.timeLeft;
        if (timeLeft <= 0) {
            const timerLabel = getState().home.timerLabel;
            if (timerLabel === "Session") {
                dispatch(Creators.startBreak());
            } else {
                dispatch(Creators.startSession());
            } 
        } else {
            dispatch(Creators.tick());
        }
    }, 1000);
}

const startStop = () => {
    return (dispatch, getState) => {
        const isRunning = getState().home.isRunning;
        if (isRunning) {
            if (timer) {
                clearTimeout(timer);
            }
            dispatch(Creators.stop());
        } else {
            dispatch(Creators.start());
            timer = tick(dispatch, getState);
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
        if (timer) {
            clearTimeout(timer);
        }
        dispatch(Creators.reset());
    };
}

export default {
    startStop,
    increment,
    decrement,
    reset
};