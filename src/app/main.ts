import EstabelecimentoFactory from "../factories/EstabelecimentoFactory";
import { NotificadorPreferenciasUsuario } from "../observers/NotificadorPreferenciasUsuario";
import { ObservadorNotificacaoOferta } from "../observers/ObservadorNotificacaoOferta";
import { MensagemConsole } from "../observers/MensagemConsole";
import Categoria from "../domain/entities/Categoria";
import Produto from "../domain/entities/Produto";

const canalConsole = new MensagemConsole();

// Usa Factory para criação consistente dos estabelecimentos
const hamburgueria = EstabelecimentoFactory.criarEstabelecimento("hamburgueria", "Big Burger", "10:00 - 22:00");
const pizzaria = EstabelecimentoFactory.criarEstabelecimento("pizzaria", "Pizzaria Itália", "11:00 - 23:00");
const restaurante = EstabelecimentoFactory.criarEstabelecimento("restaurante", "Sabor Brasil", "12:00 - 20:00");

const produtoHamburguer = new Produto("Hambúrguer Especial", 19.99);
const produtoPizza = new Produto("Pizza Margherita", 29.99);
const produtoFeijoada = new Produto("Feijoada Completa", 35.00);

// Simula o fechamento do estabelecimento (exemplo de mudança de estado)
pizzaria.fechar();

canalConsole.enviar("\n===== Detalhes dos Estabelecimentos =====");
[hamburgueria, pizzaria, restaurante].forEach(estabelecimento => {
  canalConsole.enviar(estabelecimento.obterDetalhesComEstado());
});
canalConsole.enviar("========================================\n");

const notificador = new NotificadorPreferenciasUsuario();
const observadorOferta = new ObservadorNotificacaoOferta(canalConsole);
notificador.registrarObservador(observadorOferta);

// Notifica os observadores sobre novas ofertas
canalConsole.enviar("\n===== Notificações de Ofertas =====");
notificador.notificarObservadoresOferta(produtoHamburguer.getNome(), produtoHamburguer.getPreco(), hamburgueria.obterDetalhes());
notificador.notificarObservadoresOferta(produtoPizza.getNome(), produtoPizza.getPreco(), pizzaria.obterDetalhes());
notificador.notificarObservadoresOferta(produtoFeijoada.getNome(), produtoFeijoada.getPreco(), restaurante.obterDetalhes());
canalConsole.enviar("========================================\n");

const categoriaFastFood = new Categoria("Fast Food");
const categoriaRestaurantes = new Categoria("Restaurantes");

// Associação de categorias aos estabelecimentos e seus produtos
categoriaFastFood.adicionar(hamburgueria);
hamburgueria.adicionarProduto(produtoHamburguer);

categoriaFastFood.adicionar(pizzaria);
pizzaria.adicionarProduto(produtoPizza);

categoriaRestaurantes.adicionar(restaurante);
restaurante.adicionarProduto(produtoFeijoada);

canalConsole.enviar("\n===== Categorias =====");
[categoriaFastFood, categoriaRestaurantes].forEach(categoria => categoria.exibirDetalhes());
canalConsole.enviar("========================================\n");
