import { Produto } from "../domain/entities/Produto";

export const produtos: Produto[] = [];

const listaProdutos = [
  { nome: "Hambúrguer Especial", preco: 19.99 }, 
  { nome: "Pizza Margherita", preco: 29.99 },  
  { nome: "Feijoada Completa", preco: 35.0 },
];

listaProdutos.forEach(({ nome, preco }) => {
  produtos.push(new Produto(nome, preco));
});
