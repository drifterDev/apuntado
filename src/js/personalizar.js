const avanzar = document.getElementById('avanzar')
const radios = document.getElementsByName('modelo')
const imagen = document.getElementById('imagen')

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
  let value = modelo.split('modelo')[1]
  imagen.src = `../../../imagenes/gato${value}.jpg`
  localStorage.setItem('modelo', modelo)
}

// setInterval(() => {
//   console.log('modelo: ', localStorage.getItem('modelo'))
// }, 1000)