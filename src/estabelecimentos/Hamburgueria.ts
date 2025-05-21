import Estabelecimento from "../domain/entities/Estabelecimento";

/**
 * Representa uma Hamburgueria como um tipo de Estabelecimento.
 */
export class Hamburgueria extends Estabelecimento {
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
    return `Hamburgueria: ${this.getNome()}, Horário: ${this.getHorario()}`;
  }
}

export default Hamburgueria;
