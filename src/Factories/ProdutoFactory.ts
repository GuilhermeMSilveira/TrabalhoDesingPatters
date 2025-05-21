// src/domain/factories/ProdutoFactory.ts
import Produto from "../domain/entities/Produto";

export function criarProduto(nome: string, preco: number): Produto {
  return new Produto(nome, preco);
}
