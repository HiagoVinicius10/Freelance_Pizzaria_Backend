#  Pizzaria Cardoso — Backend

API REST desenvolvida para o sistema **Pizzaria Cardoso**, utilizando Node.js, TypeScript, Express e Prisma ORM. O projeto é responsável pelo processamento das requisições, pelas regras de negócio e pela comunicação entre o banco de dados e as aplicações Web e Mobile.

##  Tecnologias utilizadas

- **Node.js** — ambiente de execução JavaScript no servidor.
- **TypeScript** — tipagem estática para um código mais seguro e organizado.
- **Express** — framework para criação de rotas e gerenciamento das requisições HTTP.
- **Prisma ORM** — ferramenta para comunicação com o banco de dados e gerenciamento das consultas.

##  Funcionalidades

- **Gerenciamento de pedidos:** processamento e consulta dos pedidos realizados pela aplicação.
- **Gerenciamento de produtos:** cadastro e administração dos produtos da pizzaria.
- **Gerenciamento de categorias:** organização dos produtos por categorias.
- **Autenticação:** validação de acesso por meio de tokens JWT.
- **Controle de permissões:** diferenciação de acessos entre usuários comuns da operação e administradores.
- **Validação de dados:** validação das informações recebidas pela API.
- **Integração com aplicações:** disponibilização de endpoints para comunicação com o Front-end Web e o aplicativo Mobile.

## 📋 Pré-requisitos

Antes de executar o projeto, você precisará ter instalado:

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- Um banco de dados compatível com a configuração do Prisma, como PostgreSQL.

## ⚙️ Como executar o projeto

**1. Clone o repositório**

```bash
git clone URL_DO_SEU_REPOSITORIO
```

**2. Acesse a pasta do projeto**

```bash
cd NOME_DA_PASTA
```

**3. Instale as dependências**

```bash
npm install
```

**4. Configure as variáveis de ambiente**

Crie um arquivo `.env` na raiz do projeto e configure as variáveis necessárias. Exemplo:

```env
PORT=3333
DATABASE_URL="SUA_URL_DE_CONEXAO_COM_O_BANCO"
JWT_SECRET="SUA_CHAVE_SECRETA"
```

Adicione também as demais variáveis exigidas pela configuração do projeto, caso existam.

**Importante:** nunca compartilhe seu arquivo `.env` nem publique senhas, tokens ou chaves privadas no GitHub.

**5. Configure o banco de dados**

Execute os comandos de configuração do Prisma utilizados no projeto. Por exemplo, caso sua configuração utilize migrations:

```bash
npx prisma migrate dev
```

**6. Inicie o servidor**

Utilize o script de desenvolvimento configurado no `package.json`. Se ele estiver definido como `dev`, execute:

```bash
npm run dev
```

##  Integração com o Front-end

A API REST permite que as aplicações Web e Mobile enviem requisições HTTP para executar operações como autenticação, consulta de produtos, gerenciamento de categorias e processamento de pedidos.

##  Objetivo do projeto

Desenvolver uma API organizada, segura e de fácil manutenção, aplicando boas práticas de desenvolvimento Back-end e integrando diferentes aplicações em um único sistema de gerenciamento para uma pizzaria.

##  Desenvolvedor

**Hiago Vinicius dos Santos Antônio**

- LinkedIn: https://www.linkedin.com/in/hiago-vinicius-desenvolvedor/
