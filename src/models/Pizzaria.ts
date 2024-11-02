// Importa a classe abstrata Estabelecimento
import Estabelecimento from "./Estabelecimento";

// Define a classe Pizzaria como uma extensão de Estabelecimento
export default class Pizzaria extends Estabelecimento {
    // Construtor que inicializa nome e horário
    constructor(nome: string, horario: string) {
        super(nome, horario);
    }

    // Implementação de mostrarDetalhes para exibir informações da pizzaria
    mostrarDetalhes(): string {
        return `Pizzaria: ${this.nome}, Horário: ${this.horario}`;
    }
}
