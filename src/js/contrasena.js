const retroceder = document.getElementById('retroceder')

console.log(localStorage.getItem('jugadores'))

retroceder.addEventListener('click', () => {
  const value = localStorage.getItem('jugadores') ?? 2
  window.location.href = `jugadores-${value}.html`
})