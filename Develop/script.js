// Assignment code here
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "~`!@#$%^&*()_+-={}[]\:;'<>?,./|";
var passwordLength;
var uppercase;
var lowercase;
var numbers;
var specialChars;


// Create function for Generate Password
function generatePassword(){
  console.log('User clicked button');

// Prompt user for password criteria
var promptPass = window.prompt('How many CHARACTERS would you like your password to inlcude?');

  if (passwordLength < 8){
    window.alert('Password must be a number between 8 - 128 characters!');
    determineLength();
    return promptPass();
  }
  else if (passwordLength > 128){
    window.alert('Password must be a number between 8 - 128 characters!');
    determineLength();
    return promptPass();
  }
  else if (promptPass === "" || promptPass === null) {
    window.alert('Password must be a number between 8 - 128 characters. Try again!');
    return generatePassword();
  }
}


// Create function for user to include uppercase characters
//var promptPass = window.confirm('Select OK to confirm using special characters.');


// Alert to confirm inlcuding numeric characters
//var promptPass = window.confirm('Select OK to confirm using numeric characters.');


// Alert to confirm inlcuding lowercase characters
//var promptPass = window.confirm('Select OK to confirm using lowercase characters.');


// Alert to confirm including uppercase characters
//var promptPass =  window.confirm('Select OK to confirm using uppercase characters.');



// Validate password criteria

// Generate password based on criteria

// Display password to the page




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);