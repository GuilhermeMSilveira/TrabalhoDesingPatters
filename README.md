# Trabalho Design Patterns - FoodNav
## Alunos:
- Guilherme Marques Silveira  
- Luiz Otavio Milanezi Vieira
---

## 🍽 Descrição do Software

FoodNav é um backend desenvolvido em TypeScript para auxiliar usuários a descobrir os melhores restaurantes e pratos personalizados conforme seu gosto e preferências. Utiliza dados de localização, preferências alimentares e um sistema de recomendação inteligente para sugerir opções ideais.

O projeto enfatiza a aplicação de **padrões de projeto clássicos (Design Patterns)**, que garantem uma arquitetura modular, escalável e de fácil manutenção. Além disso, emprega boas práticas de Clean Code para garantir qualidade e legibilidade no código.

---

## 🎯 Principais Funcionalidades

- Cadastro e organização de diversos tipos de estabelecimentos: restaurantes, pizzarias, hamburguerias.
- Controle de estado dos estabelecimentos, com transições entre "Aberto" e "Fechado" (padrão State).
- Notificações automáticas para usuários sobre promoções e ofertas (padrão Observer).
- Estrutura hierárquica que permite manipular objetos individuais ou grupos de produtos e estabelecimentos (padrão Composite).
- Implementação de interfaces fluentes (Fluent Interface) para facilitar a criação e configuração dos objetos (Produto, Categoria, Estabelecimento).
- Cobertura parcial com testes unitários para garantir a confiabilidade do sistema.

---

## 🛠 Análise dos Principais Problemas Detectados

Durante a análise do código original foram identificados os seguintes problemas:

- **Código repetitivo e verboso:** a criação de objetos era feita de forma manual, com muita duplicação e pouca reutilização.
- **Acoplamento excessivo:** a lógica de criação, estados e notificações estava pouco modularizada, dificultando a manutenção.
- **Pouca clareza na construção dos objetos:** sem o uso de interfaces fluentes, a configuração dos objetos era extensa e propensa a erros.
- **Falta de validação adequada:** campos como preço do produto aceitavam valores inválidos, comprometendo a integridade dos dados.
- **Testes insuficientes:** alguns comportamentos críticos, como transição de estado e notificações, não tinham cobertura adequada.
- **Dificuldade na extensão do sistema:** adicionar novos tipos de estabelecimentos ou funcionalidades exigia alterações profundas.

---

## 🔧 Estratégia de Refatoração Adotada

Para solucionar os problemas detectados, adotamos as seguintes abordagens:

1. **Aplicação de Design Patterns clássicos**:
   - *Factory*: para abstrair e padronizar a criação dos estabelecimentos e produtos, facilitando expansão futura.
   - *State*: para encapsular o comportamento dos estados do estabelecimento (Aberto, Fechado), evitando condicionais complexos.
   - *Observer*: para desacoplar a emissão e recepção de notificações, facilitando a implementação de novos observadores.
   - *Composite*: para permitir tratar objetos e grupos uniformemente, facilitando operações em hierarquias.
   - *Fluent Interface*: para construção simples e legível dos objetos via métodos encadeados.

2. **Modularização clara** do código, separando responsabilidades em domínios distintos (`entities`, `states`, `factories`, `observers`, etc).

3. **Implementação de validações** nos setters das classes para garantir que propriedades como preço e nomes sejam consistentes.

4. **Ampliação da cobertura de testes** com Jest, garantindo verificação das funcionalidades essenciais e prevenindo regressões.

5. **Documentação detalhada** para facilitar entendimento e futuras manutenções.

---

## 💻 Descrição da Implementação da Interface Fluente

A Interface Fluente foi implementada nas principais classes do domínio para facilitar a criação e configuração de objetos com chamadas encadeadas.

### Exemplo na classe `Produto`:

```typescript
class Produto {
  private nome: string = "";
  private preco: number = 0;

  setNome(nome: string): this {
    this.nome = nome;
    return this;
  }

  setPreco(preco: number): this {
    if (preco < 0) throw new Error("Preço não pode ser negativo");
    this.preco = preco;
    return this;
  }

  detalhes(): string {
    return `${this.nome} - R$${this.preco.toFixed(2)}`;
  }
}
````

Uso típico:

```typescript
const produto = new Produto()
  .setNome("Pizza Margherita")
  .setPreco(35.90);
```

### Classe `Categoria`:

Permite adicionar estabelecimentos e configurar nome fluentemente:

```typescript
class Categoria {
  private nome: string = "";
  private estabelecimentos: Estabelecimento[] = [];

  setNome(nome: string): this {
    this.nome = nome;
    return this;
  }

  adicionar(estabelecimento: Estabelecimento): this {
    this.estabelecimentos.push(estabelecimento);
    return this;
  }

