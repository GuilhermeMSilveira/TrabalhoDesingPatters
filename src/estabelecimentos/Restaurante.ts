import Estabelecimento from "../domain/entities/Estabelecimento";

/**
 * Representa um restaurante, especialização da classe Estabelecimento.
 * Implementa a exibição dos detalhes específicos para um restaurante.
 */
export class Restaurante extends Estabelecimento {
  mostrarDetalhes(): string {
    return `Restaurante: ${this.getNome()}, Horário: ${this.getHorario()}`;
  }
}

export default Restaurante;
