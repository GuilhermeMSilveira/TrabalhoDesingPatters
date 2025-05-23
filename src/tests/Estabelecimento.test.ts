import { Hamburgueria } from "../estabelecimentos/Hamburgueria";
import { Pizzaria } from "../estabelecimentos/Pizzaria";
import { Restaurante } from "../estabelecimentos/Restaurante";

describe("Testes das classes de Estabelecimento", () => {
  const tipos = [
    { classe: Hamburgueria, nomeTipo: "Hamburgueria" },
    { classe: Pizzaria, nomeTipo: "Pizzaria" },
    { classe: Restaurante, nomeTipo: "Restaurante" },
  ];

  tipos.forEach(({ classe, nomeTipo }) => {
    describe(`${nomeTipo}`, () => {
      it("deve criar com dados válidos", () => {
        const estabelecimento = new classe("Nome Válido", "10:00 - 22:00");
        expect(estabelecimento.getNome()).toBe("Nome Válido");
        expect(estabelecimento.getHorario()).toBe("10:00 - 22:00");
        expect(estabelecimento.obterDetalhes()).toContain("Nome Válido");
      });

      it("deve lançar erro se nome for vazio ou só espaços", () => {
        expect(() => new classe("", "10:00 - 22:00")).toThrow(/nome/i);
        expect(() => new classe("    ", "10:00 - 22:00")).toThrow(/nome/i);
      });

      it("deve lançar erro se horário for vazio ou formato inválido", () => {
        expect(() => new classe("Nome Válido", "")).toThrow(/horário/i);
        expect(() => new classe("Nome Válido", "invalid")).toThrow(/formato/i);
expect(() => new classe("Nome Válido", "25:00 - 22:00")).toThrow(/horário fora do intervalo válido/i);
      });
    });
  });
});
