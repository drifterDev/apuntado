const avanzar = document.getElementById('avanzar')

avanzar.addEventListener('click', () => {
  window.location.href = 'ganador-1.html'
})

const contrasenas = [
  document.getElementById('contrasena-1'),
  document.getElementById('contrasena-2'),
  document.getElementById('contrasena-3'),
  document.getElementById('contrasena-4')
]

console.log(localStorage.getItem('jugadores'))

for (let i = 0; i < localStorage.getItem('jugadores')-1; i++) {
  contrasenas[i].addEventListener('click', () => {
    window.location.href = 'contrasena.html'
  })
}
