// Importação da classe Estabelecimento
import Estabelecimento from "./Estabelecimento";

// Classe para representar uma categoria de estabelecimentos
class Categoria {
    private nome: string; // Nome da categoria
    private componentes: Estabelecimento[] = []; // Lista de estabelecimentos dentro da categoria

    // Construtor para inicializar o nome da categoria
    constructor(nome: string) {
        this.nome = nome;
    }

    // Adiciona um estabelecimento à categoria
    adicionarComponente(componente: Estabelecimento): void {
        this.componentes.push(componente);
    }

    // Exibe os detalhes da categoria e dos estabelecimentos associados
    exibirDetalhes(): void {
        console.log(`Categoria: ${this.nome}`);
        this.componentes.forEach((componente) => {
            console.log(componente.mostrarDetalhes()); // Mostra detalhes do estabelecimento
            componente.exibirProdutos(); // Exibe produtos do estabelecimento
        });
    }
}

export default Categoria;
