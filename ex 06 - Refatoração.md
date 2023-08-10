Exercício: Refatoração de Código para cumprir os Princípios SOLID e Clean Code

Cenário: Considere um sistema de gerenciamento de estoque de uma loja online. O sistema tem uma classe chamada Estoque que é responsável por armazenar informações sobre os produtos em estoque, bem como gerenciar as operações de adicionar e remover produtos.

class Produto {
constructor(nome, preco, quantidade) {
this.nome = nome;
this.preco = preco;
this.quantidade = quantidade;
}
}

class Estoque {
constructor() {
this.produtos = [];
}

adicionarProduto(produto) {
this.produtos.push(produto);
}

removerProduto(produto) {
const index = this.produtos.findIndex((p) => p.nome === produto.nome);
if (index !== -1) {
this.produtos.splice(index, 1);
}
}

listarProdutos() {
return this.produtos;
}
}

// Utilização do Estoque
const estoque = new Estoque();

const produto1 = new Produto('Camiseta', 29.99, 50);
estoque.adicionarProduto(produto1);

const produto2 = new Produto('Calça Jeans', 89.99, 30);
estoque.adicionarProduto(produto2);

console.log('Produtos em estoque:', estoque.listarProdutos());

estoque.removerProduto(produto1);

console.log('Produtos em estoque após a remoção:', estoque.listarProdutos());

Tarefas:

Identifique as violações aos princípios SOLID presentes no código fornecido.

Refatore o código para cumprir os princípios SOLID e seguir as boas práticas de Clean Code.

Separe as responsabilidades em classes individuais, buscando seguir o princípio da Responsabilidade Única (SRP).

Aplique a Injeção de Dependência (Dependency Injection) ou o Princípio da Inversão de Dependência (DIP) quando necessário.

Garanta que o código esteja legível, com nomes significativos para classes, métodos e variáveis.

Certifique-se de que o código seja extensível e fácil de manter, aderindo ao princípio do Aberto/Fechado (OCP).

Dicas:

Considere criar uma classe separada para gerenciar a lógica de adicionar e remover produtos.

Pense em como organizar as classes de forma modular e coesa, buscando evitar o acoplamento excessivo.
