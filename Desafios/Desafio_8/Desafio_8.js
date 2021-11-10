function reajuste() {
    let nome = window.prompt("Qual é o nome do funcionarío?")
    var salario_inicial = parseInt(window.prompt("Qual é o salário de " + nome + "?"))
    var porcentagem = parseInt(window.prompt("O salário de " + nome + " vai ser reajustado em qual porcentagem?"))
    var desconto = (porcentagem / 100) * salario_inicial;
    var salario_final = salario_inicial + desconto
    let text_principal = window.document.getElementById('text');
    let texto1 = window.document.getElementById('texto_1');
    let texto2 = window.document.getElementById('texto_2');
    let texto3 = window.document.getElementById('texto_3');
    text_principal.innerHTML = ("<h2>" + nome + " recebeu um aumento salarial!</h2>");
    texto1.innerHTML = ("O salario atual era Rs" + salario_inicial);
    texto2.innerHTML = ("Com um aumento de " + porcentagem + "%, o salário vai aumentar Rs" + desconto + " no próximo mês.");
    texto3.innerHTML = ("E a partir daí, " + nome + " vai passar a ganhar Rs" + salario_final);
}