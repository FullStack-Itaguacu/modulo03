function calcularSoma(arr) {
    let soma = 0;
    for (let i = 0; i < arr.length; i++) {
        soma += arr[i];
    }
    return soma;
}

const array = [1, 2, 3, 4, 5];
const resultado = calcularSoma(array);
console.log(resultado); // Saída: 15
