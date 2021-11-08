function conversor() {
    let nome_produto = window.prompt("Qual é o produto que você está comprando?");
    let preco_produto = parseInt(window.prompt("Qual é o preço de " + nome_produto));
    let texto1 = window.document.getElementById('texto_1');
    let texto2 = window.document.getElementById('texto_2');
    let texto3 = window.document.getElementById('texto_3');
    let text_principal = window.document.getElementById('text')
    text_principal.innerHTML = ("<h2>Calculando desconto de 10% para " + nome_produto + "</h2>")
    texto1.innerHTML = ("O preço original era Rs " + preco_produto)
    texto2.innerHTML = ("Você acaba de ganhar Rs " + (preco_produto / 10) + " de desconto (-10%)")
    texto3.innerHTML = ("No fim, você vai pagar Rs " + (preco_produto * 0.90) + " no produto " + nome_produto);
}
