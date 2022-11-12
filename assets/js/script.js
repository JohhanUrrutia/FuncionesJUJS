ele = document.getElementById("ele1") 
ele.style.backgroundColor = 'green'
let yellow = 'yellow'
boxUno = document.getElementById("box1")
boxDos = document.getElementById("box2")
boxTres = document.getElementById("box3")
boxCuatro = document.getElementById("box4")
let cyan = 'cyan'
let magenta = 'magenta'

let pintar = function(color){
    ele.style.backgroundColor = color
    console.log("entro la funcion")
}

ele.addEventListener("click", ()=>{
    pintar(yellow)
})

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
    boxUno.style.backgroundColor = cyan
    boxDos.style.backgroundColor = cyan
    boxTres.style.backgroundColor = cyan
    boxCuatro.style.backgroundColor = cyan
    } else if (event.key === 's') {
    boxUno.style.backgroundColor = yellow
    boxDos.style.backgroundColor = yellow
    boxTres.style.backgroundColor = yellow
    boxCuatro.style.backgroundColor = yellow
    } else if (event.key === 'd') {
    boxUno.style.backgroundColor = magenta
    boxDos.style.backgroundColor = magenta
    boxTres.style.backgroundColor = magenta
    boxCuatro.style.backgroundColor = magenta
    } })

boxUno.addEventListener ("click", () => {
    boxUno.style.backgroundColor = 'red'
})

boxDos.addEventListener ("click", () => {
    boxDos.style.backgroundColor = 'green'
})

boxTres.addEventListener ("click", () => {
    boxTres.style.backgroundColor = 'orange'
})

boxCuatro.addEventListener ("click", () => {
    boxCuatro.style.backgroundColor = 'aqua'
})
