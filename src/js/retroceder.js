const retroceder = document.getElementById('retroceder')

retroceder.addEventListener('click', () => {
  window.location.href = 'tienda.html'
})

console.log(localStorage.getItem('publicidad'))
