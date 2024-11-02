// src/observers/NotificadorPreferenciasUsuario.ts

// Importa a classe Observador, que define a interface para objetos que recebem notificações de mudanças de estado.
import Observador from "../Observer/Observador";

// Importa a classe Preferencia, que armazena o tipo de preferência do usuário.
import Preferencia from "../Utils/Preferencia";

// Define a classe NotificadorPreferenciasUsuario, que é responsável por gerenciar a lista de observadores
// e notificar todos quando ocorre uma atualização nas preferências do usuário.
export default class NotificadorPreferenciasUsuario {
  // Array privado de observadores que serão notificados de atualizações
  private observadores: Observador[] = [];

  // Método para registrar um novo observador na lista.
  // Recebe um objeto do tipo Observador e adiciona ao array de observadores.
  registrarObservador(observador: Observador): void {
    this.observadores.push(observador);
    // Exibe uma mensagem de registro de observador (pode ser desativada se não for necessária)
    // console.log("Observador registrado.");
  }

  // Método para remover um observador da lista de notificações.
  // Procura pelo observador no array e, se encontrado, o remove.
  removerObservador(observador: Observador): void {
    const index = this.observadores.indexOf(observador);
    if (index > -1) {
      // Remove o observador da lista com base no índice
      this.observadores.splice(index, 1);
      // Exibe uma mensagem de remoção de observador (pode ser desativada se não for necessária)
      // console.log("Observador removido.");
    }
  }

  // Método para notificar todos os observadores sobre uma nova preferência do usuário.
  // Aceita um objeto Preferencia como parâmetro e o repassa a cada observador.
  notificarObservadores(preferencia: Preferencia): void {
    // Exibe uma mensagem informando que os administradores estão sendo notificados
    console.log(`Notificando administradores sobre a preferência: ${preferencia.tipo}`);

    // Itera pelo array de observadores e chama o método atualizar de cada um,
    // passando a preferência atual como argumento.
    this.observadores.forEach(observador => observador.atualizar(preferencia));
  }
}
