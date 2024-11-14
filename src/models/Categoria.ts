import Estabelecimento from "./Estabelecimento";

export default class Categoria {
  private nome: string;
  private estabelecimentos: Estabelecimento[] = [];

  constructor(nome: string) {
    this.nome = nome;
  }

  adicionarComponente(estabelecimento: Estabelecimento): void {
    this.estabelecimentos.push(estabelecimento);
  }

  exibirDetalhes(): void {
    console.log(`Categoria: ${this.nome}`);
    this.estabelecimentos.forEach(estabelecimento => {
      console.log(estabelecimento.mostrarDetalhes());
    });
  }
}
