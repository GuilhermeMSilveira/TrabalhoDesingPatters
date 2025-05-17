// EstadoEstabelecimento.ts
// Define a interface e implementações para estados de um estabelecimento

export interface EstadoEstabelecimento {
  exibirEstado(): string; // Retorna o estado atual do estabelecimento
}

export class Aberto implements EstadoEstabelecimento {
  exibirEstado(): string {
    return "Aberto";
  }
}

export class Fechado implements EstadoEstabelecimento {
  exibirEstado(): string {
    return "Fechado";
  }
}
