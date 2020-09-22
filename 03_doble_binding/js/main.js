export function main (){

    let nombre

    // Nodos del DOM
    const bMostrar = document.querySelector('#b_mostrar')
    const bBorrar =  document.querySelector('#b_borrar')
    const iNombre = document.querySelector('#i_nombre')
    const oResult = document.querySelector('#o_result')

    // Asignacion de manejadores de eventos
    // bMostrar.addEventListener('click', onClickMostrar)
    iNombre.addEventListener('input', onImputNombre)
    bBorrar.addEventListener('click', onClickBorrar)

    // Funciones manejadoras de eventos
    
    // function onClickMostrar () {
    //     nombre = iNombre.value
    //     oResult.value = nombre
    // }

// JSDOC
/**
    * Funcion manejadora del evento click del boton bBorrar
    * @author Erika Tavera
    */
    function onClickBorrar () {
        nombre = ''
        iNombre.value = nombre
        oResult.value = nombre
    }

    /**
    * @param {*} ev
    */
    function onImputNombre () {
        nombre = iNombre.value
        oResult.value = nombre
        console.log(iNombre.value)
    }
}

