function main(){

    // Nodos del DOM
    const form = document.querySelector('#formUsers')
    const aGenero = [...form.querySelectorAll('[name="genero"]')]
    const nombre = form.querySelector('input#nombre')
    const correo = form.querySelector('input#correo')
    const mobile = form.querySelector('input#mobile')
    const condiciones = form.querySelector('input#condiciones')
    const region = form.querySelector('select#regiones')
    const ciudad = form.querySelector('#ciudades')

    // Definicion de manejadores de eventos
    form.addEventListener('submit', sendData)
    aGenero.forEach(item => item.addEventListener('change', generoManager))
    nombre.addEventListener('focus', nombreManager)
    nombre.addEventListener('blur', nombreManager)
    region.addEventListener('change', selectManager)
    
    // Completar el select
    const aRegiones = [
        {id:'M', nombre:'Madrid', ciudades: ['Madrid']},
        {id:'C', nombre:'Cataluña', ciudades: ['Barcelona', 'Girona']},
        {id:'E', nombre:'Euskadi', ciudades: ['Bilbao', 'Donosti']},
        {id:'G', nombre:'Galicia', ciudades: ['Coruña', 'Ourense']},
        {id:'A', nombre:'Andalucia', ciudades: ['Cádiz', 'Malaga', 'Sevilla']}]
    setSelect('regiones', aRegiones)

    // Funciones manejadoras
    function sendData(ev){
        const data = {}
        ev.preventDefault()

        if (!form.checkValidity()){
            console.log('Invalido')
            console.dir(form)
            if(!aGenero[0].checkValidity()){
                // console.log('genero', aGenero[0].checkValidity)
                // console.log(aGenero[0].validity)
                // console.log(aGenero[0].validationMessage)
                
                const pError = aGenero[0].parentElement.querySelector('p')
                pError.innerHTML= 'Selecciona el género al que perteneces'
                pError.classList.remove('nodisplay')
                // aGenero[0].parentElement.querySelector('p').innerHTML= aGenero[0].validationMessage
            }

            if (!correo.checkValidity()) {
                console.log(correo.validity)
                console.log(correo.validationMessage)
            }

            if (!mobile.checkValidity()) {
                console.log(mobile.validity)
                console.log(mobile.validationMessage)
            }
            return
        }

        data.genero = aGenero.filter(item => item.checked)[0].value
        data.nombre = nombre.value
        data.mobile = mobile.value
        data.acepto_condiciones = condiciones.checked
        data.region = aRegiones[region.selectedIndex-1]
        data.ciudad = ciudades.value
        console.dir(region)
        console.log('Obteniendo Datos', data)
        // fetch()
        console.log('Enviando')
    }

    function generoManager(ev){
        if (ev.type == 'change') {
            if (ev.target.checkValidity) {
                ev.target.parentElement.querySelector('p').classList.add('nodisplay')
            }
        }
    }

    function nombreManager(ev){
        if (ev.type === 'focus'){
            console.log('El control gano el foco')
            }else if (ev.type === 'blur'){
            console.log('El control perdio el foco')
        }
    }

    function selectManager(){
        const aCiudades = region.selectedIndex ? aRegiones[region.selectedIndex-1].ciudades : []
        console.log('El control cambio', ciudades)
        if(aCiudades.length){
            setSelectStrings('ciudades', aCiudades)
            ciudades.parentElement.classList.remove('nodisplay')
        } else {
            ciudades.parentElement.classList.add('nodisplay')
        }
    }

    // otras funciones
    function setSelect(id, data) {
        let html = '<option></option>`'
        data.forEach(item => html += `
            <option value="${item.id}">${item.nombre}</option>`)
        form.querySelector('#'+id).innerHTML = html
    }

    function setSelectStrings(id, data) {
        let html = '<option></option>`'
        data.forEach(item => html += `
            <option value="${item}">${item}</option>`)
        form.querySelector('#'+id).innerHTML = html
    }
}

document.addEventListener('DOMContentLoaded', main)