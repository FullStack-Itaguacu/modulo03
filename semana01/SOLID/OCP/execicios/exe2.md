### Exercício - Classes Abstratas e Extensão de Métodos

Imagine que você está criando um sistema para gerenciar animais de um zoológico. Crie um código em JavaScript que utilize classes abstratas para representar animais e suas características específicas. As classes concretas representarão tipos específicos de animais, como leões e girafas.

Requisitos:

* Crie uma classe abstrata Animal que contenha os atributos nome e idade, e o método abstrato emitirSom.

* Crie duas classes estendidas a partir da classe Animal: Leao e Girafa.

* Na classe Leao, implemente o método emitirSom para exibir "O leão está rugindo!".

* Na classe Girafa, implemente o método emitirSom para exibir "A girafa está balindo!".

* Crie métodos específicos para cada classe que exibam informações adicionais, como o mostrarCor para o leão e o mostrarAltura para a girafa.

`Dica`: Utilize a palavra-chave throw new Error(...) para indicar que um método é abstrato e deve ser implementado nas classes filhas.