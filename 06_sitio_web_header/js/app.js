import {templFooter} from '../templates/footer.js'
import { templHeader } from '../templates/header.js'

function main () {

    const btn = document.querySelector('#b_acceder')

    if(btn){
        btn.addEventListener('click', onClick)
    }

    const hoy = new Date().toLocaleDateString()
    document.querySelector('footer').innerHTML = templFooter.render(hoy)

    const posicion = window.location.pathname.lastIndexOf('/')+1
    const page = window.location.pathname.slice(posicion)
    console.log(window.location.pathname.slice(posicion))
    document.querySelector('header').innerHTML = templHeader.render(page)

    function onClick () {

        const formLogin = document.querySelector('#f_login')
        const inputs = [...formLogin.querySelectorAll('input')]

        try {

            inputs.forEach((item)=> {
                if(!item.value){
                    throw new Error(`Campo ${item[i].id} Invalido`)
                }
            })

        } catch (error) {
            console.log(error.message)
            formLogin.querySelector('p').innerHTML = error.message
            return
        }

        window.location = 'usuario.html'
    }
}

document.addEventListener('DOMContentLoaded', main)
