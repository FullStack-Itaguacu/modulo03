# Exercício 1: Refatoração de Código para Clean Code

## Instruções
    Neste exercício, você irá refatorar um trecho de código mal escrito para torná-lo mais limpo, legível e aderente às boas práticas de Clean Code. O código implementa uma função para encontrar o maior valor em um array.

## Etapas
    Siga as etapas abaixo para refatorar o código:

* Identifique e utilize nomes de variáveis e funções mais significativos para tornar o código mais claro e expressivo.

* Verifique se é possível substituir o loop for por funcionalidades mais avançadas do JavaScript, como o método Math.max() em combinação com o spread operator ..., para encontrar o maior valor no array de forma mais concisa.

* Simplifique a lógica e elimine repetições desnecessárias para tornar o código mais conciso e fácil de entender.

* Comente o código para explicar a função das partes relevantes e garantir que outros desenvolvedores possam compreender facilmente a lógica implementada.

### Teste a função

Utilize o seguinte array de valores para testar a função refatorada:

``` 
const valores = [10, 5, 8, 20, 3];
console.log('Valores:', valores);
console.log('Maior valor:', encontrarMaiorValor(valores)); // Saída esperada: 20

```
