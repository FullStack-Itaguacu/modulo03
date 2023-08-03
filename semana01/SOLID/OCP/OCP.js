// Classe abstrata Cliente
class Cliente {
    calcularDesconto(valorTotal) {
        throw new Error('Método calcularDesconto deve ser implementado na classe concreta.');
    }
}

class ClienteComum extends Cliente {
    calcularDesconto(valorTotal) {
        return valorTotal * 0.05;
    }
}

class ClienteVIP extends Cliente {
    calcularDesconto(valorTotal) {
        return valorTotal * 0.10;
    }
}

class CalculadoraDesconto {
    constructor(cliente) {
        this.cliente = cliente;
    }

    calcularDesconto(valorTotal) {
        return this.cliente.calcularDesconto(valorTotal);
    }
}

const clienteComum = new ClienteComum();
const clienteVIP = new ClienteVIP();

const calculadoraComum = new CalculadoraDesconto(clienteComum);
const calculadoraVIP = new CalculadoraDesconto(clienteVIP);

const valorTotalCompra = 1000;

console.log('Cliente Comum - Desconto:', calculadoraComum.calcularDesconto(valorTotalCompra));
console.log('Cliente VIP - Desconto:', calculadoraVIP.calcularDesconto(valorTotalCompra));
