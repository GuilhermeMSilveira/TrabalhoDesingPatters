import Hamburgueria from "../models/Hamburgueria";
import Pizzaria from "../models/Pizzaria";
import Restaurante from "../models/Restaurante";
import Estabelecimento from "../models/Estabelecimento";

class EstabelecimentoFactory {
    static criarEstabelecimento(tipo: string, nome: string, horario: string): Estabelecimento {
        switch (tipo.toLowerCase()) {
            case "hamburgueria":
                return new Hamburgueria(nome, horario);
            case "pizzaria":
                return new Pizzaria(nome, horario);
            case "restaurante":
                return new Restaurante(nome, horario);
            default:
                throw new Error("Tipo de estabelecimento inválido!");
        }
    }
}

export default EstabelecimentoFactory;
