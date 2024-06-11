const bolinhas = document.querySelectorAll('.container__lista');
const container = document.querySelector('.container')
const linha1 = document.querySelector('.container__linha1')
const linha2 = document.querySelector('.container__linha2')
const linha3 = document.querySelector('.container__linha3')
const button_toca_som = document.querySelector('.button_toca_som')
let valueRandom = showRandom()
let numbersRandom = []
let n = 0
let contador = null
const audio__ponto = new Audio("./music/ponto.mp3")
const audio__errou = new Audio("./music/errou.wav")
const audio_thema = new Audio("./music/thema.mp3")

audio_thema.loop = true;

button_toca_som.addEventListener('click',function(){
    if(audio_thema.paused){
        audio_thema.play()
    }else{
        audio_thema.pause()
    }
})


showBall();

container.addEventListener('click',(event)=>{
    console.log(event.target)
    
    if((event.target == container) || (event.target == linha1) || (event.target == linha2)||(event.target == linha3) ){
        audio__errou.play()
    }
    
})

bolinhas.forEach((bolinha)=>{
    bolinha.addEventListener('click',()=>{   
        if (bolinha.classList[1]==='container__lista--ativado'){
            bolinha.classList.remove('container__lista--ativado')
            n++
            console.log(n)
        
            if(n % 3 === 0){
            showBall();
            audio__ponto.play()
            }
        }else{
            audio__errou.play()
        }
    }) 
})


function testeClass(hasClass1,hasClass2,hasClass3){
    if((hasClass1 === undefined) && (hasClass2 === undefined) && (hasClass3 === undefined)){
        setTimeout(loop, 500)
    }
}

function showRandom() {
    const valueRandom = Math.round(Math.random() * 10)
    return valueRandom
}

function showBall(){
    valueRandom = showRandom()
    numbersRandom = []

    while (numbersRandom.length < 3) {
        valueRandom = showRandom()
        if ((valueRandom != 10) && (valueRandom != 9) && (!numbersRandom.includes(valueRandom))) {
            numbersRandom.push(valueRandom)
        }
    }

    for (let i = 0; i < 3; i++) {
        if (bolinhas[numbersRandom[i]]) {
            bolinhas[numbersRandom[i]].classList.add('container__lista--ativado')
        }
    }

}
