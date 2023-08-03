class AdaptadorImagem {
  constructor(imagem) {
    this.imagem = imagem;
  }

  renderizarImagem() {
    this.imagem.carregarImagem();
  }
}

const sistemaExterno = new SistemaExterno();
const imagem = new Imagem('foto.jpg');

const adaptador = new AdaptadorImagem(imagem);
sistemaExterno.adicionarImagem(adaptador);

sistemaExterno.renderizar();

/*
Saída:
Renderizando imagens:
Carregando imagem: foto.jpg
*/
