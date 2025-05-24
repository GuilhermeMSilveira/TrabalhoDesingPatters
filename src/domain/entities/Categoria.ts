import Estabelecimento from "./Estabelecimento";

export default class Categoria {
  private estabelecimentos: Estabelecimento[] = [];

  constructor(private nome: string) {}

  /**
   * Adiciona um estabelecimento à categoria.
   * @param estabelecimento Estabelecimento a ser adicionado.
   * @returns this (interface fluente)
   */
  
  public adicionar(estabelecimento: Estabelecimento): this {
    this.estabelecimentos.push(estabelecimento);
    return this;
  }

  public obterNome(): string {
    return this.nome;
  }

  public obterEstabelecimentos(): Estabelecimento[] {
    return [...this.estabelecimentos];
  }

  /**
   * Exibe detalhes da categoria e de seus estabelecimentos.
   */
  public exibirDetalhes(): void {
    console.log(`Categoria: ${this.nome}`);
    this.estabelecimentos.forEach(estabelecimento => {
      console.log(estabelecimento.obterDetalhes());
      estabelecimento.listarProdutos().forEach(produtoStr => console.log(produtoStr));
    });
  }
}
