function main(){
    const form = document.querySelector('#formUsers')
    form.addEventListener('submit', sendData)

    // completar el select
    const aRegiones = ['Madrid','Cataluña','Euskadi']
    setSelect('regiones', aRegiones)

    function sendData(ev){
        const data = {}
        ev.preventDefault()
        const genero = [...form.querySelectorAll('[name="genero"]')]
        console.log(genero)
        data.genero = genero.filter(item => item.checked)[0].value
        data.nombre = form.querySelector('input#nombre').value
        data.acepto_condiciones = form.querySelector('input#condiciones').checked
        data.region = form.querySelector('select#regiones').value
        console.log('Obteniendo Datos', data)
        // fetch()
        console.log('Enviando')
    }

    function setSelect(id, data) {
        let html = '<option></option>`'
        data.forEach(item => html += `
            <option>${item}</option>`)
        form.querySelector('#'+id).innerHTML = html
    }
}

document.addEventListener('DOMContentLoaded', main)