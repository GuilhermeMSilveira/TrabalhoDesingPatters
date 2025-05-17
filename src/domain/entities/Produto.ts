/**
 * Representa um produto oferecido por um estabelecimento.
 */
export default class Produto {
  /**
   * Cria um novo produto.
   * @param nome - Nome do produto.
   * @param preco - Preço do produto (não pode ser negativo).
   * @throws Error se o preço for negativo.
   */
  constructor(
    private nome: string,
    private preco: number
  ) {
    if (preco < 0) {
      throw new Error("Preço não pode ser negativo");
    }
  }

  /**
   * Retorna uma string com detalhes formatados do produto.
   */
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
