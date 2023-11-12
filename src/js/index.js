const solitario = document.getElementById('solitario')
const local = document.getElementById('local')
const tienda = document.getElementById('tienda')
const personalizar = document.getElementById('personalizar')
const perfil = document.getElementById('perfil')
const tokens = document.getElementById('tokens')
const ajustes = document.getElementById('ajustes')

console.log(localStorage.getItem('bot'))

solitario.addEventListener('click', () => {
  window.location.href = 'configuracion-bot.html'
})

local.addEventListener('click', () => {
  window.location.href = 'configuracion-partida.html'
})

tienda.addEventListener('click', () => {
  window.location.href = 'tienda.html'
})

personalizar.addEventListener('click', () => {
  window.location.href = 'personalizar.html'
})

perfil.addEventListener('click', () => {
  window.location.href = 'iniciar-sesion-1.html'
})

tokens.addEventListener('click', () => {
  window.location.href = 'tienda.html'
})

ajustes.addEventListener('click', () => {
  window.location.href = 'actualizar.html'
})