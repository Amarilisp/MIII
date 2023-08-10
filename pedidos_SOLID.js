class Pedido {
  constructor(cliente) {
    this.cliente = cliente;
    this.itens = [];
  }

  adicionarItem(item) {
    this.itens.push(item);
  }

  calcularTotal() {
    return this.itens.reduce(
      (total, item) => total + item.calcularSubtotal(),
      0
    );
  }
}
module.export = Pedido;

class ItemPedido {
  constructor(produto, quantidade) {
    this.produto = produto;
    this.quantidade = quantidade;
  }

  calcularSubtotal() {
    return this.produto.preco * this.quantidade;
  }
}
module.export = ItemPedido;

class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
}
module.export = Produto;

class Cliente {
  constructor(nome, endereco) {
    this.nome = nome;
    this.endereco = endereco;
  }
}
module.export = Cliente;

class NotaFiscal {
  constructor(numero, data, pedido) {
    this.numero = numero;
    this.data = data;
    this.pedido = pedido;
  }

  gerarNotaFiscal() {
    // Gere a nota fiscal com base nas informações do pedido
    const cliente = this.pedido.cliente;
    const itens = this.pedido.itens;

    let notaFiscal = `NOTA FISCAL - Número: ${this.numero}\n`;
    notaFiscal += `Data: ${this.data}\n\n`;
    notaFiscal += `Cliente: ${cliente.nome}\n`;
    notaFiscal += `Endereço: ${cliente.endereco}\n\n`;
    notaFiscal += "Itens:\n";

    for (const item of itens) {
      notaFiscal += `- ${item.quantidade}x ${
        item.produto.nome
      } - Subtotal: R$ ${item.calcularSubtotal().toFixed(2)}\n`;
    }

    notaFiscal += `\nValor Total: R$ ${this.pedido.calcularTotal().toFixed(2)}`;

    return notaFiscal;
  }
}

module.export = NotaFiscal;
