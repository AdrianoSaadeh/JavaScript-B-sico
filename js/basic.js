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

// Controle de Fluxos // 

var saldo = 1000

function saque(valor) {
    if (valor > saldo) {
        console.log('Valor do saque superior ao saldo')
    } else if (valor > 700) {
        console.log('Valor do saque é maior do que o permitido por operação')
    } else {
        saldo = saldo - valor
    }
}

saque(701)
console.log(saldo)

// Arrays // 
var gaveteiro = ['meias', 'gravatas', 'documentos', 'camisetas']
console.log(gaveteiro[2])

var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']
console.log(typeof personagens)

personagens.push('C3PO', 'R2D2')
console.log(personagens)

personagens.pop()
console.log(personagens)

personagens = personagens.filter(function (p) {
    return p !== 'Darth Vader'
})
console.log(personagens)

personagens = personagens.filter(function (p) {
    return p === 'Luke Skywalker'
})
console.log(personagens)


// Controles des Repetição (loops) // 
var personas = ['Mestre YodaL', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader', 'Minha vó', 'Han Solo']
console.log(personas.length)
// personas.forEach((p) => {   // exemplo de foreach
//     console.log(p)
// })

// for (var i in personas) {  // exemplo de forin
//     console.log(personas[i])
// }

for (var index = 0; index <= personas.length - 1; index++) {
    console.log(personas[index])
}

// Super Variáveis -> Objetos //
var yoda = {}
yoda.nome = 'Yoda'
yoda.idade = 200
yoda.jedi = true

console.log(yoda)

var luke = {
    nome: 'Luke',
    idade: 32,
    jedi: false,
    mostraIdade: function () {
        console.log(`A idade de ${this.nome} é ${this.idade} anos`);
    }
}

console.log(luke)
luke.mostraIdade()

// Constantes //
const test = 'Darth Vader'
console.log(nome)


