class Pedido {
    constructor(id, cliente) {
        this.id = id;
        this.cliente = cliente;
        this.itens = [];
        this.valorTotal = 0;
    }

    calcularValorTotal() {
        this.valorTotal = this.itens.reduce(
            (total, item) => total + item.precoUnitario * item.quantidade, 0);
    }

    adicionarItem(nome, precoUnitario, quantidade) {
        this.itens.push({ nome, precoUnitario, quantidade });
        this.calcularValorTotal();
    }

    exibirDetalhes() {
        console.log('Detalhes do Pedido:');
        console.log('ID do Pedido:', this.id);
        console.log('Cliente:', this.cliente);
        console.log('Itens do Pedido:');
        this.itens.forEach(item => {
            console.log(`- ${item.nome} (Quantidade: ${item.quantidade}, Preço Unitário: ${item.precoUnitario})`);
        });
        console.log('Valor Total: R$', this.valorTotal.toFixed(2));
    }
}

// Teste do sistema
const pedido1 = new Pedido(1, 'Cliente A');
pedido1.adicionarItem('Produto 1', 10.5, 2);
pedido1.adicionarItem('Produto 2', 5.99, 3);
pedido1.exibirDetalhes();

const pedido2 = new Pedido(2, 'Cliente B');
pedido2.adicionarItem('Produto 3', 15.0, 1);
pedido2.adicionarItem('Produto 4', 7.25, 4);
pedido2.exibirDetalhes();
