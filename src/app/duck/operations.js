import Creators from './actions.js';

const disableAlarmBlink = Creators.disableAlarmBlink;

let timer = 0;

const tick = (dispatch, getState) => {
    return setInterval(() => {
        let timeLeft = getState().home.timeLeft;
        if (timeLeft <= 0) {
            const timerLabel = getState().home.timerLabel;
            if (timerLabel === "Session") {
                dispatch(Creators.startBreak());
            } else {
                dispatch(Creators.startSession());
            } 
        } else {
            timeLeft = getState().home.timeLeft;
            const totalTime = getState().home.totalTime;
            const progress = (totalTime - timeLeft + 1) / (totalTime / 100);
            dispatch(Creators.tick(progress));
            timeLeft = getState().home.timeLeft;
            if (timeLeft <= 0) {
                dispatch(Creators.playAudio());
            }
        }
    }, 1000);
}

const startStop = () => {
    return (dispatch, getState) => {
        if (timer) {
            clearInterval(timer);
        }
        const isRunning = getState().home.isRunning;
        if (isRunning) {
            dispatch(Creators.stop());
        } else {
            const timerLabel = getState().home.timerLabel;
            if (timerLabel === "Session") {
                const time = getState().home.sessionLength * 60;
                dispatch(Creators.updateTotalTime(time));
            } else {
                const time = getState().home.breakLength * 60;
                dispatch(Creators.updateTotalTime(time));
            }
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
                let timeLeft = getState().home.timeLeft;
                if (getState().home.timerLabel === "Break") {
                    timeLeft = (getState().home.breakLength + 1) * 60;
                }
                dispatch(Creators.incrementBreak(timeLeft));
            }
        } else if (type === "session") {
            if (getState().home.sessionLength < 60) {
                let timeLeft = getState().home.timeLeft;
                if (getState().home.timerLabel === "Session") {
                    timeLeft = (getState().home.sessionLength + 1) * 60;
                }
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
                let timeLeft = getState().home.timeLeft;
                if (getState().home.timerLabel === "Break") {
                    timeLeft = (getState().home.breakLength - 1) * 60;
                }
                dispatch(Creators.decrementBreak(timeLeft));
            }
        } else if (type === "session") {
            if (getState().home.sessionLength > 1) {
                let timeLeft = getState().home.timeLeft;
                if (getState().home.timerLabel === "Session") {
                    timeLeft = (getState().home.sessionLength - 1) * 60;
                }
                dispatch(Creators.decrementSession(timeLeft));
            }
        }
    };
};

const reset = () => {
    return (dispatch) => {
        if (timer) {
            clearInterval(timer);
        }
        dispatch(Creators.reset());
    };
}

export default {
    startStop,
    increment,
    decrement,
    reset,
    disableAlarmBlink
};