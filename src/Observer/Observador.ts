// Importa a classe Preferencia
import Preferencia from "../Utils/Preferencia";

// Define a classe abstrata Observador que será usada por observadores específicos
export default abstract class Observador {
  abstract atualizar(preferencia: Preferencia): void; // Declaração do método abstrato para atualização
}
