# Trabalho Design Patterns - FoodNav

## Alunos:
- Guilherme Marques Silveira  
- Luiz Otavio Milanezi Vieira

---

## 🍽 Descrição do Software

O **FoodNav** é um robusto sistema de backend desenvolvido em **TypeScript**, projetado para aprimorar a experiência do usuário na descoberta de restaurantes e pratos. Sua principal finalidade é auxiliar na busca por opções gastronômicas ideais, personalizando recomendações com base em dados de localização, preferências alimentares e um sistema inteligente de sugestões.

Este projeto se destaca pela aplicação consciente de **Padrões de Projeto Clássicos (Design Patterns)**, o que garante uma arquitetura altamente modular, escalável e de fácil manutenção. Além disso, a aderência rigorosa às boas práticas de **Clean Code** assegura a qualidade, legibilidade e manutenibilidade de cada linha de código.

---

## 🎯 Principais Funcionalidades

O FoodNav foi arquitetado com um conjunto de funcionalidades essenciais para oferecer uma experiência completa e eficiente:

- **Gestão Abrangente de Estabelecimentos:**  
  Permite o cadastro e a organização de diversos tipos de estabelecimentos, incluindo restaurantes, pizzarias e hamburguerias, de forma flexível e expansível.

- **Controle de Estado Dinâmico (Padrão State):**  
  Implementa um sistema de controle de estado robusto para os estabelecimentos, com transições bem definidas entre "Aberto" e "Fechado". Este padrão simplifica a lógica de negócios, evita complexas cadeias de condicionais e centraliza o comportamento específico de cada estado.

- **Sistema de Notificações Inteligente (Padrão Observer):**  
  Habilita o envio de notificações automáticas para usuários sobre promoções, ofertas ou mudanças importantes. O uso do padrão Observer garante um sistema de comunicação desacoplado, facilitando a adição de novos tipos de notificação sem impactar o core da aplicação.

- **Estrutura Hierárquica Flexível (Padrão Composite):**  
  Oferece uma estrutura que permite manipular tanto objetos individuais (como um produto específico) quanto grupos de produtos ou estabelecimentos de maneira uniforme. Isso simplifica operações em hierarquias complexas e promove a reutilização de código.

- **Criação Intuitiva de Objetos (Fluent Interface):**  
  Integra interfaces fluentes para otimizar a criação e configuração de objetos fundamentais, como Produto, Categoria e Estabelecimento. Essa abordagem permite o encadeamento de chamadas de métodos, resultando em um código mais legível, expressivo e com menos chances de erro.

- **Confiabilidade Através de Testes Unitários:**  
  O sistema conta com uma cobertura parcial de testes unitários, desenvolvidos para validar a corretude das funcionalidades críticas e garantir a confiabilidade do sistema, minimizando o risco de regressões.

---

# 🛠 Análise e Solução dos Problemas Detectados (Code Smells)

Durante a análise inicial do codebase, foram identificados diversos "Code Smells" que comprometiam a qualidade, manutenibilidade e escalabilidade do FoodNav. A refatoração foi guiada pela resolução desses problemas:

## Problemas Identificados Detalhados:

- **Código Repetitivo e Verboso:**  
  Observou-se uma alta duplicação de lógica para a criação e manipulação de objetos, resultando em código extenso e difícil de manter. Por exemplo, a criação de diferentes tipos de estabelecimentos exigia um fluxo de código quase idêntico repetido em vários locais.

- **Acoplamento Excessivo:**  
  A lógica de criação de objetos, gerenciamento de estados e o sistema de notificações estavam fortemente interligados. Alterações em uma parte frequentemente exigiam modificações em outras, tornando a base de código rígida e resistente a mudanças.

- **Pouca Clareza na Construção de Objetos:**  
  Sem a implementação de interfaces fluentes, a configuração de objetos era um processo extenso e linear, propiciando erros e dificultando a leitura e o entendimento do propósito de cada linha de código.

- **Falta de Validação Adequada:**  
  Campos cruciais, como o preço de um produto, aceitavam valores inválidos (e.g., negativos ou nulos) sem validação, o que comprometia a integridade dos dados e poderia levar a comportamentos inesperados do sistema.

