import EstabelecimentoFactory from "./Factories/EstabelecimentoFactory";
import Preferencia from "./Utils/Preferencia";
import NotificadorPreferenciasUsuario from "./Observer/NotificadorPreferenciasUsuario";
import ObservadorNotificacaoOferta from "./Observer/ObservadorNotificacaoOferta";
import ObservadorRecomendacao from "./Observer/ObservadorRecomendacao";

// Cria estabelecimentos usando a fábrica
const hamburgueria = EstabelecimentoFactory.criarEstabelecimento("hamburgueria", "Big Burger", "10:00 - 22:00");
const pizzaria = EstabelecimentoFactory.criarEstabelecimento("pizzaria", "Pizzaria Itália", "11:00 - 23:00");
const restaurante = EstabelecimentoFactory.criarEstabelecimento("restaurante", "Sabor Brasil", "12:00 - 20:00");

// Exibe detalhes dos estabelecimentos
console.log(hamburgueria.mostrarDetalhes());
console.log(pizzaria.mostrarDetalhes());
console.log(restaurante.mostrarDetalhes());

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

// Simulando várias ofertas e notificando os observadores sobre elas

// Primeira oferta
const nomeProduto1 = "Hambúrguer Especial";
const precoProduto1 = 19.99;
const estabelecimentoOferta1 = "Big Burger";

// Segunda oferta
const nomeProduto2 = "Pizza Margherita";
const precoProduto2 = 29.99;
const estabelecimentoOferta2 = "Pizzaria Itália";

// Terceira oferta
const nomeProduto3 = "Feijoada Completa";
const precoProduto3 = 35.00;
const estabelecimentoOferta3 = "Sabor Brasil";

// Notificando os observadores sobre as ofertas
console.log("\nNotificando usuários sobre as ofertas:\n");

notificador.notificarObservadoresOferta(nomeProduto1, precoProduto1, estabelecimentoOferta1);
console.log(); // Quebra de linha entre notificações

notificador.notificarObservadoresOferta(nomeProduto2, precoProduto2, estabelecimentoOferta2);
console.log(); // Quebra de linha entre notificações

notificador.notificarObservadoresOferta(nomeProduto3, precoProduto3, estabelecimentoOferta3);
console.log(); // Quebra de linha entre notificações

// Exibindo categorias
console.log("\nCategorias:");
console.log("Categoria: Fast Food");
console.log(hamburgueria.mostrarDetalhes());
console.log(pizzaria.mostrarDetalhes());

console.log("\nCategoria: Restaurantes");
console.log(restaurante.mostrarDetalhes());
