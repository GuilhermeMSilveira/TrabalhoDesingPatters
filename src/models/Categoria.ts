// Importa a classe abstrata Estabelecimento
import Estabelecimento from "./Estabelecimento";

// Declara a classe Categoria, responsável por agrupar estabelecimentos de um mesmo tipo
export default class Categoria {
    private nome: string; // Armazena o nome da categoria
    private estabelecimentos: Estabelecimento[] = []; // Array de estabelecimentos pertencentes à categoria

    // Construtor da classe Categoria que recebe o nome como argumento
    constructor(nome: string) {
        this.nome = nome;
    }

    // Método para adicionar um novo estabelecimento à categoria
    adicionarEstabelecimento(estabelecimento: Estabelecimento): void {
        this.estabelecimentos.push(estabelecimento);
    }

    // Método para remover um estabelecimento da categoria
    removerEstabelecimento(estabelecimento: Estabelecimento): void {
        this.estabelecimentos = this.estabelecimentos.filter(e => e !== estabelecimento);
    }

    // Exibe detalhes de todos os estabelecimentos da categoria
    exibirEstabelecimentos(): void {
        console.log(`Categoria: ${this.nome}`);
        for (const est of this.estabelecimentos) {
            console.log(est.mostrarDetalhes()); // Chama o método abstrato mostrarDetalhes
        }
    }
}
