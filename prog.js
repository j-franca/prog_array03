let valor_pais = []
let res = document.getElementById('res')

function mostrar() {
    let pais = document.getElementById('pais').value
    valor_pais.push(pais)
    res.innerHTML = valor_pais
}

function excluir() {
    valor_pais.pop(pais)
    res.innerHTML = valor_pais

}