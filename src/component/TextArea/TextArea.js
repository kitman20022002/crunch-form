import React, {Component} from 'react';
import {MdErrorOutline} from "react-icons/md";
import './TextArea.css';

class TextArea extends Component {

    render() {
        const {label = '', name, value, onChange, error} = this.props;
        return (
            <React.Fragment>
                <div className={"container-text-area"}>
                    <label htmlFor={name}>{!this.props.disabled ? label : label.replace(' (optional)', '')}</label>
                    <textarea name={name}
                              value={value}
                              onChange={onChange}
                              className={error && !error.isValid ? "error" : ''}
                              {...this.props}
                    />
                    {error && !error.isValid &&
                    <MdErrorOutline datatest-id={"error"} className={"icon-error"} color={"#FF516D"}/>}
                </div>
            </React.Fragment>
        )
    }
}

export default TextArea;
