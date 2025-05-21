# Changelog

Todas as mudanças significativas feitas no projeto FoodNav.

---

## [1.0.0] - 17/05/2025 às 15:00

### Adicionado
- Estrutura inicial do projeto com implementação dos principais design patterns:
  - Factory, Observer, State, Composite, Fluent Interface.
- Funcionalidades básicas de cadastro e gerenciamento:
  - Estabelecimentos, categorias e produtos.
- Testes unitários para validar as principais funcionalidades.
- Configuração inicial do ambiente e estrutura de pastas.

### Code Smells Identificados e Corrigidos
- **Nomes pouco semânticos:** variáveis, métodos e pastas com nomes genéricos e pouco alinhados ao domínio.
- **Duplicação de código:** lógica repetida para criação e manipulação de estabelecimentos.
- **Comentários redundantes e óbvios:** excesso de comentários que não agregavam valor, poluindo o código.
- **Baixa modularização:** código concentrado em poucas pastas e arquivos, dificultando escalabilidade.
- **Validações ausentes ou insuficientes:** falta de validação básica, como evitar preços negativos em produtos.
- **Nomenclatura inconsistente:** métodos e propriedades com nomes ambíguos ou pouco claros.
- **Acoplamento excessivo:** classes fortemente dependentes dificultando manutenção e testes.
- **Código com baixa legibilidade:** falta de organização, alinhamento com Clean Code e padrão de projeto.

As refatorações subsequentes foram orientadas para eliminar esses code smells, resultando em um código mais limpo, modular, legível e sustentável.

### Refatorado
- Reorganização completa da estrutura do projeto para melhor modularização e clareza:
  - Pastas renomeadas para maior semântica:
    - `models` → `domain/entities`
    - `State` → `domain/states`
    - `Factories` → `factories`
    - `Observer` → `observers`
  - Criação de novas pastas: `app` (ponto de entrada), `services`, `utils`, `fluent`, `tests`.
- Atualização do arquivo principal para `src/app/main.ts`.
- Padronização da nomenclatura de arquivos, classes e métodos.
- Ajustes nas importações para refletir a nova estrutura.

### Melhorias
- Documentação interna aprimorada para facilitar o entendimento do código.
- Implementação da interface fluente para criação de produtos (`ProdutoBuilder`).
- Inclusão de testes unitários usando Jest para garantir qualidade e facilitar manutenções.

### Correções
- Correção de inconsistências de nomenclatura.
- Ajustes nas referências internas pós-refatoração.

---

## Estrutura final do projeto após refatoração

```

src/
├── app/
│   └── main.ts                 # Ponto de entrada da aplicação
├── domain/
│   ├── entities/
│   │   ├── Produto.ts
│   │   ├── Categoria.ts
│   │   └── Estabelecimento.ts
│   └── states/
│       └── EstadoEstabelecimento.ts
├── estabelecimentos/
│   ├── Hamburgueria.ts
│   ├── Pizzaria.ts
│   └── Restaurante.ts
├── factories/
│   └── EstabelecimentoFactory.ts
├── observers/
│   ├── Observador.ts
│   ├── ObservadorNotificacaoOferta.ts
│   └── NotificadorPreferenciasUsuario.ts
├── fluent/
│   └── ProdutoBuilder.ts
└── tests/
└── estabelecimento.test.ts

```

---

## [1.0.1] - 17/05/2025 às 18:30

### Refatoração — Produto
- Propriedades definidas diretamente no construtor para simplificação.
- Método `mostrarDetalhes` renomeado para `obterDetalhes`, deixando o nome mais semântico.
- Adicionada validação para preço não ser negativo.
- Remoção de comentários redundantes, mantendo apenas explicações relevantes.
- Código alinhado aos princípios de Clean Code para maior legibilidade e manutenção.

---

## [1.0.2] - 17/05/2025 às 18:40

### Refatoração — Categoria
- Método `adicionarComponente` renomeado para `adicionar`, deixando o nome mais intuitivo.
- Parâmetros e variáveis renomeados para refletir melhor o domínio (ex.: `estabelecimento`).
- Uso de sintaxe compacta para declaração da propriedade `nome` no construtor.
- Remoção de comentários desnecessários.

### Refatoração — Estabelecimento
- Uso de modificadores `protected` diretamente no construtor para simplificar a declaração.
- Remoção de comentários redundantes e autoexplicativos.
- Método `mostrarDetalhesComEstado` simplificado para melhorar a clareza da mensagem.
- Manutenção do padrão State para controle do estado do estabelecimento (Aberto/Fechado).
- Código alinhado ao Clean Code com melhor organização e legibilidade.

### Refatoração — EstadoEstabelecimento
- Remoção de parâmetro desnecessário no método `exibirEstado`.
- Comentários ajustados para clareza e objetividade.
- Estrutura alinhada ao padrão State para extensibilidade e manutenção facilitadas.

---

## [1.0.2] - Refatoração de Estabelecimentos Específicos

