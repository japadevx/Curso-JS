console.log('este é o primeiro console')

// setTimeout(function(){ //isso faz o console.log receber a informação 3000 seg dps
//     console.log('este é o segundo console')
// }, 3000);

// setInterval(function(){ //isso faz o console.log receber uma informação nova a cada 2000 seg
//     console.log('este é o segundo console')
// }, 2000)

// console.log('este é o terceiro console')

// const promessa = Promise.resolve(10 + 5) //

// console.log('logica que foi desenvolvida')

// promessa.then(function(value){
//     console.log(`A soma =  ${value}`)
//     return value

// }).then(function(value){ 
//     console.log(`A subtração - 1 = ${value - 1}`)
//     return value

// }).then(function(value){
//     console.log(`A multiplicação * 2 = ${value * 2}`)
//     return value

// }).then(function(value){
//     console.log(`A divisão / 2 =  ${value / 2}`)
//     return value
// })

// console.log('codigo extra')

// Promise.resolve('Olá,' * 4)
// .then((value)=>{
//     if(Number.isNaN(value)){
//         throw new Error('Valores inválidos')
//     }
// }).catch((Err) => {
//     console.log(`um erro ocorreu ${Err}`)
// })

// function checkNumber(n){
//     return new Promise((resolve, reject) => {
//         if(n > 20){
//             resolve('numero é maior que 2')
//         }else{
//             reject(new Error('Número invalido'))
//         }
//     })
// }
// const num1 = checkNumber(25)
// const num2 = checkNumber(5)

// num1.then((value) => {
//     console.log(`o resultado é: ${value}`)
// }).catch((err) => {
//     console.log(`error : ${err}`)
// })

// num2.then((value) => {
//     console.log(`o resultado é: ${value}`)
// }).catch((err) =>{
//     console.log(`error : ${err}`)
// })

// console.log('teste async')

// async function calcularComDelay(x, y){
//     return x * y
// }

// calcularComDelay(3, 2)
// .then((value) =>{
//     console.log(`resultado function ${value}`)

// }).catch((err) => {
//     console.log(`${err}`);
// })

function resposta(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resoleu promessa')
        }, 3000);
    })
}
async function chamadaDelay(){
    console.log('chamando a função')
    const resultado = await resposta()
    console.log(`${resultado}`)
}
chamadaDelay()
