import React, {Component} from 'react';
import {MdErrorOutline} from "react-icons/md";

class TextField extends Component {

    render() {
        const {label = '', name, value, onChange, error} = this.props;
        return (
            <React.Fragment>
                <label htmlFor={name}>{!this.props.disabled ? label : label.replace(' (optional)', '')}</label>
                <div className={"container-input"}>
                    <input type={"text"}
                           name={name}
                           value={value}
                           onChange={onChange}
                           className={error && !error.isValid ? "error" : ''}
                           autoComplete="new-password"
                           {...this.props}
                    />
                    {error && !error.isValid &&
                    <MdErrorOutline data-testid={"error"} className={"icon-error"} color={"#FF516D"}/>}
                </div>
            </React.Fragment>
        )
    }
}

export default TextField;
