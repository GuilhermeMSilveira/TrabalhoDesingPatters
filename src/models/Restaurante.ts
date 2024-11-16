import Estabelecimento from "./Estabelecimento";

export class Restaurante extends Estabelecimento {
    mostrarDetalhes(): string {
        return `Restaurante: ${this.nome}, Horário: ${this.horario}`;
    }
}

export default Restaurante;