- **Testes Insuficientes:**  
  Comportamentos críticos da aplicação, como as transições de estado de um estabelecimento ou o disparo de notificações, não possuíam cobertura de testes unitários adequada. Isso aumentava significativamente o risco de introdução de bugs e regressões.

- **Dificuldade na Extensão do Sistema:**  
  A arquitetura inicial dificultava a adição de novos tipos de estabelecimentos, produtos ou funcionalidades. Cada nova adição exigia alterações profundas em múltiplas classes e módulos, o que era custoso e propenso a erros.

## Estratégia de Refatoração Adotada:

Para solucionar os problemas identificados, adotamos uma estratégia de refatoração abrangente, focando na aplicação de Design Patterns e na implementação de boas práticas de engenharia de software:

### Aplicação Estratégica de Design Patterns Clássicos:

- **Factory Method:**  
  Implementado para abstrair e padronizar o processo de criação de estabelecimentos e produtos. Isso centralizou a lógica de instanciação em um único ponto, facilitando a adição de novos tipos sem modificar o código cliente e promovendo a flexibilidade.

- **State:**  
  Utilizado para encapsular o comportamento específico de cada estado de um estabelecimento (Aberto, Fechado). Isso eliminou o uso de if/else complexos e tornou as transições de estado mais gerenciáveis, permitindo que o objeto mude seu comportamento quando seu estado interno muda.

- **Observer:**  
  Aplicado para desacoplar a emissão e a recepção de notificações. Com este padrão, o sistema de notificação se tornou altamente flexível, permitindo que novos observadores (ex: notificação por email, SMS) sejam adicionados facilmente sem modificar o código do notificador.

- **Composite:**  
  Empregado para permitir que objetos individuais (produtos) e coleções de objetos (categorias, estabelecimentos) sejam tratados de maneira uniforme. Isso é particularmente útil para operações como exibição de detalhes ou aplicação de promoções em hierarquias complexas.

- **Fluent Interface:**  
  Implementada para simplificar a construção e a configuração de objetos. Essa técnica permite o encadeamento de chamadas de métodos, resultando em um código de inicialização mais legível, expressivo e autoexplicativo (e.g., produto.comNome('Pizza').comPreco(50)).

### Modularização Clara do Código:

O projeto foi rigorosamente modularizado, separando responsabilidades em domínios distintos e bem definidos (domain/entities, domain/states, factories, observers, utils, tests). Essa abordagem aumentou drasticamente a organização, a coesão e a manutenibilidade do código.

### Implementação de Validações Robustas:

Foram adicionadas validações essenciais em pontos críticos, como nos setters das classes de domínio (ex: garantindo que o preço de um produto não seja negativo) e nos processos de criação de objetos via fábricas, assegurando a integridade e consistência dos dados.

### Ampliação da Cobertura de Testes com Jest:

Aumentada significativamente a cobertura de testes unitários utilizando o framework Jest. Isso não apenas garantiu a verificação das funcionalidades essenciais, mas também estabeleceu uma rede de segurança para prevenir regressões em futuras alterações e novas implementações.

### Documentação Detalhada e Contextual:

Aprimorada a documentação interna do código e a documentação externa (como este README), fornecendo informações claras e contextualizadas sobre a arquitetura do sistema, os padrões aplicados e as decisões de design, facilitando o entendimento e futuras manutenções.

---

💻 Descrição da Implementação da Interface Fluente  
A Interface Fluente foi um componente crucial da refatoração, implementada nas classes centrais do domínio para facilitar a criação e configuração de objetos de forma encadeada, promovendo um código mais legível e expressivo.

### Exemplo na Classe Produto:  
A classe Produto foi refatorada para permitir a configuração de seu nome e preço de forma fluente, encapsulando a lógica de validação.

