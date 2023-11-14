const avanzar = document.getElementById('avanzar')
const radios = document.getElementsByName('modelo')
const imagen = document.getElementById('imagen')

if (localStorage.getItem('modelo') !== null){
  imagen.src = `./assets/paquetes/${localStorage.getItem('modelo')}/preview.png`
}

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
  window.location.href = '../index.html'
})

function cambiarModelo(modelo){
  imagen.src = `./assets/paquetes/${modelo}/preview.png`
  localStorage.setItem('modelo', modelo)
}
