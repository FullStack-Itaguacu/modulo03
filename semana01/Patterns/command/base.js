class Calculadora {
  somar(a, b) {
    return a + b;
  }

  subtrair(a, b) {
    return a - b;
  }

  multiplicar(a, b) {
    return a * b;
  }

  dividir(a, b) {
    return a / b;
  }
}

class Command {
  execute() { }
}

class SomarCommand extends Command {
  constructor(calculadora, a, b) {
    super();
    this.calculadora = calculadora;
    this.a = a;
    this.b = b;
  }

  execute() {
    return this.calculadora.somar(this.a, this.b);
  }
}

class SubtrairCommand extends Command {
  constructor(calculadora, a, b) {
    super();
    this.calculadora = calculadora;
    this.a = a;
    this.b = b;
  }

  execute() {
    return this.calculadora.subtrair(this.a, this.b);
  }
}

class MultiplicarCommand extends Command {
  constructor(calculadora, a, b) {
    super();
    this.calculadora = calculadora;
    this.a = a;
    this.b = b;
  }

  execute() {
    return this.calculadora.multiplicar(this.a, this.b);
  }
}

class DividirCommand extends Command {
  constructor(calculadora, a, b) {
    super();
    this.calculadora = calculadora;
    this.a = a;
    this.b = b;
  }

  execute() {
    return this.calculadora.dividir(this.a, this.b);
  }
}
