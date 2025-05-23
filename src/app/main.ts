import EstabelecimentoFactory from "../factories/EstabelecimentoFactory";
import { NotificadorPreferenciasUsuario } from "../observers/NotificadorPreferenciasUsuario";
import { ObservadorNotificacaoOferta } from "../observers/ObservadorNotificacaoOferta";
import { MensagemConsole } from "../observers/MensagemConsole";
import Categoria from "../domain/entities/Categoria";
import { produtos } from "../utils/CadastrarProduto";

const canalConsole = new MensagemConsole();

try {
  const hamburgueria = EstabelecimentoFactory.criarEstabelecimento("hamburgueria", "Big Burger", "10:00 - 22:00");
  const pizzaria = EstabelecimentoFactory.criarEstabelecimento("pizzaria", "Pizzaria Itália", "11:00 - 23:00");
  const restaurante = EstabelecimentoFactory.criarEstabelecimento("restaurante", "Sabor Brasil", "12:00 - 20:00");

  pizzaria.fechar();

  canalConsole.enviar("\n===== Detalhes dos Estabelecimentos =====");
  [hamburgueria, pizzaria, restaurante].forEach(estabelecimento =>
    canalConsole.enviar(estabelecimento.obterDetalhesComEstado())
  );
  canalConsole.enviar("========================================\n");

  // Configura notificador e observadores
  const notificador = new NotificadorPreferenciasUsuario();
  const observadorOferta = new ObservadorNotificacaoOferta(canalConsole);
  notificador.registrarObservador(observadorOferta);

  canalConsole.enviar("\n===== Notificações de Ofertas =====");

  if (produtos.length >= 3) {
    notificador.notificarObservadoresOferta(produtos[0].getNome(), produtos[0].getPreco(), hamburgueria.obterDetalhes());
    notificador.notificarObservadoresOferta(produtos[1].getNome(), produtos[1].getPreco(), pizzaria.obterDetalhes());
    notificador.notificarObservadoresOferta(produtos[2].getNome(), produtos[2].getPreco(), restaurante.obterDetalhes());
  } else {
    canalConsole.enviar("Nenhuma oferta disponível (produtos inválidos ou insuficientes).");
  }
  canalConsole.enviar("========================================\n");

  // Criação das categorias
  const categoriaFastFood = new Categoria("Fast Food");
  const categoriaRestaurantes = new Categoria("Restaurantes");

  // Setando categoria nos produtos
  produtos[0].setCategoria(categoriaFastFood);
  produtos[1].setCategoria(categoriaFastFood);
  produtos[2].setCategoria(categoriaRestaurantes);

  // Associando estabelecimentos às categorias
  categoriaFastFood.adicionar(hamburgueria);
  categoriaFastFood.adicionar(pizzaria);
  categoriaRestaurantes.adicionar(restaurante);

  // Adicionando produtos nos estabelecimentos
  hamburgueria.adicionarProduto(produtos[0]);
  pizzaria.adicionarProduto(produtos[1]);
  restaurante.adicionarProduto(produtos[2]);

  canalConsole.enviar("\n===== Categorias =====");
  [categoriaFastFood, categoriaRestaurantes].forEach(categoria => categoria.exibirDetalhes());
  canalConsole.enviar("========================================\n");

} catch (error: any) {
  canalConsole.enviar(`Erro ao criar estabelecimento: ${error.message}`);
}
