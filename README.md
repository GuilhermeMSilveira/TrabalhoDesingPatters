# Trabalho Design Patterns - FoodNav

## 🍽 O que é o FoodNav?

FoodNav é um aplicativo que ajuda você a descobrir os melhores restaurantes e pratos, personalizados para seu gosto. Utilizando dados de localização, preferências alimentares e um sistema de recomendação inteligente, o FoodNav sugere opções que combinam perfeitamente com o seu paladar.

O projeto é uma implementação focada em backend, escrita em TypeScript, que utiliza diversos **padrões de projeto (Design Patterns)** para organizar e tornar o código mais escalável, fácil de manter e evoluir.

---

## 🎯 Objetivo do Projeto

- Aplicar os conceitos de design patterns clássicos (Factory, Observer, State, Composite, Fluent Interface).
- Criar uma arquitetura limpa, modular e com responsabilidades bem definidas.
- Demonstrar boas práticas de programação orientada a objetos e design de software.
- Fornecer um backend capaz de criar, gerenciar e notificar sobre restaurantes e seus produtos.

---

## 📋 Funcionalidades principais

- Cadastro e organização de estabelecimentos (restaurantes, pizzarias, hamburguerias).
- Controle de estado dos estabelecimentos (Aberto, Fechado).
- Notificações automáticas para usuários sobre promoções e ofertas (Observer).
- Criação fluente e segura de produtos via interface fluente (Builder).
- Estrutura hierárquica que permite tratar produtos e estabelecimentos individualmente ou em grupo (Composite).
- Testes unitários para garantir qualidade e confiabilidade do código.

---

## 🏗 Estrutura do Projeto