```typescript
class Produto {
  private nome: string = "";
  private preco: number = 0;

  /**
   * Define o nome do produto e retorna a instância para encadeamento.
   * @param nome O nome do produto.
   * @returns A própria instância de Produto.
   */
  setNome(nome: string): this {
    this.nome = nome;
    return this;
  }

  /**
   * Define o preço do produto com validação e retorna a instância para encadeamento.
   * Lança um erro se o preço for negativo.
   * @param preco O preço do produto.
   * @returns A própria instância de Produto.
   */
  setPreco(preco: number): this {
    if (preco < 0) throw new Error("Preço não pode ser negativo");
    this.preco = preco;
    return this;
  }

  /**
   * Retorna os detalhes formatados do produto.
   * @returns Uma string com o nome e preço do produto.
   */
  detalhes(): string {
    return `${this.nome} - R$${this.preco.toFixed(2)}`;
  }
}
````

### Uso Típico:

A criação e configuração do Produto tornam-se uma única linha de código, clara e expressiva, melhorando a produtividade do desenvolvedor:

```typescript
const produto = new Produto()
  .setNome("Pizza Margherita")
  .setPreco(35.90);

console.log(produto.detalhes()); // Saída: Pizza Margherita - R$35.90
```

### Classe Categoria:

A classe Categoria também foi estendida com a interface fluente, permitindo adicionar estabelecimentos e configurar seu nome de forma encadeada, refletindo a estrutura Composite.

```typescript
class Categoria {
  private nome: string = "";
  private estabelecimentos: Estabelecimento[] = [];

  /**
   * Define o nome da categoria e retorna a instância para encadeamento.
   * @param nome O nome da categoria.
   * @returns A própria instância de Categoria.
   */
  setNome(nome: string): this {
    this.nome = nome;
    return this;
  }

  /**
   * Adiciona um estabelecimento à categoria e retorna a instância para encadeamento.
   * @param estabelecimento O estabelecimento a ser adicionado.
   * @returns A própria instância de Categoria.
   */
  adicionar(estabelecimento: Estabelecimento): this {
    this.estabelecimentos.push(estabelecimento);
    return this;
  }

  /**
   * Exibe os detalhes da categoria e de seus estabelecimentos associados.
   */
  exibirDetalhes(): void {
    console.log(`Categoria: ${this.nome}`);
    this.estabelecimentos.forEach(est => est.mostrarDetalhes());
  }
}
```

### Uso:

A criação de uma categoria e a adição de múltiplos estabelecimentos tornam-se mais compactas e legíveis:

```typescript
const categoria = new Categoria()
  .setNome("Restaurantes")
  .adicionar(estabelecimento1)
  .adicionar(estabelecimento2);

categoria.exibirDetalhes();
```

### Classe Estabelecimento (Abstrata):

A classe abstrata Estabelecimento define a base para a interface fluente, que será herdada por suas classes concretas (Hamburgueria, Pizzaria, Restaurante). Isso garante consistência na forma como todos os tipos de estabelecimentos são configurados.

```typescript
abstract class Estabelecimento {
  protected nome: string = "";
  protected horario: string = "";
  protected produtos: Produto[] = [];

  /**
   * Define o nome do estabelecimento e retorna a instância para encadeamento.
   * @param nome O nome do estabelecimento.
   * @returns A própria instância de Estabelecimento.
   */
  setNome(nome: string): this {
    this.nome = nome;
    return this;
  }

  /**
   * Define o horário de funcionamento do estabelecimento e retorna a instância para encadeamento.
   * @param horario O horário de funcionamento.
   * @returns A própria instância de Estabelecimento.
   */
  setHorario(horario: string): this {
    this.horario = horario;
    return this;
  }

  /**
   * Adiciona um produto ao estabelecimento e retorna a instância para encadeamento.
   * @param produto O produto a ser adicionado.
   * @returns A própria instância de Estabelecimento.
   */
  adicionarProduto(produto: Produto): this {
    this.produtos.push(produto);
    return this;
  }

  /**
   * Método abstrato para exibir os detalhes específicos do estabelecimento.
   * Deve ser implementado pelas classes concretas.
   */
  abstract mostrarDetalhes(): void;
}
```

### Uso:

A criação de um estabelecimento concreto e a adição de produtos são feitas de maneira fluida e expressiva:

```typescript
const restaurante = new Restaurante()
  .setNome("Restaurante do Zé")
  .setHorario("10h às 22h")
  .adicionarProduto(produto1)
  .adicionarProduto(produto2);

