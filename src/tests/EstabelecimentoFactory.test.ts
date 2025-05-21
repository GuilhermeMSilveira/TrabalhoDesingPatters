import EstabelecimentoFactory from "../factories/EstabelecimentoFactory";
import Hamburgueria from "../estabelecimentos/Hamburgueria";
import Pizzaria from "../estabelecimentos/Pizzaria";
import Restaurante from "../estabelecimentos/Restaurante";

describe("EstabelecimentoFactory", () => {
  it("deve criar uma Hamburgueria corretamente", () => {
    const estabelecimento = EstabelecimentoFactory.criarEstabelecimento("hamburgueria", "Big Burger", "10:00 - 22:00");
    expect(estabelecimento).toBeInstanceOf(Hamburgueria);
    expect(estabelecimento.getNome()).toBe("Big Burger");
  });

  it("deve criar uma Pizzaria corretamente", () => {
    const estabelecimento = EstabelecimentoFactory.criarEstabelecimento("pizzaria", "Pizzaria Itália", "11:00 - 23:00");
    expect(estabelecimento).toBeInstanceOf(Pizzaria);
    expect(estabelecimento.getNome()).toBe("Pizzaria Itália");
  });

  it("deve criar um Restaurante corretamente", () => {
    const estabelecimento = EstabelecimentoFactory.criarEstabelecimento("restaurante", "Sabor Brasil", "12:00 - 20:00");
    expect(estabelecimento).toBeInstanceOf(Restaurante);
    expect(estabelecimento.getHorario()).toBe("12:00 - 20:00");
  });
});

describe("Erros esperados ao criar estabelecimentos", () => {
  it("Deve lançar erro se o nome for vazio", () => {
    expect(() => {
      EstabelecimentoFactory.criarEstabelecimento("pizzaria", "", "11:00 - 23:00");
    }).toThrowError("Nome do estabelecimento não pode ser vazio");
  });

  it("Deve lançar erro se o nome for apenas espaços", () => {
    expect(() => {
      EstabelecimentoFactory.criarEstabelecimento("restaurante", "   ", "12:00 - 20:00");
    }).toThrowError("Nome do estabelecimento não pode ser vazio");
  });

  it("Deve lançar erro se o horário for vazio", () => {
    expect(() => {
      EstabelecimentoFactory.criarEstabelecimento("hamburgueria", "Big Burger", "");
    }).toThrowError("Horário inválido");
  });

  it("Deve lançar erro se o horário for apenas espaços", () => {
    expect(() => {
      EstabelecimentoFactory.criarEstabelecimento("pizzaria", "Pizzaria Itália", "   ");
    }).toThrowError("Horário inválido");
  });

  it("Deve lançar erro se o tipo for inválido", () => {
    expect(() => {
      EstabelecimentoFactory.criarEstabelecimento("padaria" as any, "Padoca", "07:00 - 12:00");
    }).toThrowError('Tipo de estabelecimento inválido: "padaria"');
  });
});
