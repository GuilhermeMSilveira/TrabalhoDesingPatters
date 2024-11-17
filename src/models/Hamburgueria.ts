import Estabelecimento from "./Estabelecimento";

export class Hamburgueria extends Estabelecimento {
    mostrarDetalhes(): string {
        return `Hamburgueria: ${this.getNome()}, Horário: ${this.getHorario()}`;
    }
}

export default Hamburgueria;
