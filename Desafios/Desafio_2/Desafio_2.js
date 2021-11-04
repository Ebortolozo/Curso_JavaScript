var nome;
var idade;

function Inicio(){
    nome = window.prompt("Qual é o seu nome?");
    idade = window.prompt("Olá, " + nome + "! Quantos anos você tem?");
    window.alert("Acabei de conhecer " + nome + ", que tem 42 anos de idade!!")
}