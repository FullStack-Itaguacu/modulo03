function calcularSoma(lista) {
    return lista.reduce(
        (totalAcumulado, valorCorrente) => totalAcumulado + valorCorrente, 0
    );
}

const lista = [1, 2, 3, 4, 5];
const soma = calcularSoma(lista);
console.log(soma); // Saída: 15