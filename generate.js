// Elements
const password = document.querySelector('#password');
const button = document.querySelector ('button');

// Password Date
let character = '01234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+{}:"<>?|';
let passwordLength = 8;
let passwordValue = ' ';

// Create Password
const createPassword = () => {
    passwordValue = '';

    for (let i = 0; i < passwordLength; i++) {
        let number = Math.floor (Math.random() * character.length);
        passwordValue += character.substring(number, number + 1);
    }
    password.value = passwordValue;
}

// Events
button.addEventListener('click', createPassword);
