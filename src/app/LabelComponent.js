import React from 'react';

const LabelComponent = (props) => {
    return (
        <div>
            <label id={`{props.id}-label`}>{props.text}</label>
            <div id={`{props.id}-decrement`} onClick={props.handleDecrement}>dec</div>
            <div id={`{props.id}-increment`} onClick={props.handleIncrement}>inc</div>
            <span id={`{props.id}-length`}>{props.length}</span>
        </div>
    );
}

export default LabelComponent;