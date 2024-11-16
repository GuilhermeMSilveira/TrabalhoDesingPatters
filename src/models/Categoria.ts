import Estabelecimento from "./Estabelecimento";

class Categoria {
    private nome: string;
    private componentes: Estabelecimento[] = [];

    constructor(nome: string) {
        this.nome = nome;
    }

    adicionarComponente(componente: Estabelecimento): void {
        this.componentes.push(componente);
    }

    exibirDetalhes(): void {
        console.log(`Categoria: ${this.nome}`);
        this.componentes.forEach((componente) => {
            console.log(componente.mostrarDetalhes());
            componente.exibirProdutos();
        });
    }
}

export default Categoria;
