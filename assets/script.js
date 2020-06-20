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
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];


//this function generates a random character from an array, status working 
function randomGenerator(fourArrays) {
  //this equation gives us a random integer using fourArrays as a placeholder for whatever array we sub in in this equation 
  var randomIndex = Math.floor(Math.random() * fourArrays.length);
  //fourArrays gives us a random integer in the chosen index which equals a randomCharacter which is where we store and validate that integer
  var randomCharacter = fourArrays[randomIndex];
  console.log(randomCharacter);
  //this returns the value of randomCharater to the user 
  return randomCharacter;
}


//this function determines the length of the password, status working 
function passwordRules() {
  //so passwordLength is equal to the string the user enters into this window
  var passwordLength = window.prompt("Please choose the number of characters you would like to use. Enter a number between 8 and 128.");
  //this equation turns passwordLength into a number (pwLength)
  var pwLength = parseInt(passwordLength);
  if (pwLength >= 8 && pwLength <= 128) {
    //window.alert("Yay! You chose " + pwLength + ". ");
    console.log(pwLength);
    //this returns the length of the password
    return pwLength;
  }
  //if the user enters a number <8 and and >128 then it will return a value of -1 and throw this window 
  else {
    window.alert("Oops! Invalid character choice. Try again.");
    console.log(pwLength);
    return -1;
  }
}



function generatePassword() {
  //randomGenerator(upperCasedCharacters);
  //randomGenerator(lowerCasedCharacters);
  //randomGenerator(specialCharacters);
  //randomGenerator(numericCharacters);
  //finalStep("hell", "o");

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
    //this is a temporary array that holds whatever the user has chosen to be true  
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
    //this variable is equal to the empty string that we have to put our random integers in 
    let key = "";
    //this for loop will loop through as many times as it proves i < desiredLength is true and then it will stop 
    for (var i = 0; i < desiredLength; i++) {
      //this equation is adding the empty key and the tempArray holding the users choices of arrays and creating a new value of key
      key = finalStep(key, randomGenerator(tempArray));
    }
    console.log(key);
    return key;
  }
  //if the user choice is false it will return an empty string 
  else {
    return "";
  }
}


//this function adds x and y to give our temporary password
function finalStep(word, letter) {
  //this equation adds whatever is in the word and letter spots together 
  let temp = word + letter;
  console.log(temp);
  return temp;
}

