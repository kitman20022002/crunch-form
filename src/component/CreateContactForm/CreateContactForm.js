import React from 'react';

import useForm from "../../hooks/useForm";
import {validateForm} from "../../shared/utility";
import Modal from "../Modal/Modal";
import ContactFormData from "../Data/ContactFormData";

const CreateContactForm = () => {

    const data = {
        honorifics: '',
        firstName: '',
        lastName: '',
        accountName: '',
        companyName: '',
        phone: '',
        fax: '',
        title: '',
        email: '',
        emailOptOut: false,
        street: '',
        city: '',
        state: '',
        postCode: '',
        description: '',
        showPopUp: false,
    };

    const rules = {
        honorifics: {
            required: true
        },
        firstName: {
            required: true,
            minLength: 5,
            maxLength: 50,
        },
        lastName: {
            required: true,
            maxLength: 50,
        },
        fax: {
            isNumeric: true,
            maxLength: 50,
        },
        accountName: {
            required: true,
            maxLength: 50,
        },
        phone: {
            required: true,
            isNumeric: true,
            maxLength: 15,
            minLength: 4
        },
        title: {
            required: true,
            maxLength: 25,
        },
        email: {
            required: true,
            isEmail: true,
        },
        street: {
            required: true,
            maxLength: 50,
        },
        city: {
            required: true,
            maxLength: 50,
        },
        state: {
            required: true,
            maxLength: 50,
        },
        postCode: {
            required: true,
            isPostCode: true
        },
        description: {
            required: true
        }
    };

    const countries =
        [
            "New South Wales",
            "Victoria",
            "Queensland",
            "Western Australia",
            "South Australia",
            "Tasmania",
        ];

    const {handleChange, handleSubmit, values, errors, togglePopUp, reset, handleCheckBox, setCountryState} = useForm(submit, validateForm, data, rules);

    function submit() {
        togglePopUp();
    }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <header>
                    <h1>Create Contact</h1>
                    <div>
                        <button className={"button button--white"}
                                onClick={reset}
                                type={"button"}
                                data-testid={'cancel-btn'}>Cancel
                        </button>
                        <button className={"button button--orange"} type="submit" data-testid={'save-btn'}>Save</button>
                    </div>
                </header>
                <ContactFormData handleChange={handleChange}
                                 handleCheckBox={handleCheckBox}
                                 disabled={false}
                                 errors={errors}
                                 values={values}
                                 classes={"form form-max-width"}
                                 countries={countries}
                                 setCountryState={setCountryState}
                />
            </form>
            {values.showPopUp && <Modal data={values} errors={errors} togglePopUp={togglePopUp} countries={countries}/>}
        </React.Fragment>
    );
};
export default CreateContactForm;
