import Estabelecimento from "./Estabelecimento";

export class Hamburgueria extends Estabelecimento {
    mostrarDetalhes(): string {
        return `Hamburgueria: ${this.nome}, Horário: ${this.horario}`;
    }
}

export default Hamburgueria;
