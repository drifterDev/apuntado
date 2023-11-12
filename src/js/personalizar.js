const avanzar = document.getElementById('avanzar')
const radios = document.getElementsByName('modelo')
const imagen = document.getElementById('imagen')

const colors = ['red', 'blue', 'green', 'yellow']
let prev = ''

radios.forEach((radio) => {
  radio.addEventListener('change', () => {
    cambiarModelo(radio.value)
  })
})

let changed = false
for (let i = 0; i < radios.length; i++) {
  if (radios[i].value === localStorage.getItem('modelo')){
    changed = true
    radios[i].checked = true
    cambiarModelo(radios[i].value)
  }
}

if (!changed){
  radios[0].checked = true
  cambiarModelo(radios[0].value)
}

avanzar.addEventListener('click', () => {
  window.location.href = 'index.html'
})

function cambiarModelo(modelo){
  let color = colors[modelo.split('modelo')[1]-1]
  if (prev !== ''){
    imagen.classList.remove(`bg-${prev}-400`)
  }
  imagen.classList.add(`bg-${color}-400`)
  prev = color
  localStorage.setItem('modelo', modelo)
  localStorage.setItem('color', color)
}
