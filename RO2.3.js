const display = document.getElementById("display")

function answer(planet) {
    if(planet === "mercury") {
        display.innerText = "Wrong! Mercury is only the nearest planet to the Sun"
    }
    if(planet === "mars") {
        display.innerText = "Wrong! Admit it, you picked Mars 'cause it's red, right?"
    }
    if(planet === "venus") {
        display.innerText = "Correct!!! Even though Venus is not the nearest planet to the Sun, it has a carbon dioxide-dense atmosphere, so it traps a lot of heat in it!"
    }
    if(planet === "neptune") {
        display.innerText = "Wrong! Neptune is the coldest planet in our solar system"
    }
}