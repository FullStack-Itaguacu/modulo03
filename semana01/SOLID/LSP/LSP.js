class FormaGeometrica {
    calcularArea() {
      throw new Error('Método calcularArea deve ser implementado na classe concreta.');
    }
  }
  
  class Retangulo extends FormaGeometrica {
    constructor(largura, altura) {
      super();
      this.largura = largura;
      this.altura = altura;
    }
  
    calcularArea() {
      return this.largura * this.altura;
    }
  }
  
  class Quadrado extends FormaGeometrica {
    constructor(lado) {
      super();
      this.lado = lado;
    }
  
    calcularArea() {
      return this.lado ** 2;
    }
  }
  
  function calcularAreaForma(forma) {
    return forma.calcularArea();
  }
  
  const retangulo = new Retangulo(5, 3);
  const quadrado = new Quadrado(4);
  
  console.log('Área do Retângulo:', calcularAreaForma(retangulo));
  console.log('Área do Quadrado:', calcularAreaForma(quadrado));