```

src/
├── app/
│   └── main.ts               → Ponto de entrada da aplicação.
├── domain/
│   ├── entities/            → Entidades principais como Produto, Categoria e Estabelecimento.
│   │   ├── Produto.ts       → Classe que representa um produto.
│   │   ├── Categoria.ts     → Define categorias de produtos.
│   │   └── Estabelecimento.ts → Classe base para estabelecimentos.
│   └── states/
│       └── EstadoEstabelecimento.ts → Define os estados do estabelecimento (Aberto, Fechado).
├── estabelecimentos/       → Implementações específicas de tipos de estabelecimentos.
│   ├── Hamburgueria.ts
│   ├── Pizzaria.ts
│   └── Restaurante.ts
├── factories/
│   └── EstabelecimentoFactory.ts → Cria objetos de estabelecimentos via Factory.
├── observers/              → Observadores para notificações e eventos.
│   ├── Observador.ts           → Interface base de observadores.
│   ├── ObservadorNotificacaoOferta.ts → Notifica usuários sobre ofertas.
│   └── NotificadorPreferenciasUsuario.ts → Notifica usuários baseado em preferências.
├── utils/
│   └── helpers.ts             → Funções auxiliares genéricas.
├── fluent/
│   └── ProdutoBuilder.ts      → Interface fluente para criação de produtos.
└── tests/
└── estabelecimento.test.ts → Testes unitários usando Jest.

````

---

## 🧩 Design Patterns aplicados

### 1. State
- **Propósito:** Controlar os estados possíveis de um estabelecimento (Aberto, Fechado).
- **Vantagem:** Permite alterar comportamentos de objetos conforme seu estado, sem ifs complexos.

### 2. Observer
- **Propósito:** Permitir notificações automáticas a usuários quando ocorrem eventos como novas ofertas.
- **Vantagem:** Desacopla o emissor do evento dos receptores, facilitando extensões.

### 3. Factory
- **Propósito:** Criar objetos complexos (diferentes tipos de estabelecimentos) sem expor lógica de criação.
- **Vantagem:** Facilita a expansão de tipos de estabelecimentos sem modificar código existente.

### 4. Composite
- **Propósito:** Tratar grupos de objetos e objetos individuais de maneira uniforme.
- **Vantagem:** Simplifica operações em hierarquias de dados.

### 5. Fluent Interface
- **Propósito:** Criar objetos com chamadas encadeadas que tornam o código mais legível e fluido.
- **Vantagem:** Facilita a criação complexa de objetos com menos código e mais clareza.

---

## 📊 Diagrama UML

O projeto conta com um diagrama UML detalhado, disponível no Figma:  
[Diagrama UML FoodNav](https://www.figma.com/board/Sn1sLyC5FzFN6dQBXMy1pR/Projeto-Desing-Patters?node-id=0-1&t=LtihSlvyarY7TSgN-1)

---

## ⚙️ Como executar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/SeuUsuario/ProjetoFoodNav.git
````

2. Instale as dependências:

   ```bash
   npm install
   ```
3. Rode os testes para verificar se está tudo funcionando:

   ```bash
   npm test
   ```
4. Execute a aplicação (exemplo):

   ```bash
   npm start
   ```

---

## 📦 Detalhes das principais classes

### Classe Produto

Representa um produto oferecido por um estabelecimento, com atributos essenciais: nome e preço.

* **Construtor:** Inicializa nome e preço do produto, validando que o preço não seja negativo.
* **Método `detalhes()`:** Retorna uma string formatada com as informações do produto.
* **Getters:** Permitem acesso controlado aos atributos `nome` e `preco`.

Esta classe mantém encapsulamento e simplicidade, facilitando a manutenção e extensão do sistema.

---

### Classe Categoria

Agrupa estabelecimentos dentro de uma categoria, permitindo a organização e exibição dos mesmos.

* **Construtor:** Inicializa o nome da categoria.
* **Método `adicionar()`:** Adiciona um estabelecimento à categoria.
* **Método `exibirDetalhes()`:** Exibe no console o nome da categoria e detalhes dos estabelecimentos associados, incluindo seus produtos.

Utiliza o padrão Composite para estruturar os estabelecimentos em categorias.

---

### Classe Estabelecimento

Classe abstrata que representa um estabelecimento comercial, fornecendo a estrutura base para os tipos específicos (como Pizzaria, Hamburgueria, Restaurante).

Principais características:

* Propriedades para nome, horário de funcionamento e lista de produtos.
* Controle de estado via padrão State (Aberto, Fechado).
* Métodos para adicionar produtos, exibir produtos, abrir e fechar estabelecimento.
* Método abstrato `mostrarDetalhes` que deve ser implementado nas subclasses para descrever detalhes específicos.
* Método para exibir detalhes completos incluindo o estado atual.

Esta classe é fundamental para manter o modelo do domínio organizado, promovendo reutilização e extensibilidade.

---

## Módulo `EstadoEstabelecimento`

Este módulo define o padrão **State** para representar os estados de um estabelecimento, possibilitando alterar seu comportamento conforme o estado atual.

### Estrutura

* **EstadoEstabelecimento** (interface): Define o método `exibirEstado` para retorno do estado atual.
* **Aberto** (classe): Implementa o estado "Aberto".
* **Fechado** (classe): Implementa o estado "Fechado".

### Uso

Cada estado implementa `exibirEstado()` para retornar uma string representando o status atual do estabelecimento. Isso permite que a classe `Estabelecimento` altere seu comportamento dinamicamente ao mudar de estado.

---

# Hamburgueria

A classe `Hamburgueria` é uma especialização da classe abstrata `Estabelecimento`. Ela representa estabelecimentos do tipo hamburgueria e implementa o método `mostrarDetalhes`, que exibe o nome do estabelecimento e seu horário de funcionamento.

## Principais funcionalidades

* Herda propriedades e métodos básicos da classe `Estabelecimento`.
* Implementa detalhes específicos para a hamburgueria.
* Permite gerenciamento de produtos e estado (aberto/fechado) via classe base.

## Design e Clean Code

* Código limpo e legível, com nomenclatura clara.
* Comentários sucintos focados no propósito da classe.
* Segue o princípio de responsabilidade única (SRP).

---

# Pizzaria

A classe `Pizzaria` é uma especialização da classe abstrata `Estabelecimento`. Representa estabelecimentos do tipo pizzaria e implementa o método `mostrarDetalhes`, que exibe o nome do estabelecimento e seu horário de funcionamento.

## Funcionalidades

* Herda os atributos e métodos básicos da classe `Estabelecimento`.
* Implementa os detalhes específicos da pizzaria.
* Permite gerenciar produtos e estados via a classe base.

## Considerações de Clean Code

* Código claro e legível.
* Comentários objetivos, que explicam o propósito da classe.
* Aplicação do princípio de responsabilidade única (SRP).

---

# EstabelecimentoFactory

## Descrição

Classe fábrica responsável por criar instâncias dos diferentes tipos de estabelecimentos: hamburgueria, pizzaria e restaurante.

## Funcionalidades

* Criação centralizada e tipada de estabelecimentos.
* Facilita extensão para novos tipos no futuro.
* Validação simples de tipo inválido.

## Estratégia de Refatoração

* Remoção de múltiplos pontos de criação dispersos no código.
* Simplificação do código com uso de `switch` e tipagem clara.
* Documentação clara e objetiva das responsabilidades.
* Adoção de nomenclatura consistente e intuitiva.

## Instalação e Uso

* Importe a fábrica onde precisar criar um estabelecimento.
* Utilize o método estático `criarEstabelecimento` passando o tipo, nome e horário.

Exemplo:

```typescript
import EstabelecimentoFactory from './factories/EstabelecimentoFactory';