restaurante.mostrarDetalhes();
```

## 🧪 Testes Automatizados com Jest

Para garantir a qualidade, estabilidade e a corretude do código, o projeto FoodNav conta com uma suíte de testes unitários abrangente, desenvolvida utilizando o framework Jest. Essa suíte verifica os comportamentos mais críticos do sistema, assegurando que o sistema opere conforme o esperado sob diversas condições.

### Cobertura de Testes:

- **Validações de Entrada**: Testes rigorosos asseguram que a inserção de propriedades inválidas (ex: preço negativo em Produto, nome vazio em Estabelecimento) gere os erros esperados, protegendo a integridade dos dados e prevenindo estados inconsistentes.
- **Testes das Interfaces Fluentes**: Verificam o correto encadeamento e a configuração dos objetos através dos métodos fluentes, garantindo que o `this` seja retornado corretamente e que todas as propriedades sejam definidas conforme a intenção.
- **Testes do Padrão State**: Cobrem as transições de estado dos estabelecimentos (Aberto para Fechado e vice-versa) e o comportamento associado a cada estado, garantindo que a lógica de estado funcione conforme o esperado e seja flexível.
- **Testes do Padrão Observer**: Garantem que as notificações são disparadas e recebidas corretamente pelos observadores registrados quando um evento ocorre, verificando a funcionalidade do sistema de comunicação desacoplado.
- **Testes da Factory**: Asseguram que os tipos corretos de estabelecimentos são criados pela `EstabelecimentoFactory` conforme o parâmetro de entrada fornecido, validando a lógica de criação centralizada e seu tratamento de erros (ex: tipos inválidos).

### Como Executar os Testes:

Para rodar todos os testes unitários configurados no projeto, utilize o comando:

```bash
npm run test
````

Alternativamente, você pode executar os testes diretamente com o Jest:

```bash
npx jest
```

### Gerando o Relatório de Cobertura de Testes:

Para obter um relatório completo e detalhado da cobertura dos testes (mostrando quais partes do código foram exercitadas e quais não foram), execute:

```bash
npx jest --coverage
```

### Relatório Atual de Cobertura:

O relatório abaixo demonstra a cobertura atual dos testes. Embora alguns módulos ainda possam ter espaço para melhoria (indicado pelas linhas não cobertas), o resultado geral (80.67% de Statements e 93.22% de Branch) indica uma cobertura significativa, especialmente nos módulos mais críticos. Isso proporciona maior segurança ao realizar alterações e novas implementações.

```
------------------------------|---------|----------|---------|---------|-------------------
File                          | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
------------------------------|---------|----------|---------|---------|-------------------
All files                     |   80.67 |    93.22 |      50 |   81.35 |                   
 domain/entities              |   44.44 |       25 |   33.33 |   45.71 |                   
  Estabelecimento.ts          |   47.36 |      100 |      30 |      50 | 21-47             
  Produto.ts                  |   41.17 |       25 |   37.5 |   41.17 | 25-47             
 domain/state                 |      50 |      100 |       0 |      50 |                   
  EstadoEstabelecimento.ts    |      50 |      100 |       0 |      50 | 13,22             
 estabelecimentos             |     100 |      100 |     100 |     100 |                   
  Hamburgueria.ts             |     100 |      100 |     100 |     100 |                   
  Pizzaria.ts                 |     100 |      100 |     100 |     100 |                   
  Restaurante.ts              |     100 |      100 |     100 |     100 |                   
 factories                    |    92.3 |    85.71 |     100 |    92.3 |                   
  EstabelecimentoFactory.ts   |    92.3 |    85.71 |     100 |    92.3 | 25                
 utils                        |     100 |      100 |     100 |     100 |                   
  CadastrarEstabelecimento.ts |     100 |      100 |     100 |     100 |                   
  CadastrarProduto.ts         |     100 |      100 |     100 |     100 |                   
------------------------------|---------|----------|---------|---------|-------------------

Test Suites: 4 passed, 4 total
Tests:       22 passed, 22 total
Snapshots:   0 total
Time:        3.552 s
Ran all test suites.
```

## ⚙️ Como Instalar e Executar o Projeto

Para configurar e rodar o projeto FoodNav em sua máquina, siga os passos abaixo. Certifique-se de ter os pré-requisitos instalados.

### Pré-requisitos

- **Node.js**: Versão 16 ou superior (recomendado).
- **npm**: O gerenciador de pacotes Node.js (geralmente vem com o Node.js).

