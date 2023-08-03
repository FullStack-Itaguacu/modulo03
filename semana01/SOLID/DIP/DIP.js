class Notificador {
    notificar(mensagem) {
      throw new Error('Método notificar deve ser implementado na classe concreta.');
    }
  }
  
  class NotificadorEmail extends Notificador {
    notificar(mensagem) {
      console.log(`Enviando e-mail: ${mensagem}`);
    }
  }
  
  class NotificadorSMS extends Notificador {
    notificar(mensagem) {
      console.log(`Enviando SMS: ${mensagem}`);
    }
  }
  
  class SistemaNotificacao {
    constructor(notificador) {
      this.notificador = notificador;
    }
  
    enviarNotificacao(mensagem) {
      this.notificador.notificar(mensagem);
    }
  }
  
  const notificadorEmail = new NotificadorEmail();
  const notificadorSMS = new NotificadorSMS();
  
  const sistemaNotificacaoEmail = new SistemaNotificacao(notificadorEmail);
  const sistemaNotificacaoSMS = new SistemaNotificacao(notificadorSMS);
  
  sistemaNotificacaoEmail.enviarNotificacao('Olá! Você recebeu um e-mail importante.');
  sistemaNotificacaoSMS.enviarNotificacao('Atenção! Você tem uma mensagem SMS não lida.');
  