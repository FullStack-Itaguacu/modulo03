class Tarefa {
    constructor(descricao) {
      this.descricao = descricao;
    }
  }
  
  const minhaTarefa = new Tarefa("Comprar mantimentos");
  
  console.log(minhaTarefa.descricao); // Saída: "Comprar mantimentos"
  console.log(minhaTarefa.lembrete); // Saída: undefined (sem lembrete por enquanto)
  