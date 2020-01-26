import types from './types.js';

const INITIAL_STATE = {
    breakLength: 5,
    sessionLength: 25,
    timerLabel: 'Session',
    isRunning: false,
    timeLeft: 25 * 60 
};

const homeReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case types.TICK:
            return Object.assign({}, state, {
                timeLeft: state.timeLeft - 1,
            });
        case types.START:
            return Object.assign({}, state, {
                isRunning: true
            });
        case types.STOP:
            return Object.assign({}, state, {
                isRunning: false,
            });
        case types.RESET:
            return INITIAL_STATE;
        case types.INCREMENT_BREAK:
            return Object.assign({}, state, {
                breakLength: state.breakLength + 1,
            });
        case types.INCREMENT_SESSION:
            return Object.assign({}, state, {
                sessionLength: state.sessionLength + 1,
                timeLeft: action.timeLeft,
                isRunning: false
            });    
        case types.DECREMENT_BREAK:
            return Object.assign({}, state, {
                breakLength: state.breakLength - 1
            });
        case types.DECREMENT_SESSION:
            return Object.assign({}, state, {
                sessionLength: state.sessionLength - 1,
                timeLeft: action.timeLeft,
                isRunning: false
            });    
        default:       
            return state;
    };
};

export default homeReducer;