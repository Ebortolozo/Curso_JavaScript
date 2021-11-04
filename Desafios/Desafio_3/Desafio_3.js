function main(){
    let numero = parseInt(window.prompt("Digite um número inteiro qualquer:"))
    window.alert("Antes de " + numero + ", temos o número " + antecessor(numero) + ".\n" + "Depois de " + numero + ", temos o numero " + sucessor(numero));
}

function antecessor(numero){
    return (numero - 1);
}

function sucessor(numero){
    return (numero + 1 + ".");
}
