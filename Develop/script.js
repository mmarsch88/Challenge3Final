// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var selections = generatePassword();
  
  if (selections) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



var specialChars = "'!','@','#','$','%','^','&','*','(',')','_','+','-','=',':','?','/'";
var uppercase = "'Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'";
var lowercase = "'q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'";
var numbers = "'1','2','3','4','5','6','7','8','9','0'";
var selections = "";


function generatePassword () {
  selections = "";

    passwordLength = window.prompt("How many characters will you use? (Must be between 8 - 128)");
    if (length < 8 || length > 128) {
      window.alert("Password must be 8 - 128 characters");}
  
    if (confirm("Would you like to use special characters?")) {
      selections = selections.concat(specialChars);}

    if (confirm("Would you like to use uppercase letters?")) {
      selections = selections.concat(uppercase);}

    if (confirm("Would you like to use lowercase letters?")) {
      selections = selections.concat(lowercase);}

    if (confirm("Would you like to use numbers?")) {
      selections = selections.concat(numbers);}
}



