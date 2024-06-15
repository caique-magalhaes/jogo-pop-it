const continuar = document.querySelector('.botao__continuar')

const mostrar_pontos = document.querySelector('.pontos')


mostrar_pontos.textContent = localStorage.getItem('ponto')

continuar.addEventListener('click', ()=>
    {
        audio__ponto.play()
        window.location.href='../index.html'
    })