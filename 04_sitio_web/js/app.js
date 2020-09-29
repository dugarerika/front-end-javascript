document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#b_acceder')
    .addEventListener('click', () => {

        const form = document.querySelector('#f_login')
        const inputs = [...form.querySelectorAll('input')] //convierto a un array con puntitos delante y poniendo dentro de unas llaves
        console.dir(inputs)
        
        // inputs.forEach((item)=> {
        //     if(!item){
        //         return
        //     }
        // })

        for() {

        }

        // BOM 
        window.location = 'usuario.html'
    })
})

