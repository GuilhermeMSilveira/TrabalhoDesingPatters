import Observador from "./Observador";

export default class ObservadorRecomendacao extends Observador {
  // Método de atualização para recomendar produtos relacionados
  atualizar(nomeProduto: string, preco: number, estabelecimento: string): void {
    console.log(`Recomendando produtos relacionados ao produto: ${nomeProduto}`);
    console.log(`Experimente o ${nomeProduto} no ${estabelecimento} por R$${preco}`);
  }
}
