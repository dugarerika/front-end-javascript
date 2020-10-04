function main(){

    // Nodos del DOM
    const form = document.querySelector('#formUsers')
    const aGenero = [...form.querySelectorAll('[name="genero"]')]
    const nombre = form.querySelector('input#nombre').value
    const condiciones = form.querySelector('input#condiciones')
    const region = form.querySelector('select#regiones')

    // Definicion de manejadores de eventos
    form.addEventListener('submit', sendData)
    nombre.addEventListener('focus', nombreManager)
    nombre.addEventListener('blur', nombreManager)
    
    // Completar el select
    const aRegiones = ['Madrid','Cataluña','Euskadi', 'Galicia', 'Andalucia']
    setSelect('regiones', aRegiones)

    // Funciones manejadoras
    function sendData(ev){
        const data = {}
        ev.preventDefault()

        data.genero = genero.filter(item => item.checked)[0].value
        data.nombre = nombre.value
        data.acepto_condiciones = condiciones.checked
        data.region = region.value
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

    // otras funciones
    function setSelect(id, data) {
        let html = '<option></option>`'
        data.forEach(item => html += `
            <option>${item}</option>`)
        form.querySelector('#'+id).innerHTML = html
    }
}

document.addEventListener('DOMContentLoaded', main)