// Importa a classe abstrata Estabelecimento
import Estabelecimento from "./Estabelecimento";

// Define a classe Hamburgueria como uma extensão da classe Estabelecimento
export default class Hamburgueria extends Estabelecimento {
    // Construtor da Hamburgueria que inicializa nome e horário
    constructor(nome: string, horario: string) {
        super(nome, horario);
    }

    // Implementação do método mostrarDetalhes para exibir informações da hamburgueria
    mostrarDetalhes(): string {
        return `Hamburgueria: ${this.nome}, Horário: ${this.horario}`;
    }
}
