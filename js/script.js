
// selecionando inputs
let formulario = document.querySelector('#formularioOriginal')
let cxNota1 = document.querySelector('#nota1')
let cxNota2 = document.querySelector('#nota2')
let cxMedia = document.querySelector('#media')

let btnCalcular = document.querySelector('#btnCalcular')
let btnLimpar = document.querySelector('#btnLimpar')

let situacao = document.querySelector('#situacao')
let aviso = document.querySelector('#aviso')

// funcao de media
function mediaFinal(nota1, nota2){
    return (nota1 + nota2) / 2
}
// validando numeros
function validarNumero(){
    let num1 = parseFloat(cxNota1.value)
    let num2 = parseFloat(cxNota2.value)
    

    if (num1 < 0 || num1 > 10 || num2 < 0 || num2 > 10){

        aviso.textContent = 'digite valores entre 10 e 0'
        aviso.classList.add('alerta')
        formulario.reset()

        setTimeout(function(){
            aviso.textContent = ''
            aviso.classList.remove('alerta')
            
            
        },2000)

        
    }
    
}

// situacao final
function situacaoFinal(mediaFinal) {
    let situacaoFinal = ''
    if (mediaFinal > 7){
        situacaoFinal = 'Aprovado(a)'
    } else if (mediaFinal < 3) {
        situacaoFinal = 'Reprovado(a)'
    } else {
        situacaoFinal = 'Recuperacao'
    }

    return situacaoFinal
}

function formatarSituacao(situacaoFinal) {

    switch (situacaoFinal) {

        case 'Aprovado(a)':
            situacao.value = 'Aprovado(a)'
            situacao.classList.add('aprovado')
            situacao.classList.remove('reprovado')
            situacao.classList.remove('recuperacao')
            break;

        case 'Reprovado(a)':
            situacao.value = 'Reprovado(a)'
            situacao.classList.add('reprovado')
            situacao.classList.remove('recuperacao')
            situacao.classList.remove('aprovado')
            break;

        case 'Recuperacao':
            situacao.value = 'Recuperação'
            situacao.classList.add('recuperacao')
            situacao.classList.remove('reprovado')
            situacao.classList.remove('aprovado')
            break;
    }

    return situacaoFinal
}


btnCalcular.addEventListener('click', function(event){

    validarNumero()

    let nota1 = parseFloat(cxNota1.value)
    let nota2 = parseFloat(cxNota2.value)
    let media = mediaFinal(nota1, nota2).toFixed(1)
    
    console.log(nota1)
    console.log(nota2)
    console.log(media)

    cxMedia.value = media

    console.log(`a situação final do aluno é ${situacaoFinal(media)}`)

    let resultadoSituacao = situacaoFinal(media)

    formatarSituacao(resultadoSituacao)
    
    event.preventDefault()
})

btnLimpar.addEventListener('click',function(ed){
    formulario.reset()
    situacao.value = 'Situação Final'
    situacao.classList.remove('aprovado')
    situacao.classList.remove('recuperacao')
    situacao.classList.remove('reprovado')

    ed.preventDefault()
})


