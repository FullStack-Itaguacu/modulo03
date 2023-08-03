function diaSemana(dia) {
    const dias = [
      "Domingo",
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sábado",
    ];
    if (dia < 1 || dia > 7) return "Dia inválido";
    const posicao = dia - 1;
    return dias[posicao];
  }
  
  console.log(diaSemana(4));
  