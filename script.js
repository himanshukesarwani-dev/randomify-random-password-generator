// Selecting all the html elements required and storing them in various const and let variables.

const generateBtn = document.querySelector("#generate-btn");
const lengthOfPassword = document.querySelector("#length-of-password");
let passwordOne = document.getElementById("password-one");
let passwordTwo = document.getElementById("password-two");
let pass = "";

// character array consisting of alphabets (small and capital both), numbers and special symbols. 
const charactersArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"
];


// main function - Get Random Password 
function getRandomPassword(passwordName) {

    // loop for generating the password. On each iteration it will add a character to the pass (password) string 

    for (let i = 0; i < lengthOfPassword.value; i++) {
        pass += charactersArray[Math.floor(Math.random() * charactersArray.length)];
    }

    passwordName.innerText = pass; // appending the password to the UI
    pass = ""; // resetting it for the next call.

}

// event listeners for pass1 and pass2

generateBtn.addEventListener("click", () => {
    getRandomPassword(passwordOne)
})

generateBtn.addEventListener("click", () => {
    getRandomPassword(passwordTwo)
})

// clearing the input on focus.

lengthOfPassword.addEventListener("focus", (event) => {
    lengthOfPassword.value = ""
})

passwordOne.addEventListener("click", () => {
    copyfunc(passwordOne)
})
passwordTwo.addEventListener("click", () => {
    copyfunc(passwordTwo)
})



function copyfunc(passwordName) {
    if (passwordName.textContent) {

        // Copy the text inside the text field
        navigator.clipboard.writeText(passwordName.textContent);

        // Alert the copied text
        alert("Copied the text: " + passwordName.textContent);
    }
}