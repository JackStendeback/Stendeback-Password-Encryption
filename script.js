// Assignment Code
var generateBtn = document.querySelector("#generate");

// This line of code is used to generate a password when the button is clicked. It was calling my function twice, so I changed the code to "writePassword" to fix it.
document.getElementById("generate").addEventListener("click", writePassword);

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

  // This line of code is used to validate the password criteria.
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("At least one character type must be selected!");
    return;
  }

  // This line of code is used to generate the password.
  let characterOptions = "";

  if (includeLowercase) {
    characterOptions += "abcdefghijklmnopqrstuvwxyz";
  }

  if (includeUppercase) {
    characterOptions += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (includeNumeric) {
    characterOptions += "0123456789";
  }

  if (includeSpecial) {
    characterOptions += "!@#$%^&*()";
  }

  let password = "";

  // Still assisting in generating the password using math.random and math.floor.
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characterOptions.length);
    password += characterOptions[randomIndex];
  }

  // This line of code is used to return the password.
  // Makes the password show up within the text box instead of as an alert!
  return password;
}

// This line of code is used to write the password to the #password input.
function writePassword() {
  var passwordText = document.querySelector("#password");

  // Clear the input field before generating a new password
  passwordText.value = "";

  var password = generatePassword();

  if (password) {
    passwordText.value = password;
  }
}

generateBtn.addEventListener("click", writePassword);