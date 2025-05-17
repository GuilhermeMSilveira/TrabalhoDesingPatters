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
- Método `mostrarDetalhes` renomeado para `detalhes`, deixando o nome mais semântico.
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

## Observação Geral

- Essas melhorias e refatorações foram aplicadas no branch de desenvolvimento.
- A branch `main` ainda mantém a estrutura e código antigos.
- Para usar as atualizações, trabalhar na branch correta ou realizar merge após estabilização.

---

# Notas Finais

Este changelog segue os princípios de Clean Code, enfatizando:

- Legibilidade e clareza do código.
- Nomes semânticos e alinhados ao domínio.
- Organização modular da estrutura do projeto.
- Documentação objetiva e relevante.
- Remoção de duplicações e redundâncias.
- Facilitação da manutenção e extensibilidade.

---
