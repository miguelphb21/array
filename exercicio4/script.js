let c = 1
let conta = document.getElementById('contador-cliques')
var clique = document.getElementById('botao-cliques').addEventListener('click', function(){
    conta.innerHTML = `Cliques: ${c++}`
})