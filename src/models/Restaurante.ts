// Importa a classe Estabelecimento
import Estabelecimento from "./Estabelecimento";

// Define a classe Restaurante como uma extensão de Estabelecimento
export default class Restaurante extends Estabelecimento {
    // Construtor que inicializa nome e horário
    constructor(nome: string, horario: string) {
        super(nome, horario);
    }

    // Implementação de mostrarDetalhes para exibir informações do restaurante
    mostrarDetalhes(): string {
        return `Restaurante: ${this.nome}, Horário: ${this.horario}`;
        
    }
}
