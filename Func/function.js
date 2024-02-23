//exemplo 1

// function soma(a, b){
//     const soma = a + b
//     if(soma > 5){
//         console.log(`valor não permitido ${soma}`)
//     }else{
//         return soma
//     }
// }
// console.log(soma(2,2))// 0k
// console.log(soma(2))// NaN
// console.log(soma())// NaN
// soma(2,1)

//exemplo 2 

// function multiplicacao(){
//     let multi = 1
//     for(i in arguments){
//         multi *= arguments[i]
//     }
//     return multi
// }console.log(multiplicacao())
// console.log(multiplicacao(5))
// console.log(multiplicacao(5,5))
// console.log(multiplicacao(5,5,5))
// console.log(multiplicacao(5,5,5,5))

// exemplo 3

// function triplo(x){
//     return 3 * x
// }
// let triplo = function(x){
//     return 3 * x
// }
// triplo = (x) => {
//     return 3 * x
// }
// triplo = (x) => 3 * x;
// console.log(triplo(3) + 3)

// oi = (nome) => 3 * x `oi, bisonhos${nome}`;
// console.log(oi(`Guilherme`));

// const soma =  function (x,y){
//     return x + y 
// }
// const resultado = function (a, b, operacao = soma){
//     console.log(operacao(a, b))
// }
// resultado(5,5)
// resultado(5,5, soma)
// resultado(5, 5, function(x, y){
//     return x * y
// })

// resultado(3, 3,(x, y)=> x / y)
