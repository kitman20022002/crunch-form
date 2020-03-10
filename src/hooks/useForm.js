import {useEffect, useState} from "react";

const useForm = (callback, validateForm, data, rules) => {


    const [values, setValues] = useState(data);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleCheckBox = (name, value) => {
        setValues({
            ...values,
            [name]: !value
        });
    };

    const handleChange = event => {
        const {name, value} = event.target;

        setValues({
            ...values,
            [name]: value
        });
    };

    function setCountryState(value) {
        setValues({
            ...values,
            'state': value
        });
    }

    function togglePopUp() {
        setValues({
            ...values,
            'showPopUp': !values.showPopUp
        });
    }

    function reset() {
        setValues({
            ...data,
            'showPopUp': false
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        setErrors(validateForm(values, rules));
        setIsSubmitting(true);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [errors]);

    return {
        handleChange,
        handleSubmit,
        values,
        errors,
        togglePopUp,
        reset,
        handleCheckBox,
        setCountryState
    }
};

export default useForm;
