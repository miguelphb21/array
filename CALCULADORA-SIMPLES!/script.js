var num1 = document.getElementById('numero1')
var num2 = document.getElementById('numero2')
var parag = document.getElementById('resultado')
function somar(){
    var n1 = Number(num1.value)
    var n2 = Number(num2.value)
    var soma = n1+n2
    parag.innerHTML = soma
}
function subtrair(){
    var n1 = Number(num1.value)
    var n2 = Number(num2.value)
    var subtrai = n1-n2
    parag.innerHTML = subtrai
}
function multiplicar(){
    var n1 = Number(num1.value)
    var n2 = Number(num2.value)
    var multiplica = n1*n2
    parag.innerHTML = multiplica
}
function dividir(){
    var n1 = Number(num1.value)
    var n2 = Number(num2.value)
    var dividi = n1/n2
    parag.innerHTML = dividi
}