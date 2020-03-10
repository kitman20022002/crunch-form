import React from 'react';
import './Backdrop.css';

export class Backdrop extends React.Component {
    componentDidMount() {
        document.body.style.overflow = 'hidden';
    }

    componentWillUnmount() {
        document.body.style.overflow = 'unset';
    }


    render() {
        const {classes} = this.props;
        return (
            <div className={!classes ? 'backdrop' : ''}>
                {this.props.children}
            </div>
        );
    }
}

export default Backdrop;
