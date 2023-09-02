# feedWidget

Front-end da aplicação utilizando [Vite.js](https://vitejs.dev/).

## Tecnologias utilizadas

- [Vite.js](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
  - [tailwindcss-forms](https://github.com/tailwindlabs/tailwindcss-forms)
  - [tailwind-scrollbar](https://github.com/adoxography/tailwind-scrollbar)
- [Headless UI](https://headlessui.dev/)
- [Phosphor Icons](https://phosphoricons.com/)
- [html2canvas](https://html2canvas.hertzen.com/)

## Como executar o projeto

Para executar o projeto você precisa ter o [Node.js](https://nodejs.dev) e o [Git](https://git-scm.com) instalados na sua maquina. Você também precisará de um editor de código, eu utilizei o [VSCode](https://code.visualstudio.com).

NOTA! Para conseguir executar o Frontend será necessário ter o backend rodando, então se você não tem o backend, entre na pasta [server](../server/) deste repo e execute o backend. Só seguir o [README](../server/README.md)!

### 1. Clone esse repositório

```bash
git clone https://github.com/dkshs/feedWidget.git
```

### 2. Acesse a pasta do projeto

```bash
cd feedWidget/web
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configurar variáveis de ambiente

Copie o arquivo `.env.example` neste diretório para `.env.local` *(que será ignorado pelo Git)*:

```bash
cp .env.example .env.local
```

### 5. Execute a aplicação em modo de desenvolvimento

```bash
npm run dev
```

## Licença

Este projeto esta sob a licença [MIT](../LICENSE).
