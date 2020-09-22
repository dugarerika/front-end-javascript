export function main (){

    let nombre

    // Nodos del DOM
    const bMostrar = document.querySelector('#b_mostrar')
    const bBorrar =  document.querySelector('#b_borrar')
    const iNombre = document.querySelector('#i_nombre')
    const oResult = document.querySelector('#o_result')

    // Asignacion de manejadores de eventos
    bMostrar.addEventListener('click', onClickMostrar)
    bBorrar.addEventListener('click', onClickBorrar)

    // Funciones manejadoras de eventos
    
    function onClickMostrar() {
        nombre = iNombre.value
        oResult.value = nombre
    }

    function onClickBorrar(){
        nombre = ''
        iNombre.value = nombre
        oResult.value = nombre
    }
    
}