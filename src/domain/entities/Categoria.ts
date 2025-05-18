import Estabelecimento from "./Estabelecimento";

/**
 * Representa uma categoria que agrupa estabelecimentos.
 */
export default class Categoria {
  private estabelecimentos: Estabelecimento[] = [];

  constructor(private nome: string) {}

  /**
   * Adiciona um estabelecimento à categoria.
   * @param estabelecimento Estabelecimento a ser adicionado.
   */
  adicionar(estabelecimento: Estabelecimento): void {
    this.estabelecimentos.push(estabelecimento);
  }

  /**
   * Retorna o nome da categoria.
   */
  obterNome(): string {
    return this.nome;
  }

  /**
   * Retorna a lista de estabelecimentos.
   */
  obterEstabelecimentos(): Estabelecimento[] {
    return [...this.estabelecimentos];
  }

  /**
   * Exibe detalhes da categoria e de seus estabelecimentos.
   * (Para simplificar, ainda usa console.log; ideal seria separar apresentação)
   */
  exibirDetalhes(): void {
    console.log(`Categoria: ${this.nome}`);
    this.estabelecimentos.forEach(estabelecimento => {
      // Aqui usamos obterDetalhes e listarProdutos conforme documentação
      console.log(estabelecimento.obterDetalhes());
      estabelecimento.listarProdutos().forEach(produtoStr => console.log(produtoStr));
    });
  }
}
