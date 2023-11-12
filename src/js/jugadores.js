const avanzar = document.getElementById('avanzar')

avanzar.addEventListener('click', () => {
  window.location.href = `partida.html`
})

const contrasenas = document.querySelectorAll('.flecha-local')

for (let con of contrasenas) {
  con.addEventListener('click', () => {
    window.location.href = 'contrasena.html'
  })
}
