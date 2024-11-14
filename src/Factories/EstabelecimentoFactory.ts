// EstabelecimentoFactory.ts
import Estabelecimento from "../models/Estabelecimento";

export default class EstabelecimentoFactory {
    // Método estático para criar estabelecimentos
    static criarEstabelecimento(tipo: string, nome: string, horario: string): Estabelecimento {
        switch (tipo) {
            case "hamburgueria":
                return new Estabelecimento(nome, horario);
            case "pizzaria":
                return new Estabelecimento(nome, horario);
            case "restaurante":
                return new Estabelecimento(nome, horario);
            default:
                throw new Error("Tipo de estabelecimento desconhecido");
        }
    }
}
