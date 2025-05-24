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

Code Smells Identificados e Corrigidos

- **Nomes Pouco Semânticos:** 
  Variáveis, métodos e pastas com nomes genéricos e pouco alinhados ao domínio do problema.  
  **Correção:** Realizada uma renomeação sistemática para termos mais descritivos e contextuais, como `models` para `domain/entities`.

- **Duplicação de Código:**  
  Lógica repetida para criação e manipulação de estabelecimentos.  
  **Correção:** Centralizada a lógica de criação em fábricas e helpers, eliminando a redundância.

- **Comentários Redundantes e Óbvios:**  
  Excesso de comentários que não agregavam valor, poluindo o código.  
  **Correção:** Remoção dos comentários que apenas repetiam o óbvio, mantendo apenas aqueles que explicavam decisões de design, justificavam complexidade ou forneciam contexto crucial.

- **Baixa Modularização:** 
  Código concentrado em poucas pastas e arquivos, dificultando escalabilidade e compreensão.  
  **Correção:** Reorganização completa da estrutura do projeto em módulos lógicos, como `domain`, `factories`, `observers`, etc.

- **Validações Ausentes ou Insuficientes:** 
  Falta de validação básica, como evitar preços negativos em produtos.  
  **Correção:** Adicionadas validações de entrada em pontos críticos, como a criação de produtos e estabelecimentos, para garantir a integridade dos dados.

- **Nomenclatura Inconsistente:**  
  Métodos e propriedades com nomes ambíguos ou pouco claros.  
  **Correção:** Padronização da nomenclatura seguindo convenções de Clean Code e alinhamento com o domínio do problema.

- **Acoplamento Excessivo:**  
  Classes fortemente dependentes, dificultando manutenção e testes unitários.  
  **Correção:** Aplicação de design patterns (Factory, Observer) e princípios de injeção de dependência para reduzir o acoplamento e aumentar a modularidade.

- **Código com Baixa Legibilidade:**  
  Falta de organização, alinhamento com Clean Code e padrão de projeto.  
  **Correção:** Refatoração abrangente para aplicar princípios de Clean Code, padrões de projeto e melhor organização da estrutura de pastas, tornando o código mais intuitivo.

### Refactor - Estrutura e Organização

**Reorganização Completa da Estrutura do Projeto:**

**Modularização Aprimorada:** O projeto foi completamente reorganizado para melhor modularização e clareza, seguindo uma abordagem mais Domain-Driven Design (DDD).

**Pastas Renomeadas para Maior Semântica:**
- models → domain/entities: Para diferenciar as entidades do domínio.
- State → domain/states: Para agrupar as implementações do padrão State.
- Factories → factories: Para centralizar as fábricas de objetos.
- Observer → observers: Para organizar as classes relacionadas ao padrão Observer.

**Criação de Novas Pastas para Segregação:**

- app: Centraliza o ponto de entrada principal da aplicação, facilitando a organização do fluxo inicial e evitando misturar lógica de execução com a lógica de domínio ou serviços.

- domain: Agrupa todas as regras e entidades do negócio, separando claramente a lógica do domínio da aplicação, o que facilita manutenção, testes e evolução do sistema.

- state: Contém as implementações do padrão State, isolando o controle de estados e comportamentos variáveis dos objetos, o que torna o código mais modular e extensível.

- utils: Armazena funções utilitárias e helpers que são usadas transversalmente em várias partes do sistema, evitando duplicação e promovendo reutilização.

- entities: Guarda interfaces fluentes e definições estruturais dos objetos do sistema, facilitando a tipagem, a consistência e a legibilidade do código.

- tests: Reúne todos os arquivos de testes automatizados, organizando-os separadamente do código de produção para facilitar execução, manutenção e revisão de testes.

**Ponto de Entrada Atualizado:** O arquivo principal de execução foi movido e atualizado para src/app/main.ts, tornando o ponto de partida da aplicação mais claro.

**Padronização Geral:**
- Nomenclatura Consistente: Padronização da nomenclatura de arquivos, classes e métodos em todo o projeto, garantindo uma uniformidade que facilita a navegação e o entendimento.
- Ajustes de Importações: Realizados ajustes em todas as importações para refletir a nova estrutura de pastas, garantindo que o código continue funcionando corretamente após a refatoração.


