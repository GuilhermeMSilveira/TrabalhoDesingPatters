import Preferencia from "../Utils/Preferencia";
import Observador from "./Observador";

export default class NotificadorPreferenciasUsuario {
  private observadores: Observador[] = [];

  // Método para registrar observadores
  registrarObservador(observador: Observador): void {
    this.observadores.push(observador);
  }

  // Método para notificar todos os observadores sobre as preferências do usuário
  notificarObservadores(preferencia: Preferencia): void {
    // Aqui podemos incluir a lógica para notificar observadores, se necessário.
  }

  // Método para notificar os observadores sobre uma oferta
  notificarObservadoresOferta(nomeProduto: string, preco: number, estabelecimento: string): void {
    this.observadores.forEach(observador => {
      observador.atualizar(nomeProduto, preco, estabelecimento);
    });
  }
}
