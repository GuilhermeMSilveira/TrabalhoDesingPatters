import Hamburgueria from "../estabelecimentos/Hamburgueria";
import Pizzaria from "../estabelecimentos/Pizzaria";
import Restaurante from "../estabelecimentos/Restaurante";

export type TipoEstabelecimento = "hamburgueria" | "pizzaria" | "restaurante";

/**
 * Fábrica para criação de estabelecimentos.
 * Permite instanciar tipos específicos de estabelecimento de forma centralizada.
 */
export default class EstabelecimentoFactory {
  /**
   * Cria uma instância de estabelecimento conforme o tipo.
   * @param tipo Tipo do estabelecimento a ser criado.
   * @param nome Nome do estabelecimento.
   * @param horario Horário de funcionamento.
   * @returns Instância de Estabelecimento correspondente ao tipo.
   */
  static criarEstabelecimento(
    tipo: TipoEstabelecimento,
    nome: string,
    horario: string
  ) {
    switch (tipo) {
      case "hamburgueria":
        return new Hamburgueria(nome, horario);
      case "pizzaria":
        return new Pizzaria(nome, horario);
      case "restaurante":
        return new Restaurante(nome, horario);
      default:
        throw new Error(`Tipo de estabelecimento inválido: ${tipo}`);
    }
  }
}
