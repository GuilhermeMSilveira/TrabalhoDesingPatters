import Estabelecimento from "../domain/entities/Estabelecimento";

/**
 * Classe que representa uma Pizzaria, especialização da classe Estabelecimento.
 * Implementa a exibição dos detalhes específicos deste tipo de estabelecimento.
 */
export class Pizzaria extends Estabelecimento {
  mostrarDetalhes(): string {
    return `Pizzaria: ${this.getNome()}, Horário: ${this.getHorario()}`;
  }
}

export default Pizzaria;
