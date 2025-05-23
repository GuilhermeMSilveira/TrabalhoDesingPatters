import Categoria from "./Categoria";

export class Produto {
  private nome: string;
  private preco: number;
  private categoria?: Categoria;

  constructor(nome: string, preco: number) {
    if (preco < 0) {
      throw new Error("Preço não pode ser negativo");
    }
    this.nome = nome;
    this.preco = preco;
  }

  public getNome(): string {
    return this.nome;
  }

  public getPreco(): number {
    return this.preco;
  }

  public getCategoria(): Categoria | undefined {
    return this.categoria;
  }

  public setNome(nome: string): this {
    this.nome = nome;
    return this;
  }

  public setPreco(preco: number): this {
    if (preco < 0) {
      throw new Error("Preço não pode ser negativo");
    }
    this.preco = preco;
    return this;
  }

  public setCategoria(categoria: Categoria): this {
    this.categoria = categoria;
    return this;
  }

  public detalhes(): string {
    return `${this.nome} - R$${this.preco.toFixed(2)} - Categoria: ${this.categoria ? this.categoria.obterNome() : "Sem categoria"}`;
  }
}
