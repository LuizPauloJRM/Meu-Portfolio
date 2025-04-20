
## Meu portfólio pessoal, desenvolvido com React, TypeScript, Material-UI e Vite. O objetivo deste projeto é apresentar minhas habilidades, projetos e experiências de forma profissional e atraente.
 
 ## Tecnologias Utilizadas
React: Biblioteca para construção de interfaces de usuário.
TypeScript: Superset do JavaScript para tipagem estática.
Material-UI: Biblioteca de componentes para estilização.
Vite: Ferramenta de build rápida para projetos modernos.
GitHub Pages: Hospedagem do portfólio.

## Funcionalidades
Seção Sobre Mim: Informações sobre minha trajetória e objetivos.
Seção Skills: Tecnologias e ferramentas que domino.
Seção Projetos: Exemplos de projetos com links para o código e demos.
Footer: Links para GitHub, LinkedIn e WhatsApp.

## Como Rodar o Projeto Localmente
Pré-requisitos
Node.js instalado (versão 16 ou superior).
Gerenciador de pacotes npm ou yarn.

## Instrução de instalação 
Clone o repositório:
```bash
git clone https://github.com/LuizPauloJRM/Meu-Portfolio.git
cd Meu-Portfolio/portfolio
```

```bash
npm install
```

```bash
npm run dev
```
## Acesse o projeto no navegador:
```bash
O projeto estará disponível em: http://localhost:5173.
```
## Estrutura do Projeto
```bash
portfolio/
├── src/
│   ├── components/
│   │   ├── Footer.tsx       # Footer com links para redes sociais
│   │   ├── NavBar.tsx       # Barra de navegação
│   ├── pages/
│   │   ├── Home.tsx         # Página principal
│   │   ├── sections/
│   │   │   ├── About/       # Seção Sobre Mim
│   │   │   ├── Skills/      # Seção Skills
│   │   │   ├── Projects/    # Seção Projetos
│   │   │   ├── Hero/        # Seção inicial (Hero)
├── public/                  # Arquivos estáticos
├── package.json             # Dependências do projeto
├── vite.config.ts           # Configuração do Vite
```
## Deploy
O projeto foi hospedado no GitHub Pages. Para realizar o deploy, siga os passos abaixo:
Instale o pacote gh-pages:
```bash
npm install gh-pages --save-dev
```
Adicione os scripts no package.json:
```bash
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
Realize o deploy:
```bash
npm run deploy
```