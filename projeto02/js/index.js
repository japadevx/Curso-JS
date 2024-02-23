document.addEventListener('DOMContentLoaded', ()=>{
    const baseURL = "https://swapi.dev/api/people"

    fetch(baseURL)
    .then((response)=>{
        if(!response.ok){
            throw new Error('Erro de rede:'+response.status)
        }
        return response.json()
    })
    .then((data)=>{
        renderizarPersonagem(data)
        console.log(data.results[0].name)
    })
    .catch((err)=>console.log(err))
})

function renderizarPersonagem(item){
    const container = document.getElementById('personagem-caixa');
    item.results.forEach((item,index) => {
        const divPersonagens = document.createElement('div')
        divPersonagens.innerHTML = `
        <div class = "personagem-caixa">
        
            <img src ="./img/perso${index}.png"> 
            <div>
                <h3>${item.name}</h3>
            </div>
        </div>
    `;
    divPersonagens.addEventListener('click', ()=>{
        detalhesPersonagem(index)
    })
    divPersonagens.classList.add('personagem')
    container.appendChild(divPersonagens)
    })
}
function detalhesPersonagem(index){
    window.location.href = `./pages/person.html?index=${index}`
}
