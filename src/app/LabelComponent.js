import React from 'react';
import './label.scss';

const LabelComponent = (props) => {
    return (
        <div>
            <label className="label" id={`${props.id}-label`}>{props.text}</label>
            <div className="label-control" id={`${props.id}-decrement`} onClick={() => props.handleDecrement(props.id)}>dec</div>
            <div className="label-control" id={`${props.id}-increment`} onClick={() => props.handleIncrement(props.id)}>inc</div>
            <span className="label-length" id={`${props.id}-length`}>{props.length}</span>
        </div>
    );
}

export default LabelComponent;