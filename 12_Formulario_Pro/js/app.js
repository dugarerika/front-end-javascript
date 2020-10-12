function main(){

    // Nodos del DOM
    const form = document.querySelector('#formUsers')
    const aGenero = [...form.querySelectorAll('[name="genero"]')]
    const nombre = form.querySelector('input#nombre')
    const mobile = form.querySelector('input#mobile')
    const condiciones = form.querySelector('input#condiciones')
    const region = form.querySelector('select#regiones')
    const ciudad = form.querySelector('#ciudades')

    // Definicion de manejadores de eventos
    form.addEventListener('submit', sendData)
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