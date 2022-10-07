const body = document.body
body.append('Hello World')

const app = document.getElementById('app')
app.innerHTML = "<h1>Ciao</h1>"

const div = document.createElement("div")
div.innerText = 'Joy 2 the world'
body.append(div)

function toggler() {
    app.classList.contains('toggled') ? app.classList.remove('toggled') : app.classList.add('toggled')
}
app.addEventListener('click', toggler)

