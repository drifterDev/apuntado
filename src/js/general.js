const retroceder = document.getElementById('retroceder')
const avanzar = document.getElementById('avanzar')

avanzar.addEventListener('click', () => {
  window.location.href = 'index.html'
})

retroceder.addEventListener('click', () => {
  window.location.href = 'tienda.html'
})