### Melhorias - Usabilidade e Qualidade
- Documentação Interna Aprimorada: Aprimorada a documentação interna do código, adicionando comentários mais claros e concisos onde necessário, para facilitar o entendimento do fluxo e das responsabilidades do código por outros desenvolvedores.
- Implementação da Interface Fluente: Desenvolvida e implementada a interface fluente para as entidades Produto, Categoria e Estabelecimento. Essa abordagem permite encadear chamadas de métodos, tornando a criação e manipulação desses objetos mais legível e intuitiva (ex: Produto.criar().comNome('Pizza').comPreco(50)).
- Inclusão Abrangente de Testes Unitários (Jest): Adicionada uma suíte abrangente de testes unitários utilizando a estrutura Jest. Isso é fundamental para garantir a qualidade do código, detectar regressões precocemente e facilitar futuras manutenções e extensões sem introduzir novos bugs.

### Correções Iniciais
- Correção de Inconsistências de Nomenclatura: Abordadas e corrigidas as inconsistências de nomenclatura identificadas na fase inicial do projeto, promovendo um padrão mais uniforme.
- Ajustes nas Referências Internas: Realizados ajustes em todas as referências e caminhos internos do código que foram impactados pela refatoração da estrutura de pastas.
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

## Refactor - Entidade Produto

**Otimização da Entidade Produto:**

- **Simplificação do Construtor:**  
  As propriedades da classe Produto agora são definidas diretamente no construtor. Isso reduz o boilerplate e simplifica a declaração e inicialização das propriedades, tornando o código mais conciso.

- **Nomenclatura Semântica:**  
  O método mostrarDetalhes foi renomeado para obterDetalhes. Essa mudança de nome o torna mais semântico e consistente com sua ação, que é a de retornar informações, não necessariamente "mostrar" no console.

- **Validação de Negócio Adicionada:**  
  Implementada uma validação crucial para garantir que o preço do produto não possa ser negativo. Essa validação aumenta a robustez da entidade e previne a inserção de dados inconsistentes.

- **Limpeza de Comentários:**  
  Remoção de comentários redundantes e autoexplicativos, mantendo apenas aqueles que agregam valor, explicando decisões de design ou lógicas complexas.

- **Adesão ao Clean Code:** 
  O código foi alinhado aos princípios de Clean Code, resultando em maior legibilidade e facilidade de manutenção.

- **Interface Fluente Implementada:**
  A entidade Produto agora utiliza uma interface fluente. Isso significa que métodos como comNome(), comPreco() e emCategoria() podem ser encadeados, melhorando significativamente a legibilidade e a facilidade de uso ao construir ou modificar objetos Produto.


---

## \[1.0.2] - 17/05/2025 às 18:40

### Refactor - Modularização e Expressividade

---

#### Refatoração da Entidade Categoria

- **Nomenclatura Consistente:**  
  O método `adicionarComponente` foi renomeado para `adicionar`, tornando o nome mais intuitivo e genérico para a ação de adicionar um item à categoria.

- **Parâmetros Semânticos:**  
  Parâmetros e variáveis internas foram renomeados para melhor refletir o domínio (ex: `estabelecimento` ao invés de `componente`), aumentando a clareza.

- **Sintaxe Compacta:**  
  Utilização de sintaxe compacta para a declaração da propriedade `nome` no construtor, reduzindo o boilerplate.

- **Limpeza de Código:**  
  Remoção de comentários desnecessários, priorizando a auto-documentação do código.

- **Interface Fluente Implementada:**  
  Adicionados métodos encadeados para a `Categoria`, como `adicionarEstabelecimento()` e `obterDetalhes()`, que permitem a construção e manipulação de categorias de forma mais legível e expressiva.

---

#### Refatoração da Entidade Estabelecimento

- **Simplificação do Construtor:**  
  Uso de modificadores `protected` diretamente no construtor para simplificar a declaração e inicialização das propriedades, aplicando princípios de encapsulamento.

- **Remoção de Comentários Redundantes:**  
  Eliminados comentários que eram autoexplicativos ou redundantes, focando na clareza do código.

- **Clareza na Mensagem de Detalhes:**  
  O método `mostrarDetalhesComEstado` foi simplificado para melhorar a clareza da mensagem exibida, tornando a saída mais direta.

- **Padrão State Preservado:**  
  A manutenção do padrão `State` para controle do estado do estabelecimento (Aberto/Fechado) foi assegurada, garantindo a flexibilidade e a manutenibilidade para futuros estados.

- **Alinhamento com Clean Code:**  
  O código foi alinhado com os princípios de Clean Code, resultando em melhor organização e legibilidade.

- **Interface Fluente Implementada:**  
  Inclusão de métodos encadeados para `Estabelecimento`, como `adicionarProduto()` e `atualizarDetalhes()`, que permitem uma interação mais fluida e intuitiva com a entidade.

