import React from 'react';
import './InputGroup.css';

const InputGroup = (props) => {
    const {classes} = props;
    return (
        <div className={!classes ? "container-input-group" : classes}>
            {props.children}
        </div>
    );
};

export default InputGroup;
