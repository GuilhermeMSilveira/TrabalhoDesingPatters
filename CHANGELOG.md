# Changelog

---

## \[1.0.0] - 17/05/2025 às 15:00

### Adicionado

* Estrutura inicial do projeto com implementação dos principais design patterns:

  * Factory, Observer, State, Composite, Fluent Interface.
* Funcionalidades básicas de cadastro e gerenciamento:

  * Estabelecimentos, categorias e produtos.
* Testes unitários para validar as principais funcionalidades.
* Configuração inicial do ambiente e estrutura de pastas.

### Code Smells Identificados e Corrigidos

* **Nomes pouco semânticos:** variáveis, métodos e pastas com nomes genéricos e pouco alinhados ao domínio.
* **Duplicação de código:** lógica repetida para criação e manipulação de estabelecimentos.
* **Comentários redundantes e óbvios:** excesso de comentários que não agregavam valor, poluindo o código.
* **Baixa modularização:** código concentrado em poucas pastas e arquivos, dificultando escalabilidade.
* **Validações ausentes ou insuficientes:** falta de validação básica, como evitar preços negativos em produtos.
* **Nomenclatura inconsistente:** métodos e propriedades com nomes ambíguos ou pouco claros.
* **Acoplamento excessivo:** classes fortemente dependentes dificultando manutenção e testes.
* **Código com baixa legibilidade:** falta de organização, alinhamento com Clean Code e padrão de projeto.

### Refatorado

* Reorganização completa da estrutura do projeto para melhor modularização e clareza:

  * Pastas renomeadas para maior semântica:

    * `models` → `domain/entities`
    * `State` → `domain/states`
    * `Factories` → `factories`
    * `Observer` → `observers`
  * Criação de novas pastas: `app` (ponto de entrada), `services`, `utils`, `fluent`, `tests`.
* Atualização do arquivo principal para `src/app/main.ts`.
* Padronização da nomenclatura de arquivos, classes e métodos.
* Ajustes nas importações para refletir a nova estrutura.

### Melhorias

* Documentação interna aprimorada para facilitar o entendimento do código.
* Implementação da interface fluente para criação de produtos (`ProdutoBuilder`).
* Inclusão de testes unitários usando Jest para garantir qualidade e facilitar manutenções.

### Correções

* Correção de inconsistências de nomenclatura.
* Ajustes nas referências internas pós-refatoração.

---

## Estrutura final do projeto após refatoração

```
src/
├── app/
│   └── main.ts 
├── domain/
│   ├── entities/
│   │   ├── Categoria.ts
│   │   ├── Estabelecimento.ts
│   │   └── Produto.ts
│   └── states/
│       └── EstadoEstabelecimento.ts
├── estabelecimentos/
│   ├── Hamburgueria.ts
│   ├── Pizzaria.ts
│   └── Restaurante.ts
├── factories/
│   ├── EstabelecimentoFactory.ts
│   └── ProdutoFactory.ts
├── observers/
│   ├── MensagemConsole.ts
│   ├── NotificadorConsole.ts
│   ├── NotificadorPreferenciasUsuario.ts
│   ├── Observador.ts
│   └── ObservadorNotificacaoOferta.ts
├── tests/
│   ├── CadastrarEstabelecimento.test.ts
│   ├── Estabelecimento.test.ts
│   ├── EstabelecimentoFactory.test.ts
│   └── Produto.test.ts
├── utils/
│   ├── CadastrarEstabelecimento.ts
│   └── CadastrarProduto.ts
└── README.md
└── CHANGELOG.md
```

---

## \[1.0.1] - 17/05/2025 às 18:30

### Refatoração — Produto

* Propriedades definidas diretamente no construtor para simplificação.
* Método `mostrarDetalhes` renomeado para `obterDetalhes`, deixando o nome mais semântico.
* Adicionada validação para preço não ser negativo.
* Remoção de comentários redundantes, mantendo apenas explicações relevantes.
* Código alinhado aos princípios de Clean Code para maior legibilidade e manutenção.
* Implementação da interface fluente para `Produto`:

  * Métodos encadeados para definir nome, preço e categoria do produto, melhorando legibilidade e facilidade de uso.

---

## \[1.0.2] - 17/05/2025 às 18:40

### Refatoração — Categoria

* Método `adicionarComponente` renomeado para `adicionar`, deixando o nome mais intuitivo.
* Parâmetros e variáveis renomeados para refletir melhor o domínio (ex.: `estabelecimento`).
* Uso de sintaxe compacta para declaração da propriedade `nome` no construtor.
* Remoção de comentários desnecessários.
* Implementação de interface fluente:

  * Métodos encadeados para facilitar adição de estabelecimentos e obtenção de detalhes.

