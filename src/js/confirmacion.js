const retroceder = document.getElementById('retroceder')
const volver = document.getElementById('volver')
const continuar = document.getElementById('continuar')

retroceder.addEventListener('click', () => {
  window.location.href = 'compra-tokens.html'
})

volver.addEventListener('click', () => {
  window.location.href = 'compra-tokens.html'
})

continuar.addEventListener('click', () => {
  window.location.href = 'pago.html'
})