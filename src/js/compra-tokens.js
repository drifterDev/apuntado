const retroceder = document.getElementById('retroceder')
const paquetes = document.querySelectorAll('.botones-tokens')

for (let paquete of paquetes) {
  paquete.addEventListener('click', () => {
    localStorage.setItem('tokens', `${paquete.id[7]}`)
    window.location.href = 'confirmacion.html'
  })
}

retroceder.addEventListener('click', () => {
  window.location.href = 'tienda.html'
})