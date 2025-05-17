import EstabelecimentoFactory from "../factories/EstabelecimentoFactory"; 
import NotificadorPreferenciasUsuario from "../observers/NotificadorPreferenciasUsuario";
import ObservadorNotificacaoOferta from "../observers/ObservadorNotificacaoOferta";
import Categoria from "../domain/entities/Categoria"; 
import Produto from "../domain/entities/Produto";

// Criação dos estabelecimentos via factory
const hamburgueria = EstabelecimentoFactory.criarEstabelecimento("hamburgueria", "Big Burger", "10:00 - 22:00");
const pizzaria = EstabelecimentoFactory.criarEstabelecimento("pizzaria", "Pizzaria Itália", "11:00 - 23:00");
const restaurante = EstabelecimentoFactory.criarEstabelecimento("restaurante", "Sabor Brasil", "12:00 - 20:00");

// Criação dos produtos
const produtoHamburguer = new Produto("Hambúrguer Especial", 19.99);
const produtoPizza = new Produto("Pizza Margherita", 29.99);
const produtoFeijoada = new Produto("Feijoada Completa", 35.00);

// Fechando a pizzaria para simular mudança de estado
pizzaria.fechar();

// Exibe detalhes e estados dos estabelecimentos
console.log("\n===== Detalhes dos Estabelecimentos =====");
[hamburgueria, pizzaria, restaurante].forEach(estabelecimento => {
  console.log(estabelecimento.mostrarDetalhesComEstado());
});
console.log("========================================\n");

// Configura sistema de notificações
const notificador = new NotificadorPreferenciasUsuario();
const observadorOferta = new ObservadorNotificacaoOferta();
notificador.registrarObservador(observadorOferta);

// Notifica observadores sobre ofertas
console.log("\n===== Notificações de Ofertas =====");
notificador.notificarObservadoresOferta(produtoHamburguer.getNome(), produtoHamburguer.getPreco(), hamburgueria.mostrarDetalhes());
notificador.notificarObservadoresOferta(produtoPizza.getNome(), produtoPizza.getPreco(), pizzaria.mostrarDetalhes());
notificador.notificarObservadoresOferta(produtoFeijoada.getNome(), produtoFeijoada.getPreco(), restaurante.mostrarDetalhes());
console.log("========================================\n");

// Criação e associação de categorias
const categoriaFastFood = new Categoria("Fast Food");
const categoriaRestaurantes = new Categoria("Restaurantes");

categoriaFastFood.adicionar(hamburgueria);
hamburgueria.adicionarProduto(produtoHamburguer);

categoriaFastFood.adicionar(pizzaria);
pizzaria.adicionarProduto(produtoPizza);

categoriaRestaurantes.adicionar(restaurante);
restaurante.adicionarProduto(produtoFeijoada);

// Exibe categorias e seus estabelecimentos com produtos
console.log("\n===== Categorias =====");
[categoriaFastFood, categoriaRestaurantes].forEach(categoria => categoria.exibirDetalhes());
console.log("========================================\n");
