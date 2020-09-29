document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#b_acceder').addEventListener('click', () => {
        
        const formLogin = document.querySelector('#f_login')
        const inputs = [...formLogin.querySelectorAll('input')] //convierto a un array con puntitos delante y poniendo dentro de unas llaves
        console.dir(inputs)
        
        try {

            inputs.forEach((item)=> {
                if(!item.value){
                    throw new Error(`Campo ${item[i].id} Invalido`)
                }
            })
        //     for (let i = 0; i < inputs.length; i++) {
        //         if(!inputs[i].value){
        //             throw new Error(`Campo ${inputs[i].id} Invalido`)
        //         }   
        //     }
        } catch (error) {
            console.log(error.message)
            formLogin.querySelector('p').innerHTML = error.message
            return
        }

        // BOM 
        window.location = 'usuario.html' // se puede dejar sin el windows
    })
})

