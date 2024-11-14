import Produto from "./Produto";

export default class Estabelecimento {
  private nome: string;
  private horario: string;
  private produtos: Produto[] = [];

  constructor(nome: string, horario: string) {
    this.nome = nome;
    this.horario = horario;
  }

  // Método para adicionar produtos ao estabelecimento
  adicionarProduto(produto: Produto): void {
    this.produtos.push(produto);
  }

  // Método para exibir os detalhes do estabelecimento e seus produtos
  mostrarDetalhes(): string {
    let detalhes = `Estabelecimento: ${this.nome} - Horário: ${this.horario}`;
    this.produtos.forEach(produto => {
      detalhes += `\n  ${produto.mostrarDetalhes()}`;
    });
    return detalhes;
  }
}
