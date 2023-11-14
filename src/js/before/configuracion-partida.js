const avanzar = document.getElementById('avanzar')
const jugadores2 = document.getElementById('jugadores2')
const jugadores3 = document.getElementById('jugadores3')
const jugadores4 = document.getElementById('jugadores4')

avanzar.addEventListener('click', () => {
  let value = 2
  if (jugadores2.checked) {
    value = 2
  } else if (jugadores3.checked) {
    value = 3
  } else if (jugadores4.checked) {
    value = 4
  }
  localStorage.setItem('jugadores', value)
  window.location.href = `jugadores.html`
})
