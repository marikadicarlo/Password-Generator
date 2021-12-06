// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Create function for Generate Password
function generatePassword(){
  console.log('User clicked button');

// Prompt user for password criteria
var promptPass = window.prompt('How many CHARACTERS would you like your password to inlcude?');

  if (promptPass === "" || promptPass === null) {
  window.alert('You need to choose a length of at least 8 characters and no more than 128 characters! Try again.');
  return generatePassword();
}


// Alert to confirm including special characters
var promptPass = window.confirm('Select OK to confirm using special characters.');
 

// Alert to confirm inlcuding numeric characters
var promptPass = window.confirm('Select OK to confirm using numeric characters.');


// Alert to confirm inlcuding lowercase characters
var promptPass = window.confirm('Select OK to confirm using lowercase characters.');


// Alert to confirm including uppercase characters
var promptPass =  window.confirm('Select OK to confirm using uppercase characters.');



// Validate password criteria

// Generate password based on criteria

// Display password to the page
 return "Password will go here!";

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
