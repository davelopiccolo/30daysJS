const body = document.body
const app = body.appendChild((document.createElement('div')))
app.textContent = 'Hello'

app.innerHTML = '<h1>Password Generator</h1> <button id="pwd-btn">Generate Password</button>'
const pwdButton = document.getElementById('pwd-btn')


const passGenerator = () => {
    let alphabet = 'abcdefghilmnopqrstuvzABCDEFGHILMNOPQRSTUVZkKWwyY'
    let letters = alphabet.split()
    let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let special = '!$%&@#'
    let specialChar = special.split()
    let fullChoice = letters + digits + specialChar
    let pwd = ''
    let pwdLength = 12
    for (let x = 0; x < pwdLength; x++) {
        pwd += fullChoice[Math.floor(Math.random() * 64)]
    }
    let generatedPwd = body.appendChild((document.createElement('p')))
    generatedPwd.innerHTML = pwd
}
pwdButton.addEventListener('click', passGenerator)


