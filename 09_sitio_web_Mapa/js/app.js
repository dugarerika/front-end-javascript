import {templFooter} from '../templates/footer.js'
import { templHeader } from '../templates/header.js'

function main () {
    const storeUsers = 'usuarios'
    const btnLog = document.querySelector('#b_acceder')
    const btnReg = document.querySelector('#b_registrar')
    const btnGeo = document.querySelector('#geo button')

    const aQuestions = document.querySelectorAll('.question')

    if(btnLog){
        btnLog.addEventListener('click', onClickLog)
    }

    if(btnReg){
        btnReg.addEventListener('click', onClickReg)
    }

    if(btnGeo){
        btnGeo.addEventListener('click', onClickGeo)
    }

    if(aQuestions){
        aQuestions.forEach(
            item => item.addEventListener('click', onClickaQuestions)
        )
    }

    const hoy = new Date().toLocaleDateString()
    document.querySelector('footer').innerHTML = templFooter.render(hoy)

    const posicion = window.location.pathname.lastIndexOf('/')+1
    const page = window.location.pathname.slice(posicion)
    document.querySelector('header').innerHTML = templHeader.render(page)

    function onClickLog () {
        const formLogin = document.querySelector('#f_login')
        if (!validarForm(formLogin)) {
            return
        }
        const users = window.localStorage.getItem(storeUsers) ?
        JSON.parse(window.localStorage.getItem(storeUsers)) : []
        const inputs = [...formLogin.querySelectorAll('input')]

        let findUser = users.find(item => item.name.toUpperCase() == inputs[0].value.toUpperCase())
        console.log(findUser)
        if (!findUser){
            console.log('Usuario no encontrado')
        }
        else if (findUser.pwd != inputs[1].value) {
            console.log('Password incorrecta') //sacar mensaje al usuario por medio de mensajes
        }
        else {
            console.log('Usario y password correctos')
            window.location = 'usuario.html'

            // Ejemplo del uso de los metodos open y close y settimeot()
            // del objeto windows
            // const handler = window.open('usuario.html')
            // setTimeout(()=>{
            //     handler.close()
            // },2000)
        }
    }

    function onClickReg () {
        const formReg = document.querySelector('#f_registro')  
        if (!validarForm(formReg)) {
            return
        }
        const inputs = [...formReg.querySelectorAll('input')]
        const usuario = {
            mail : inputs[0].value,
            name : inputs[1].value,
            pwd : inputs[2].value
        }
        const users = window.localStorage.getItem(storeUsers) ?
        JSON.parse(window.localStorage.getItem(storeUsers)) : []
        users.push(usuario)
        
        window.localStorage.setItem(storeUsers, JSON.stringify(users))
        inputs.forEach(item => item.value = '')
        // location.href= 'index.html'
        // window.location = 'index.html'
    }

    function validarForm(form) {
        const inputs = [...form.querySelectorAll('input')]
        try {
            inputs.forEach((item)=> {
                if(!item.value){
                    const error = new Error(`Campo ${item.id} invalido`)
                    error.code = item.id
                    throw error
                }
            })
            return true
        
        } catch (error) {
            console.log(error.message)
            console.log(error.code)
            // alert(error.message)
            // promt(error.message)
            // confirm(error.message)

            let errorMsg
            // switch (error.message) {
            //     case 'Campo i_nombre invalido':
            //         errorMsg = 'El nombre es obligatorio'
            //         break;
            //     case 'Campo i_pwd invalido':
            //         errorMsg = 'El password es obligatorio'
            //         break;
            //     default:
            //         errorMsg = 'Se ha producido un error'
            //         break;
            // }

            switch (error.code) {
                case 'i_nombre':
                    errorMsg = 'El nombre es obligatorio'
                    break;
                case 'i_pwd':
                    errorMsg = 'El password es obligatorio'
                    break;
                default:
                    errorMsg = 'Se ha producido un error'
                    break;
            }

            form.querySelector('p').innerHTML = errorMsg
            return false
        }
    }

    function onClickGeo () {
        navigator.geolocation.getCurrentPosition(
            (position)=>{
                let size = 1.4
                console.log(position)
                const geoDiv = document.querySelector('#geo div').cloneNode()//ejemplo como funciona la clonacion de un nodo
                geoDiv.title += 'del Nodo clonado'
                geoDiv.removeAttribute('hidden', true)
                geoDiv.style.fontSize = size + "rem"
                console.log(geoDiv)
                console.dir(geoDiv)
                geoDiv.innerHTML = `
                <p>Latitud ${position.coords.latitude} </p>
                <p>Longitud ${position.coords.longitude} </p>
                `
                document.querySelector('#geo').appendChild(geoDiv) //luego de clonarlo lo puedo anadir con el appendchild
                initMap({lat: position.coords.latitude, lng:position.coords.longitude})
            }, 
            (error)=>{
                console.log(error)
            }
        )
    }

    function initMap(point = {lat: 52, long: 0}){
        const map = new google.maps.Map(
            document.querySelector('.map'),
            {zoom: 8, center: point}
        )
        const marker = new google.maps.Marker(
            {position: point, map: map}
        )
    }

    function onClickaQuestions (ev){
        console.log(ev.target.id)
        document.querySelectorAll('.faq .response').forEach(
            item => item.classList.add('nodisplay')
        )
        ev.target.nextElementSibling.classList.remove('nodisplay')
    }
}




document.addEventListener('DOMContentLoaded', main)
