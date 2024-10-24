# **Portal de Notícias**

![Laravel](https://img.shields.io/badge/Laravel-9.x-orange?style=flat-square&logo=laravel) ![Next.js](https://img.shields.io/badge/Next.js-14.0-black?style=flat-square&logo=next.js) ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.0-06B6D4?style=flat-square&logo=tailwind-css) ![License](https://img.shields.io/badge/license-MIT-green?style=flat-square) ![Version](https://img.shields.io/badge/version-1.0.0-blue?style=flat-square)

**Descrição**  
O desafio foi desenvolver uma aplicação que permite listar as notícias, acessar os detalhes das notícias. Este projeto utiliza Laravel como back-end, oferecendo uma API robusta, e Next.js como front-end, proporcionando uma experiência de usuário moderna e dinâmica.

## 📑 **Índice**

1. [Pré-requisitos](#pré-requisitos)
2. [Instalação](#instalação)
   - [Backend](#instalação-backend)
   - [Frontend](#instalação-frontend)
3. [Uso](#uso)
4. [API](#api)
5. [Contribuição](#contribuição)
6. [Licença](#licença)

## ⚙️ **Pré-requisitos**

Antes de iniciar, você precisará ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/en/)
- [Composer](https://getcomposer.org/)

## 🛠 **Instalação**

### Backend (Laravel)

1. Clone o repositório:
   ```bash
   git clone https://github.com/luisrochabr/news-nextjs-laravel.git
   cd news-nextjs-laravel/api
   ```
2. Instale as dependências:
   ```bash
   composer install
   ```
3. Configure o arquivo `.env` com as variáveis de ambiente:
   ```bash
   cp .env.example .env
   ```
4. Gere a chave da aplicação:
   ```bash
   php artisan key:generate
   ```
5. Inicie o servidor:
   ```bash
   php artisan serve
   ```

### Frontend (Next.js)

1. Vá para a pasta app:
   ```bash
   cd ../app
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie a aplicação Next.js:
   ```bash
   npm run dev
   ```

## 🚀 **Uso**

Com o back-end e o front-end configurados, acesse o front-end em [http://localhost:3000](http://localhost:3000) e a API em [http://localhost:8000](http://localhost:8000). A aplicação oferece uma interface amigável e responsiva.

## 🔗 **API**

A API RESTful pode ser acessada em \`/api\`. Aqui estão alguns endpoints principais:

- \`GET /api/news\`: Retorna todas as notícias.
- \`GET /api/news?category=id\`: Retorna todas as notícias filtradas pelo id da categoria.
- \`GET /api/news?search=term\`: Retorna todas as notícias filtradas que contenham o termo buscado, no título ou corpo da notíca.
- \`GET /api/categories\`: Lista os registros de consumo de combustível.

## 🤝 **Contribuição**

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto.
2. Crie uma branch com sua funcionalidade: \`git checkout -b minha-funcionalidade\`.
3. Faça commit de suas mudanças: \`git commit -m 'Adicionando minha funcionalidade'\`.
4. Faça push para a branch: \`git push origin minha-funcionalidade\`.
5. Abra um Pull Request.

## 📄 **Licença**

Este projeto está licenciado sob a [MIT License](LICENSE).
