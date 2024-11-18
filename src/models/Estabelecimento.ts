// Importação do modelo de Produto e o estado do estabelecimento
import Produto from "../models/Produto";
import { EstadoEstabelecimento, Aberto, Fechado } from "../State/EstadoEstabelecimento";

// Classe abstrata que define as propriedades e métodos básicos de um estabelecimento
export abstract class Estabelecimento {
    protected nome: string; // Nome do estabelecimento
    protected horario: string; // Horário de funcionamento
    protected produtos: Produto[] = []; // Lista de produtos do estabelecimento
    private estado: EstadoEstabelecimento; // Estado atual (Aberto ou Fechado)

    // Construtor para inicializar o nome, horário e estado inicial (Aberto)
    constructor(nome: string, horario: string) {
        this.nome = nome;
        this.horario = horario;
        this.estado = new Aberto(); // Inicialmente o estabelecimento está aberto
    }

    // Adiciona um produto à lista de produtos do estabelecimento
    adicionarProduto(produto: Produto): void {
        this.produtos.push(produto);
    }

    // Exibe todos os produtos do estabelecimento
    exibirProdutos(): void {
        this.produtos.forEach((produto) => {
            console.log(`- ${produto.mostrarDetalhes()}`);
        });
    }

    // Método abstrato para exibir detalhes específicos de cada tipo de estabelecimento
    abstract mostrarDetalhes(): string;

    // Altera o estado do estabelecimento para Aberto
    abrir(): void {
        this.estado = new Aberto();
    }

    // Altera o estado do estabelecimento para Fechado
    fechar(): void {
        this.estado = new Fechado();
    }

    // Exibe o estado atual do estabelecimento
    exibirEstado(): string {
        return this.estado.exibirEstado(this);
    }

    // Exibe detalhes do estabelecimento, incluindo o estado atual
    mostrarDetalhesComEstado(): string {
        return `${this.mostrarDetalhes()} | O estabelecimento está atualmente: ${this.exibirEstado()}`;
    }

    // Métodos getters para nome e horário
    getNome(): string {
        return this.nome;
    }

    getHorario(): string {
        return this.horario;
    }
}

export default Estabelecimento;
