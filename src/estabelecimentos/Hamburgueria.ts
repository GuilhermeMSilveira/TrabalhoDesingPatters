import Estabelecimento from "../domain/entities/Estabelecimento";

/**
 * Classe que representa uma Hamburgueria, especialização de Estabelecimento.
 * Implementa a exibição dos detalhes específicos deste tipo de estabelecimento.
 */
export class Hamburgueria extends Estabelecimento {
  mostrarDetalhes(): string {
    return `Hamburgueria: ${this.getNome()}, Horário: ${this.getHorario()}`;
  }
}

export default Hamburgueria;
