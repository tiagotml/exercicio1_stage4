let numberOne = prompt('Digite o primeiro número');
let numberTwo = prompt('Digite o segundo número');
let soma = Number(numberOne) + Number(numberTwo);
let subtracao = Number(numberOne) - Number(numberTwo);
let multiplicacao = Number(numberOne) * Number(numberTwo);
let divisao = Number(numberOne) / Number(numberTwo);
let modulo = Number(numberOne) % Number(numberTwo);
alert('Soma: ' + soma)
alert('Subtração: ' + subtracao)
alert('Multiplicação: ' + multiplicacao)
alert('Divisão: ' + divisao)
alert('Módulo: ' + modulo)
if (soma % 2 == 0 ){
    alert(`A soma dos números é ${soma} e é par`);
}
else {
    alert(`A soma dos números é ${soma} e é ímpar`);
}
if (numberOne != numberTwo){
    alert(`O primeiro número é diferente do segundo`);
}