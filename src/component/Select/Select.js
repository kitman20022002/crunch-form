import React from 'react';

const Select = (props) => {
    const {classes} = props;
    return (
        <select className={classes} {...props}>
            {props.children}
        </select>
    );
};

export default Select;
