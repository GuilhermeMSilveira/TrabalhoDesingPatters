// Define a classe Preferencia, que armazena o tipo de preferência de um usuário
export default class Preferencia {
  tipo: string; // Tipo de preferência do usuário, como "Hamburguer", "Pizza"

  // Construtor que inicializa o tipo de preferência
  constructor(tipo: string) {
    this.tipo = tipo;
  }
}
