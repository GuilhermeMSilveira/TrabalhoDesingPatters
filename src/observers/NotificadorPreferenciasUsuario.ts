import { Observador } from "./Observador";

export class NotificadorPreferenciasUsuario {
  private observadores: Observador[] = [];

  registrarObservador(observador: Observador): void {
    this.observadores.push(observador);
  }

  notificarObservadoresOferta(nomeProduto: string, preco: number, estabelecimento: string): void {
    this.observadores.forEach(observador => observador.atualizar(nomeProduto, preco, estabelecimento));
  }
}