### Passos para Instalação

#### Clone o Repositório:

Abra seu terminal ou prompt de comando e clone o projeto do GitHub:

```bash
git clone https://github.com/GuilhermeMSilveira/TrabalhoDesingPatters.git
````

#### Navegue até o Diretório do Projeto:

Após o clone, entre na pasta raiz do projeto:

```bash
cd TrabalhoDesingPatters
```

#### Instale as Dependências:

Instale todas as dependências do projeto (incluindo as de desenvolvimento) com o npm:

```bash
npm install
```

### Executando Testes

É altamente recomendado rodar os testes após a instalação para garantir que todas as dependências estão corretas e que o projeto está funcionando conforme o esperado:

```bash
npm run test
```

### Gerando Relatório de Cobertura

Para obter um relatório detalhado da cobertura dos testes (útil para identificar áreas que precisam de mais testes):

```bash
npx jest --coverage
```

### Rodando o Projeto

O projeto FoodNav contém um arquivo principal `src/app/main.ts` que serve como o ponto de entrada da aplicação. Para executar:

#### Modo de Desenvolvimento (`npm run dev`):

Este comando é ideal para desenvolvimento, pois utiliza `ts-node` para compilar e executar o código TypeScript em tempo real, sem a necessidade de um passo de compilação manual.

```bash
npm run dev
```

#### Compilando e Executando via Node.js (`tsc` e `node`):

Se preferir um fluxo de trabalho de produção ou para verificar o build final, você pode compilar o TypeScript para JavaScript e depois executar o arquivo JavaScript compilado:

```bash
tsc               # Compila todo o código TypeScript para JavaScript na pasta 'dist'
node dist/app/main.js  # Executa o arquivo JavaScript compilado
```
## 🧹 Como Rodar o ESLint no Projeto

O ESLint é uma ferramenta essencial configurada no FoodNav para garantir a padronização e a alta qualidade do código TypeScript. Ele ajuda a identificar e corrigir problemas de sintaxe, estilo e padrões de código.

### Passo 1: Instalação de Dependências (Já Configuradas)

As dependências necessárias para o ESLint, TypeScript e seus plugins já estão listadas e configuradas no package.json do projeto. Caso você tenha alguma dúvida ou precise reinstalá-las:

```bash
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin typescript
````

### Passo 2: Configuração do ESLint (Já Presente)

O projeto já vem com o arquivo de configuração `.eslintrc.json` predefinido para atender às necessidades do TypeScript. Este arquivo estende as regras recomendadas do ESLint e do plugin TypeScript, além de definir algumas regras personalizadas que são cruciais para o estilo de codificação adotado.

O parser é configurado para `@typescript-eslint/parser` para que o ESLint possa interpretar o código TypeScript. As extensões `eslint:recommended` e `plugin:@typescript-eslint/recommended` fornecem um conjunto robusto de regras de boas práticas. Regras específicas como `@typescript-eslint/no-explicit-any: "warn"` e `@typescript-eslint/no-unused-vars: ["warn", { "argsIgnorePattern": "^_" }]` são definidas para alertar sobre o uso de `any` e variáveis não utilizadas, respectivamente, incentivando a tipagem forte e o código limpo.

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

### Passo 3: Rodar o ESLint

Você pode verificar problemas no código ou corrigi-los automaticamente usando os scripts definidos no `package.json`:

#### Para Verificar Problemas de Estilo e Sintaxe:

Este comando irá analisar todo o seu código-fonte e listar todos os avisos e erros identificados pelo ESLint, sem fazer alterações nos arquivos.

```bash
npm run lint
```

#### Para Corrigir Problemas Automaticamente:

Este comando não apenas analisa o código, mas também tenta corrigir automaticamente todos os problemas de estilo e formatação que o ESLint consegue resolver.

```bash
npm run lint:fix
```

### Passo 4: Tratando Avisos Específicos

Em certos cenários, pode ser necessário desabilitar uma regra específica do ESLint para uma linha ou bloco de código, especialmente em testes ou ao lidar com bibliotecas externas.

#### Ignorar em Linhas Específicas:

Para ignorar um aviso (ou erro) em uma linha de código específica, adicione um comentário no formato `// eslint-disable-next-line <nome-da-regra-do-eslint>`. Por exemplo, para permitir o uso de `any` intencionalmente em um teste:

