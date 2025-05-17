import Observador from "./Observador";

/**
 * Observador concreto que exibe notificações de ofertas no console.
 */
class ObservadorNotificacaoOferta extends Observador {
  /**
   * Atualiza o observador com os detalhes da nova oferta.
   * @param nomeProduto Nome do produto ofertado.
   * @param preco Preço do produto.
   * @param estabelecimento Nome do estabelecimento que oferece a oferta.
   */
  atualizar(nomeProduto: string, preco: number, estabelecimento: string): void {
    console.log(`Oferta: ${nomeProduto} por R$${preco.toFixed(2)} no ${estabelecimento}`);
  }
}

export default ObservadorNotificacaoOferta;
