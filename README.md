# Node.js + Express

## ✔️ Breve Apresentação

O **Express** é o framework web mais popular para **Node.js**, criado em **2010** por **TJ Holowaychuk**, um desenvolvedor extremamente ativo na comunidade open-source. Inspirado pela simplicidade e flexibilidade do framework **Sinatra** (Ruby), o Express trouxe abstrações importantes para o Node.js, como **roteamento**, **middleware** e **tratamento de erros**.  

Anterioremente o suporte era realizado pela **StrongLoop** e posteriormente da **IBM**. Atualmente, o Express é mantido pela **OpenJS Foundation**.

O Express tornou-se uma peça central no desenvolvimento web em Node.js, principalmente por seu papel no **MEAN stack** (MongoDB, Express, AngularJS e Node.js).

---

## ♦️ Principais Características

- Sistema de **roteamento robusto** e flexível
- Suporte extensivo a **middleware** (plugins que manipulam requisições HTTP, cookies, logs, autenticação, etc.)
- API **minimalista e não opinativa** – liberdade para estruturar seu app como quiser
- **Alta compatibilidade** com bibliotecas e ferramentas Node.js
- **Base para muitos outros frameworks** como Koa, Sails.js e NestJS
- Ótima integração com bancos de dados como **MongoDB** ou **PostgreSQL**
- Modularização dos middlewares, tornando a aplicação mais **leve e configurável**

---

## ♣️ Vantagens e Desvantagens

### ✅ Vantagens:
- **Leveza e simplicidade**: Muito fácil começar um projeto pequeno ou grande.
- **Alta performance**: Usa o modelo assíncrono e orientado a eventos do Node.js.
- **Comunidade gigantesca**: Enorme quantidade de tutoriais, fóruns, exemplos e plugins.
- **Flexibilidade**: Não impõe estrutura obrigatória; você monta como quiser.
- **Middleware Ecosystem**: Grande número de módulos prontos para adicionar funcionalidades.

### ❌ Desvantagens:
- **Baixo nível para projetos grandes**: Em aplicações muito grandes, pode exigir mais trabalho manual para organização.
- **Falta de estrutura padrão**: Para novatos, a liberdade pode ser confusa.
- **Atualizações lentas**: O Express 5 (que trará suporte oficial a `async/await`) está em beta há anos.

---

## ♥️ Servidores Web Disponíveis

O Express pode ser usado diretamente com o servidor embutido do Node.js (`http.createServer`) ou ser colocado atrás de servidores mais robustos em produção, como:

- **Nginx**
- **Apache**
- **PM2** (para gerenciar processos Node.js)
- **Docker** (em containers)

Geralmente, em produção, é recomendado colocar o Express atrás de um proxy reverso como Nginx para melhorar segurança e performance.

---

## ♠️ Configurações Necessárias para Rodar uma Aplicação

1. **Instalar o Node.js** (versão 14 ou superior recomendada)
2. **Iniciar um projeto Node.js**:
   ```bash
   npm init -y
   ```
3. **Instalar o Express**:
   ```bash
   npm install express
   ```
4. **Criar seu arquivo principal (`index.js`)**:
   ```javascript
   const express = require('express');
   const app = express();
   const port = 3000;

   app.get('/', (req, res) => {
     res.send('Hello World!');
   });

   app.listen(port, () => {
     console.log(`App listening at http://localhost:${port}`);
   });
   ```

5. **Executar o app**:
   ```bash
   node index.js
   ```

---

## ♦️ Tipo de Licença de Software

O Express é disponibilizado sob a licença **MIT**.  
Isso significa que é uma licença **aberta**, permitindo uso comercial, modificação e distribuição.

---

## ♣️ Conclusão sobre o Uso do Framework

O Express se consolidou como um dos pilares do desenvolvimento web moderno.  
Durante os testes e pesquisas:

- ✅ **Facilidade de encontrar material**: Existe uma infinidade de artigos, vídeos, cursos e documentação oficial de alta qualidade.
- ✅ **Qualidade do material**: A documentação oficial é simples e objetiva. Comunidade também fornece exemplos variados.
- ✅ **Fácil configuração**: Instalar e rodar um servidor básico com Express leva poucos minutos.
- ✅ **Grande suporte de pacotes externos**: Body-parser, cors, helmet e muitos outros disponíveis.

No geral, o Express continua sendo uma das **melhores escolhas** para quem quer criar aplicações web leves, APIs REST, ou back-ends robustos de forma rápida e descomplicada.

---

# ✔️ Finalizando

Com sua combinação de simplicidade, poder e uma comunidade extremamente ativa, **Express** ainda é a escolha número um para aplicações Node.js, apesar do surgimento de frameworks mais modernos.  

---

               ♦️♣️♥️♠️ _"O sucesso do Express é o sucesso da comunidade Node.js."_ ♦️♣️♥️♠️

---

# ♥️ Tutorial: Criando um CRUD com Node.js e Express

Este tutorial ensina a criar uma API REST básica com as operações de **Create**, **Read**, **Update** e **Delete** (CRUD), usando apenas **Node.js** e **Express**. O projeto não utiliza banco de dados, apenas armazenamento em memória.

---

## ♠️ Requisitos

Antes de começar, certifique-se de ter:

- [Node.js](https://nodejs.org) instalado
- Um editor de código (como o **VS Code**)
- Um cliente de API para testes (ex: **Postman** ou **Insomnia**)

---

## ♦️ Iniciando o Projeto

**Por que fazemos isso?**

Inicializamos o projeto com `npm init -y` para criar o arquivo `package.json`, que gerencia as dependências e scripts do projeto.
Instalamos o Express (`npm install express`) para facilitar a criação do servidor e o roteamento das requisições HTTP.


Abra o terminal e siga os passos abaixo:

```bash
# Criar a pasta do projeto
mkdir crud-node-express
cd crud-node-express

