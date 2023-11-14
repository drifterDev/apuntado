const perder = document.getElementById('perder')
const ganar = document.getElementById('ganar')
const cartas = document.getElementById('cartas')
const mazo = document.getElementById('mazo')
const sobrantes = document.getElementById('sobrantes')

perder.addEventListener('click', () => {
  window.location.href = 'ganador-local.html'
})

ganar.addEventListener('click', () => {
  window.location.href = 'ganador-local.html'
})

const modelo = localStorage.getItem('modelo') ?? 'modelo4'
cartas.style.backgroundImage = `url(./assets/paquetes/${modelo}/baraja.png)`
mazo.style.backgroundImage = `url(./assets/paquetes/${modelo}/mazo.png)`
sobrantes.style.backgroundImage = `url(./assets/paquetes/${modelo}/descartada.png)`