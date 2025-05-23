import { Produto } from "./Produto";
import { EstadoEstabelecimento, Aberto, Fechado } from "../state/EstadoEstabelecimento";

/**
 * Classe abstrata que representa um estabelecimento.
 * Define propriedades básicas e controle de estado (Aberto/Fechado).
 */
export abstract class Estabelecimento {
  protected produtos: Produto[] = [];
  private estado: EstadoEstabelecimento;

  constructor(
    protected nome: string,
    protected horario: string,
  ) {
    this.estado = new Aberto();
  }

  // Método fluente para adicionar produto
  public adicionarProduto(produto: Produto): this {
    this.produtos.push(produto);
    return this;
  }

  listarProdutos(): string[] {
    return this.produtos.map(produto => `- ${produto.detalhes()}`);
  }

  abstract obterDetalhes(): string;

  // Métodos fluentes para abrir e fechar estabelecimento
  public abrir(): this {
    this.estado = new Aberto();
    return this;
  }

  public fechar(): this {
    this.estado = new Fechado();
    return this;
  }

  obterEstado(): string {
    return this.estado.obterEstado();
  }

  obterDetalhesComEstado(): string {
    return `${this.obterDetalhes()} | Estado atual: ${this.obterEstado()}`;
  }

  getNome(): string {
    return this.nome;
  }

  getHorario(): string {
    return this.horario;
  }
}

export default Estabelecimento;
