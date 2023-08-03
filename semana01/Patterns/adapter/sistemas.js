class Imagem {
    constructor(nomeArquivo) {
        this.nomeArquivo = nomeArquivo;
    }

    carregarImagem() {
        console.log(`Carregando imagem: ${this.nomeArquivo}`);
    }
}

class SistemaExterno {
    constructor() {
        this.imagens = [];
    }

    renderizar() {
        console.log('Renderizando imagens:');
        this.imagens.forEach((imagem) => {
            imagem.renderizarImagem();
        });
    }

    adicionarImagem(imagem) {
        this.imagens.push(imagem);
    }
}
