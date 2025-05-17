import Estabelecimento from "./Estabelecimento";

/**
 * Representa uma categoria que agrupa estabelecimentos.
 */
export default class Categoria {
  private componentes: Estabelecimento[] = [];

  constructor(private nome: string) {}

  /**
   * Adiciona um estabelecimento à categoria.
   * @param estabelecimento Estabelecimento a ser adicionado.
   */
  adicionar(estabelecimento: Estabelecimento): void {
    this.componentes.push(estabelecimento);
  }

  /**
   * Exibe detalhes da categoria e de seus estabelecimentos.
   */
  exibirDetalhes(): void {
    console.log(`Categoria: ${this.nome}`);
    this.componentes.forEach(estabelecimento => {
      console.log(estabelecimento.mostrarDetalhes());
      estabelecimento.exibirProdutos();
    });
  }
}