const hamburgueria = EstabelecimentoFactory.criarEstabelecimento("hamburgueria", "Burger House", "10h às 22h");
```

---

# NotificadorPreferenciasUsuario

## Descrição

Classe responsável por gerenciar uma lista de observadores e notificar sobre novas ofertas de produtos em estabelecimentos.

## Funcionalidades

* Registro dinâmico de observadores interessados em ofertas.
* Notificação eficiente de todos os observadores registrados.
* Segue o padrão Observer para comunicação desacoplada.

## Estratégia de Refatoração

* Simplificação de nomes de métodos para melhor legibilidade.
* Remoção de comentários desnecessários para código mais limpo.
* Uso de tipagem explícita nos parâmetros para maior clareza.
* Melhoria na organização interna e padronização do código.

## Instalação e Uso

* Importe a classe onde precisar gerenciar notificações.
* Use `registrar()` para adicionar observadores.
* Use `notificarOferta()` para enviar notificações para todos.

Exemplo:

```typescript
import NotificadorPreferenciasUsuario from './observers/NotificadorPreferenciasUsuario';
import Observador from './observers/Observador';

const notificador = new NotificadorPreferenciasUsuario();
const meuObservador: Observador = {
  atualizar: (nomeProduto, preco, estabelecimento) => {
    console.log(`Oferta: ${nomeProduto} por R$${preco} em ${estabelecimento}`);
  }
};

notificador.registrar(meuObservador);
notificador.notificarOferta('Hamburguer', 19.99, 'Burger King');
```

---

# Observador

## Descrição

Interface abstrata que define o contrato para classes observadoras que desejam receber notificações de ofertas.

## Funcionalidade

* Define o método `atualizar` que deve ser implementado por todas as classes observadoras.
* Método `atualizar` recebe informações sobre o produto ofertado, seu preço e o estabelecimento.

## Estratégia de Refatoração

* Adição de documentação clara e objetiva.
* Manutenção da simplicidade do contrato de interface.
* Adequação dos nomes dos parâmetros para melhor expressar seu propósito.

## Instalação e Uso

* Extenda a classe `Observador` em sua implementação de observador.
* Implemente o método `atualizar` para receber notificações.

Exemplo:

```typescript
import Observador from './observers/Observador';

class MeuObservador extends Observador {
  atualizar(nomeProduto: string, preco: number, estabelecimento: string): void {
    console.log(`Nova oferta: ${nomeProduto} por R$${preco} em ${estabelecimento}`);
  }
}
```

---

# ObservadorNotificacaoOferta

## Descrição

Implementação concreta da interface `Observador`, responsável por exibir notificações de ofertas no console.

## Funcionalidades

* Recebe atualizações de ofertas contendo nome do produto, preço e estabelecimento.
* Exibe as informações formatadas no console.

## Refatoração e Melhorias

* Adição de documentação clara para métodos e parâmetros.
* Nomenclatura consistente e descritiva.
* Código enxuto e aderente aos princípios do Clean Code.

## Como usar

Estenda a classe `ObservadorNotificacaoOferta` e registre em um sistema que notifica ofertas para receber atualizações e exibir no console.

```typescript
import ObservadorNotificacaoOferta from './observers/ObservadorNotificacaoOferta';

const observador = new ObservadorNotificacaoOferta();
observador.atualizar('Hambúrguer', 15.99, 'Hamburgueria Top');
```

---

# Execução Principal do Projeto

## Descrição

Arquivo principal que demonstra a criação dos estabelecimentos, produtos, categorias, e integração com o sistema de notificações baseado no padrão Observer.

## Funcionalidades

* Criação de estabelecimentos via Factory.
* Criação de produtos e associação com estabelecimentos.
* Controle de estado dos estabelecimentos (Aberto/Fechado).
* Sistema de notificação para ofertas, com observadores registrados.
* Gerenciamento de categorias, incluindo exibição de detalhes.

## Como Executar

Compile o projeto TypeScript e execute o arquivo principal:

```bash
tsc && node dist/main.js
```

```