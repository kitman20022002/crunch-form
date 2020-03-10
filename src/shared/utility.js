export const validateForm = (values, rules) => {
    let errors = {};
    let correctCount = 0;
    let total = 0;
    for (let value in values) {
        const res = checkValidity(values[value], rules[value]);
        if (res.isValid) {
            correctCount++;
        }
        total++;
        errors[value] = res;
    }
    return correctCount === total ? {} : errors;
};


export const checkValidity = (value, rules) => {

    let isValid = true;
    let message = "";
    if (!rules) {
        return {isValid};
    }

    if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(value) && isValid;
        message = "Email is invalid";
    }

    if (rules.isPostCode) {
        //https://rgxdb.com/r/2Z7DWG3I(Australia)
        const pattern = /^(?:(?:[2-8]\d|9[0-7]|0?[28]|0?9(?=09))(?:\d{2}))$/;
        isValid = pattern.test(value) && isValid;
        message = "PostCode is invalid";
    }

    if (rules.isNumeric) {
        const pattern = /^\d+$/;
        isValid = pattern.test(value) || value === '' && isValid;
        message = "Field must be a number";
    }

    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid;
        message = "Field min is " + rules.maxLength;
    }

    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid;
        message = "Field min is " + rules.minLength;
    }

    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
        message = "Field is Required";
    }

    message = !isValid ? message : '';
    return {isValid, message};
};
