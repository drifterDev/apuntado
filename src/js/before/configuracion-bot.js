const avanzar = document.getElementById('avanzar')
const opcion1 = document.getElementById('jugadores2')
const opcion2 = document.getElementById('jugadores3')
const opcion3 = document.getElementById('jugadores4')

avanzar.addEventListener('click', () => {
  if (opcion1.checked) {
    localStorage.setItem('bot', 'novato')
  } else if (opcion2.checked) {
    localStorage.setItem('bot', 'experto')
  } else {
    localStorage.setItem('bot', 'maestro')
  }
  window.location.href = `bot.html`
})