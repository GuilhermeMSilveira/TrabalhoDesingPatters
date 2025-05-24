import { NotificadorConsole } from "./NotificadorConsole";

export abstract class Observador {
  protected canalNotificacao: NotificadorConsole;

  constructor(canalNotificacao: NotificadorConsole) {
    this.canalNotificacao = canalNotificacao;
  }

  abstract atualizar(nomeProduto: string, preco: number, estabelecimento: string): void;
}
