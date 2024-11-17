import Estabelecimento from "./Estabelecimento";

export class Restaurante extends Estabelecimento {
    mostrarDetalhes(): string {
        return `Restaurante: ${this.getNome()}, Horário: ${this.getHorario()}`;
    }
}

export default Restaurante;
