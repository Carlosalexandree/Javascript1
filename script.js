let nome = prompt("Qua seu nome?")
alert("Olá," + nome)

let firstNumber = prompt("Digite o primeiro número")
let secondNumber = prompt("Digite o segundo número")
firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

// criar as constantes que vao fazer o calculo

const soma = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const div = firstNumber / secondNumber
const multi = firstNumber * secondNumber
const restoDiv = firstNumber % secondNumber

alert('Soma ' + soma)
alert('Subtração ' + sub)
alert('Divisão ' + div)
alert('Multiplicação ' + multi)
alert('Resto da divisão ' + restoDiv)

function verificarSomaParImpar(value) {

  if (value % 2 === 0) {
    return (value + ", Esse número é par" )
  } else {
    return(value + ", Esse número é Impar")
  }
}
const resposta = verificarSomaParImpar(soma)
alert(resposta)

const resposta1 = verificarSomaParImpar(sub)
alert(resposta1)

