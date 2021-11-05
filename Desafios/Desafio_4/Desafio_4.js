function comprar(){
    let nome = window.prompt("Que produto você está comprando?");
    let preco = parseInt(window.prompt("Quanto custa o/a " + nome + " que você está comprando?"));
    //console.log(typeof(preco));
    let desconto = parseFloat(window.prompt("Qual valor você deu para pagar o/a " + nome));
    //console.log(typeof(desconto))
    var troco = matematica(preco, desconto);    
    //console.log(typeof(troco))
    window.alert("Você comprou " + nome + " que custou RS " + preco + ".\nDeu RS " + desconto + " em dinheiro e vai receber RS " + troco + " de troco. \nVolte Sempre!!")

}

function matematica(preco, desconto){
    return desconto - preco;
}