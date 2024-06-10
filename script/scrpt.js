const bolinhas = document.querySelectorAll('.container__lista');
const container = document.querySelector('.container')
let valueRandom = showRandom()
let numbersRandom = []
let n = 0
let contador = null



showBall();
bolinhas.forEach((bolinha)=>{
    bolinha.addEventListener('click',()=>{
        bolinha.classList.remove('container__lista--ativado')
        n++
        console.log(n)
        
        if(n % 3 === 0){
           showBall();
        }
        
    })
    
})



function limpaContador(){
    clearInterval(contador)
    contador = null;
}

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
