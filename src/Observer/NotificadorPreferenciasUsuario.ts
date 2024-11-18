// Importa a classe Observador
import Observador from "../Observer/Observador";

// Gerencia a lista de observadores e notifica sobre novas ofertas
class NotificadorPreferenciasUsuario {
    private observadores: Observador[] = []; // Lista de observadores cadastrados

    // Adiciona um observador à lista
    registrarObservador(observador: Observador): void {
        this.observadores.push(observador);
    }

    // Notifica todos os observadores sobre uma nova oferta
    notificarObservadoresOferta(nomeProduto: string, preco: number, estabelecimento: string): void {
        this.observadores.forEach((observador) => {
            observador.atualizar(nomeProduto, preco, estabelecimento);
        });
    }
}

export default NotificadorPreferenciasUsuario;
