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

// Adiciona uma quebra de linha
console.log("\nNotificando preferências do usuário: Hamburguer\n");

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

// Exibindo categorias
console.log("\nCategorias:\n");
console.log("Categoria: Fast Food");
console.log(hamburgueria.mostrarDetalhes());
console.log(pizzaria.mostrarDetalhes());

console.log("\nCategoria: Restaurantes");
console.log(restaurante.mostrarDetalhes());
