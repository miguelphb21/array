var res = document.getElementById('numero-gerado')
var addRandomNumber = document.getElementById('gerar-numero').addEventListener('click', function(){
    var numeroAleatorio = Math.floor(Math.random() * (10 + 1));
    res.innerHTML = `O número aleatorio gerado foi o:\n ${numeroAleatorio}`
})