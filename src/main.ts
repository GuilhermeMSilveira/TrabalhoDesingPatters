import EstabelecimentoFactory from "./Factories/EstabelecimentoFactory";
import Preferencia from "./Utils/Preferencia";
import NotificadorPreferenciasUsuario from "./Observer/NotificadorPreferenciasUsuario";
import ObservadorNotificacaoOferta from "./Observer/ObservadorNotificacaoOferta";
import ObservadorRecomendacao from "./Observer/ObservadorRecomendacao";
import Categoria from "./models/Categoria";
import Produto from "./models/Produto"; // Importando Produto

// Criação de Estabelecimentos usando a Fábrica
const hamburgueria = EstabelecimentoFactory.criarEstabelecimento("hamburgueria", "Big Burger", "10:00 - 22:00");
const pizzaria = EstabelecimentoFactory.criarEstabelecimento("pizzaria", "Pizzaria Itália", "11:00 - 23:00");
const restaurante = EstabelecimentoFactory.criarEstabelecimento("restaurante", "Sabor Brasil", "12:00 - 20:00");

// Criação de Produtos associados aos estabelecimentos
const produto1 = new Produto("Hambúrguer Especial", 19.99);
const produto2 = new Produto("Pizza Margherita", 29.99);
const produto3 = new Produto("Feijoada Completa", 35.00);

// Exibindo os Estabelecimentos
console.log("\n===== Detalhes dos Estabelecimentos =====");
console.log(hamburgueria.mostrarDetalhes());
console.log(pizzaria.mostrarDetalhes());
console.log(restaurante.mostrarDetalhes());
console.log("========================================\n");

// Instância do notificador de preferências
const notificador = new NotificadorPreferenciasUsuario();

// Criando observadores
const observadorOferta = new ObservadorNotificacaoOferta();
const observadorRecomendacao = new ObservadorRecomendacao();

// Registrando observadores
notificador.registrarObservador(observadorOferta);
notificador.registrarObservador(observadorRecomendacao);

// Criando preferências do usuário
const preferenciaUsuario = new Preferencia("Hamburguer");

// Notificando os observadores sobre as preferências do usuário
notificador.notificarObservadores(preferenciaUsuario);

// Notificando os observadores sobre as ofertas
console.log("\n===== Notificações de Ofertas =====");
notificador.notificarObservadoresOferta(produto1.getNome(), produto1.getPreco(), hamburgueria.mostrarDetalhes());
console.log("------------------------------------------------");
notificador.notificarObservadoresOferta(produto2.getNome(), produto2.getPreco(), pizzaria.mostrarDetalhes());
console.log("------------------------------------------------");
notificador.notificarObservadoresOferta(produto3.getNome(), produto3.getPreco(), restaurante.mostrarDetalhes());
console.log("========================================\n");

// Criando Categorias e adicionando Estabelecimentos e Produtos
const categoriaFastFood = new Categoria("Fast Food");
const categoriaRestaurantes = new Categoria("Restaurantes");

// Adiciona Estabelecimentos e Produtos às Categorias
categoriaFastFood.adicionarComponente(hamburgueria);
hamburgueria.adicionarProduto(produto1); // Adiciona produto à hamburgueria
categoriaFastFood.adicionarComponente(pizzaria);
pizzaria.adicionarProduto(produto2); // Adiciona produto à pizzaria
categoriaRestaurantes.adicionarComponente(restaurante);
restaurante.adicionarProduto(produto3); // Adiciona produto ao restaurante

// Exibindo Categorias, Estabelecimentos e Produtos
console.log("\n===== Categorias =====");
console.log("\n--- Categoria: Fast Food ---");
categoriaFastFood.exibirDetalhes();
console.log("------------------------------------------------");
console.log("\n--- Categoria: Restaurantes ---");
categoriaRestaurantes.exibirDetalhes();
console.log("========================================\n");
