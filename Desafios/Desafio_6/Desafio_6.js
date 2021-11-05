function main() {
    let celsius = parseInt(window.prompt("Digite uma temperatura em ˚C (Celsius)"));
    let texto = window.document.getElementById('text');
    texto.innerHTML = "<h2>A temperatura de " + celsius + "˚C, corresponde a...</h2>"
    let kelvin = window.document.getElementById('kelvin');
    let fahrenheint = window.document.getElementById('fahrenheit');
    calc_k(celsius, kelvin);
    calc_f(celsius, fahrenheint);
}

function calc_k(celsius, kelvin){
    let temperatura = celsius + 273.15
    kelvin.innerHTML = temperatura + "˚K (Kelvin)"
}
function calc_f(celsius, fahrenheint){
    let temperatura = (celsius * 1.8) + 32;
    fahrenheint.innerHTML = temperatura + "˚F (Fahrenheint)"
}