### Refatoração — Estabelecimento

* Uso de modificadores `protected` diretamente no construtor para simplificar a declaração.
* Remoção de comentários redundantes e autoexplicativos.
* Método `mostrarDetalhesComEstado` simplificado para melhorar a clareza da mensagem.
* Manutenção do padrão State para controle do estado do estabelecimento (Aberto/Fechado).
* Código alinhado ao Clean Code com melhor organização e legibilidade.
* Inclusão de interface fluente para adicionar produtos e atualizar detalhes com métodos encadeados.

### Refatoração — EstadoEstabelecimento

* Remoção de parâmetro desnecessário no método `exibirEstado`.
* Comentários ajustados para clareza e objetividade.
* Estrutura alinhada ao padrão State para extensibilidade e manutenção facilitadas.

---

## \[1.0.3] - 17/05/2025 às 18:55

### Adicionado

* Implementação da `EstabelecimentoFactory` para criação centralizada e consistente de estabelecimentos.
* Validação dos tipos válidos de estabelecimentos na fábrica.
* Documentação inline e README com instruções para uso da fábrica.
* Testes unitários para verificação da criação correta e tratamento de erros.

### Refatorado

* Centralização da lógica de criação para evitar duplicação.
* Métodos renomeados para maior clareza e alinhamento ao domínio (`registrar`, `notificarOferta`).
* Remoção de comentários redundantes.
* Código limpo e organizado com uso consistente do padrão Observer.

---

## \[1.0.4] - 17/05/2025 às 19:05

### Refatorado — Interface Observador

* Adicionada documentação detalhada para a interface `Observador`.
* Clarificação dos parâmetros do método abstrato `atualizar`.
* Estrutura simples, clara e alinhada ao Clean Code.

### Refatorado — ObservadorNotificacaoOferta

* Implementação documentada da classe com foco na responsabilidade.
* Parâmetros do método `atualizar` bem definidos.
* Código limpo e alinhado aos padrões do projeto.

---

## \[1.0.5] - 18/05/2025 às 15:00

### Renomeação e melhoria dos nomes para maior clareza

* Interface `ICanalNotificacao` renomeada para `NotificadorConsole`.
* Classe `CanalConsole` renomeada para `MensagemConsole`.
* Nomes ajustados para refletir responsabilidades claras e facilitar entendimento por outros desenvolvedores.
* Atualização das importações e uso nos arquivos.

### Refatoração de comentários segundo Clean Code

* Remoção de comentários óbvios e redundantes.
* Manutenção apenas de comentários que esclarecem decisões importantes, contexto ou complexidade.
* Código mais legível e enxuto com documentação essencial.

### Exemplo simplificado da função principal (`main.ts`)

* Uso de comentários essenciais para justificar decisões como uso da Factory e simulação de mudança de estado.
* Remoção de comentários explicativos sobre operações triviais.
* Organização clara da sequência lógica: criação de estabelecimentos e produtos, simulação de estados, notificações e exibição.

---

## \[1.0.7] - 21/05/2025 22:00

### Adicionado — Testes Automatizados

* Implementados testes unitários abrangentes para validação de entidades e criação via fábrica:

  * **Estabelecimentos:**

    * Criação correta para tipos válidos: `Hamburgueria`, `Pizzaria`, `Restaurante`.
    * Lançamento de erros para dados inválidos: nome vazio, horário vazio ou formato incorreto, tipo inválido.
    * Testes separados para as classes concretas de estabelecimentos, validando regras específicas de nome e horário.
    * Testes funcionais da `EstabelecimentoFactory` garantindo consistência na criação e tratamento de erros.

  * **Produtos:**

    * Criação válida com preço positivo.
    * Lançamento de erro para preço negativo.
    * Validação dos produtos cadastrados garantindo preços válidos (≥ 0).

### Melhorias

* Organização dos testes por domínio, utilizando arrays para testes paramétricos e reutilização de dados.
* Garantia da robustez e qualidade do código por meio da validação rigorosa de entradas.
* Facilitação da manutenção e extensão dos testes com dados centralizados.

### Correções

* Ajustes na captura de erros e mensagens para melhorar a assertividade dos testes.
* Correção de imports e padronização dos arquivos de teste.

---

### Melhorias

* Redução da duplicação de código nos arquivos de teste ao usar uma interface fluente unificada para construção de produtos.
* Melhoria da organização dos testes com utilização de helpers reutilizáveis.

---

## Notas Finais

Este changelog enfatiza:

* Legibilidade e clareza do código.
* Nomes semânticos e alinhados ao domínio.
* Organização modular da estrutura do projeto.
* Documentação objetiva e relevante.
* Remoção de duplicações e redundâncias.
* Facilitação da manutenção e extensibilidade.
