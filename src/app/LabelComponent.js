import React from 'react';
import './label.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const LabelComponent = (props) => {
    return (
        <div id="label-container">
            <label className="label" id={`${props.id}-label`}>{props.text}</label>
            <FontAwesomeIcon icon={faCaretUp} className="label-control" id={`${props.id}-increment`} 
                onClick={() => props.handleIncrement(props.id)} />
            <span className="label-length" id={`${props.id}-length`}>{props.length}</span>
            <FontAwesomeIcon icon={faCaretDown} className="label-control" id={`${props.id}-decrement`} 
                onClick={() => props.handleDecrement(props.id)} />
        </div>
    );
}

export default LabelComponent;