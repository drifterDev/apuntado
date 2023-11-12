const comprar = document.getElementById('comprar')
const publicidad = document.getElementById('publicidad')
const retroceder = document.getElementById('retroceder')

comprar.addEventListener('click', () => {
  window.location.href = 'compra-tokens.html'
})

publicidad.addEventListener('click', () => {
  const value = localStorage.getItem('publicidad')
  if (value === 'true') {
    localStorage.setItem('publicidad', 'false')
    window.location.href = 'publicidad.html'
  } else {
    localStorage.setItem('publicidad', 'true')
    window.location.href = 'advertencia.html'
  }
})

retroceder.addEventListener('click', () => {
  window.location.href = 'index.html'
})