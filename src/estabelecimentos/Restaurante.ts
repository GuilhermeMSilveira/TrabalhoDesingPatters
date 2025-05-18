import Estabelecimento from "../domain/entities/Estabelecimento";

/**
 * Representa um Restaurante como um tipo de Estabelecimento.
 */
export class Restaurante extends Estabelecimento {
  obterDetalhes(): string {
    return `Restaurante: ${this.getNome()}, Horário: ${this.getHorario()}`;
  }
}

export default Restaurante;
