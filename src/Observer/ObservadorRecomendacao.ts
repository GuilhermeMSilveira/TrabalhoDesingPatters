// Importa Observador e Preferencia
import Observador from "./Observador";
import Preferencia from "../Utils/Preferencia";

// Define ObservadorRecomendacao que estende Observador
export default class ObservadorRecomendacao extends Observador {
  // Método de atualização para recomendar produtos baseados na preferência
  atualizar(preferencia: Preferencia): void {
    console.log(`Recomendando produtos relacionados a: ${preferencia.tipo}`);
  }
}
