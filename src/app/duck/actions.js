import types from './types.js';

const incrementBreak = () => {
    return {
        type: types.INCREMENT_BREAK
    };
}

const decrementBreak = () => {
    return {
        type: types.DECREMENT_BREAK
    };
}

const incrementSession = (timeLeft) => {
    return {
        type: types.INCREMENT_SESSION,
        timeLeft: timeLeft
    };
}

const decrementSession = (timeLeft) => {
    return {
        type: types.DECREMENT_SESSION,
        timeLeft: timeLeft
    };
}

const start = () => {
    return {
        type: types.INITIAL_START,
    }
}

const stop = () => {
    return {
        type: types.STOP
    };
}

const reset = () => {
    return {
        type: types.RESET
    };
}

const tick = () => {
    return {
        type: types.TICK
    };
}

const startBreak = () => {
    return {
        type: types.START_BREAK
    };
}

const startSession = () => {
    return {
        type: types.START_SESSION
    };
}

export default { 
    incrementBreak,
    decrementBreak,
    incrementSession,
    decrementSession,
    start,
    stop,
    reset,
    tick,
    startBreak,
    startSession
};