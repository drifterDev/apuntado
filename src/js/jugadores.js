const avanzar = document.getElementById('avanzar')

avanzar.addEventListener('click', () => {
  let jugadores = localStorage.getItem('jugadores') ?? '2'
  window.location.href = `partida-${jugadores}.html`
})

const contrasenas = document.querySelectorAll('.flecha-local')

for (let con of contrasenas) {
  con.addEventListener('click', () => {
    window.location.href = 'contrasena.html'
  })
}
