function obterDiaSemana(numeroDia) {
    const diasDaSemana = {
        1: 'Domingo',
        2: 'Segunda-feira',
        3: 'Terça-feira',
        4: 'Quarta-feira',
        5: 'Quinta-feira',
        6: 'Sexta-feira',
        7: 'Sábado'
    };

    const nomeDia = diasDaSemana[numeroDia];

    if (nomeDia) {
        return nomeDia;
    } else {
        throw new Error('Número inválido!');
    }
}

// TESTES
try {
    console.log(obterDiaSemana(1)); // "Domingo"
    console.log(obterDiaSemana(3)); // "Terça-feira"
    console.log(obterDiaSemana(7)); // "Sábado"
    console.log(obterDiaSemana(10)); // ERRO!
} catch (error) {
    console.error(error.message);
}
