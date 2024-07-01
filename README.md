<h1 align="center">Boas-vindas ao repositório do Book Wize!</h1>
<div align="center">📖</div>

## O que foi desenvolvido?

O <strong>Book Wize</strong> é uma aplicação de recomendação de livros aos leitores. Se inicia com uma página de login, onde o usuário pode entrar com a sua conta do Google, Github ou como visitante.
Após o login, ocorre o direcionamento para a página de "Início", onde o usuário recebe algumas informações, tais como: sua última leitura, avaliações mais recentes e também os livros populares. A seção
"Explorar" conta com uma lista de todos os livros, onde é possível filtrar pelo nome do livro, nome do autor ou pela categoria. Ao clicar sob o card do livro mais informações são exibidas em tela: número de avaliações, número de páginas, categorias que o livro pertence, comentários e uma nota avaliativa, caso o usuário esteja logado, este é permitido deixar seu comentário e uma nota sobre aquele livro, e marcá-lo como "lido". Na seção "Perfil" o usuário recebe informações específicas sobre os últimos livros avaliados por ele, o número de páginas lidas, autores lidos, livros avaliados e a categoria mais lida.

A aplicação foi desenvolvida com o Next.js na versão 14.1.3 e Typescript, as requisições foram construídas com o Route Handlers do próprio Next.js. O banco de dados escolhido foi o SQLite em conjunto com o Prisma ORM para a abstração das queries. A estilização foi feita com o auxílio da biblioteca Styled Components. Mais algumas bibliotecas foram utilizadas durante a construção desse projeto, como: Eslint, React Hook Form, Date FNS, Framer Motion, Phosphor Icons, Material UI e Radix UI.

➜ <strong>A responsividade desse projeto está em desenvolvimento.</strong>

## Linguagens e ferramentas

- [Next.js](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Prisma ORM](https://www.prisma.io/)
- [SQLite](https://www.sqlite.org/)
- [Styled Components](https://styled-components.com/)
- [Eslint](https://eslint.org/)
- [React Hook Form](https://react-hook-form.com/)
- [Date FNS](https://date-fns.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [Phosphor Icons](https://phosphoricons.com/)
- [Material UI](https://mui.com/material-ui/)
- [Radix UI](https://www.radix-ui.com/)

## Instalação e execução

### 1 - Clone o repositório:
```
git clone git@github.com:h3zord/book-wize.git
```

### 2 - Entre no repositório
```
cd book-wize
```

### 3 - Instale as dependências:
Caso utilize o npm
```
npm install
```
Caso utilize o yarn
```
yarn install
```

### 4 - Inicie o projeto:
Caso utilize o npm
```
npm run dev
```
Caso utilize o yarn
```
yarn run dev
```

### 5 - Configure as variáveis de ambiente:
➜ <strong>Crie na raíz do projeto um arquivo .env</strong>

```javascript
// URL do banco de dados
DATABASE_URL="file:./dev.db"

// URL da API
NEXT_PUBLIC_API_URL="http://localhost:3000/api"

// Segredo para criptografia do NextAuth
NEXTAUTH_SECRET="aPw0HyQCB2m8eWk86WKbwC0uKbDxCh+X6eE3Pt3luF4="

// ID do OAuth App do GitHub
GITHUB_ID="c27b67ffb7a0525d73c8"

// Segredo do OAuth App do GitHub
GITHUB_SECRET="47e33a05b47b9a3005381b529d5d9e41efb9e745"

// ID do Cliente OAuth do Google
GOOGLE_CLIENT_ID="643192943905-h117k0l481mtohpt24uq6s1hooj92em3.apps.googleusercontent.com"

// Segredo do Cliente OAuth do Google
GOOGLE_CLIENT_SECRET="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"
```
<br/>

<strong>O Next.js irá executar a aplicação na porta padrão 3000.</strong>
<br/>
➜ http://localhost:3000