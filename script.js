// Assignment Code
var generateBtn = document.querySelector("#generate");

// This line of code is used to generate a password when the button is clicked.
document.getElementById("generate").addEventListener("click", generatePassword);

function generatePassword() {
  const length = prompt("Enter desired password length between 8 and 128 characters.");

  // This line of code is used to validate the password length.
  if (!length || isNaN(length) || length < 8 || length > 128) {
    alert("Invalid password length! Please enter a number between 8 and 128.");
    return;
  }

  // This line of code is used to confirm the password criteria.
  const includeLowercase = confirm("Do you want to include lowercase characters?");
  const includeUppercase = confirm("Do you want to include uppercase characters?");
  const includeNumeric = confirm("Do you want to include numeric characters?");
  const includeSpecial = confirm("Do you want to include special characters?");

  
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
