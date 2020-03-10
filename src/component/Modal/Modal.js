import React from 'react';

import ContactFormData from "../Data/ContactFormData";
import {MdDone, MdClose} from "react-icons/md";
import './Modal.css';
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => {
    const {data, errors} = props;
    return (
        <Backdrop>
            <div className={"popup"} data-testid={'modal'}>
                <div className={"text-container"}>
                    <div className={"flex"}>
                        <h2>Saved</h2>
                        <MdDone className={"icon-done"} color={"#02D57C"}/>
                    </div>
                    <p>The contact details have been saved</p>
                    <button onClick={props.togglePopUp} className={"button-close"}>
                        <MdClose className={"icon--close"}/>
                    </button>
                </div>
                <div className={"content"}>
                    <ContactFormData disabled={true} errors={errors} values={data}
                                     classes={"form modal-max-width form--disabled"}/>
                </div>
            </div>
        </Backdrop>
    );
};

export default Modal;
