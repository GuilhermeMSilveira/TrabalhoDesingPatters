// src/main.ts

import EstabelecimentoFactory from "./Factories/EstabelecimentoFactory";
import NotificadorPreferenciasUsuario from "./Observer/NotificadorPreferenciasUsuario";
import ObservadorNotificacaoOferta from "./Observer/ObservadorNotificacaoOferta";
import Categoria from "./models/Categoria";
import Produto from "./models/Produto";
import { NotificadorConsole  } from "./Notificacao/NotificadorConsole "; // Importando o NotificadorConsole  

// Criação de Estabelecimentos usando a Fábrica
const hamburgueria = EstabelecimentoFactory.criarEstabelecimento("hamburgueria", "Big Burger", "10:00 - 22:00");
const pizzaria = EstabelecimentoFactory.criarEstabelecimento("pizzaria", "Pizzaria Itália", "11:00 - 23:00");
const restaurante = EstabelecimentoFactory.criarEstabelecimento("restaurante", "Sabor Brasil", "12:00 - 20:00");

// Criação de Produtos com nome e preço
const produto1 = new Produto("Hambúrguer Especial", 19.99);
const produto2 = new Produto("Pizza Margherita", 29.99);
const produto3 = new Produto("Feijoada Completa", 35.00);

// Criação do Canal de Notificação
const canal = new NotificadorConsole();

// Alteração do estado dos estabelecimentos (exemplo: fechar a pizzaria)
pizzaria.fechar(); // Altera o estado da pizzaria diretamente para "Fechado"

// Exibindo detalhes dos estabelecimentos junto com seu estado
canal.notificar("\n===== Detalhes dos Estabelecimentos =====");
canal.notificar(hamburgueria.mostrarDetalhesComEstado());
canal.notificar(pizzaria.mostrarDetalhesComEstado());
canal.notificar(restaurante.mostrarDetalhesComEstado());
canal.notificar("========================================\n");

// Configuração do sistema de notificação de ofertas
const notificador = new NotificadorPreferenciasUsuario(); // Sistema que gerencia notificações
const observadorOferta = new ObservadorNotificacaoOferta(); // Observador que receberá notificações
notificador.registrarObservador(observadorOferta); // Registrando observador no sistema

// Enviando notificações de ofertas para o observador registrado
canal.notificar("\n===== Notificações de Ofertas =====");
notificador.notificarObservadoresOferta(produto1.getNome(), produto1.getPreco(), hamburgueria.mostrarDetalhes());
notificador.notificarObservadoresOferta(produto2.getNome(), produto2.getPreco(), pizzaria.mostrarDetalhes());
notificador.notificarObservadoresOferta(produto3.getNome(), produto3.getPreco(), restaurante.mostrarDetalhes());
canal.notificar("========================================\n");

// Gerenciando categorias de estabelecimentos
const categoriaFastFood = new Categoria("Fast Food"); // Criando categoria de Fast Food
const categoriaRestaurantes = new Categoria("Restaurantes"); // Criando categoria de Restaurantes

// Adicionando estabelecimentos e produtos às categorias
categoriaFastFood.adicionarComponente(hamburgueria);
hamburgueria.adicionarProduto(produto1); // Produto específico da hamburgueria

categoriaFastFood.adicionarComponente(pizzaria);
pizzaria.adicionarProduto(produto2); // Produto específico da pizzaria

categoriaRestaurantes.adicionarComponente(restaurante);
restaurante.adicionarProduto(produto3); // Produto específico do restaurante

// Exibindo categorias e seus componentes (estabelecimentos e produtos)
canal.notificar("\n===== Categorias =====");
categoriaFastFood.exibirDetalhes(); // Detalhes da categoria de Fast Food
categoriaRestaurantes.exibirDetalhes(); // Detalhes da categoria de Restaurantes
canal.notificar("========================================\n");
