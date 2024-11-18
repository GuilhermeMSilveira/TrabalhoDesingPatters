// Importa a classe Estabelecimento como base
import Estabelecimento from "./Estabelecimento";

// Representa uma hamburgueria
export class Hamburgueria extends Estabelecimento {
    // Mostra detalhes específicos da hamburgueria
    mostrarDetalhes(): string {
        return `Hamburgueria: ${this.getNome()}, Horário: ${this.getHorario()}`;
    }
}

export default Hamburgueria;
