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

function generatePassword() {
  //ask about length is >=8 and <128
  window.prompt("Please choose the number of characters you would like to use. Enter a number between 8 and 128.")
  //if response is >= 8 && < 128 then proceed, else loop again

  if () {
    switch () {
  //ask about uppercase
  window.confirm("Would you like to include uppercase letters?")
    //if response is yes include random uppercase letters, else break

    //ask about lowercase
    window.confirm("Would you like to include lowercase letters?")
    //if response is yes include lowercase letters, else break 

    //ask about numbers
    window.confirm("Would you like to include numbers?")
    //if response is yes include numbers, else break

    //ask about special characters
    window.confirm("Would you like to include special characters?")
    //if response is yes include specail characters, else break 

    }
  }
}
  //make sure one of the above is chosen
  else {

}

  //generate password 
  //return it
  //your code here 
  //return
}