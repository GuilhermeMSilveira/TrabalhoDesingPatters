// Importa a classe base Observador
import Observador from "./Observador";

// Implementa um observador que exibe notificações de ofertas
class ObservadorNotificacaoOferta extends Observador {
    // Exibe os detalhes da oferta recebida
    atualizar(nomeProduto: string, preco: number, estabelecimento: string): void {
        console.log(`Oferta: ${nomeProduto} por R$${preco.toFixed(2)} no ${estabelecimento}`);
    }
}

export default ObservadorNotificacaoOferta;
