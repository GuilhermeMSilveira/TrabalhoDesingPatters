import Observador from "./Observador";

/**
 * Gerencia observadores para notificação de ofertas.
 * Permite registrar observadores e notificar todos sobre novas ofertas.
 */
class NotificadorPreferenciasUsuario {
  private observadores: Observador[] = [];

  /**
   * Registra um observador para receber notificações.
   * @param observador Instância que implementa a interface Observador
   */
  registrarObservador(observador: Observador): void {
    this.observadores.push(observador);
  }

  /**
   * Notifica todos os observadores sobre uma nova oferta.
   * @param nomeProduto Nome do produto ofertado
   * @param preco Preço da oferta
   * @param estabelecimento Nome do estabelecimento que oferece
   */
  notificarObservadoresOferta(nomeProduto: string, preco: number, estabelecimento: string): void {
    this.observadores.forEach(observador => {
      observador.atualizar(nomeProduto, preco, estabelecimento);
    });
  }
}

export default NotificadorPreferenciasUsuario;
