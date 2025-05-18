import Produto from "./Produto";
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

  adicionarProduto(produto: Produto): void {
    this.produtos.push(produto);
  }

  listarProdutos(): string[] {
    return this.produtos.map(produto => `- ${produto.detalhes()}`);
  }

  abstract obterDetalhes(): string;

  abrir(): void {
    this.estado = new Aberto();
  }

  fechar(): void {
    this.estado = new Fechado();
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
