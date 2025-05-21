import Produto from "../domain/entities/Produto";
import { produtos } from "../data/CadastrarProduto";

describe("Produto", () => {
  it("cria produto com preço positivo sem erro", () => {
    const p = new Produto("Pizza", 20);
    expect(p.getPreco()).toBe(20);
    expect(p.getNome()).toBe("Pizza");
  });

  it("lança erro se preço negativo", () => {
    expect(() => new Produto("Coxinha", -5)).toThrow("Preço não pode ser negativo");
  });

  it("todos os produtos cadastrados devem ter preço válido", () => {
    produtos.forEach((produto) => {
      expect(produto.getPreco()).toBeGreaterThanOrEqual(0);
    });
  });
});
