// EstadoEstabelecimento.ts
// Define a interface para estados de um estabelecimento

export interface EstadoEstabelecimento {
    exibirEstado(estabelecimento: any): string; // Método para exibir o estado atual
}

// Estado "Aberto" implementando a interface
export class Aberto implements EstadoEstabelecimento {
    exibirEstado(estabelecimento: any): string {
        return "Aberto";
    }
}

// Estado "Fechado" implementando a interface
export class Fechado implements EstadoEstabelecimento {
    exibirEstado(estabelecimento: any): string {
        return "Fechado";
    }
}
