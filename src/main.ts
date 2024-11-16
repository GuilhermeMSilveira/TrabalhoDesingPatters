import EstabelecimentoFactory from "./Factories/EstabelecimentoFactory";
import NotificadorPreferenciasUsuario from "./Observer/NotificadorPreferenciasUsuario";
import ObservadorNotificacaoOferta from "./Observer/ObservadorNotificacaoOferta";
import Categoria from "./models/Categoria";
import Produto from "./models/Produto";

// Criação de Estabelecimentos usando a Fábrica
const hamburgueria = EstabelecimentoFactory.criarEstabelecimento("hamburgueria", "Big Burger", "10:00 - 22:00");
const pizzaria = EstabelecimentoFactory.criarEstabelecimento("pizzaria", "Pizzaria Itália", "11:00 - 23:00");
const restaurante = EstabelecimentoFactory.criarEstabelecimento("restaurante", "Sabor Brasil", "12:00 - 20:00");

// Criação de Produtos
const produto1 = new Produto("Hambúrguer Especial", 19.99);
const produto2 = new Produto("Pizza Margherita", 29.99);
const produto3 = new Produto("Feijoada Completa", 35.00);

// Exibindo Estabelecimentos
console.log("\n===== Detalhes dos Estabelecimentos =====");
console.log(hamburgueria.mostrarDetalhes());
console.log(pizzaria.mostrarDetalhes());
console.log(restaurante.mostrarDetalhes());
console.log("========================================\n");

// Notificação
const notificador = new NotificadorPreferenciasUsuario();
const observadorOferta = new ObservadorNotificacaoOferta();
notificador.registrarObservador(observadorOferta);

console.log("\n===== Notificações de Ofertas =====");
notificador.notificarObservadoresOferta(produto1.getNome(), produto1.getPreco(), hamburgueria.mostrarDetalhes());
notificador.notificarObservadoresOferta(produto2.getNome(), produto2.getPreco(), pizzaria.mostrarDetalhes());
notificador.notificarObservadoresOferta(produto3.getNome(), produto3.getPreco(), restaurante.mostrarDetalhes());
console.log("========================================\n");

// Categorias
const categoriaFastFood = new Categoria("Fast Food");
const categoriaRestaurantes = new Categoria("Restaurantes");

categoriaFastFood.adicionarComponente(hamburgueria);
hamburgueria.adicionarProduto(produto1);

categoriaFastFood.adicionarComponente(pizzaria);
pizzaria.adicionarProduto(produto2);

categoriaRestaurantes.adicionarComponente(restaurante);
restaurante.adicionarProduto(produto3);

console.log("\n===== Categorias =====");
categoriaFastFood.exibirDetalhes();
categoriaRestaurantes.exibirDetalhes();
console.log("========================================\n");