### Hamburgueria
- Remoção de comentários redundantes.
- Documentação ajustada para foco na clareza e responsabilidade da classe.
- Código simplificado e consistente com os princípios do Clean Code.

### Pizzaria
- Remoção de comentários desnecessários.
- Documentação clara e focada no propósito da classe.
- Código simplificado e legível, aderente ao Clean Code.

---

## [1.0.3] - 17/05/2025 às 18:55

### Adicionado
- Implementação da `EstabelecimentoFactory` para criação centralizada e consistente de estabelecimentos.
- Validação dos tipos válidos de estabelecimentos na fábrica.
- Documentação inline e README com instruções para uso da fábrica.
- Testes unitários para verificação da criação correta e tratamento de erros.

### Refatorado
- Centralização da lógica de criação para evitar duplicação.
- Métodos renomeados para maior clareza e alinhamento ao domínio (`registrar`, `notificarOferta`).
- Remoção de comentários redundantes.
- Código limpo e organizado com uso consistente do padrão Observer.

---

## [1.0.4] - 17/05/2025 às 19:05

### Refatorado — Interface Observador
- Adicionada documentação detalhada para a interface `Observador`.
- Clarificação dos parâmetros do método abstrato `atualizar`.
- Estrutura simples, clara e alinhada ao Clean Code.

### Refatorado — ObservadorNotificacaoOferta
- Implementação documentada da classe com foco na responsabilidade.
- Parâmetros do método `atualizar` bem definidos.
- Código limpo e alinhado aos padrões do projeto.

---

## [1.0.5] - 18/05/2025 às 15:00

### Renomeação e melhoria dos nomes para maior clareza
- Interface `ICanalNotificacao` renomeada para `NotificadorConsole`.
- Classe `CanalConsole` renomeada para `MensagemConsole`.
- Nomes ajustados para refletir responsabilidades claras e facilitar entendimento por outros desenvolvedores.
- Atualização das importações e uso nos arquivos.

### Refatoração de comentários segundo Clean Code
- Remoção de comentários óbvios e redundantes.
- Manutenção apenas de comentários que esclarecem decisões importantes, contexto ou complexidade.
- Código mais legível e enxuto com documentação essencial.

### Exemplo simplificado da função principal (`main.ts`)
- Uso de comentários essenciais para justificar decisões como uso da Factory e simulação de mudança de estado.
- Remoção de comentários explicativos sobre operações triviais.
- Organização clara da sequência lógica: criação de estabelecimentos e produtos, simulação de estados, notificações e exibição.

---

## Observação Geral

- Todas as melhorias e refatorações descritas foram aplicadas no branch de desenvolvimento.
- A branch `main` mantém o código legado até que as mudanças sejam aprovadas e mescladas.
- O changelog segue os princípios do Clean Code, priorizando legibilidade, clareza e manutenção facilitada.

---

# Notas Finais

Este changelog enfatiza:

- Legibilidade e clareza do código.
- Nomes semânticos e alinhados ao domínio.
- Organização modular da estrutura do projeto.
- Documentação objetiva e relevante.
- Remoção de duplicações e redundâncias.
- Facilitação da manutenção e extensibilidade.

## [1.0.6] - 21/05/2025 às 14:00

## Adicionado — Testes Automatizados (Cobertura Parcial)

- Implementada suíte de testes unitários com Jest, visando aproximadamente 50% de cobertura de código, com foco nas seguintes classes e comportamentos:

- Criação de produtos com o ProdutoBuilder.

- Validação de preço e nome na entidade Produto.

- Adição de produtos a categorias compostas (padrão Composite).

- Simulação de estados dos estabelecimentos (padrão State).

- Comportamento da fábrica de estabelecimentos (EstabelecimentoFactory).

- Notificações com o padrão Observer.

## Melhorias
- Garantia de testabilidade em várias classes com injeção de dependência e organização clara das responsabilidades.

- Código modular e separado por domínio, facilitando a escrita e manutenção dos testes.

- Criação do diretório tests/ com organização por contexto e entidade.

## Correções
- Pequenos ajustes em assinaturas de métodos e estrutura de retorno para facilitar a testabilidade (ex.: obterDetalhes e mostrarDetalhesComEstado).

- Correção de imports inconsistentes detectados durante execução dos testes.


## [1.0.7] - 21/05/2025 às 14:30
## Adicionado — Classe Auxiliar para Testes

- Criação da classe CadastrarProduto.ts no diretório utils/ com o objetivo de centralizar e padronizar a criação de produtos durante os testes unitários.

- Essa classe encapsula a lógica repetitiva de construção de objetos Produto utilizando o ProdutoBuilder, permitindo testes mais limpos, reutilizáveis e focados no comportamento testado.

- Exemplo de uso nos testes automatizados do produto e de categorias compostas.

## Melhorias
- Redução da duplicação de código nos arquivos de teste ao usar uma interface fluente unificada para construção de produtos.

- Melhoria da organização dos testes com utilização de helpers reutilizáveis.
```
