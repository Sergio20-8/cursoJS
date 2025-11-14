

const numeros = [1,2,56,35,14,78,69,254,65,552,32,2,674]

numeros[0] = 7
 

console.log(numeros.pop())

numeros.forEach((n, i) => {
    console.log(`n${i}: `, n)
});