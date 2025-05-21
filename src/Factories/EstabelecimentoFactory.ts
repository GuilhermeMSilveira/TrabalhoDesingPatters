import Hamburgueria from "../estabelecimentos/Hamburgueria";
import Pizzaria from "../estabelecimentos/Pizzaria";
import Restaurante from "../estabelecimentos/Restaurante";
import Estabelecimento from "../domain/entities/Estabelecimento";

export type TipoEstabelecimento = "hamburgueria" | "pizzaria" | "restaurante";

export default class EstabelecimentoFactory {
  private static tiposMap: Record<TipoEstabelecimento, any> = {
    hamburgueria: Hamburgueria,
    pizzaria: Pizzaria,
    restaurante: Restaurante,
  };

  static criarEstabelecimento(
    tipo: TipoEstabelecimento,
    nome: string,
    horario: string
  ): Estabelecimento {
    if (!nome || nome.trim() === "") {
      throw new Error("Nome do estabelecimento não pode ser vazio");
    }

    if (!horario || horario.trim() === "") {
      throw new Error("Horário inválido");
    }

    const ClasseEstabelecimento = this.tiposMap[tipo];
    if (!ClasseEstabelecimento) {
      throw new Error(`Tipo de estabelecimento inválido: "${tipo}"`);
    }
    return new ClasseEstabelecimento(nome, horario);
  }
}
