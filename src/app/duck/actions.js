import types from './types.js';

const incrementBreak = (timeLeft) => {
    return {
        type: types.INCREMENT_BREAK,
        timeLeft: timeLeft
    };
}

const decrementBreak = (timeLeft) => {
    return {
        type: types.DECREMENT_BREAK,
        timeLeft: timeLeft
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

const playAudio = () => {
    return {
        type: types.PLAY_AUDIO
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
    startSession,
    playAudio
};