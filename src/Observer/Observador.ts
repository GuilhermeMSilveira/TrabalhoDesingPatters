// Observador.ts
// Define a interface de um observador para receber notificações
export default abstract class Observador {
  // Método abstrato para ser implementado por classes concretas
  abstract atualizar(nomeProduto: string, preco: number, estabelecimento: string): void;
}
