function diaSemana(dia) {
    var diaSemana;
  
    if (dia == 1) diaSemana = "domingo";
    if (d == 2) ds = "segunda";
    if (d == 3) ds = "terça";
    if (d == 4) ds = "quarta";
    if (d == 5) ds = "quinta";
    if (d == 6) ds = "sexta";
    if (d == 7) ds = "sábado";
  
    return ds;
  }
  
  // Teste a função
  console.log(diaSemana(3)); // Saída esperada: "terça"
  console.log(diaSemana(6)); // Saída esperada: "sexta"
  console.log(diaSemana(1)); // Saída esperada: "domingo"
  