# Pokédex React

Um aplicativo de Pokédex desenvolvido em React, que utiliza a [PokeAPI](https://pokeapi.co/) para exibir informações detalhadas de Pokémons. O projeto utiliza o React Bootstrap para uma interface moderna, responsiva e amigável.

## Funcionalidades

- **Busca Dinâmica:** Pesquise Pokémons pelo nome ou número.  
- **Exibição de Informações:**  
  - Nome, ID, Peso e Altura.  
  - Experiência Base.  
  - Habilidades e Tipos.  
  - Estatísticas (HP, Ataque, Defesa, Ataque Especial, Defesa Especial, Velocidade).  
  - Um resumo dos movimentos (exibindo os 5 primeiros e o total disponível).

## Link para o Projeto Rodando

Confira o projeto em funcionamento:  
[https://gabrielassed.github.io/dsw1-projeto-pokedex/](https://gabrielassed.github.io/dsw1-projeto-pokedex/)

## Tecnologias Utilizadas

- **React:** Biblioteca para construção de interfaces de usuário.  
- **React Bootstrap:** Componentes estilizados e responsivos para React.  
- **PokeAPI:** API REST para dados dos Pokémons.

## Instalação

Para rodar o projeto localmente, siga os passos abaixo:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/gabrielassed/dsw1-projeto-pokedex.git
   ```

2. **Acesse a pasta do projeto:**

   ```bash
   cd dsw1-projeto-pokedex
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

O aplicativo será iniciado em `http://localhost:5173`.

## Uso

- Utilize a barra de busca na Navbar para digitar o nome ou número do Pokémon que deseja pesquisar.  
- Ao enviar a busca, o aplicativo exibe as informações relevantes do Pokémon, ou uma mensagem de erro caso não seja encontrado.  
- Confira os detalhes adicionais nos cards de "Detalhes", "Estatísticas" e "Movimentos".

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Observações

Para mais informações sobre a API, consulte a [documentação da PokeAPI](https://pokeapi.co/).