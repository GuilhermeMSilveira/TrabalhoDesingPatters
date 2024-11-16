class Produto {
    private nome: string;
    private preco: number;

    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
    }

    mostrarDetalhes(): string {
        return `Produto: ${this.nome}, Preço: R$${this.preco.toFixed(2)}`;
    }

    getNome(): string {
        return this.nome;
    }

    getPreco(): number {
        return this.preco;
    }
}

export default Produto;
