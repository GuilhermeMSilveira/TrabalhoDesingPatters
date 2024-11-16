import Observador from "./Observador";

class ObservadorNotificacaoOferta extends Observador {
    atualizar(nomeProduto: string, preco: number, estabelecimento: string): void {
        console.log(`Oferta: ${nomeProduto} por R$${preco.toFixed(2)} no ${estabelecimento}`);
    }
}

export default ObservadorNotificacaoOferta;
