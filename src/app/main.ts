import EstabelecimentoFactory from "../factories/EstabelecimentoFactory";
import { NotificadorPreferenciasUsuario } from "../observers/NotificadorPreferenciasUsuario";
import { ObservadorNotificacaoOferta } from "../observers/ObservadorNotificacaoOferta";
import { MensagemConsole } from "../observers/MensagemConsole";
import Categoria from "../domain/entities/Categoria";
import { produtos } from "../data/CadastrarProduto";

const canalConsole = new MensagemConsole();

try {
  const hamburgueria = EstabelecimentoFactory.criarEstabelecimento("hamburgueria", "Big Burger", "10:00 - 22:00");
  const pizzaria = EstabelecimentoFactory.criarEstabelecimento("pizzaria", "Pizzaria Itália", "51:00 - 23:00");
  const restaurante = EstabelecimentoFactory.criarEstabelecimento("restaurante", "Sabor Brasil", "12:00 - 20:00");

  // Se quiser testar o erro, pode usar o try/catch para capturar (não recomendado em produção)
  // const padaria = EstabelecimentoFactory.criarEstabelecimento("padaria" as any, "Padoca", "07:00 - 12:00");

  pizzaria.fechar();

  canalConsole.enviar("\n===== Detalhes dos Estabelecimentos =====");
  [hamburgueria, pizzaria, restaurante].forEach(estabelecimento =>
    canalConsole.enviar(estabelecimento.obterDetalhesComEstado())
  );
  canalConsole.enviar("========================================\n");

  // Configura notificador e registradores
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

  const categoriaFastFood = new Categoria("Fast Food");
  const categoriaRestaurantes = new Categoria("Restaurantes");

  categoriaFastFood.adicionar(hamburgueria);
  categoriaFastFood.adicionar(pizzaria);
  categoriaRestaurantes.adicionar(restaurante);

  if (produtos.length >= 3) {
    hamburgueria.adicionarProduto(produtos[0]);
    pizzaria.adicionarProduto(produtos[1]);
    restaurante.adicionarProduto(produtos[2]);
  }

  canalConsole.enviar("\n===== Categorias =====");
  [categoriaFastFood, categoriaRestaurantes].forEach(categoria => categoria.exibirDetalhes());
  canalConsole.enviar("========================================\n");

} catch (error: any) {
  canalConsole.enviar(`Erro ao criar estabelecimento: ${error.message}`);
}
