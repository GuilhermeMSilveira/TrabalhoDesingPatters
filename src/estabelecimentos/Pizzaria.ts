import Estabelecimento from "../domain/entities/Estabelecimento";

/**
 * Representa uma Pizzaria como um tipo de Estabelecimento.
 */
export class Pizzaria extends Estabelecimento {
  obterDetalhes(): string {
    return `Pizzaria: ${this.getNome()}, Horário: ${this.getHorario()}`;
  }
}

export default Pizzaria;
