let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio'

function botaoClicado(){
    console.log('o botão foi clicado')
}

function alerta(){
    alert('Eu amo JS')
}

function botaoPrompt(){
    let cidade = prompt('digite a ciade em que você esta:')
    alert(`Estava na cidade ${cidade} e lembrei de você`)
}

function soma(){
    let num1 = parseInt(prompt('digite um numero:'))
    let num2 = parseInt(prompt('digite outro numero numero:'))
    let resultado = num1 + num2;
    alert(`A soma do numero ${num1} + ${num2} é ${resultado}`)
}