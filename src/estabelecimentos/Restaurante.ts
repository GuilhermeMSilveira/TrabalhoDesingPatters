import Estabelecimento from "../domain/entities/Estabelecimento";

/**
 * Representa um restaurante, especialização da classe Estabelecimento.
 * Implementa a exibição dos detalhes específicos para um restaurante.
 */
export class Restaurante extends Estabelecimento {
  constructor(nome: string, horario: string) {
    super(nome, horario);

    if (!nome || nome.trim() === "") {
      throw new Error("Nome do estabelecimento não pode ser vazio");
    }

    if (!horario || horario.trim() === "") {
      throw new Error("Horário do estabelecimento não pode ser vazio");
    }

    const horarioRegex = /^\d{2}:\d{2}\s*-\s*\d{2}:\d{2}$/;
    if (!horarioRegex.test(horario)) {
      throw new Error(`Formato de horário inválido: "${horario}"`);
    }
  }

  obterDetalhes(): string {
    return `Restaurante: ${this.getNome()}, Horário: ${this.getHorario()}`;
  }
}

export default Restaurante;
