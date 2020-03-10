import React from 'react';
import './Checkbox.css';
// https://codesandbox.io/s/yvp79r4251
const Checkbox = (props) => {
    const {value, name, onChange} = props;
    return (
        <div className="checkbox">
            <input
                type="checkbox"
                name={name}
                checked={value}
                onChange={onChange}
                {...props}
            />
            <div className={"checkbox--green"}
                 onClick={() => {
                     onChange(name, value)
                 }}>
                {value && <svg viewBox="0 0 24 24" className="tick">
                    <polyline points="20 6 9 17 4 12"></polyline>
                    }
                </svg>}
            </div>
        </div>
    );
};


export default Checkbox;
