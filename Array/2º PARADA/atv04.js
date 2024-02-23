let produtos = [
    { nome: 'Camiseta', preco: 20 },
    { nome: 'Celular', preco: 500 },
    { nome: 'Caneca', preco: 10 }
  ];
function precoMinimo(arrayProduto, ValorMinimo){
    return arrayProduto.filter((produto)=>produto.preco => ValorMinimo)
  }
 