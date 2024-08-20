const diaPrimeiro = new Date(new Date().getFullYear(), 0,1)
console.log("Primeiro dia do ano: ", diaPrimeiro)
const hoje = new Date()
console.log(hoje)
var diferencaMilissegundos = hoje - diaPrimeiro
const convertendo = Math.floor(1000 * 60 * 60 * 24)
console.log(convertendo)
const formatar = hoje.toLocaleDateString(`pt-BR`)
console.log(formatar)