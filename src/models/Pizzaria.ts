import Estabelecimento from "./Estabelecimento";

export class Pizzaria extends Estabelecimento {
    mostrarDetalhes(): string {
        return `Pizzaria: ${this.getNome()}, Horário: ${this.getHorario()}`;
    }
}

export default Pizzaria;
