import types from './types.js';

const INITIAL_STATE = {
    breakLength: 5,
    sessionLength: 25,
    timerLabel: 'Session',
    isRunning: false,
    timeLeft: 25 * 60,
    totalTime: 25 * 60,
    audioPlay: false,
    resetAudio: false,
    progress: 0,
    alarmBlink: false
};

const homeReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case types.DISABLE_ALARM_BLINK:
            return Object.assign({}, state, {
                alarmBlink: false
            });
        case types.UPDATE_TOTAL_TIME:
            return Object.assign({}, state, {
                totalTime: action.totalTime,
            });
        case types.PLAY_AUDIO:
            return Object.assign({}, state, {
                audioPlay: true,
                alarmBlink: true
            });
        case types.INITIAL_START:
            return Object.assign({}, state, {
                isRunning: true
            });
        case types.START_SESSION:
            return Object.assign({}, state, {
                timeLeft: state.sessionLength * 60,
                totalTime: state.sessionLength * 60,
                isRunning: true,
                timerLabel: 'Session',
                audioPlay: false,
                progress: 0
            });
        case types.START_BREAK:
            return Object.assign({}, state, {
                timeLeft: state.breakLength * 60,
                totalTime: state.breakLength * 60,
                isRunning: true,
                timerLabel: 'Break',
                audioPlay: false,
                progress: 0
            });
        case types.TICK:
            return Object.assign({}, state, {
                timeLeft: state.timeLeft - 1,
                audioPlay: false,
                progress: action.progress
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