export function createControls(config, validation){
    return {
        ...config,
        // value: '',
        valid: !validation,
        touched: false,
        validation: validation
    }
}

function validatePhone(phone) {
    var reg = /^\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}$/;
    return reg.test(phone);
}

export function validate(value, validation = null) {
    if(!validation){
        return true
    }

    let isValid = true

    if(validation.required){
        isValid = value.trim() !== '' && isValid
    }

    if(validation.phone){
        isValid = validatePhone(value) && isValid
    }

    return isValid
}



export function validateForm(formControls){
    let isFormValid = true
    Object.keys(formControls).forEach(name => {
        isFormValid = formControls[name].valid && isFormValid
    })
    return isFormValid
}