---

#### Refatoração do Padrão EstadoEstabelecimento

- **Assinatura Simplificada:**  
  Remoção de um parâmetro desnecessário no método `exibirEstado` das classes de estado, simplificando sua assinatura e uso.

- **Comentários Ajustados:**  
  Comentários internos foram ajustados para maior clareza e objetividade, explicando o papel de cada método e classe no padrão `State`.

- **Estrutura Flexível:**  
  A estrutura foi mantida alinhada ao padrão `State`, garantindo que o sistema seja extensível e fácil de manter caso novos estados para o estabelecimento sejam necessários no futuro.

---

## \[1.0.3] - 17/05/2025 às 18:55

### Adicionado

### Implementação da `EstabelecimentoFactory`

#### Centralização da Criação
- Implementada a classe `EstabelecimentoFactory` com o objetivo de centralizar e padronizar o processo de criação de instâncias de estabelecimentos.
- Essa centralização evita a duplicação de lógica e garante consistência na criação de objetos do tipo `Estabelecimento`.

#### Validação de Tipos
- A fábrica realiza a **validação dos tipos de estabelecimentos** antes da criação.
- Apenas tipos reconhecidos como válidos (`Pizzaria`, `Hamburgueria`, `Restaurante`, etc.) são permitidos.
- Caso um tipo inválido seja fornecido, a fábrica lança um erro com uma mensagem clara.

#### Documentação e README
- Adicionada **documentação inline (JSDoc/TypeDoc)** explicando o funcionamento da `EstabelecimentoFactory`, incluindo parâmetros aceitos e possíveis exceções.
- Atualizado o arquivo `README.md` com uma seção dedicada:
  - Explicando como utilizar a fábrica.
  - Exemplificando a criação de novos estabelecimentos via `EstabelecimentoFactory`.

### Refactor - Coerência e Manutenção

#### Otimização da Lógica de Criação

- **Eliminação de Duplicação:**
  - Toda a lógica de criação de estabelecimentos foi consolidada exclusivamente na `EstabelecimentoFactory`.
  - Código duplicado encontrado em outras partes do sistema foi removido.
  - Agora, todos os pontos de criação de estabelecimentos utilizam a fábrica como única fonte de instanciamento.

#### Nomenclatura Aprimorada

- **Renomeação de Métodos:**
  - Métodos foram renomeados para refletir melhor suas responsabilidades, por exemplo:
    - `registrar` — representa a adição de um observador ao sistema.
    - `notificarOferta` — representa a emissão de uma notificação sobre uma nova oferta.
  - Essa melhoria de nomenclatura aumenta a legibilidade e reduz a ambiguidade do código.

#### Limpeza de Comentários

- **Remoção de Comentários Redundantes:**
  - Comentários que apenas repetiam o que o código já indicava foram removidos.
  - Mantidos apenas comentários com valor explicativo real (como decisões de arquitetura ou regras complexas de negócio).

#### Conformidade com o Padrão Observer

- **Uso Consistente do Padrão Observer:**
  - Código organizado para seguir corretamente a estrutura do padrão Observer.
  - A adição e notificação de observadores segue um fluxo claro e padronizado.
  - Essa consistência facilita a manutenção, além de permitir adicionar novos observadores com mínima modificação.

---

## \[1.0.4] - 17/05/2025 às 19:05

### Refactor — Padrão Observer e Documentação

#### Interface `Observador` Aprimorada

- **Documentação Detalhada**:  
  Adicionada documentação detalhada para a interface `Observador`, que é a base do padrão Observer.  
  A documentação agora esclarece o propósito da interface e o contrato que as classes observadoras devem seguir.

- **Clarificação de Parâmetros**:  
  Os parâmetros do método abstrato `atualizar` foram explicitamente documentados e clarificados, detalhando o tipo de informação que um observador deve receber ao ser notificado.

- **Estrutura Alinhada ao Clean Code**:  
  A interface foi mantida com uma estrutura simples, clara e agora mais explicitamente alinhada aos princípios de Clean Code, facilitando sua compreensão e implementação.

---

#### Classe `ObservadorNotificacaoOferta` Otimizada

- **Implementação Documentada**:  
  A implementação da classe `ObservadorNotificacaoOferta` foi aprimorada com documentação interna que descreve sua responsabilidade específica dentro do padrão Observer (notificar sobre ofertas).

- **Parâmetros Bem Definidos**:  
  Os parâmetros do método `atualizar` nesta classe específica foram refinados e bem definidos, garantindo que o observador receba e processe as informações de oferta de forma precisa.

