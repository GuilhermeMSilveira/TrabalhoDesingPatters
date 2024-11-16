abstract class Observador {
  abstract atualizar(nomeProduto: string, preco: number, estabelecimento: string): void;
}

export default Observador;
