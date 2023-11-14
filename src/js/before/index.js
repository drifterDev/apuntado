const solitario = document.getElementById('solitario')
const local = document.getElementById('local')
const tienda = document.getElementById('tienda')
const personalizar = document.getElementById('personalizar')
const perfil = document.getElementById('perfil')
const tokens = document.getElementById('tokens')
const ajustes = document.getElementById('ajustes')

solitario.addEventListener('click', () => {
  window.location.href = 'src/configuracion-bot.html'
})

local.addEventListener('click', () => {
  window.location.href = 'src/configuracion-partida.html'
})

tienda.addEventListener('click', () => {
  window.location.href = 'src/tienda.html'
})

personalizar.addEventListener('click', () => {
  window.location.href = 'src/personalizar.html'
})

perfil.addEventListener('click', () => {
  window.location.href = 'src/iniciar-sesion-1.html'
})

tokens.addEventListener('click', () => {
  window.location.href = 'src/tienda.html'
})

ajustes.addEventListener('click', () => {
  window.location.href = 'src/actualizar.html'
})