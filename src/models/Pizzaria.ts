// Importa a classe Estabelecimento como base
import Estabelecimento from "./Estabelecimento";

// Representa uma pizzaria
export class Pizzaria extends Estabelecimento {
    // Mostra detalhes específicos da pizzaria
    mostrarDetalhes(): string {
        return `Pizzaria: ${this.getNome()}, Horário: ${this.getHorario()}`;
    }
}

export default Pizzaria;
