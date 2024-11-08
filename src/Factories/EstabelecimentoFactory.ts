// Importa as classes específicas de cada tipo de estabelecimento
import Hamburgueria from "../models/Hamburgueria";
import Pizzaria from "../models/Pizzaria";
import Restaurante from "../models/Restaurante";
import Estabelecimento from "../models/Estabelecimento"; // Importa a classe abstrata base de estabelecimento

export default class EstabelecimentoFactory {
  static criarEstabelecimento(tipo: string, nome: string, horario: string): Estabelecimento {
    switch (tipo.toLowerCase()) {
      case "hamburgueria":
        return new Hamburgueria(nome, horario);
      case "pizzaria":
        return new Pizzaria(nome, horario);
      case "restaurante":
        return new Restaurante(nome, horario);
      default:
        throw new Error("Tipo de estabelecimento desconhecido.");
    }
  }
}