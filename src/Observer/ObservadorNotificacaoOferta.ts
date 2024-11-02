// Importa Observador e Preferencia
import Observador from "./Observador";
import Preferencia from "../Utils/Preferencia";

// Define a classe ObservadorNotificacaoOferta que estende Observador
export default class ObservadorNotificacaoOferta extends Observador {
  // Método de atualização para notificar sobre novas ofertas baseadas em preferências
  atualizar(preferencia: Preferencia): void {
    console.log(`Notificando sobre novas ofertas para: ${preferencia.tipo}`);
  }
}
