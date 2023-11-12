const perder = document.getElementById('perder')
const ganar = document.getElementById('ganar')

perder.addEventListener('click', () => {
  window.location.href = 'perdedor.html'
})

ganar.addEventListener('click', () => {
  let value = localStorage.getItem('bot') ?? '2'
  window.location.href = `ganador-${value}.html`
})