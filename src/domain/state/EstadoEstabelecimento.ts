/**
 * Interface para representar o estado de um estabelecimento.
 */
export interface EstadoEstabelecimento {
  obterEstado(): string;
}

/**
 * Representa o estado "Aberto" de um estabelecimento.
 */
export class Aberto implements EstadoEstabelecimento {
  obterEstado(): string {
    return "Aberto";
  }
}

/**
 * Representa o estado "Fechado" de um estabelecimento.
 */
export class Fechado implements EstadoEstabelecimento {
  obterEstado(): string {
    return "Fechado";
  }
}
