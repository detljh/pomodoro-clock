import types from './types.js';

const INITIAL_STATE = {
    breakLength: 5,
    sessionLength: 25,
    timerLabel: 'Session',
    isRunning: false,
    timeLeft: 25 * 60 ,
    audioPlay: false,
    resetAudio: false
};

const homeReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case types.PLAY_AUDIO:
            return Object.assign({}, state, {
                audioPlay: true
            });
        case types.INITIAL_START:
            return Object.assign({}, state, {
                isRunning: true
            });
        case types.START_SESSION:
            return Object.assign({}, state, {
                timeLeft: state.sessionLength * 60,
                isRunning: true,
                timerLabel: 'Session',
                audioPlay: false
            });
        case types.START_BREAK:
            return Object.assign({}, state, {
                timeLeft: state.breakLength * 60,
                isRunning: true,
                timerLabel: 'Break',
                audioPlay: false
            });
        case types.TICK:
            return Object.assign({}, state, {
                timeLeft: state.timeLeft - 1,
                audioPlay: false
            });
        case types.STOP:
            return Object.assign({}, state, {
                isRunning: false,
                audioPlay: false
            });
        case types.RESET:
            return Object.assign({}, INITIAL_STATE, {
                resetAudio: true,
                audioPlay: false
            });
        case types.INCREMENT_BREAK:
            return Object.assign({}, state, {
                breakLength: state.breakLength + 1,
                timeLeft: action.timeLeft
            });
        case types.INCREMENT_SESSION:
            return Object.assign({}, state, {
                sessionLength: state.sessionLength + 1,
                timeLeft: action.timeLeft
            });    
        case types.DECREMENT_BREAK:
            return Object.assign({}, state, {
                breakLength: state.breakLength - 1,
                timeLeft: action.timeLeft
            });
        case types.DECREMENT_SESSION:
            return Object.assign({}, state, {
                sessionLength: state.sessionLength - 1,
                timeLeft: action.timeLeft
            });    
        default:       
            return state;
    };
};

export default homeReducer;