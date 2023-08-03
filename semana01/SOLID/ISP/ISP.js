class Impressora {
    imprimir(documento) {
      throw new Error('Método imprimir deve ser implementado na classe concreta.');
    }
  }
  
  class ImpressoraColorida {
    imprimirColorido(documento) {
      throw new Error('Método imprimirColorido deve ser implementado na classe concreta.');
    }
  }
  
  class ImpressoraJatoDeTinta extends Impressora {
    imprimir(documento) {
      console.log(`Imprimindo em preto e branco: ${documento}`);
    }
  }
  
  class ImpressoraLaserColorida extends ImpressoraColorida {
 
    imprimirColorido(documento) {
      console.log(`Imprimindo colorido: ${documento}`);
    }
  }
  
  function imprimirDocumento(impressora, documento) {
    impressora.imprimir(documento);
  }
  
  function imprimirDocumentoColorido(impressoraColorida, documento) {
    impressoraColorida.imprimirColorido(documento);
  }
  

  const impressoraJatoDeTinta = new ImpressoraJatoDeTinta();
  const impressoraLaserColorida = new ImpressoraLaserColorida();
  
  const documento = 'Documento de texto';
  
  imprimirDocumento(impressoraJatoDeTinta, documento);
  imprimirDocumentoColorido(impressoraLaserColorida, documento);