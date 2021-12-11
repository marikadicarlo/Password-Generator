// Assignment code here
var generateBtn = document.querySelector("#generate");

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var special = "~`!@#$%^&*()_+-={}[]\:;'<>?,./|";

var availableChar = ""

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// var password = "";
// var passwordChar = "";

// Create function for Generate Password
function generatePassword() {
availableChar = ""
  console.log('test');

// Prompt user for password criteria
var passwordPrompt = window.prompt('How many CHARACTERS would you like your password to inlcude?');
passwordPrompt = parseInt(passwordPrompt);
console.log('test');

  if (passwordPrompt < 8){
    window.alert('Password must be a number between 8 - 128 characters!');
    return "";
  }
  else if (passwordPrompt > 128){
    window.alert('Password must be a number between 8 - 128 characters!');
    return "";
  }
  else if (passwordPrompt === "" || passwordPrompt === null) {
    window.alert('Password must be a number between 8 - 128 characters. Try again!');
    return "";
  }
  else if (isNaN (passwordPrompt)) {
    window.alert('Password must be a unmber between 8 - 128 characters. Try again!');
  }

  var specialChar = window.confirm('Select OK to confirm using special characters.');
  var numericChar = window.confirm('Select OK to confirm using numeric characters.');
  var lowercaseChar = window.confirm('Select OK to confirm using lowercase characters.');
  var uppercaseChar =  window.confirm('Select OK to confirm using uppercase characters.');
  console.log(specialChar, numericChar, lowercaseChar, uppercaseChar);

  var finalPassword = [];
  var counter = 0;

  if (specialChar) {
    availableChar = availableChar + special;
    var random = Math.floor(Math.random() * special.length);
    finalPassword.push(special.charAt(random))
    counter++
  }
  if (numericChar) {
    availableChar = availableChar + number;
    var random = Math.floor(Math.random() * number.length);
    finalPassword.push(number.charAt(random))
    counter++
  }
  if (lowercaseChar) {
    availableChar = availableChar + lowercase;
    var random = Math.floor(Math.random() * lowercase.length);
    finalPassword.push(lowercase.charAt(random))
    counter++
  }
  if (uppercaseChar) {
    availableChar = availableChar + uppercase;
    var random = Math.floor(Math.random() * uppercase.length);
    finalPassword.push(uppercase.charAt(random))
    counter++
  }
  console.log('available characters', availableChar);
  

  for (var i = 0; i < passwordPrompt - counter; i++) {
    var random = Math.floor(Math.random() * availableChar.length);
    console.log(random);
    finalPassword.push(availableChar.charAt(random));
  }
  console.log(finalPassword);
  return finalPassword.join("");
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
