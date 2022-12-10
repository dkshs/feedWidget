# feedWidget

Back-end da aplicação utilizando [Express.js](https://expressjs.com/).

## Tecnologias utilizadas

- [Express.js](https://expressjs.com/)
- [Prisma](https://www.prisma.io/)
- [Jest](https://jestjs.io/)
- [NodeMailer](https://nodemailer.com/about/)

## Como executar o projeto

Para executar o projeto você precisa ter o [Node.js](https://nodejs.dev) e o [Git](https://git-scm.com) instalados na sua maquina. Você também precisará de um editor de código, eu utilizei o [VSCode](https://code.visualstudio.com).

### 1. Clone esse repositório

```bash
git clone https://github.com/ShadowsS01/feedWidget.git
```

### 2. Acesse a pasta do projeto

```bash
cd feedWidget/server
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configurar variáveis de ambiente

Copie o arquivo `.env.example` neste diretório para `.env` *(que será ignorado pelo Git)*:

```bash
cp .env.example .env
```

### 5. Execute a aplicação em modo de desenvolvimento

```bash
npm run dev
```

## Licença

Este projeto esta sob a licença [MIT](../LICENSE).
