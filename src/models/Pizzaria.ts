import Estabelecimento from "./Estabelecimento";

export class Pizzaria extends Estabelecimento {
    mostrarDetalhes(): string {
        return `Pizzaria: ${this.nome}, Horário: ${this.horario}`;
    }
}

export default Pizzaria;
