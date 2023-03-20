let pais = []
let res = document.getElementById('res')
//let cidades = new Array('Tijucas', 'Itajaí')

function incluir(){
    let nome_pais = document.getElementById('nome_pais').value
    pais.push(nome_pais)
    res.innerHTML = pais

    //let incluir = document.getElementById('incluir')
    //incluir.addEventListener('click', ()=>{
        //res.innerHTML += pais + "<br>"
        //res.innerHTML += cidades
    //})
}

function excluir(){
    pais.pop(pais)
    res.innerHTML = pais

}