import Estabelecimento from "../domain/entities/Estabelecimento";

/**
 * Representa uma Hamburgueria como um tipo de Estabelecimento.
 */
export class Hamburgueria extends Estabelecimento {
  obterDetalhes(): string {
    return `Hamburgueria: ${this.getNome()}, Horário: ${this.getHorario()}`;
  }
}

export default Hamburgueria;
