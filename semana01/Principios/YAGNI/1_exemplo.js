class Tarefa {
    constructor(descricao) {
      this.descricao = descricao;
    }
  
    setLembrete(lembrete) {
      this.lembrete = lembrete;
    }
  }
  
  const minhaTarefa = new Tarefa("Comprar mantimentos");
  minhaTarefa.setLembrete("Não se esqueça do leite!");
  
  console.log(minhaTarefa.descricao); // Saída: "Comprar mantimentos"
  console.log(minhaTarefa.lembrete); // Saída: "Não se esqueça do leite!"
  