function calcularMediaENotas(notas, faltas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
      soma += notas[i];
    }
    const media = soma / notas.length;
    
    let situacao;
    if (media >= 7 && faltas <= 5) {
      situacao = 'aprovado';
    } else {
      situacao = 'reprovado';
    }
    
    const resultado = {
      media: media.toFixed(2),
      situacao: situacao
    };
    
    return resultado;
  }
  
  // Teste a função
  const notasAluno1 = [8, 7, 6, 9, 8];
  const faltasAluno1 = 3;
  console.log('Notas:', notasAluno1);
  console.log('Faltas:', faltasAluno1);
  console.log('Resultado:', calcularMediaENotas(notasAluno1, faltasAluno1)); // Saída esperada: { media: '7.60', situacao: 'aprovado' }
