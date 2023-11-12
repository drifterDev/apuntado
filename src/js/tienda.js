const comprar = document.getElementById('comprar')
const publicidad = document.getElementById('publicidad')
const retroceder = document.getElementById('retroceder')

comprar.addEventListener('click', () => {
  window.location.href = 'compra-tokens.html'
})

console.log(localStorage.getItem('publicidad'))

publicidad.addEventListener('click', () => {
  const value = localStorage.getItem('publicidad')
  if (value === 1) {
    window.location.href = 'publicidad.html'
  } else {
    window.location.href = 'advertencia.html'
  }
})

retroceder.addEventListener('click', () => {
  window.location.href = 'index.html'
})