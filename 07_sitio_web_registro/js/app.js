import {templFooter} from '../templates/footer.js'
import { templHeader } from '../templates/header.js'

function main () {

    const storeUsers = 'usuarios'
    const btnLog = document.querySelector('#b_acceder')
    const btnReg = document.querySelector('#b_registrar')

    if(btnLog){
        btnLog.addEventListener('click', onClickLog)
    }

    if(btnReg){
        btnReg.addEventListener('click', onClickReg)
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

        let index = users.find(item => item.name == inputs[0].value)
        console.log(index)

        // window.location = 'usuario.html'
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

    }

    function validarForm(form) {

        const inputs = [...form.querySelectorAll('input')]

        try {
            inputs.forEach((item)=> {
                if(!item.value){
                    throw new Error(`Campo ${item.id} Invalido`)
                }
            })
            return true
        
        } catch (error) {
            console.log(error.message)
            form.querySelector('p').innerHTML = error.message
            return false
        }
    }
}

document.addEventListener('DOMContentLoaded', main)
