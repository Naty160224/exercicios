function multiplica(a,b){
    return a * b
} var resultado = multiplica(7, 8)
console.log(resultado)

function quadrado(n){
    return n * n
} var resultado2 = quadrado(8)
console.log(resultado2)
const numeros = [1,2,3,4,5]
const quadrados = numeros.map(quadrado)
console.log(quadrados)
