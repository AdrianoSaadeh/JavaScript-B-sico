console.log('Olá JS!')


// Variaveis //
var userName = 'Gruma Foda'
document.getElementById('user-name').innerHTML = userName

var nome = 'Mestre Yoda'
var idade = 100
var jedi = true

console.log(nome)
console.log(idade)
console.log(jedi)

console.log(typeof nome)
console.log(typeof idade)
console.log(typeof jedi)

// Operadores matemáticos //
var n1 = 5
var n2 = 5
var n3 = '17'
var n4 = 12

var total = n1 + n2
var totalConcatenado = n3 + n2
console.log(total)
console.log(totalConcatenado)

var totalCasteado = n1 + parseInt(n3)
console.log(totalCasteado)

var totalSub = n1 - n2
console.log(totalSub)
var totalMul = n1 * n2
console.log(totalMul)
var totalDiv = n4 / n2
console.log(totalDiv)

// Operadores de comparação //
var v1 = 5
var v2 = '5'
var reultado = v1 === v2 // -> comparação leva em consideração o tipo de dado
console.log(reultado)
var reultado = v1 == v2 // -> comparação ignora o tipo de dado
console.log(reultado)

var saoDiferentes = v1 != v2
console.log(saoDiferentes)

var saoDiferentes = v1 !== v2
console.log(saoDiferentes)

//  Funções  //
function soma(n1, n2) {
    console.log(n1 + n2)
}
soma(7, 4)

function boasVindas(nome) {
    alert('Seja bem vindo(a) ' + nome)
}
boasVindas('Adriano')

function somaRetorna(n1, n2) {
    return n1 + n2
}
var resultado = somaRetorna(80, 9)
console.log(resultado)