<h1 align="center">Boas-vindas ao repositório do Book Wize!</h1>

<div align="center"><img src="public/book-app.svg" /></div>

<h2 align="center">
  <a href="https://book-wize.up.railway.app" target="_blank">
    Conheça o Book Wize!
  </a>
</h2>

## Demonstração

<div align="center">
  
  https://github.com/user-attachments/assets/ba2d97e4-44d8-463c-af37-cc3e547e5064

</div>

<br/>

## O que foi desenvolvido?

<strong>Book Wize</strong> é uma plataforma de recomendação de livros para leitores. A aplicação começa com uma página de login, onde o usuário pode entrar com sua conta do Google, GitHub ou como visitante. Após o login, o usuário é direcionado para a página de "Início", que exibe informações como sua última leitura, avaliações mais recentes e livros populares. Na seção "Explorar", o usuário pode visualizar uma lista de todos os livros, filtrando por nome do livro, autor ou categoria. Ao clicar no card de um livro, são exibidas mais informações, como número de avaliações, número de páginas, categorias, comentários e uma nota avaliativa. Usuários logados podem deixar comentários, atribuir notas e marcar o livro como "lido". Na seção "Perfil", o usuário encontra informações específicas sobre seus últimos livros avaliados, número de páginas lidas, autores lidos, livros avaliados e a categoria mais lida.

A aplicação foi desenvolvida com Next.js (versão 14.1.3), React (versão 18) e TypeScript. As requisições foram construídas utilizando Route Handlers do próprio Next.js. O banco de dados escolhido foi SQLite, em conjunto com Prisma ORM para abstração das queries. O NextAuth.js foi usado para a configuração do login social. A estilização foi feita com Styled Components. Outras bibliotecas utilizadas incluem: ESLint, React Hook Form, Date FNS, Framer Motion, Phosphor Icons, Material UI, Radix UI e Git para controle de versão.

<strong>➜ A responsividade deste projeto está em desenvolvimento.</strong>

## Linguagens e ferramentas

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [SQLite](https://www.sqlite.org/)
- [Prisma ORM](https://www.prisma.io/)
- [NextAuth.js](https://next-auth.js.org/)
- [Styled Components](https://styled-components.com/)
- [ESLint](https://eslint.org/)
- [React Hook Form](https://react-hook-form.com/)
- [Date FNS](https://date-fns.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [Phosphor Icons](https://phosphoricons.com/)
- [Material UI](https://mui.com/material-ui/)
- [Radix UI](https://www.radix-ui.com/)
- [Git](https://git-scm.com/)

## Instalação e execução

### 1 - Clone o repositório:
```
git clone git@github.com:h3zord/book-wize.git
```

### 2 - Entre no repositório:
```
cd book-wize
```

### 3 - Configure as variáveis de ambiente:
<strong>➜ Crie na raíz do projeto um arquivo .env</strong>

```javascript
// URL do banco de dados
POSTGRES_PRISMA_URL="postgres://default:8AVqMup2BUjK@ep-raspy-firefly-a4rtnpjv-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require&pgbouncer=true&connect_timeout=15"
POSTGRES_URL_NON_POOLING="postgres://default:8AVqMup2BUjK@ep-raspy-firefly-a4rtnpjv.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require"

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

### 4 - Instale as dependências:
Caso utilize o npm
```
npm install
```
Caso utilize o yarn
```
yarn install
```

### 5 - Inicie o projeto:
Caso utilize o npm
```
npm run dev
```
Caso utilize o yarn
```
yarn run dev
```

<strong>Next.js irá executar a aplicação na porta padrão 3000.</strong>
<br/>
➜ http://localhost:3000