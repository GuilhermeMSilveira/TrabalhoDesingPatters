import EstabelecimentoFactory from "../factories/EstabelecimentoFactory";
import { estabelecimentosCadastrados } from "../utils/CadastrarEstabelecimento";

describe("Testes dos dados do cadastro de estabelecimentos", () => {
  estabelecimentosCadastrados.forEach(({ tipo, nome, horario }, i) => {
    const dados = `Cadastro ${i + 1} => tipo: ${tipo}, nome: "${nome}", horário: "${horario}"`;

    const nomeInvalido = !nome || nome.trim() === "";
    const horarioVazio = !horario || horario.trim() === "";
    const horarioFormatoInvalido = !/^\d{2}:\d{2}\s*-\s*\d{2}:\d{2}$/.test(horario);
    const tipoValido = ["hamburgueria'", "pizzaria", "restaurante"].includes(tipo);

    if (nomeInvalido || horarioVazio || horarioFormatoInvalido || !tipoValido) {
      it(`${dados} deve lançar erro`, () => {
        expect(() => {
          EstabelecimentoFactory.criarEstabelecimento(tipo as any, nome, horario);
        }).toThrow();
      });
    } else {
      it(`${dados} deve criar estabelecimento corretamente`, () => {
        const est = EstabelecimentoFactory.criarEstabelecimento(tipo as any, nome, horario);
        expect(est).toBeDefined();
        expect(est.getNome()).toBe(nome);
        expect(est.getHorario()).toBe(horario);
      });
    }
  });
});
