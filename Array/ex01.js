 const array = [21, 6, 84, 24, 86, 11, 39, 59, 96, 53]

// //list
// array.forEach((elemento, indice)=>{
//     console.log(`${indice} - ${elemento}`)
// })
// const listarDados = (elemento) => console.log(elemento)
// array.forEach(listarDados)

//método MAP

// console.log(array)
// array.map((elemento)=>{
//    console.log(elemento * 3)
// })
// const listarMap = elemento => console.log(elemento)
// array.map(listarMap)

// const maiorQue30 = array.find((elemento)=>{
//     return elemento > 30
// })
// console.log(maiorQue30)

const maiorQue31 = array.filter((elemento)=>{
    return elemento > 31
})
console.log(maiorQue31)