// src/data/CadastrarEstabelecimento.ts
import { TipoEstabelecimento } from "../factories/EstabelecimentoFactory";

export interface CadastroEstabelecimento {
  tipo: TipoEstabelecimento;
  nome: string;
  horario: string;
}

export const estabelecimentosCadastrados: CadastroEstabelecimento[] = [
  { tipo: "hamburgueria", nome: "Big Burger", horario: "10:00 - 22:00" },
  { tipo: "pizzaria", nome: "   ", horario: "11:00 - 23:00" }, // erro no nome (apenas espaços)
  { tipo: "restaurante", nome: "Sabor Brasil", horario: "51:00 - 20:00" }, // erro no horário (hora inválida)
  { tipo: "padaria" as any, nome: "Padoca", horario: "07:00 - 12:00" }, // tipo inválido
];
