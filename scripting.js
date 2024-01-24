const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const address = document.getElementById('address');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const input = element.parentElement;
    const errorDisplay = input.querySelector('.error');

    errorDisplay.innerText = message;
    input.classList.add('error');
    input.classList.remove('success')
}

const setSuccess = element => {
    const input = element.parentElement;
    const errorDisplay = input.querySelector('.error');

    errorDisplay.innerText = '';
    input.classList.add('success');
    input.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const addressValue = address.value.trim();

    if(firstnameValue === '') {
        setError(firstname, 'firstname is required');
    } else {
        setSuccess(firstname);
    }

    if(lastnameValue === '') {
        setError(lastname, 'lastname is required');
    } else {
        setSuccess(lastname);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(phoneValue === '') {
        setError(phone, 'phone number is required');
    } else if (phoneValue.length < 10 ) {
        setError(phone, 'phone must be at least 10 character.')
    } else {
        setSuccess(phone);
    }

    if(addressValue === '') {
        setError(address, 'address is required');
    } else {
        setSuccess(address);
    }
};
