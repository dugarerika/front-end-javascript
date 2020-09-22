function onClickBtn(){
    const x = 32
    console.log('Hiciste click', x)
}

function onClickBtn2(){
    console.log('Segundo manejadro del click', x)
}

document.querySelector('#btn2').title = ' Manejado desde el DOM'
document.querySelector('#btn2').onclick = onClickBtn

document.querySelector('#btn3').addEventListener('click', onClickBtn)
document.querySelector('#btn4').addEventListener('click', () => {
    document.querySelector('#btn3').addEventListener('click',onClickBtn)
    document.querySelector('#btn4').dispatchEvent(new Event('Borrar'))
})


function onClickNumeros(ev){
    if(ev.type)
    console.dir(ev.target)
    console.dir(ev.target.dataset.num)
}

document.querySelectorAll('btn.numeros').forEach(
    item => {
        item.addEventListener('click', onClickNumeros)
    }
)