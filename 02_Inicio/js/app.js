console.log(window) // BOM
console.log(document) //DOM como HMTL
console.dir(document) // DOM como NODOS

// Acceso a los NODOS - Ejemplos
const btn1 = document.getElementById('b_mostrar')
console.dir(btn1)
const btn2 = document.querySelector('#b_mostrar')
console.dir(btn2)
const controls = document.querySelectorAll('.form-control')
console.dir(controls)

btn2.addEventListener()