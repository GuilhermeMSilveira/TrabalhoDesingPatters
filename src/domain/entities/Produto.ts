/**
 * Representa um produto oferecido por um estabelecimento.
 */
export default class Produto {
  constructor(
    private nome: string,
    private preco: number
  ) {
    if (preco < 0) {
      throw new Error("Preço não pode ser negativo");
    }
  }

  detalhes(): string {
    return `Produto: ${this.nome}, Preço: R$${this.preco.toFixed(2)}`;
  }

  getNome(): string {
    return this.nome;
  }

  getPreco(): number {
    return this.preco;
  }
}
