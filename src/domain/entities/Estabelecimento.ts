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

  exibirProdutos(): void {
    this.produtos.forEach(produto => {
      console.log(`- ${produto.detalhes()}`);
    });
  }

  abstract mostrarDetalhes(): string;

  abrir(): void {
    this.estado = new Aberto();
  }

  fechar(): void {
    this.estado = new Fechado();
  }

  exibirEstado(): string {
    return this.estado.exibirEstado();
  }

  mostrarDetalhesComEstado(): string {
    return `${this.mostrarDetalhes()} | Estado atual: ${this.exibirEstado()}`;
  }

  getNome(): string {
    return this.nome;
  }

  getHorario(): string {
    return this.horario;
  }
}

export default Estabelecimento;
