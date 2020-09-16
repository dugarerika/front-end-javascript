document.addEventListener('DOMcontentLoaded', () => {
    document.querySelector('#b_acceder')
    .addEventListener('click', () => {
        const formlogin = document.querySelector('#f_login')
        const inputs = [...formlogin.querySelectorAll('input')]

        inputs.forEach((item) => {
            if (!item) {
                return
            }
        })

        // BOM
        Window.location = 'usuario.html'
    })
})