const generateBtn = document.querySelector("#generate-btn");
const lengthOfPassword = document.querySelector("#length-of-password");
const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"
];

let passwordOne = document.getElementById("password-one");
let passwordTwo = document.getElementById("password-two");
let pass = "";


function clickEventHandler(passwordName) {


    for (let i = 0; i < lengthOfPassword.value; i++) {
        pass += characters[Math.floor(Math.random() * characters.length)];
    }

    passwordName.innerText = pass;
    pass = "";

}

generateBtn.addEventListener("click", () => {
    clickEventHandler(passwordOne)
})

generateBtn.addEventListener("click", () => {
    clickEventHandler(passwordTwo)
})

lengthOfPassword.addEventListener("focus", (event) => {
    lengthOfPassword.value = ""
})