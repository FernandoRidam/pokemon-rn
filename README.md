# Pokedex RN

Aplicativo Pokedex. Suas principais funcionalidades são:

1. Listar Pokemon.
2. Exibir os principais dados dos Pokemon.

### Protótipo
- Design da aplicação [Figma](https://www.figma.com/file/wKxba8lkLf6AKtrsa6b6Ci/Pokedex-Mobile?node-id=13%3A624&t=BTjlUixOlrnT4cDg-1) - Minha Autoria.

### Screens

| <img src="/screens/grid_cards.png" width="200">
| <img src="/screens/list_cards.png" width="200">
| <img src="/screens/pokemon_details.png" width="200">

## Executando o projeto

- Após clonar o projeto:
- yarn install
- cd ios && pod install (se ios)
- yarn android ou yarn ios para executar

## Pokemon API

- A Api do [PokeAPI](https://pokeapi.co/) foi utilizada para obter as informações sobre os Pokemon.

## Tecnologias e Bibliotecas

### React native

- O [React Native](https://reactnative.dev/) foi utilizado em sua versão 0.71.1

### Principais libs:

- [axios](https://github.com/axios/axios) para o consumo da api.
- [react navigation v6](https://reactnavigation.org/) para gerenciamento da navegação entre telas.

### Padrões

#### Componentização de código reutilizável

Componentes para exibição de imagens, nomes e tipos, listagens e botoes foram criados para evitar a repetição de código. Os componentes são reutilizáveis e não contem regras de negocio, podendo ser utilizados nas variadas telas.

#### Separação de responsabilidades

- Uma camada de serviço foi criada e atua de forma transparente para as camadas superiores, seu funcionamento nao depende das regras superiores e vice e versa.
- As telas se preocupam em exibir dados aos usuários. Dessa forma, adicionar uma nova tela não é um trabalho tão árduo.
