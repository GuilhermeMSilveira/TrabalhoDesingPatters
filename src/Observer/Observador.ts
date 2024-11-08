export default abstract class Observador {
  // Método abstrato que será implementado pelos observadores concretos
  abstract atualizar(nomeProduto: string, preco: number, estabelecimento: string): void;
}
