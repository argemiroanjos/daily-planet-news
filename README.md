# README - Daily Planet News

## Descrição
O Daily Planet News é uma aplicação web que fornece aos usuários acesso às últimas notícias do Instituto Brasileiro de Geografia e Estatística (IBGE). Os usuários podem explorar e ler artigos de notícias, marcar seus artigos favoritos e visualizar diferentes categorias de notícias.

## Recursos
- **Últimas Notícias:** Exibe os artigos de notícias mais recentes do IBGE.
- **Notícias de Lançamento:** Mostra artigos de notícias categorizados como "Lançamento".
- **Notícias de Notícia:** Exibe artigos de notícias categorizados como "Notícia".
- **Favoritos:** Permite que os usuários marquem e visualizem seus artigos de notícias favoritos.
- **LocalStorage:** Armazena os artigos de notícias favoritos no localStorage do navegador para armazenamento persistente.
- **Design Responsivo:** A aplicação é responsiva e funciona tanto em desktops quanto em dispositivos móveis.

## Tecnologias Utilizadas
- **React:** A aplicação é construída usando a biblioteca React para a interface do usuário.
- **Redux:** O Redux é usado para o gerenciamento de estado para lidar com a lista de artigos de notícias e artigos favoritos.
- **Material-UI:** O Material-UI é usado para estilização e componentes.
- **Vite:** O Vite é usado para desenvolvimento rápido e empacotamento.
- **TypeScript:** O TypeScript é usado para tipagem estática e melhor qualidade de código.
- **Styled Components:** Os Styled Components são usados para estilização.
- **ESLint:** O ESLint é usado para linting de código.
- **Jest e Testing Library:** O Jest e a Testing Library são usados para testes.

## Começando
Siga estas etapas para executar a aplicação Daily Planet News em sua máquina local:

1. Clone o repositório em sua máquina local:

   ```shell
   git clone <repository-url>
Navegue até o diretório do projeto:

shell
Copy code
cd daily-planet-news
Instale as dependências do projeto:

shell
Copy code
npm install
Execute o servidor de desenvolvimento:

shell
Copy code
npm run dev
Abra seu navegador e acesse http://localhost:3000 para acessar a aplicação.

Uso
Página Inicial: A página inicial exibe os artigos de notícias mais recentes. Os usuários podem clicar no botão "Leia mais" para ler o artigo completo e clicar no ícone de coração para adicionar/remover o artigo de seus favoritos.

Notícias de Lançamento: Clique na guia "Lançamento" na barra de navegação para visualizar artigos de notícias categorizados como "Lançamento".

Notícias de Notícia: Clique na guia "Notícia" na barra de navegação para visualizar artigos de notícias categorizados como "Notícia".

Favoritos: Clique na guia "Favoritas" na barra de navegação para visualizar seus artigos de notícias favoritos. Os favoritos são armazenados no localStorage do navegador para persistência.

Testes
A aplicação é testada usando Jest e Testing Library. Para executar os testes, use o seguinte comando:

shell
Copy code
npm test
Contribuições
Contribuições para o projeto Daily Planet News são bem-vindas. Se você deseja contribuir, siga estas etapas:

Faça um fork do repositório.
Crie um novo branch para a sua funcionalidade ou correção de bug.
Faça suas alterações e as confirme.
Envie suas alterações para o seu fork.
Envie um pull request para o repositório principal.
Licença
Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para obter detalhes.