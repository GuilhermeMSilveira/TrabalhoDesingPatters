// Importa a classe base Estabelecimento
import Estabelecimento from "./Estabelecimento";

// Representa um restaurante
export class Restaurante extends Estabelecimento {
    // Mostra detalhes específicos do restaurante
    mostrarDetalhes(): string {
        return `Restaurante: ${this.getNome()}, Horário: ${this.getHorario()}`;
    }
}

export default Restaurante;
