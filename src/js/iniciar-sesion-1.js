const cuenta = document.getElementById('cuenta')
const registrarse = document.getElementById('registrarse')
const retroceder = document.getElementById('retroceder')

registrarse.addEventListener('click', () => {
  window.location.href = 'iniciar-sesion-2.html'
})

cuenta.addEventListener('click', () => {
  window.location.href = 'registrarse.html'
})

retroceder.addEventListener('click', () => {
  window.location.href = '../index.html'
})