function onClickBtn(){
    const x = 32
    console.log('hiciste click', x)
}

function onClickBtn2(){
    console.log('segundo manejador del click')
}

document.querySelector('#btn2').title = 'Manejador del DOM'
document.querySelector('#btn2').onclick = onClickBtn

document.querySelector('#btn3').addEventListener('click', onClickBtn)
document.querySelector('#btn3').addEventListener('click', onClickBtn2)

document.querySelector('#btn4').addEventListener('click', ()=>{
    document.querySelector('#btn3').removeEventListener('click', onClickBtn)

    const evBorrar = document.createEvent('Event');
    evBorrar.initEvent('Borrar', true, true)
    document.querySelector('#btn4').dispatchEvent(evBorrar)
})

document.addEventListener('Borrar', (ev) => { 
    console.log('Hay que borrar', ev)
})

function onclickNumeros(ev){
    if(ev.type == 'click'){
        console.dir(ev.target)
        console.dir(ev.target.dataset.num)
    } else {
        console.dir(ev.target.dataset.num*100)
    }
    ev.stopPropagation()
}

document.querySelectorAll('.btn_numeros').forEach(
    item => {
        item.addEventListener('click', onclickNumeros)
        item.addEventListener('dblclick', onclickNumeros)
    }
)

document.querySelector('main').addEventListener('click', (ev) => { 
    console.log('click en el main')
    console.log(ev)
})