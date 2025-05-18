import Hamburgueria from "../estabelecimentos/Hamburgueria";
import Pizzaria from "../estabelecimentos/Pizzaria";
import Restaurante from "../estabelecimentos/Restaurante";
import Estabelecimento from "../domain/entities/Estabelecimento";

export type TipoEstabelecimento = "hamburgueria" | "pizzaria" | "restaurante";

/**
 * Fábrica responsável por criar instâncias de estabelecimentos conforme o tipo.
 */
export default class EstabelecimentoFactory {
  /**
   * Cria uma instância de estabelecimento baseado no tipo fornecido.
   * @param tipo - Tipo do estabelecimento.
   * @param nome - Nome do estabelecimento.
   * @param horario - Horário de funcionamento.
   * @returns Instância do estabelecimento correspondente.
   * @throws Erro caso o tipo seja inválido.
   */
  static criarEstabelecimento(
    tipo: TipoEstabelecimento,
    nome: string,
    horario: string
  ): Estabelecimento {
    switch (tipo) {
      case "hamburgueria":
        return new Hamburgueria(nome, horario);
      case "pizzaria":
        return new Pizzaria(nome, horario);
      case "restaurante":
        return new Restaurante(nome, horario);
      default:
        throw new Error(`Tipo de estabelecimento inválido: "${tipo}"`);
    }
  }
}
