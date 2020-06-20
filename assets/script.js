// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];


//this function generates a random character from an array 
function randomGenerator(fourArrays) {
  var passwordArray = [];
  //for (var i = 97; i < 123; i++) {
  //passwordArray.push(String.fromCharCode(i));
  //}
  var randomIndex = Math.floor(Math.random() * fourArrays.length);
  var randomCharacter = fourArrays[randomIndex];
  console.log(randomCharacter);
  return randomCharacter;
}

console.log(String.fromCharCode(97));
//this function determines the length of the password, status working 
function passwordRules() {
  var passwordLength = window.prompt("Please choose the number of characters you would like to use. Enter a number between 8 and 128.");
  var pwLength = parseInt(passwordLength);
  if (pwLength >= 8 && pwLength <= 128) {
    //window.alert("Yay! You chose " + pwLength + ". ");
    console.log(pwLength);
    return pwLength;
  }
  else {
    window.alert("Oops! Invalid character choice. Try again.");
    console.log(pwLength);
    return -1;
  }
}



function generatePassword() {
  randomGenerator(upperCasedCharacters);
  randomGenerator(lowerCasedCharacters);
  randomGenerator(specialCharacters);
  randomGenerator(numericCharacters);
  finalStep("hell", "no");
  //ask about length is >=8 and <128
  var upperChoice;
  var lowerChoice;
  var specialChoice;
  var numberChoice;
  var desiredLength = passwordRules();
  upperChoice = window.confirm("Would you like to include uppercase characters?");
  lowerChoice = window.confirm("Would you like to include lowercase characters?");
  specialChoice = window.confirm("Would you like to include special characters?");
  numberChoice = window.confirm("Would you like to include numbers?");

  //making decision on what characters the password includes 
  if (desiredLength > 0 && (upperChoice || lowerChoice || specialChoice || numberChoice)) {
    console.log("partytime");
    let tempArray = []; 
    if (upperChoice) {
      tempArray = tempArray.concat(upperCasedCharacters);
      console.log(tempArray);
    }
    if (lowerChoice) {
      tempArray = tempArray.concat(lowerCasedCharacters);
      console.log(tempArray);
    }
    if (specialChoice) {
      tempArray = tempArray.concat(specialCharacters);
      console.log(tempArray);
    }
    if (numberChoice) {
      tempArray = tempArray.concat(numericCharacters);
      console.log(tempArray);
    }
    let key = ""; 
    for (var i = 0; i < desiredLength; i++) {
    key = finalStep(key, randomGenerator(tempArray));
    }
    console.log(key);
    return key;
  }
  else {
    return "";
  }


  //else {
  parseInt.passwordLength;
  //ask about uppercase
  //var passwordUpper = window.confirm("Would you like to include uppercase letters?")
  //if response is yes include random uppercase letters, else break
  //if (passwordUpper) {


  //else {


  //ask about lowercase
  //var passwordLower = window.confirm("Would you like to include lowercase letters?")
  //if response is yes include lowercase letters, else break 
  //if () {


  //else {


  //ask about numbers
  //var passwordNumbers = window.confirm("Would you like to include numbers?")
  //if response is yes include numbers, else break
  //if () {


  //else {


  //ask about special characters
  //var passwordSpecial = window.confirm("Would you like to include special characters?")
  //if response is yes include specail characters, else break 
  //if () {


  //else {


  //make sure one of the above is chosen

  //console.log()
}

//generatePassword();
//return it
//your code here 
//return


function finalStep(word, letter) {
  let temp = word + letter;
  console.log(temp);
  return temp;
}

