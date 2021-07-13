// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword() {
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "1234567890";
  var symbols = "~!@#$%^&*()-+";
  var options = "";

  var upper = confirm("Do you want uppercase letters");
  var lower = confirm("Do you want lowercase letters");
  var numbers = confirm("Do you want to include numbers");
  var symbols = confirm("Do you want to include symbols");

  if (upper === true) {

  }
}
