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

const incrementSession = () => {
    return {
        type: types.INCREMENT_SESSION
    };
}

const decrementSession = () => {
    return {
        type: types.DECREMENT_SESSION
    };
}

const start = () => {
    return {
        type: types.START
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

export default { 
    incrementBreak,
    decrementBreak,
    incrementSession,
    decrementSession,
    start,
    stop,
    reset
};