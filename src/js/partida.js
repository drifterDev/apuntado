const perder = document.getElementById('perder')
const ganar = document.getElementById('ganar')
const cartas = document.getElementById('cartas')
const mazo = document.getElementById('mazo')
const sobrantes = document.getElementById('sobrantes')

perder.addEventListener('click', () => {
  window.location.href = 'ganador-1.html'
})

ganar.addEventListener('click', () => {
  window.location.href = 'ganador-1.html'
})

const color = localStorage.getItem('color') ?? 'red'
cartas.classList.add(`bg-${color}-400`)
mazo.classList.add(`bg-${color}-400`)
sobrantes.classList.add(`bg-${color}-400`)