const comprar = document.getElementById('comprar')
const publicidad = document.getElementById('publicidad')
const retroceder = document.getElementById('retroceder')

comprar.addEventListener('click', () => {
  window.location.href = 'compra-tokens.html'
})

publicidad.addEventListener('click', () => {
  const random = Math.floor(Math.random() * 2)
  if (random === 0) {
    window.location.href = 'publicidad.html'
  } else {
    window.location.href = 'advertencia.html'
  }
})

retroceder.addEventListener('click', () => {
  window.location.href = 'index.html'
})