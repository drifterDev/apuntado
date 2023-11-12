const retroceder = document.getElementById('retroceder')

retroceder.addEventListener('click', () => {
  const value = localStorage.getItem('jugadores') ?? '2'
  window.location.href = `jugadores.html`
})