# Inicializar o projeto Node.js
npm init -y

# Instalar o Express
npm install express
```

---

## ♣️ Estrutura de Pastas

**Por que essa estrutura?**

Separar o código em `routes`, `controllers` e `models` ajuda a manter o projeto organizado, facilitando a manutenção e evolução do código:
- **routes/** define os caminhos da API
- **controllers/** contém a lógica das requisições
- **models/** simula a camada de dados

Organize seu projeto da seguinte forma:

```
crud-node-express/
├── app.js
├── routes/
│   └── pessoaRoutes.js
├── controllers/
│   └── pessoaController.js
├── models/
│   └── pessoa.js
```

---

## ♥️ Criando os Arquivos

### `app.js`

**O que ele faz?**

Este é o ponto de entrada da aplicação. Ele configura o Express, importa as rotas e inicia o servidor na porta 3000.

```js
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const pessoaRoutes = require("./routes/pessoaRoutes");
app.use("/pessoas", pessoaRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
```

---

### `models/pessoa.js`

**O que ele faz?**

Aqui simulamos um 'banco de dados' na memória com um array `pessoas`. A lógica de criação, leitura, atualização e remoção é centralizada aqui.

```js
let pessoas = [];
let id = 0;

function criarPessoa(pessoa) {
  pessoa.id = ++id;
  pessoas.push(pessoa);
}

function listarPessoas() {
  return pessoas;
}

function atualizarPessoa(id, dados) {
  const index = pessoas.findIndex(p => p.id == id);
  if (index !== -1) {
    pessoas[index] = { ...pessoas[index], ...dados };
    return true;
  }
  return false;
}

function deletarPessoa(id) {
  const index = pessoas.findIndex(p => p.id == id);
  if (index !== -1) {
    pessoas.splice(index, 1);
    return true;
  }
  return false;
}

module.exports = {
  criarPessoa,
  listarPessoas,
  atualizarPessoa,
  deletarPessoa
};
```

---

### `controllers/pessoaController.js`

**O que ele faz?**

Controladores recebem as requisições HTTP, interagem com os modelos e retornam uma resposta ao cliente.

```js
const Pessoa = require("../models/pessoa");

function criar(req, res) {
  Pessoa.criarPessoa(req.body);
  res.status(201).send("Pessoa criada com sucesso!");
}

function listar(req, res) {
  res.json(Pessoa.listarPessoas());
}

function atualizar(req, res) {
  const sucesso = Pessoa.atualizarPessoa(req.params.id, req.body);
  if (sucesso) res.send("Pessoa atualizada com sucesso!");
  else res.status(404).send("Pessoa não encontrada.");
}

function deletar(req, res) {
  const sucesso = Pessoa.deletarPessoa(req.params.id);
  if (sucesso) res.send("Pessoa deletada com sucesso!");
  else res.status(404).send("Pessoa não encontrada.");
}

module.exports = {
  criar,
  listar,
  atualizar,
  deletar
};
```

---

### `routes/pessoaRoutes.js`

**O que ele faz?**

Define os endpoints da API e associa cada rota ao controlador correspondente.

```js
const express = require("express");
const router = express.Router();
const controller = require("../controllers/pessoaController");

router.post("/", controller.criar);
router.get("/", controller.listar);
router.put("/:id", controller.atualizar);
router.delete("/:id", controller.deletar);

module.exports = router;
```

---

## ♠️ Executando o Projeto

Antes de testar, certifique-se de que o servidor está rodando.

No terminal, dentro da pasta do projeto, execute:

```bash
node app.js
```

Se tudo estiver certo, você verá no terminal:

```
Servidor rodando em http://localhost:3000
```

---

## ♦️ Testando a API

**Como testar?**

Use ferramentas como Postman ou Insomnia para simular requisições HTTP e verificar o funcionamento da API.

Utilize o Postman ou Insomnia para testar os seguintes endpoints:

| Método | Endpoint         | Ação                   |
|--------|------------------|------------------------|
| POST   | `/pessoas`       | Cria uma nova pessoa   |
| GET    | `/pessoas`       | Lista todas as pessoas |
| PUT    | `/pessoas/:id`   | Atualiza uma pessoa    |
| DELETE | `/pessoas/:id`   | Remove uma pessoa      |

Exemplo de corpo para requisição **POST**:

```json
{
  "nome": "Maria",
  "idade": 30
}
```

---

## ♣️ Parabéns!

Você construiu uma API RESTful simples com **Node.js** e **Express**, com separação de responsabilidades entre **modelo**, **controlador** e **rotas**. Essa estrutura serve como base para projetos mais complexos, onde você poderá adicionar um banco de dados, autenticação, validação e muito mais.
