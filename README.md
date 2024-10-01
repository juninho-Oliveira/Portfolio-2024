# Portfólio - React Project

Este projeto foi desenvolvido com o objetivo de *testar e consolidar meu conhecimento em React* e em outras tecnologias do ecossistema front-end. A aplicação consiste em um portfólio que exibe minhas experiências, projetos e outras informações relevantes de forma dinâmica e bem organizada.

## 🚀 Tecnologias Utilizadas

- *React* com *Vite* - para uma construção rápida e eficiente do projeto.
- *Phosphor Icons* - biblioteca utilizada para adicionar ícones ao projeto.
- *Axios* - para fazer requisições HTTP e consumir APIs.
- *CSS Modular* - cada componente possui seu próprio arquivo de estilo, evitando conflitos de estilos globais.
- *db.json* - arquivo JSON que simula uma API para fornecer dados sobre os meus projetos e experiências.
- *Render* - usado para deploy do db.json e simular uma API no ambiente de produção.

## 📌 Funcionalidades

- Separação do layout em componentes reutilizáveis: *Header, **Main, **Footer*.
- Componentes específicos para cada seção:
  - *Nome e Banner*
  - *Sobre*
  - *Experiência*
  - *Projetos*
- Consumo de uma API simulada (via *db.json) com **Axios* para obter dados dinâmicos.
- Atualização de estado dos componentes com as informações da API.

## 📂 Estrutura do Projeto

Abaixo está a organização do projeto:


📦 Portfolio
 ┣ 📂 public
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 Header
 ┃ ┃ ┣ 📂 Main
 ┃ ┃ ┣ 📂 Footer
 ┃ ┣ 📂 services
 ┃ ┣ 📜 App.jsx
 ┃ ┣ 📜 index.css
 ┃ ┣ 📜 main.jsx
 ┣ 📜 db.json
 ┣ 📜 package.json
 ┗ 📜 vite.config.js


## 🌐 Deploy

O projeto foi deployado no *Render* para simular uma API com o db.json. O Axios realiza as requisições GET para carregar os dados no componente de *Cards*.

## 🛠 Como Rodar o Projeto

1. Clone o repositório:
   bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   

2. Acesse o diretório do projeto:
   bash
   cd portfolio
   

3. Instale as dependências:
   bash
   npm install
   

4. Execute o projeto:
   bash
   npm run dev
     

## 📝 Commits Semânticos

Ao longo do desenvolvimento deste projeto, adotei a prática de *commits semânticos* para manter o histórico de versões mais claro e organizado.

## Layout

![Imagem 1](/tela.png)

[![Static Badge](https://img.shields.io/badge/Acessar_Layout-Figma-2304D361)](https://www.figma.com/design/g6R549pDB2MXMM5pTRuos3/Untitled?node-id=0-1&amp;node-type=canvas&amp;t=ptW9iAY089UmOMr9-0)

## 👨‍💻 Autor

Feito por [Damião Junior](https://www.linkedin.com/in/dami%C3%A3o-junior-6568531ab/). Fique à vontade para entrar em contato!


