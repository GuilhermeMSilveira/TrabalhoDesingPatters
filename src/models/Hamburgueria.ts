// src/Models/Hamburgueria.ts

import Estabelecimento from "./Estabelecimento";

export default class Hamburgueria extends Estabelecimento {
  mostrarDetalhes(): string {
    return `Hamburgueria: ${this.nome}, Horário: ${this.horario}`;
  }
}
