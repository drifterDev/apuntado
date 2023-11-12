const perder = document.getElementById('perder')
const ganar = document.getElementById('ganar')
const cartas = document.getElementById('cartas')
const mazo = document.getElementById('mazo')
const sobrantes = document.getElementById('sobrantes')

perder.addEventListener('click', () => {
  window.location.href = 'perdedor.html'
})

ganar.addEventListener('click', () => {
  let value = localStorage.getItem('bot') ?? '2'
  window.location.href = `ganador-${value}.html`
})

const color = localStorage.getItem('color') ?? 'red'
cartas.classList.add(`bg-${color}-400`)
mazo.classList.add(`bg-${color}-400`)
sobrantes.classList.add(`bg-${color}-400`)