const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

setaAvancar.addEventListener('click', function () {
    if (imagemAtual === imagensPainel.length - 1) {
        return;
    }

    imagemAtual++;

    esconderImagens();
    mostrarImagem();
    mostrarEsconderSeta();

})

setaVoltar.addEventListener('click', function () {
    if (imagemAtual === 0) {
        return;
    }

    imagemAtual--;

    esconderImagens();
    mostrarImagem();
    mostrarEsconderSeta();
})

function esconderImagens() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });
}

function mostrarImagem() {
    imagensPainel[imagemAtual].classList.add('mostrar');
}

function mostrarEsconderSeta() {
    const naoPrimeiraImagem = imagemAtual !== 0;

    if (naoPrimeiraImagem) {
        setaVoltar.classList.remove('opacidade');
    } else {
        setaVoltar.classList.add('opacidade');
    }

    const ultimaImagem = imagemAtual !== 0 && imagemAtual === imagensPainel.length - 1;

    if (ultimaImagem) {
        setaAvancar.classList.add('opacidade');
    } else {
        setaAvancar.classList.remove('opacidade');
    }
}