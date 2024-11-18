# TrabalhoDesignPatters

# FoodNav
FoodNav é seu app personalizado para descobrir os melhores restaurantes e pratos. Utilizando dados de localização, preferências alimentares e um sistema de recomendação robusto, oferecemos sugestões que combinam perfeitamente com seu paladar. O aplicativo utiliza design patterns clássicos de desenvolvimento de software, que ajudam a tornar o código mais organizado, escalável e fácil de manter.

## O que é o FoodNav?

O FoodNav é um aplicativo móvel desenvolvido em React Native, criado para ajudar você a descobrir os melhores restaurantes que atendem ao seu paladar e preferências culinárias. Seja você um amante da gastronomia ou alguém que busca novas experiências culinárias, o FoodNav está aqui para tornar sua jornada gastronômica mais emocionante e satisfatória.

## O que ele faz?

Ao utilizar dados de localização, suas preferências alimentares, histórico de visitas e avaliações de usuários, o FoodNav oferece recomendações altamente personalizadas de restaurantes e pratos, utilizando uma avançada inteligência artificial por trás do sistema. Com apenas alguns cliques, você terá acesso a uma lista selecionada de estabelecimentos que se alinham perfeitamente com seus gostos e restrições dietéticas.

## Por que faz?

O FoodNav foi criado com o objetivo de simplificar e aprimorar sua experiência gastronômica. Ao oferecer recomendações confiáveis e de alta qualidade, economizamos seu tempo ao eliminar a necessidade de pesquisar extensivamente por restaurantes em diferentes plataformas. Nosso sistema avançado, alimentado por inteligência artificial, garante que você possa desfrutar ao máximo suas experiências culinárias, sem a incerteza de escolher o lugar certo.

## O que você encontrará aqui?

No FoodNav, você encontrará uma interface intuitiva que permite refinar suas buscas por restaurantes usando filtros como localização, tipo de culinária e faixa de preço. Além disso, cada restaurante listado inclui informações detalhadas, como descrição, horário de funcionamento, menu, fotos e avaliações de outros usuários, garantindo que você tenha todas as informações necessárias para tomar uma decisão informada.

## Design Patterns utilizados e suas funcionalidades

## 1. State

Contexto: Determina o status do estabelecimento (aberto ou fechado).

Uso: Implementado para controlar o estado de cada restaurante, permitindo que o sistema atualize o status conforme o horário de funcionamento.

Benefício: Simplifica a lógica de verificação de disponibilidade, permitindo que o estado do estabelecimento seja alterado de forma controlada e gerenciada.

## 2. Observer

Contexto: Verificação de ofertas e alertas de promoções.

Uso: Permite que o aplicativo monitore alterações nas ofertas dos restaurantes, notificando o usuário sempre que uma nova promoção estiver disponível.

Benefício: O design pattern Observer facilita a notificação automática para o usuário sem a necessidade de verificar constantemente por atualizações.

## 3. Factory

Contexto: Criação de objetos de restaurante e produto.

Uso: A Factory centraliza a criação dos objetos de restaurante e de prato, garantindo que todos os objetos sejam inicializados corretamente e de forma consistente.

Benefício: Garante flexibilidade e facilita a expansão futura, permitindo a adição de novos tipos de estabelecimentos e pratos sem modificar o código existente.

## 4. Composite

Contexto: Organização de itens em arquivos estruturados.

Uso: Permite organizar conjuntos de estabelecimentos e pratos de forma hierárquica, facilitando o armazenamento e recuperação de dados.

Benefício: Simplifica a estrutura de armazenamento, permitindo tratar elementos individuais e composições de elementos de maneira uniforme.


## Diagrama UML

 Link do diagrama UML: https://www.figma.com/board/Sn1sLyC5FzFN6dQBXMy1pR/Projeto-Desing-Patters?node-id=0-1&t=LtihSlvyarY7TSgN-1
