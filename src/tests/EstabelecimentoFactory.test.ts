import EstabelecimentoFactory from "../factories/EstabelecimentoFactory";

describe("Teste funcional da criação de estabelecimentos via Factory", () => {
  const casosValidos = [
    { tipo: "hamburgueria", nome: "Big Burger", horario: "10:00 - 22:00" },
    { tipo: "pizzaria", nome: "Pizzaria Itália", horario: "11:00 - 23:00" },
    { tipo: "restaurante", nome: "Sabor Brasil", horario: "12:00 - 20:00" },
  ];

  casosValidos.forEach(({ tipo, nome, horario }) => {
    it(`deve criar um ${tipo} com sucesso`, () => {
      const est = EstabelecimentoFactory.criarEstabelecimento(tipo as any, nome, horario);
      expect(est).toBeDefined();
      expect(est.getNome()).toBe(nome);
      expect(est.getHorario()).toBe(horario);
    });
  });

  it("deve lançar erro para tipo inválido", () => {
    expect(() => EstabelecimentoFactory.criarEstabelecimento("padaria" as any, "Padoca", "07:00 - 12:00")).toThrow();
  });

  it("deve lançar erro para nome inválido", () => {
    expect(() => EstabelecimentoFactory.criarEstabelecimento("hamburgueria" as any, " ", "10:00 - 22:00")).toThrow();
  });

  it("deve lançar erro para horário inválido", () => {
  expect(() => EstabelecimentoFactory.criarEstabelecimento("pizzaria" as any, "Pizzaria", "24:00 - 23:00")).toThrow();
  });
});
