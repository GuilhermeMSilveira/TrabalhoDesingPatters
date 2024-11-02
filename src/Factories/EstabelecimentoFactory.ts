// Importa as classes específicas de cada tipo de estabelecimento
import Hamburgueria from "../models/Hamburgueria";
import Pizzaria from "../models/Pizzaria";
import Restaurante from "../models/Restaurante";
import Estabelecimento from "../models/Estabelecimento"; // Importa a classe abstrata base de estabelecimento

// Declara a classe EstabelecimentoFactory que atuará como uma fábrica para criar objetos do tipo Estabelecimento
export default class EstabelecimentoFactory {
  // Método estático para criar estabelecimentos com base no tipo especificado
  static criarEstabelecimento(tipo: string, nome: string, horario: string): Estabelecimento {
    // Inicia um bloco switch para decidir qual tipo de estabelecimento será criado
    switch (tipo.toLowerCase()) {
      // Cria um objeto Hamburgueria se o tipo for "hamburgueria"
      case "hamburgueria":
        return new Hamburgueria(nome, horario);
      // Cria um objeto Pizzaria se o tipo for "pizzaria"
      case "pizzaria":
        return new Pizzaria(nome, horario);
      // Cria um objeto Restaurante se o tipo for "restaurante"
      case "restaurante":
        return new Restaurante(nome, horario);
      // Caso o tipo não seja reconhecido, lança um erro
      default:
        throw new Error("Tipo de estabelecimento desconhecido.");
    }
  }
}
