import React from 'react';
import './FormRow.css';

const FormRow = (props) => {
    const {classes} = props;
    return (
        <div className={!classes ? "container-form-row" : classes}>
            {props.children}
        </div>
    );
};

export default FormRow;
