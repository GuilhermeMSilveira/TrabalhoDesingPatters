// Importações dos modelos dos tipos de estabelecimentos
import Hamburgueria from "../models/Hamburgueria";
import Pizzaria from "../models/Pizzaria";
import Restaurante from "../models/Restaurante";
import Estabelecimento from "../models/Estabelecimento";

// Classe para criar diferentes tipos de estabelecimentos
class EstabelecimentoFactory {
    // Método que cria um estabelecimento com base no tipo fornecido
    static criarEstabelecimento(tipo: string, nome: string, horario: string): Estabelecimento {
        // Verifica o tipo e cria o respectivo objeto
        switch (tipo.toLowerCase()) {
            case "hamburgueria":
                return new Hamburgueria(nome, horario);
            case "pizzaria":
                return new Pizzaria(nome, horario);
            case "restaurante":
                return new Restaurante(nome, horario);
            default:
                throw new Error("Tipo de estabelecimento inválido!"); // Lança um erro se o tipo for desconhecido
        }
    }
}

export default EstabelecimentoFactory;
