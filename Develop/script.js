// Assignment Code
var generateBtn = document.querySelector("#generate");
var chars = document.getElementById("chars");
// Write password to the #password input
function generatepassword(){
  console.log("generatepassword")
  var chars ="!@#$%%&abcdefghijklmnopqrstuvwxyz";
  var passwordlength="8";
  var password ="";
for (var i=0; i<generatepassword.length; i++){
password = math.floor(math.random()*chars.length)
}
return;
}
function writePassword() {
  document.getElementById("display").generatepassword = password;
function writePassword() {
  var password = generatepassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
}