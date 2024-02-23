const numeros = [1, 2, 3, 4, 5]
const somaTodos = numeros.reduce((total, atual)=>{
    return total + atual
})
console.log(somaTodos)