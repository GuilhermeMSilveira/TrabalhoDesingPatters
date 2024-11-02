// Define a classe abstrata Estabelecimento para representar o modelo base de qualquer tipo de estabelecimento
export default abstract class Estabelecimento {
    protected nome: string; // Armazena o nome do estabelecimento
    protected horario: string; // Armazena o horário de funcionamento

    // Construtor da classe que inicializa o nome e o horário do estabelecimento
    constructor(nome: string, horario: string) {
        this.nome = nome;
        this.horario = horario;
    }

    // Declaração do método abstrato que será implementado nas subclasses
    abstract mostrarDetalhes(): string;
}
