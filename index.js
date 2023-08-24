const characters = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i",
    "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
    "t", "u", "v", "w", "x", "y", "z", "0", "1", "2",
    "3", "4", "5", "6", "7", "8", "9", "~", "`", "!",
    "@", "#", "$", "%", "^", "&", "*", "(", ")", "_",
    "-", "+", "=", "{", "[", "}", "]", ",", "|", ":",
    ";", "<", ">", ".", "?", "/"
  ]
  

let textBoxEl1 = document.getElementById("password1")
let textBoxEl2 = document.getElementById("password2") 


  

function generatePassword(){
    getRandom()
    let randomPassword = getRandom()
    let randomPassword2 =getRandom()
   
    textBoxEl1.value = randomPassword
    textBoxEl2.value = randomPassword2

}
function getRandom(){
    randomPassword = ""

    for (let i = 0; i < 20; i++){
   let random = characters[Math.floor(Math.random()* characters.length)]
   randomPassword += random
   
}
return randomPassword
}
