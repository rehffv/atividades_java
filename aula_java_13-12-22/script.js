const formTitle = document.getElementById('texto')
const navElements = document.getElementsByClassName('elementos_nav')
const post_autor = document.getElementsByClassName('post-autor')

/*console.log(formTitle)
console.log(formTitle.innerText)

formTitle.innerText = 'Olá pessoas bonitas'


console.log(navElements)
console.log(navElements[0].childNodes[1])

console.log(navElements)*/


function imprimir(listaElementos) {
    for (let i= 0; i < listaElementos.length; i++) {
        console.log(listaElementos[i].childNodes[1].innerText)
    }
}

imprimir(navElements)


const array = ['banana',2,3]

const array_user = ['juliana', 6, 19, 'maça', 'pizza']

const user = {
    username: 'juliana',
    sort: 6,
    idade: 19,
    frutaBoa: 'maça',
    comidasFavoritas: ['pizza', 'hamburguer', 'sorvete']
}

console.log (user[2])