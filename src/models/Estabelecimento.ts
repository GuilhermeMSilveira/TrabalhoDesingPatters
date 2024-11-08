// src/Models/Estabelecimento.ts

export default abstract class Estabelecimento {
    protected nome: string;
    protected horario: string;
  
    constructor(nome: string, horario: string) {
      this.nome = nome;
      this.horario = horario;
    }
  
    abstract mostrarDetalhes(): string;
  }
  