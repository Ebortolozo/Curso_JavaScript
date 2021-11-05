function conversor(){
    var metros = parseInt(window.prompt("Digite uma distancia em metros(m)"));
    let texto = window.document.getElementById('text')
    let texto_kilometro = window.document.getElementById('kilometro')
    let texto_Hectometro = window.document.getElementById('Hectometro')
    let texto_Decametro = window.document.getElementById('Decametro')
    let texto_Decimetro = window.document.getElementById('Decimetro')
    let texto_Centimetro = window.document.getElementById('Centimetro')
    let texto_Milimetro = window.document.getElementById('Milimetro')
    kilometro(metros, texto_kilometro)
    Hectometro(metros, texto_Hectometro)
    Decametro(metros, texto_Decametro)
    Decimetro(metros, texto_Decimetro)
    Centimetro(metros, texto_Centimetro)
    Milimetro(metros, texto_Milimetro)
    texto.innerHTML = "<h2>A distancia de " + metros + " metros, corresponde a...</h2>"

}

function kilometro(metros, texto_kilometro){
    let kilometro = metros / 1000
    texto_kilometro.innerHTML = "" + kilometro + " quilometros (Km)"
}
function Hectometro(metros, texto_Hectometro){
    let Hectometro = metros / 100
    texto_Hectometro.innerHTML = Hectometro + " Hectometro (Hm)"
}
function Decametro(metros, texto_Decametro){
    let Decametro = metros / 10
    texto_Decametro.innerHTML = Decametro + " Decametro (Dam)"
}
function Decimetro(metros, texto_Decimetro){
    let Decimetro = metros * 10
    texto_Decimetro.innerHTML = Decimetro + " Decimetro (dm)"
}
function Centimetro(metros, texto_Centimetro){
    let Centimetro = metros * 100
    texto_Centimetro.innerHTML = Centimetro + " Centimetro (cm)"
}
function Milimetro(metros, texto_Milimetro){
    let Milimetro = metros * 1000
    texto_Milimetro.innerHTML = Milimetro + " Milimetro (mm)"
}



//m, km , hm, dam, dm, cm, mm