  exibirDetalhes(): void {
    console.log(`Categoria: ${this.nome}`);
    this.estabelecimentos.forEach(est => est.mostrarDetalhes());
  }
}
```

Uso:

```typescript
const categoria = new Categoria()
  .setNome("Restaurantes")
  .adicionar(estabelecimento1)
  .adicionar(estabelecimento2);
```

### Classe `Estabelecimento`:

Configuração fluente para nome, horário e produtos:

```typescript
abstract class Estabelecimento {
  protected nome: string = "";
  protected horario: string = "";
  protected produtos: Produto[] = [];

  setNome(nome: string): this {
    this.nome = nome;
    return this;
  }

  setHorario(horario: string): this {
    this.horario = horario;
    return this;
  }

  adicionarProduto(produto: Produto): this {
    this.produtos.push(produto);
    return this;
  }

  abstract mostrarDetalhes(): void;
}
```

Uso:

```typescript
const restaurante = new Restaurante()
  .setNome("Restaurante do Zé")
  .setHorario("10h às 22h")
  .adicionarProduto(produto1)
  .adicionarProduto(produto2);
```

---

## 🧪 Testes Automatizados

Para garantir a qualidade e estabilidade do código, foram implementados testes unitários utilizando o framework **Jest**, contemplando:

* **Validações de entrada:** assegurando que propriedades inválidas gerem erros (ex: preço negativo em `Produto`).
* **Testes das interfaces fluentes:** verificando o correto encadeamento e configuração dos objetos.
* **Testes do padrão State:** verificando transições de estado dos estabelecimentos (Aberto, Fechado).
* **Testes do padrão Observer:** garantindo que notificações são disparadas e recebidas corretamente.
* **Testes da Factory:** assegurando que os tipos corretos de estabelecimentos são criados conforme o parâmetro.

### Como executar os testes

Para rodar todos os testes unitários:

```bash
npm run test
```

ou diretamente com Jest:

```bash
npx jest
```

### Gerando o relatório de cobertura de testes

Para obter um relatório completo da cobertura dos testes, execute:

```bash
npx jest --coverage
```

---

### Relatório atual de cobertura

```plaintext
 PASS  src/tests/Produto.test.ts                                                                                                                                   
 PASS  src/tests/EstabelecimentoFactory.test.ts
 PASS  src/tests/Estabelecimento.test.ts
 PASS  src/tests/CadastrarEstabelecimento.test.ts
------------------------------|---------|----------|---------|---------|-------------------
File                          | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
------------------------------|---------|----------|---------|---------|-------------------
All files                     |   80.67 |    93.22 |      50 |   81.35 |                   
 domain/entities              |   44.44 |       25 |   33.33 |   45.71 |                   
  Estabelecimento.ts          |   47.36 |      100 |      30 |      50 | 21-47             
  Produto.ts                  |   41.17 |       25 |    37.5 |   41.17 | 25-47             
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

Esse resultado demonstra uma cobertura significativa, especialmente nos módulos mais críticos, garantindo maior segurança ao realizar alterações e novas implementações.

---

## 🏗 Estrutura do Projeto

```plaintext
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

## ⚙️ Como Instalar e Executar o Projeto

### Pré-requisitos

* Node.js (versão 16 ou superior recomendada)
* npm (gerenciador de pacotes)

### Passos para instalação

1. Clone o repositório:

```bash
git https://github.com/GuilhermeMSilveira/TrabalhoDesingPatters.git
```

2. Navegue até o diretório do projeto:

```bash
cd TrabalhoDesingPatters
```

3. Instale as dependências:

```bash
npm install
```

### Executando testes

Para garantir que tudo está funcionando, rode os testes automatizados:

```bash
npm run test
```

### Gerando relatório de cobertura

Para ver o relatório detalhado da cobertura dos testes:

```bash
npx jest --coverage
```

### Rodando o projeto

O projeto contém um arquivo principal `main.ts` para execução. Para rodar em modo de desenvolvimento:

```bash
npm run dev
```

ou, se preferir compilar e executar via Node:

```bash
tsc
node dist/app/main.js
```

---

## 📊 Diagrama UML

O projeto possui um diagrama UML detalhado hospedado no Figma, que ilustra a arquitetura, os padrões aplicados e as relações entre as classes:

[Diagrama UML FoodNav](https://www.figma.com/board/Sn1sLyC5FzFN6dQBXMy1pR/Projeto-Desing-Patters?node-id=0-1&t=LtihSlvyarY7TSgN-1)

---

## Contato

Projeto desenvolvido por \*\*


Seu Nome\*Guilherme Marques Silveira\*.

Para dúvidas, sugestões ou contribuições, envie e-mail para: [guilherme.36421@alunosatc.edu.br]

---

