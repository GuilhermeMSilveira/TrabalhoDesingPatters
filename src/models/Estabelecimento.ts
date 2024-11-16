import Produto from "../models/Produto";

export abstract class Estabelecimento {
    protected nome: string;
    protected horario: string;
    protected produtos: Produto[] = [];

    constructor(nome: string, horario: string) {
        this.nome = nome;
        this.horario = horario;
    }

    adicionarProduto(produto: Produto): void {
        this.produtos.push(produto);
    }

    exibirProdutos(): void {
        this.produtos.forEach((produto) => {
            console.log(`- ${produto.mostrarDetalhes()}`);
        });
    }

    abstract mostrarDetalhes(): string;
}

export default Estabelecimento;
