/**
 * Interface para observadores que recebem notificações de ofertas.
 */
export default abstract class Observador {
  /**
   * Método chamado para atualizar o observador sobre uma nova oferta.
   * @param nomeProduto Nome do produto ofertado.
   * @param preco Preço da oferta.
   * @param estabelecimento Estabelecimento que oferece o produto.
   */
  abstract atualizar(nomeProduto: string, preco: number, estabelecimento: string): void;
}
