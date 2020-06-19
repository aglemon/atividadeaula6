let rs = require('readLine-sync')

console.log("Qual seu peso")
let peso = rs.questionFloat()

console.log(peso)

console.log("qual sua altura")
let altura = rs.questionFloat()

console.log(altura)

let imc = (peso / (altura * altura))

console.log("seu IMC é de " + imc )
