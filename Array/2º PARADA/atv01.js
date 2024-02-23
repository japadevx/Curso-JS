let produtos = [    
    { nome: 'Camiseta', categoria: 'Roupas' },
    { nome: 'Celular', categoria: 'Eletrônicos' }
];
let precos = [
    { nome: 'Camiseta', preco: 20 }, 
    { nome: 'Celular', preco: 500 },
];

function combinarProdutosPreco(produtos, precos){ //vai receber dois paramentros, o produto e o preco
   return produtos.map((produtos) => { //o map vai listar todos  os produtos
       //Encontrar o objeto igual do array de preco
       let precoProduto = precos.find((preco) => preco.nome === produtos.nome)
       return{
           nome: produtos.nome,
           categoria: produtos.categoria,
           preco: precoProduto.preco
               
       }
   })

}
combinarProdutosPreco(produtos, precos)