- **Consistência com Padrões**:  
  O código está limpo, organizado e alinhado aos padrões de projeto, garantindo que a classe `ObservadorNotificacaoOferta` siga as melhores práticas de design.

---

## \[1.0.5] - 18/05/2025 às 15:00

### Refactor — Clareza e Consistência

#### Renomeação e Melhoria de Nomes para Maior Clareza

- `ICanalNotificacao` para `NotificadorConsole`:  
  A interface que definia o contrato de notificação foi renomeada de `ICanalNotificacao` (nome genérico) para `NotificadorConsole`.  
  Esta mudança reflete mais precisamente sua responsabilidade de notificar via console, tornando o nome mais semântico e menos abstrato.

- `CanalConsole` para `MensagemConsole`:  
  A classe concreta que implementava a notificação no console foi renomeada de `CanalConsole` para `MensagemConsole`.  
  Este novo nome indica que a classe é responsável por formatar e exibir mensagens específicas no console, alinhando-se melhor com o conceito de "mensagem" em vez de "canal".

- **Impacto**:  
  Essas renomeações foram cruciais para refletir responsabilidades claras e facilitar o entendimento por outros desenvolvedores, melhorando a manutenibilidade do código.  
  Todas as importações e usos dessas entidades foram atualizados para refletir os novos nomes.

---

#### Refatoração de Comentários Segundo Clean Code

- **Remoção de Redundâncias**:  
  Foram removidos comentários óbvios e redundantes que simplesmente repetiam o que o próprio código já expressava.

- **Foco na Essência**:  
  Mantidos apenas os comentários que realmente esclarecem decisões importantes de design, fornecem contexto para trechos de código complexos, justificam escolhas de implementação ou explicam lógicas não triviais.

- **Benefício**:  
  O código ficou mais legível e enxuto, permitindo que a atenção do desenvolvedor se concentre na lógica principal sem distrações de comentários desnecessários, alinhando-se aos princípios de Clean Code.

---

#### Exemplo Simplificado da Função Principal (`main.ts`)

- **Refatoração para Clareza**:  
  A função principal (`main.ts`) foi refatorada para ser um exemplo mais conciso e didático da utilização do sistema.

- **Comentários Essenciais**:  
  Agora, apenas os comentários essenciais foram mantidos para justificar decisões de arquitetura, como o uso da `EstabelecimentoFactory` para criação de estabelecimentos e a simulação de mudança de estado, em vez de explicar operações triviais.

- **Organização Lógica**:  
  A sequência lógica das operações foi organizada de forma mais clara:  
  criação de estabelecimentos e produtos, simulação de estados, acionamento de notificações e exibição de detalhes, facilitando o entendimento do fluxo da aplicação.

---

## \[1.0.7] - 21/05/2025 22:00
### Adicionado — Testes Automatizados

* Implementados testes unitários abrangentes para validação de entidades e criação via fábrica:

  * **Estabelecimentos:**

    * Criação Válida: Verificação da criação correta de instâncias para tipos de estabelecimentos válidos como `Hamburgueria`, `Pizzaria`, `Restaurante`, assegurando que a fábrica retorne os objetos esperados.
    * Tratamento de Erros de Criação: Testes dedicados para confirmar o lançamento de exceções ou erros quando dados inválidos são fornecidos, como:
      * Nome do estabelecimento vazio.
      * Horário de funcionamento vazio ou em formato incorreto.
      * Tipo de estabelecimento inválido/desconhecido para a fábrica.
    * Testes de Classes Concretas: Casos de teste separados para as classes concretas de estabelecimentos (`Hamburgueria`, `Pizzaria`,  `Restaurante`), validando suas regras específicas (ex: validação de nome e formato de horário).
    * Funcionalidade da `EstabelecimentoFactory`: Testes funcionais que garantem a consistência na criação de estabelecimentos pela fábrica e o tratamento robusto de erros em cenários inesperados.

  * **Produtos:**

    * Criação Válida: Validação da criação de produtos com preço positivo, confirmando que objetos de Produto são instanciados corretamente.
    * Lançamento de Erro para Preço Negativo: Confirmação de que o sistema lança um erro quando tenta-se criar um produto com preço negativo, reforçando as regras de negócio.
    * Validação de Preços Cadastrados: Verificação de que todos os produtos cadastrados possuem preços válidos (maior ou igual a zero), assegurando a integridade dos dados.

