import Estabelecimento from "../domain/entities/Estabelecimento";

export class Pizzaria extends Estabelecimento {
  constructor(nome: string, horario: string) {
    super(nome, horario);

    if (!nome || nome.trim() === "") {
      throw new Error("Nome do estabelecimento não pode ser vazio");
    }

    if (!horario || horario.trim() === "") {
      throw new Error("Horário do estabelecimento não pode ser vazio");
    }

    const regex = /^(\d{2}):(\d{2})\s*-\s*(\d{2}):(\d{2})$/;
    const match = horario.match(regex);
    if (!match) {
      throw new Error(`Formato de horário inválido: "${horario}"`);
    }

    const [, hInicio, mInicio, hFim, mFim] = match;
    const horaInicio = Number(hInicio);
    const minInicio = Number(mInicio);
    const horaFim = Number(hFim);
    const minFim = Number(mFim);

    if (
      horaInicio < 0 || horaInicio > 23 ||
      minInicio < 0 || minInicio > 59 ||
      horaFim < 0 || horaFim > 23 ||
      minFim < 0 || minFim > 59
    ) {
      throw new Error(`Horário fora do intervalo válido: "${horario}"`);
    }
  }

  obterDetalhes(): string {
    return `Pizzaria: ${this.getNome()}, Horário: ${this.getHorario()}`;
  }
}

export default Pizzaria;
