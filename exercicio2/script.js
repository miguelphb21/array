let res = document.getElementById('lista-tarefas')
let itemLi = document.getElementById('nova-tarefa')

function mostrar(){
    
    var li = document.createElement('li')
    var input = document.createElement('input')
    var remove = document.createElement('button')
    remove.addEventListener('click',function(){
        res.removeChild(li)
    })
    input.setAttribute('type', 'checkbox')
    remove.textContent = 'Remover'
    res.appendChild(li).innerHTML = `${itemLi.value}`
    li.appendChild(input)
    li.appendChild(remove)
    
}