// Elements
const password = document.querySelector('#password');
const button = document.querySelector ('button');
const generateButton = document.querySelector ('#generate');



// Password Date
let numbers = '01234567890';
let lowercaseChar = 'abcdefghijklmnopqrstuvwxyz';
let uppercaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let symbolsChar = '!@#$%^&*()_+{}:"<>?|';
let passwordLength = 8;
let passwordValue = '';

   

// Create Password
const createPassword = () => {
    passwordValue = '';

    for (let i = 0; i < passwordLength; i++) {
        let number = Math.floor (Math.random() * character.length);
        passwordValue += character.substring(number, number + 1);
    }
    password.value = passwordValue;
    console.log (passwordValue);
}

// Events
button.addEventListener('click', createPassword);
generateButton.addEventListener('click',createPassword);
