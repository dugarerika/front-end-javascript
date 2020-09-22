export function main (){
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
    
    // btn2.addEventListener('click', function () {
    //     console.log('Has hecho click')
    // })
    
    // btn2.addEventListener('click', ()=>{
    //     console.log('Has hecho click')
    // })
    
    btn2.addEventListener('click', onClickMostrar) // onClickMostrar es un callback por eso no tiene parentesis
    
    function onClickMostrar () {
        const nombre = document.querySelector('#i_nombre').value
        console.log('Has hecho click', nombre)
        document.querySelector('#o_result').value = nombre
    }
    
    // const onClickMostrar = function () {
    //     console.log('Has hecho click en mostrar')
    // }
    
    // btn2.addEventListener('click', () => {
    //     onClickMostrar()
    // })  //de esta manera podriamos pasar parametros al callback onClicMostrar 
    
    
    
    setTimeout(()=>{
        console.log('Paso un segundo')
    }, 1000)

}