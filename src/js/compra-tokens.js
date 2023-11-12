const retroceder = document.getElementById('retroceder')
const paquete1 = document.getElementById('paquete1')
const paquete2 = document.getElementById('paquete2')
const paquete3 = document.getElementById('paquete3')

paquete1.addEventListener('click', () => {
  window.location.href = 'confirmacion.html'
})

paquete2.addEventListener('click', () => {
  window.location.href = 'confirmacion2.html'
})

paquete3.addEventListener('click', () => {
  window.location.href = 'confirmacion3.html'
})

retroceder.addEventListener('click', () => {
  window.location.href = 'tienda.html'
})