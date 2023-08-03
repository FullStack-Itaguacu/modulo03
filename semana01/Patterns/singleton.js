class Logger {
  constructor() {
    if (Logger.instance) {
      return Logger.instance;
    }

    this.logs = [];
    Logger.instance = this;
  }

  log(message) {
    this.logs.push(message);
    console.log(`LOG: ${message}`);
  }

  printLogs() {
    console.log('LOGS:');
    this.logs.forEach((log, index) => {
      console.log(`${index + 1}. ${log}`);
    });
  }
}

const logger1 = new Logger();
const logger2 = new Logger();

logger1.log('Mensagem 1 do logger1');
logger2.log('Mensagem 1 do logger2');
logger1.log('Mensagem 2 do logger1');

logger1.printLogs();
/*
Saída:
LOGS:
1. Mensagem 1 do logger1
2. Mensagem 1 do logger2
3. Mensagem 2 do logger1
*/

logger2.printLogs();
  /*
Saída:
LOGS:
1. Mensagem 1 do logger1
2. Mensagem 1 do logger2
3. Mensagem 2 do logger1
*/
