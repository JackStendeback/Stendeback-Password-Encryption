// Assignment Code
var generateBtn = document.querySelector("#generate");

// This line of code is used to generate a password when the button is clicked.
document.getElementById("generate").addEventListener("click", generatePassword);





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
