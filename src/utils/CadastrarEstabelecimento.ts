import { TipoEstabelecimento } from "../factories/EstabelecimentoFactory";

export interface CadastroEstabelecimento {
  tipo: TipoEstabelecimento;
  nome: string;
  horario: string;
}

export const estabelecimentosCadastrados: CadastroEstabelecimento[] = [
  { tipo: "hamburgueria", nome: " ", horario: "50:00 - 22:00" },           // nome inválido + horário inválido
  { tipo: "pizzaria", nome: "   ", horario: "11:00 - 23:00" },             // nome inválido (só espaços)
  { tipo: "restaurante", nome: "Sabor Brasil", horario: "11:00 - 20:00" }, // horário inválido
  { tipo: "padaria" as any, nome: "Padoca", horario: "07:00 - 12:00" },    // tipo inválido
];
