
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
document.querySelector("#generate").addEventListener("click", writePassword);

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialChar = ["!", "&", ",", "*", ".", "/", "?","~"]
var caseLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var caseUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var chooseLength;
var chooseSpecialChar;
var chooseNumericChar;
var chooseUpperCase;
var chooseLowerCase;
// function created to generate the password based on the acceptance criteria in the README based on the user's choice
function generatePassword() {
  var chooseLength = (prompt("What character length would you like your password to be?"));


    var chooseLowerCase = confirm("If you want to include lowercase characters click OK");
    var chooseUpperCase = confirm("If you want to include uppercase characters click OK");    
    var chooseLowerCase = confirm("If you want to include special characters click OK");
    var chooseSpecialChar= confirm("If you want to include numeric characters click OK");
       while(chooseUpperCase === false && choooseLowerCase === false && chooseSpecialChar === false && chooseNumericChar === false) {
         alert("Required to choose at least one option out of the four");
         var chooseLowerCase = confirm("If you want to include lowercase characters click OK");
         var chooseUpperCase = confirm("If you want to include uppercase characters click OK");    
         var chooseLowerCase = confirm("If you want to include special characters click OK");
         var chooseSpecialChar= confirm("If you want to include numeric characters click OK");
    }

  // will concat that specific criteria to the password if selected from the prompts above
      var passwordCriteria = []
      
    if (chooseSpecialChar) {
      passwordCriteria = passwordCriteria.concat(specialChar)
    }

    if (chooseNumericChar) {
      passwordCriteria = passwordCriteria.concat(number)
    }
      
    if (chooseLowerCase) {
      passwordCriteria = passwordCriteria.concat(caseLower)
    }

    if (chooseUpperCase) {
      passwordCriteria = passwordCriteria.concat(caseUpper)
    }

      console.log(passwordCriteria)

      var randomPassword = ""
      // for loop will continue to create random passowords
      for (var i = 0; i < chooseLength; i++) {
        randomPassword = randomPassword + passwordCriteria[Math.floor(Math.random() * passwordCriteria.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}



