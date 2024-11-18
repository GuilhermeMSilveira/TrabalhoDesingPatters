// Representa um produto oferecido por um estabelecimento
export default class Produto {
    private nome: string; // Nome do produto
    private preco: number; // Preço do produto

    // Construtor para inicializar nome e preço
    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
    }

    // Retorna os detalhes do produto
    mostrarDetalhes(): string {
        return `Produto: ${this.nome}, Preço: R$${this.preco.toFixed(2)}`;
    }

    // Métodos getters para nome e preço
    getNome(): string {
        return this.nome;
    }

    getPreco(): number {
        return this.preco;
    }
}
