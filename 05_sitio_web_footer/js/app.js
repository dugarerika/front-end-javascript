

function main () {
    const btn = document.querySelector('#b_acceder')

    if(btn){
        btn.addEventListener('click', onClick)
    }

    document.querySelector('footer').innerHTML = templFooter
    
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
