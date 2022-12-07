let button1 = document.getElementById('alert')
let button2 = document.getElementById('somme')
button2.innerHTML = "Somme"

button1.addEventListener('click', () => alert("Hello World"))

button2.addEventListener("click", () => {
    let div = document.createElement('div');
    div.innerHTML = parseInt(5 + 6);
    div.style.fontSize = '3rem'
    document.body.appendChild(div)
})