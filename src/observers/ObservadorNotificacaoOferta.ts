import { Observador } from "./Observador";

export class ObservadorNotificacaoOferta extends Observador {
  atualizar(nomeProduto: string, preco: number, estabelecimento: string): void {
    const mensagem = `Oferta: ${nomeProduto} por R$${preco.toFixed(2)} no ${estabelecimento}`;
    this.canalNotificacao.enviar(mensagem);
  }
}
