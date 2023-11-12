const avanzar = document.getElementById('avanzar')
const opcion1 = document.getElementById('jugadores2')
const opcion2 = document.getElementById('jugadores3')
const opcion3 = document.getElementById('jugadores4')

avanzar.addEventListener('click', () => {
  if (opcion1.checked) {
    localStorage.setItem('bot', '2')
  } else if (opcion2.checked) {
    localStorage.setItem('bot', '3')
  } else {
    localStorage.setItem('bot', '4')
  }
  window.location.href = `bot-${localStorage.getItem('bot')}.html`
})