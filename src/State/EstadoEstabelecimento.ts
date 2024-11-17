// EstadoEstabelecimento.ts
import Estabelecimento from "../models/Estabelecimento";

export interface EstadoEstabelecimento {
    exibirEstado(estabelecimento: Estabelecimento): string;
}

export class Aberto implements EstadoEstabelecimento {
    exibirEstado(estabelecimento: Estabelecimento): string {
        // Aqui você pode acessar os detalhes do estabelecimento, como nome ou outros dados
        return `${estabelecimento.getNome()} está Aberto`;
    }
}

export class Fechado implements EstadoEstabelecimento {
    exibirEstado(estabelecimento: Estabelecimento): string {
        return `${estabelecimento.getNome()} está Fechado`;
    }   
}