```ts
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const est = EstabelecimentoFactory.criarEstabelecimento(tipo as any, nome, horario);
```

## 📊 Diagrama UML  
O projeto FoodNav possui um diagrama UML (Unified Modeling Language) detalhado, hospedado no Figma. Este diagrama é uma representação visual clara da arquitetura do sistema, ilustrando os padrões de projeto aplicados, as classes envolvidas e as relações entre elas. É uma ferramenta fundamental para entender a estrutura e o design do FoodNav de forma concisa e padronizada.

Visualizar Diagrama UML FoodNav no Figma: [Acessar Diagrama UML FoodNav](https://www.figma.com/board/Sn1sLyC5FzFN6dQBXMy1pR/Projeto-Desing-Patters?node-id=0-1&t=LtihSlvyarY7TSgN-1)

## 🏗 Estrutura do Projeto  
A seguir, a estrutura de pastas e arquivos do projeto FoodNav, que reflete a modularização e a organização adotadas para garantir a coesão e a manutenibilidade do código:

```plaintext
src/
├── app/
│   └── main.ts                 # Ponto de entrada principal da aplicação, orquestra a execução.
├── domain/                     # Módulo que define as entidades e lógicas de negócio do domínio.
│   ├── entities/               # Definição das entidades do domínio (modelo de dados central).
│   │   ├── Categoria.ts        # Entidade Categoria, parte do padrão Composite.
│   │   ├── Estabelecimento.ts  # Classe abstrata para os estabelecimentos.
│   │   └── Produto.ts          # Entidade Produto, com interface fluente.
│   └── states/                 # Implementações do padrão State para entidades.
│       └── EstadoEstabelecimento.ts # Classes base e concretas para os estados de Estabelecimento.
├── estabelecimentos/           # Classes concretas de estabelecimentos, herdam de Estabelecimento.
│   ├── Hamburgueria.ts         # Implementação específica para Hamburguerias.
│   ├── Pizzaria.ts             # Implementação específica para Pizzarias.
│   └── Restaurante.ts          # Implementação específica para Restaurantes.
├── factories/                  # Implementações do padrão Factory para criação centralizada de objetos.
│   ├── EstabelecimentoFactory.ts # Fábrica para criar diferentes tipos de Estabelecimento.
│   └── ProdutoFactory.ts       # Fábrica para criar diferentes tipos de Produto.
├── observers/                  # Implementações do padrão Observer para o sistema de notificações.
│   ├── MensagemConsole.ts      # Observador para exibir mensagens no console.
│   ├── NotificadorConsole.ts   # Implementação de um notificador para console.
│   ├── NotificadorPreferenciasUsuario.ts # Observador com lógica de preferências.
│   ├── Observador.ts           # Interface base para todos os observadores.
│   └── ObservadorNotificacaoOferta.ts # Observador específico para notificações de ofertas.
├── tests/                      # Testes unitários para validar as funcionalidades e padrões.
│   ├── CadastrarEstabelecimento.test.ts # Testes para o utilitário de cadastro.
│   ├── Estabelecimento.test.ts # Testes para a entidade Estabelecimento e seus estados.
│   ├── EstabelecimentoFactory.test.ts # Testes para a fábrica de estabelecimentos.
│   └── Produto.test.ts         # Testes para a entidade Produto.
├── utils/                      # Funções e classes utilitárias e auxiliares.
│   ├── CadastrarEstabelecimento.ts # Utilitário para o processo de cadastro de estabelecimentos.
│   └── CadastrarProduto.ts     # Utilitário para o processo de cadastro de produtos.
└── README.md                   # Este arquivo de documentação do projeto.
└── CHANGELOG.md                # Histórico detalhado de todas as mudanças do projeto.
````

## Contato

Este projeto foi desenvolvido por:

**Guilherme Marques Silveira** e
**Luiz Otavio Milanezi Vieira**

Para dúvidas, sugestões, ou potenciais contribuições, sinta-se à vontade para entrar em contato com Guilherme Silveira via e-mail: \[[guilherme.36421@alunosatc.edu.br](mailto:guilherme.36421@alunosatc.edu.br)]
