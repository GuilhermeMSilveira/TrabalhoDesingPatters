import Observador from "../Observer/Observador";

class NotificadorPreferenciasUsuario {
    private observadores: Observador[] = [];

    registrarObservador(observador: Observador): void {
        this.observadores.push(observador);
    }

    notificarObservadoresOferta(nomeProduto: string, preco: number, estabelecimento: string): void {
        this.observadores.forEach((observador) => {
            observador.atualizar(nomeProduto, preco, estabelecimento);
        });
    }
}

export default NotificadorPreferenciasUsuario;
