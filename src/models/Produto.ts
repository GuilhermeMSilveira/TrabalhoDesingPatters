// Produto.ts
export default class Produto {
    private nome: string;
    private preco: number;

    // Construtor para inicializar o nome e o preço do produto
    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
    }

    // Método para exibir detalhes do produto
    mostrarDetalhes(): string {
        return `Produto: ${this.nome} - Preço: R$${this.preco.toFixed(2)}`;
    }

    // Métodos adicionais que podem ser úteis para obter os dados do produto
    getNome(): string {
        return this.nome;
    }

    getPreco(): number {
        return this.preco;
    }
}
