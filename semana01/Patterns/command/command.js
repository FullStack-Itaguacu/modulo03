class Invoker {
  executeCommand(command) {
    return command.execute();
  }
}

const calculadora = new Calculadora();
const invoker = new Invoker();

const resultadoSoma = invoker.executeCommand(new SomarCommand(calculadora, 5, 3));
console.log(`Resultado da soma: ${resultadoSoma}`); // Saída: Resultado da soma: 8

const resultadoSubtracao = invoker.executeCommand(new SubtrairCommand(calculadora, 10, 4));
console.log(`Resultado da subtração: ${resultadoSubtracao}`); // Saída: Resultado da subtração: 6

const resultadoMultiplicacao = invoker.executeCommand(new MultiplicarCommand(calculadora, 3, 5));
console.log(`Resultado da multiplicação: ${resultadoMultiplicacao}`); // Saída: Resultado da multiplicação: 15

const resultadoDivisao = invoker.executeCommand(new DividirCommand(calculadora, 10, 2));
console.log(`Resultado da divisão: ${resultadoDivisao}`); // Saída: Resultado da divisão: 5
