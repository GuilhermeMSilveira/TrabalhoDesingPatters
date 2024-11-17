import Produto from "../models/Produto";
import { EstadoEstabelecimento, Aberto, Fechado } from "../State/EstadoEstabelecimento";

// Estabelecimento.ts

export abstract class Estabelecimento {
    protected nome: string;
    protected horario: string;
    protected produtos: Produto[] = [];
    private estado: EstadoEstabelecimento;

    constructor(nome: string, horario: string) {
        this.nome = nome;
        this.horario = horario;
        this.estado = new Aberto(); // Inicialmente Aberto
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

    abrir(): void {
        this.estado = new Aberto();
    }

    fechar(): void {
        this.estado = new Fechado();
    }

    exibirEstado(): string {
        return this.estado.exibirEstado(this); // A chamada agora usa 'this' como parâmetro
    }

    // Exibindo detalhes incluindo o estado
    mostrarDetalhesComEstado(): string {
        return `${this.mostrarDetalhes()} | Estado: ${this.exibirEstado()}`;
    }

    getNome(): string {
        return this.nome;
    }

    getHorario(): string {
        return this.horario;
    }
}

export default Estabelecimento;
