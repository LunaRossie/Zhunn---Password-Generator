
document.querySelector("#generate").addEventListener("click", writePassword);


let alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

let confirmLength = "";
let confirmUpperCase;
let confirmLowerCase;
let confirmSpecialCharacter;
let confirmNumericCharacter;


function generatePassword() {
  let confirmLength = (prompt("How many characters do you want your password to contain?"));


  while(confirmLength <= 9 || confirmLength >= 81) {
      alert("Password length must be between 10-80 characters Try again");
      let confirmLength = (prompt("How many characters do you want your password to contain?"));
      } 

      
      alert(`Your password will have ${confirmLength} characters`);

    
    let confirmNumericCharacter = confirm("Click OK to confirm if you want to include numeric characters");  
    let confirmSpecialCharacter = confirm("Click OK to confirm if you want to include special characters");  
    let confirmUpperCase = confirm("Click OK to confirm if you want to include uppercase characters");
    let confirmLowerCase = confirm("Click OK to confirm if you want to include lowercase characters");
      
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("You must choose at least one parameter");
        let confirmNumericCharacter = confirm("Click OK to confirm if you want to include numeric characters");   
        let confirmSpecialCharacter = confirm("Click OK to confirm if you want to include special characters"); 
        let confirmUpperCase = confirm("Click OK to confirm if you want to include uppercase characters");
        let confirmLowerCase = confirm("Click OK to confirm if want like to include lowercase characters");   
    } 

      
      let passwordCharacters = []
      
    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(alphaLower)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(alphaUpper)
    }

      console.log(passwordCharacters)

      
      let randomPassword = ""
      
      for (let i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}


function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}