import React from 'react';
import './FormGroup.css';

const FormGroup = (props) => {
    const {classes} = props;
    return (
        <div className={!classes ? 'container-form-group' : ''}>
            {props.children}
        </div>
    );
};

export default FormGroup;
