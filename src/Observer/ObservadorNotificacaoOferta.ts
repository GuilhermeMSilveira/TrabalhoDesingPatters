import Observador from "./Observador";

export default class ObservadorNotificacaoOferta extends Observador {
  // Método de atualização para notificar sobre ofertas
  atualizar(nomeProduto: string, preco: number, estabelecimento: string): void {
    console.log(`Oferta disponível: ${nomeProduto} por R$${preco} no ${estabelecimento}`);
  }
}
