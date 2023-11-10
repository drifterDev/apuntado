const avanzar = document.getElementById('avanzar')
const opcion1 = document.getElementById('jugadores2')
const opcion2 = document.getElementById('jugadores3')
const opcion3 = document.getElementById('jugadores4')

avanzar.addEventListener('click', () => {
  if (opcion1.checked) {
    window.location.href = 'ganador-2.html'
  } else if (opcion2.checked) {
    window.location.href = 'ganador-3.html'
  } else if (opcion3.checked) {
    window.location.href = 'ganador-4.html'
  }
})