* ## Melhorias na Organização dos Testes:
  * Organização por Domínio: Os testes foram organizados de forma lógica por domínio (Estabelecimentos, Produtos), facilitando a localização e manutenção.
  * Testes Paramétricos e Reutilização: Utilização de arrays para testes paramétricos, permitindo a reutilização de dados de teste e reduzindo a duplicação de código nos arquivos de teste.

* ## Garantia de Qualidade:
  * Robustez e Qualidade do Código: A validação rigorosa de entradas e saídas através desses testes contribui diretamente para a robustez e qualidade geral do código.
  * Manutenção e Extensão: A estruturação dos testes com dados centralizados e helpers reutilizáveis facilita enormemente a manutenção e a extensão futura da base de testes.

* ## Fix - Assertividade e Padronização
  * Ajustes Finais em Testes:
    * Captura de Erros: Realizados ajustes finos na captura de erros e nas mensagens de erro para melhorar a assertividade dos testes, garantindo que as falhas sejam claras e fáceis de depurar.
    * Padronização de Imports: Correção de imports e padronização dos arquivos de teste para manter a consistência em toda a suíte de testes.

### Correções

* Ajustes na captura de erros e mensagens para melhorar a assertividade dos testes.
* Correção de imports e padronização dos arquivos de teste.

---

## \[1.0.8] - 23/05/2025 às 11:00

## ESLint Integrado para Qualidade de Código

**Propósito:**  
Adicionada a configuração do ESLint ao projeto para garantir padrões de código consistentes com TypeScript, promovendo um estilo de código unificado e detectando problemas precocemente.

---

### Pacotes Instalados

- `@typescript-eslint/eslint-plugin`: Plugin essencial para regras específicas de TypeScript.  
- `@typescript-eslint/parser`: Parser que permite ao ESLint entender o código TypeScript.  
- `eslint`: A ferramenta principal do ESLint.  

**(DevDependencies no package.json):**

```json
"devDependencies": {
  "@typescript-eslint/eslint-plugin": "^8.32.1",
  "@typescript-eslint/parser": "^8.32.1",
  "eslint": "^9.27.0"
}
```

---

### Configuração (.eslintrc.json)

Criado o arquivo `.eslintrc.json` com as regras básicas e recomendadas para projetos TypeScript.

* Configuração do parser para `@typescript-eslint/parser` e inclusão do `@typescript-eslint` como plugin.
* Estendido `eslint:recommended` e `plugin:@typescript-eslint/recommended` para um conjunto robusto de regras.
* Definido ambiente `node` e `es2021` com `sourceType: module` e `ecmaVersion: latest`.

```json
{
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "env": {
    "node": true,
    "es2021": true
  },
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }]
  }
}
```

---

### Scripts Adicionados (`package.json`)

```json
"scripts": {
  "lint": "eslint . --ext .ts",
  "lint:fix": "eslint . --ext .ts --fix"
}
```

* `"lint"`: Comando para **identificar problemas de estilo e padrões de código**.
* `"lint:fix"`: Comando para **corrigir automaticamente** os erros detectados pelo ESLint.

---

### Resultados

* Execução de `npm run lint` para identificação inicial de problemas.
* Execução de `npm run lint:fix` para correção automática, garantindo conformidade.

---

### Benefícios Chave

* Código mais limpo e padronizado: Facilita a leitura e manutenção por qualquer membro da equipe.
* Detecção precoce de problemas: Reduz bugs e inconsistências.
* Conformidade: Alinhamento com os princípios de Clean Code e melhores práticas de TypeScript.

---

## Notas Finais

Esta versão do changelog foi cuidadosamente elaborada para:

- **Maximizar Legibilidade e Clareza:** Estrutura mais organizada e uso de linguagem clara para facilitar a compreensão das mudanças por qualquer pessoa que consulte o documento.
- **Nomes Semânticos e Alinhados ao Domínio:** Garantir que todas as seções e descrições usem termos que reflitam o propósito e o contexto do projeto.
- **Organização Modular da Estrutura do Projeto:** Apresentar as mudanças de forma que reflita a nova modularidade do código, facilitando a navegação e o entendimento das áreas impactadas.
- **Documentação Objetiva e Relevante:** Focar em detalhes que realmente agregam valor, explicando o "porquê" e o "como" das alterações, sem ser excessivamente prolixo.
- **Remoção de Duplicações e Redundâncias:** Eliminar informações repetidas para um changelog mais conciso e eficiente.
- **Facilitação da Manutenção e Extensibilidade:** Tornar o histórico de mudanças mais fácil de ser consultado e atualizado no futuro, servindo como uma fonte de verdade para a evolução do projeto.
